# Penn RAIL private tracker

The public page contains the interface and the existing lab logo only. It starts with **zero project, submission, or deadline records**. Records are stored in a separate Supabase database; no project data or private keys belong in this repository.

## One-time backend setup

1. Create or select a dedicated Supabase project and apply `schema.sql` once.
2. Enable email signup and email confirmation. Add approved lab emails to `public.rail_members` through the database administrator. People create their own accounts with their name and email. An account alone cannot read or edit any lab records.
3. Set the authentication Site URL to `https://penn-rail.github.io/website/tracker/`. In **both Confirm signup and Magic Link email templates**, set the access link to `https://penn-rail.github.io/website/tracker/#token_hash={{ .TokenHash }}`. The page removes the hash from the address bar and asks for a click before exchanging it. This avoids consuming a one-time link during an automated preview.
4. Fill `config.js` with the project HTTPS URL and **publishable / anon key only**. Never use a service-role key or secret key. The frontend makes no database request until sign-in. Row-level security limits all reads and writes to invited lab members.
5. Verify with an invited user and a nonmember. Confirm that an anonymous REST request cannot read or write records, an invited user can create and refresh a record, and a nonmember cannot read or write records. Test concurrent edits: the second edit must fail with a refresh prompt.

Login sessions are stored in browser local storage; sign-out clears them. Refresh reloads shared records. Changes are not real-time subscriptions. Archive is reversible; permanent deletion is not exposed.

## Rebuild

`npm install` then `npm run build` inside `tracker/` builds committed `index.html` and `assets/` from `src/` and `app.html`. GitHub Pages serves the committed files through the site's existing Jekyll workflow. The app lives at `/website/tracker/`; paths and branding intentionally use the lab website's `/website/` base path.

`schema.sql`, source, package files, and this README are excluded from Jekyll output. `config.js` is public by design. Until configured, visitors see a setup notice instead of a nonfunctional dashboard. Do not add records to config or source files.
