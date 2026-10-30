-- Apply in the private Supabase project's SQL editor. This contains no records.
begin;
create table if not exists public.rail_members (
  email text primary key check(email = lower(email))
);
create table if not exists public.rail_records (
  id text primary key check(length(id) between 1 and 200),
  data jsonb not null check(jsonb_typeof(data) = 'object')
    check(data->>'kind' in ('Project','Submission','Deadline'))
    check(length(trim(data->>'title')) between 1 and 200)
    check(data ? 'title' and data ? 'kind')
    check(octet_length(data::text) <= 20000),
  version integer not null default 1 check(version > 0),
  updated_at timestamptz not null default now()
);
alter table public.rail_members enable row level security;
alter table public.rail_records enable row level security;
revoke all on public.rail_members from anon, authenticated;
revoke all on public.rail_records from anon, authenticated;
grant select on public.rail_members to authenticated;
grant select, insert, update on public.rail_records to authenticated;
create policy "Members can check their own invitation" on public.rail_members
for select to authenticated using (email = lower(auth.jwt()->>'email'));
create policy "Lab members can read records" on public.rail_records
for select to authenticated using (exists(select 1 from public.rail_members where email = lower(auth.jwt()->>'email')));
create policy "Lab members can add records" on public.rail_records
for insert to authenticated with check (exists(select 1 from public.rail_members where email = lower(auth.jwt()->>'email')));
create policy "Lab members can edit records" on public.rail_records
for update to authenticated using (exists(select 1 from public.rail_members where email = lower(auth.jwt()->>'email')))
with check (exists(select 1 from public.rail_members where email = lower(auth.jwt()->>'email')));
create or replace function public.rail_record_update() returns trigger language plpgsql
set search_path = '' as $$ begin
  if new.id <> old.id then raise exception 'Record ID cannot change'; end if;
  if new.version <> old.version + 1 then raise exception 'Invalid record version'; end if;
  new.updated_at = now(); return new;
end $$;
create trigger rail_record_update before update on public.rail_records
for each row execute function public.rail_record_update();
commit;
