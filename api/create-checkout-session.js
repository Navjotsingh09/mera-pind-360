// api/create-checkout-session.js
// Vercel serverless function — creates a Stripe Checkout Session
// Env vars required in Vercel dashboard: STRIPE_SECRET_KEY

'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Allowed origin patterns — restrict CORS to our own domains
const ALLOWED_ORIGINS = [
  'https://merapind360.org',
  'https://www.merapind360.org',
  'https://friendsofpunjabfoundation.org',
  'https://www.friendsofpunjabfoundation.org',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0]; // fallback — Vercel Preview URLs handled below
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || '';

  // Allow Vercel preview deployments (*.vercel.app)
  const isVercelPreview = /^https:\/\/[a-z0-9-]+-[a-z0-9]+\.vercel\.app$/.test(origin);
  const effectiveOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : isVercelPreview
    ? origin
    : ALLOWED_ORIGINS[0];

  const headers = {
    'Access-Control-Allow-Origin': effectiveOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    return res.end();
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { ...headers, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Method not allowed' }));
  }

  // Guard: key must be set
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY is not set');
    res.writeHead(500, { ...headers, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Payment system is not configured yet.' }));
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    res.writeHead(400, { ...headers, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Invalid request body' }));
  }

  const { amount, mode, tier_name, donor_name, donor_email } = body || {};

  // Validate amount — minimum $5 USD
  const amountFloat = parseFloat(amount);
  if (!amountFloat || isNaN(amountFloat) || amountFloat < 5) {
    res.writeHead(400, { ...headers, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Minimum donation is $5' }));
  }

  const amountCents = Math.round(amountFloat * 100);
  const checkoutMode = mode === 'subscription' ? 'subscription' : 'payment';
  const tierLabel = (tier_name || 'Custom Gift').slice(0, 80); // truncate for safety

  // Sanitise customer details (basic length limits)
  const customerEmail = typeof donor_email === 'string' && donor_email.includes('@')
    ? donor_email.slice(0, 254)
    : undefined;
  const donorName = typeof donor_name === 'string'
    ? donor_name.slice(0, 120)
    : undefined;

  const baseUrl = isVercelPreview
    ? origin
    : `https://${req.headers.host}`;

  try {
    let session;

    if (checkoutMode === 'subscription') {
      // Create a one-off recurring Price (flexible amounts)
      const price = await stripe.prices.create({
        currency: 'usd',
        unit_amount: amountCents,
        recurring: { interval: 'month' },
        product_data: {
          name: `Monthly Gift — ${tierLabel} | Friends of Punjab Foundation`,
          statement_descriptor: 'FoPF MONTHLY GIFT',
        },
      });

      session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [{ price: price.id, quantity: 1 }],
        customer_email: customerEmail,
        success_url: `${baseUrl}/donate?success=true&amount=${amountFloat}`,
        cancel_url: `${baseUrl}/donate`,
        metadata: {
          donor_name: donorName || '',
          tier_name: tierLabel,
          source: 'merapind360_donate_page',
        },
        subscription_data: {
          metadata: {
            donor_name: donorName || '',
            tier_name: tierLabel,
            source: 'merapind360_donate_page',
          },
        },
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        phone_number_collection: { enabled: false },
        custom_text: {
          submit: {
            message: 'Friends of Punjab Foundation is a registered 501(c)(3). Your monthly gift is tax-deductible.',
          },
        },
      });
    } else {
      session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              unit_amount: amountCents,
              product_data: {
                name: `Donation — ${tierLabel} | Friends of Punjab Foundation`,
                description: 'Supporting Mera Pind 360 programs in rural Punjab, India.',
              },
            },
            quantity: 1,
          },
        ],
        customer_email: customerEmail,
        success_url: `${baseUrl}/donate?success=true&amount=${amountFloat}`,
        cancel_url: `${baseUrl}/donate`,
        metadata: {
          donor_name: donorName || '',
          tier_name: tierLabel,
          source: 'merapind360_donate_page',
        },
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        phone_number_collection: { enabled: false },
        custom_text: {
          submit: {
            message: 'Friends of Punjab Foundation is a registered 501(c)(3). Your donation is tax-deductible.',
          },
        },
      });
    }

    res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ url: session.url }));
  } catch (err) {
    console.error('Stripe session creation error:', err.message);
    res.writeHead(500, { ...headers, 'Content-Type': 'application/json' });
    return res.end(
      JSON.stringify({ error: 'Could not initialise payment. Please try again or contact us.' })
    );
  }
};
