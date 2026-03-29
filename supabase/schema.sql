-- Pokreni u Supabase: SQL Editor → New query → Paste → Run
-- Tablica prijava nakon kviza (PostgreSQL / Supabase)
-- Možeš ponovo pokrenuti cijeli skript: polise se prvo brišu pa kreiraju.

create table if not exists public.quiz_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  address text not null,
  city text not null,
  postal_code text not null,
  email text not null,
  phone text not null,
  created_at timestamptz not null default now()
);

comment on table public.quiz_applications is 'Prijave s popup forme nakon uspješnog kviza';

grant insert on public.quiz_applications to anon;

alter table public.quiz_applications enable row level security;

-- Samo unos iz javnog fronta (anon ključ); čitanje zatvoreno
drop policy if exists "quiz_applications_insert_anon" on public.quiz_applications;
create policy "quiz_applications_insert_anon"
  on public.quiz_applications
  for insert
  to anon
  with check (true);

drop policy if exists "quiz_applications_no_select_anon" on public.quiz_applications;
create policy "quiz_applications_no_select_anon"
  on public.quiz_applications
  for select
  to anon
  using (false);

-- Jedna prijava po e-mailu i po broju telefona (isti broj u drugačijem formatu = ista prijava).
-- Ako tablica već postoji: u SQL Editoru pokreni samo ova dva CREATE INDEX (bez cijelog fajla).
create unique index if not exists quiz_applications_email_lower_unique
  on public.quiz_applications (lower(trim(both from email)));

create unique index if not exists quiz_applications_phone_digits_unique
  on public.quiz_applications ((regexp_replace(phone, '\D', '', 'g')));
