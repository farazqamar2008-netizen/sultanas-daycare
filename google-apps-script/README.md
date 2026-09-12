# Form backend (Google Apps Script)

`Code.gs` receives the website's application and contact form
submissions, logs each to a Google Sheet, and emails
sultanasdaycare@gmail.com the details (applications include paste-ready
Yes/No reply templates).

## Deploy it

1. Create a new Google Sheet (or open an existing one) — this is where
   submissions get logged.
2. In the Sheet, go to **Extensions → Apps Script**.
3. Delete the default `Code.gs` content and paste in this folder's
   `Code.gs`.
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, authorize the permissions it asks for (it needs to
   read the sheet and send email on your behalf), and copy the **Web
   app URL** it gives you.
6. Set that URL as `NEXT_PUBLIC_FORM_ENDPOINT`:
   - Locally: put it in `.env.local` (copy `.env.example` first).
   - On Vercel: Project Settings → Environment Variables.

## What happens automatically

- **Applications** append a row to a sheet tab named `Applications`
  (or the first tab, if none by that name exists) and email you the
  full details plus copy-paste Yes/No reply templates.
- **Contact messages** append a row to a `Contact Messages` tab
  (created automatically the first time one comes in) and email you
  the name, email, and message.

## Updating the script later

If you ever edit `Code.gs` here in the repo, copy the updated file
into the Apps Script editor and use **Deploy → Manage deployments →
Edit → New version** so the live Web app URL picks up the change (it
does not update automatically).
