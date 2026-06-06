---
name: Mera Pind 360
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#43493d'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#73796c'
  outline-variant: '#c3c9b9'
  surface-tint: '#43682b'
  primary: '#173901'
  on-primary: '#ffffff'
  primary-container: '#2d5016'
  on-primary-container: '#98c27b'
  inverse-primary: '#a8d38a'
  secondary: '#845400'
  on-secondary: '#ffffff'
  secondary-container: '#fcb654'
  on-secondary-container: '#714800'
  tertiary: '#3a3024'
  on-tertiary: '#ffffff'
  tertiary-container: '#514639'
  on-tertiary-container: '#c4b4a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c4efa3'
  primary-fixed-dim: '#a8d38a'
  on-primary-fixed: '#0a2100'
  on-primary-fixed-variant: '#2c4f15'
  secondary-fixed: '#ffddb5'
  secondary-fixed-dim: '#ffb958'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#f1e0ce'
  tertiary-fixed-dim: '#d4c4b3'
  on-tertiary-fixed: '#231a0f'
  on-tertiary-fixed-variant: '#504538'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  grid-margin: 40px
  grid-gutter: 24px
  container-max: 1280px
---

## Brand & Style

This design system is built on a foundation of **Premium Editorial Minimalism**. It balances the authoritative, impactful energy of a global non-profit with the warmth and groundedness of agricultural community roots. The aesthetic is inspired by high-end financial and commodities platforms but softened through a warm, organic color palette and generous use of whitespace.

The visual language communicates transparency, growth, and sophistication. It avoids common non-profit tropes of cluttered layouts, instead opting for a "less but better" approach where every element serves a purpose. The target audience includes community leaders, international donors, and local partners who value professionalism and clarity.

Key visual pillars:
- **Sophisticated Hierarchy:** Large, high-contrast serif headings that demand attention.
- **Organic Warmth:** A light-drenched "Cream" surface that feels more human than clinical white.
- **Precision:** Clean lines and a rigorous grid that convey organizational competence.

## Colors

The palette is anchored in nature and legacy. The **Deep Forest Green** serves as the primary brand carrier, used for key actions and structural elements to evoke growth and stability. The **Warm Gold** is used sparingly as an accent to highlight achievements, CTAs, and vital information, suggesting value and prosperity.

The **Warm Cream** surface is the defining characteristic of this design system, providing a premium, paper-like quality that reduces eye strain and feels more inviting than standard digital whites. Typography is set in **Near-Black**, ensuring maximum legibility while maintaining a softer contrast than pure black, which can feel too harsh against the cream background.

- **Primary:** Deep Forest Green (#2D5016) — Use for primary buttons, active states, and brand-heavy sections.
- **Accent:** Warm Gold (#C8892A) — Use for secondary actions, notification badges, and decorative accents.
- **Surface:** Warm Cream (#FAF7F2) — The base background for all screens.
- **Text:** Near-Black (#1A1208) — The primary color for all body text and headings.

## Typography

Typography in this design system follows an editorial rhythm. **Playfair Display** provides a humanist, sophisticated serif for headlines, creating a sense of history and authority. **Outfit** offers a clean, geometric sans-serif for body copy and UI labels, ensuring modern readability across all devices.

- **Display Text:** Used for hero sections. It should be massive and impactful, often with a slight negative letter-spacing to create a "tight" editorial feel.
- **Headlines:** Reserved for page sections. Maintain generous vertical spacing (margin-bottom) to let the serif letterforms breathe.
- **Body Copy:** Set with a generous line height (1.6) to enhance long-form readability.
- **Labels:** Always uppercase with increased letter spacing for a refined, metadata-inspired look.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy to maintain a structured, editorial appearance. Content is centered within a 1280px container on desktop, utilizing a 12-column grid.

The spacing rhythm is characterized by "Generous Breathing Room." Section gaps are intentionally large (120px+) to separate different narratives and prevent visual clutter.
- **Margins:** 40px on desktop to ensure content doesn't hit the edges of the viewport.
- **Gutters:** 24px fixed gutters to provide a clear vertical rhythm.
- **Padding:** Internal card and container padding should lean toward being overly spacious (minimum 32px) to reinforce the premium feel.

## Elevation & Depth

To maintain the clean, "modern editorial" look, this design system avoids heavy shadows and skeuomorphism. Instead, it relies on **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Levels:** Use subtle shifts in color or 1px borders (#1A1208 at 10% opacity) to define containers rather than drop shadows.
- **Depth:** High-priority cards may use an "Ambient Shadow" — an extremely diffused, low-opacity (5%) shadow tinted with the Primary Green to suggest a soft lift without looking "digital."
- **Hover States:** Depth is communicated through movement rather than elevation. Elements should utilize smooth transitions (e.g., a card shifting 4px upward or a background color deepening slightly) to indicate interactivity.

## Shapes

The shape language is **Soft and Precise**. A low radius (4px to 12px) is used to take the "edge" off the layout while maintaining a professional, structured silhouette.

- **Components:** Buttons and small input fields use a `0.25rem` (4px) radius.
- **Cards & Containers:** Larger containers use `rounded-lg` (8px) or `rounded-xl` (12px) to feel substantial yet approachable.
- **Images:** Photography should follow the container radius or remain sharp-edged for a more traditional editorial look.

## Components

### Buttons
- **Primary:** Solid Deep Forest Green with white or cream text. High-contrast, rectangular with soft corners.
- **Secondary:** Transparent with a 1.5px Deep Forest Green border.
- **CTA:** Use the Warm Gold for "Donate" or "Action" buttons to make them immediately identifiable.

### Cards
- Clean, cream-on-cream or cream-on-white surfaces.
- 1px stroke (#1A1208 at 8% opacity).
- On hover: The border darkens slightly and the card lifts 4px.

### Input Fields
- Minimalist style: Only a bottom border or a very light 1px outline.
- Focus state: The border color changes to Deep Forest Green with a 1px inner glow.

### Chips & Tags
- Used for categories (e.g., "Agriculture," "Education").
- Small caps, bold weight, with a light green or gold background at 10% opacity.

### Featured Narrative
- Large editorial components featuring a 50/50 split of high-quality photography and a large Playfair Display heading.
- Emphasis on "The Story" rather than just data.