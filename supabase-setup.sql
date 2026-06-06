-- ============================================================
-- Mera Pind 360 Foundation — Supabase Database Setup
-- Run this once in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- ── 1. Contact form submissions ───────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      timestamptz NOT NULL DEFAULT now(),
  first_name      text NOT NULL,
  last_name       text NOT NULL,
  email           text NOT NULL,
  inquiry_type    text,
  message         text NOT NULL
);

-- ── 2. Volunteer / Join Us applications ───────────────────────
CREATE TABLE IF NOT EXISTS volunteer_applications (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at          timestamptz NOT NULL DEFAULT now(),
  full_name           text NOT NULL,
  email               text NOT NULL,
  role                text,
  weekly_commitment   text,
  background          text
);

-- ── 3. Newsletter signups ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS newsletter_signups (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  email      text NOT NULL,
  source     text -- 'homepage' or 'news'
);

-- ── 4. Row Level Security ──────────────────────────────────────
-- Enable RLS on all tables
ALTER TABLE contact_submissions      ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_applications   ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_signups       ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) to INSERT only — no one can read without service role
CREATE POLICY "allow_public_insert" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_public_insert" ON volunteer_applications
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_public_insert" ON newsletter_signups
  FOR INSERT TO anon WITH CHECK (true);

-- ── 5. Prevent duplicate newsletter signups ───────────────────
CREATE UNIQUE INDEX IF NOT EXISTS newsletter_signups_email_idx
  ON newsletter_signups (lower(email));
