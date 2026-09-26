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

-- ── 4. Punjab Di Rooh Sewa Grant registrations ────────────────
-- Permanent record of grant applications. Web3Forms is email-only
-- notification and is not the source of truth (it purges old data).
CREATE TABLE IF NOT EXISTS grant_registrations (
  id                            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at                    timestamptz NOT NULL DEFAULT now(),
  full_name                     text NOT NULL,
  father_name                   text NOT NULL,
  village_block_district_state  text NOT NULL,
  phone_number                  text NOT NULL,
  whatsapp_number                text,
  age                             integer NOT NULL,
  marital_status                  text NOT NULL,
  lives_in_village                 text NOT NULL,
  current_location                  text,
  background                        text NOT NULL,
  education                          text NOT NULL,
  employment_status                  text NOT NULL,
  family_background                   text NOT NULL,
  current_income_source                text NOT NULL,
  service_experience                    text NOT NULL,
  service_experience_details             text,
  project_types                           text NOT NULL,
  custom_project                           text,
  community_problem                        text NOT NULL,
  number_of_villages                        integer NOT NULL,
  estimated_beneficiaries                    integer NOT NULL,
  monthly_activities                          text NOT NULL,
  consent                                      text NOT NULL,
  referrer                                      text,
  email                                          text
);

-- ── 5. Row Level Security ──────────────────────────────────────
-- Enable RLS on all tables
ALTER TABLE contact_submissions      ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_applications   ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_signups       ENABLE ROW LEVEL SECURITY;
ALTER TABLE grant_registrations      ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) to INSERT only — no one can read without service role
CREATE POLICY "allow_public_insert" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_public_insert" ON volunteer_applications
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_public_insert" ON newsletter_signups
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_public_insert" ON grant_registrations
  FOR INSERT TO anon WITH CHECK (true);


-- ── 6. Prevent duplicate newsletter signups ───────────────────
CREATE UNIQUE INDEX IF NOT EXISTS newsletter_signups_email_idx
  ON newsletter_signups (lower(email));
