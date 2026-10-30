# Penn RAIL private tracker

The public page contains the interface and the existing lab logo only. It starts with **zero project, submission, or deadline records**. Records are stored in a separate Supabase database; no project data or private keys belong in this repository.

## One-time backend setup

1. Create or select a dedicated Supabase project and apply `schema.sql` once.
2. Disable public user signup. Invite each lab member in Supabase Authentication and insert their lowercase email into `public.rail_members` using the database administrator. Both an account and an allowlist entry are required. Never expose the allowlist in this repository.
3. In Authentication → Email Templates → Magic Link, include `{{ .Token }}` in the email so members can type the one-time code into the tracker. Configure the site URL as `https://penn-rail.github.io/website/tracker/` and the invitation redirect URL accordingly. Configure production email delivery if needed.
4. Fill `config.js` with the project HTTPS URL and **publishable / anon key only**. Never use a service-role key or secret key. The frontend makes no database request until sign-in. Row-level security limits all reads and writes to invited lab members.
5. Verify with an invited user and a nonmember. Confirm that an anonymous REST request cannot read or write records, an invited user can create and refresh a record, and a nonmember cannot read or write records. Test concurrent edits: the second edit must fail with a refresh prompt.

Login sessions are stored in tab-scoped session storage; sign-out clears them. Refresh reloads shared records. Changes are not real-time subscriptions. Archive is reversible; permanent deletion is not exposed.

## Rebuild

`npm install` then `npm run build` inside `tracker/` builds committed `index.html` and `assets/` from `src/` and `app.html`. GitHub Pages serves the committed files through the site's existing Jekyll workflow. The app lives at `/website/tracker/`; paths and branding intentionally use the lab website's `/website/` base path.

`schema.sql`, source, package files, and this README are excluded from Jekyll output. `config.js` is public by design. Until configured, visitors see a setup notice instead of a nonfunctional dashboard. Do not add records to config or source files.
