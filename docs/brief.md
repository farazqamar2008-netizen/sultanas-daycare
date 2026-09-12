# Claude Code Brief — Sultana's Daycare Website (Charming 2D Version)

> **How to use this file:** Paste this entire document into Claude Code as your opening message. It's a master brief. Tell Claude Code to read all of it, scaffold the project, then **work phase by phase, pausing after each phase for my review** before continuing.

---

## 0. Owner-Provided Config & Assets

- **GitHub username:** `farazqamar2008-netizen` → create repo `sultanas-daycare` under this account.
- **Daycare email (backend target):** `sultanasdaycare@gmail.com`
- **Form endpoint (`NEXT_PUBLIC_FORM_ENDPOINT`):** Apps Script Web App URL — *provided later by owner.* Leave it as an env placeholder until then.
- **Photos & logo:** *uploaded later.* Use tasteful placeholders everywhere a photo/logo will go, clearly labeled and easy to swap.
- **Google Map embed (use verbatim in Contact):**
  ```html
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.9054218574856!2d-79.58632948735314!3d44.105943470963574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ac5e6bf74b745%3A0xfb3497e186fcc871!2sSultana's%20Daycare%20%26%20Babysitting!5e0!3m2!1sen!2sca!4v1789226033540!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
  ```
  Make it responsive (full-width, rounded corners, playful frame).
- **Reviews (Shapo.io Google reviews — 4.7★, 14 reviews):** load via `next/script`:
  ```html
  <script src="https://cdn.shapo.io/js/google-badge-loader.js" data-settings="eyJwbGFjZUlkIjoiQ2hJSlJiZDB2LWJGS29nUmNjajhodUdYTlBzIiwicGxhY2VOYW1lIjoiU3VsdGFuYSdzIERheWNhcmUgJiBCYWJ5c2l0dGluZyIsInBsYWNlQWRkcmVzcyI6IlN1dGhlcmxhbmQgQXZlLCBCcmFkZm9yZCBXZXN0IEd3aWxsaW1idXJ5LCBPTiBMM1ogNEg2LCBDYW5hZGEiLCJyYXRpbmciOjQuNywicmV2aWV3Q291bnQiOjE0LCJwbGFjZW1lbnQiOiJmbG9hdGluZyIsImNvbnRhaW5lcklkIjpudWxsLCJwb3NpdGlvbiI6ImJvdHRvbS1yaWdodCIsInRlbXBsYXRlIjoiY2xhc3NpYyIsImJ1dHRvblRleHQiOiJMZWF2ZSBhIFJldmlldyIsImJ1dHRvbkNvbG9yIjoiIzQyODVGNCIsInJldmlld3MiOlt7ImF1dGhvck5hbWUiOiJCaWJpIFphaW5hYiIsImF1dGhvclBob3RvVXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSlZqMW9pT21RTTNVRUNFUnhjNjlyUWRGZURVOVVzSlBGZ0xZZTRZWTVuTXg0NmZpUjE9czEyOC1jMHgwMDAwMDAwMC1jYy1ycC1tbyIsInJhdGluZyI6NSwidGV4dCI6IiJ9LHsiYXV0aG9yTmFtZSI6ImFfcS50MXAiLCJhdXRob3JQaG90b1VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BTFYtVWpXbF8wOXRLSGVjbVllTEY2S3JVcHp1SWFJVHBpOFRPaDRZWmRTS2QybFEzS1NfOF9LRT1zMTI4LWMweDAwMDAwMDAwLWNjLXJwLW1vIiwicmF0aW5nIjo1LCJ0ZXh0IjoiIn0seyJhdXRob3JOYW1lIjoiVmlkeWEiLCJhdXRob3JQaG90b1VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BTFYtVWpVNGRQNDd6N2M4MDRwSWhRNXVJclcxOFllUUhqYkZsQTl0c3NMZmE2RlcxNkx1RThGWT1zMTI4LWMweDAwMDAwMDAwLWNjLXJwLW1vLWJhNSIsInJhdGluZyI6NSwidGV4dCI6IiJ9LHsiYXV0aG9yTmFtZSI6IkhlYXRoZXIgTWFzc2V5IiwiYXV0aG9yUGhvdG9VcmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMYzFzeHJVdVgxejdYZDdtMlFnTkNCb3NNV2JpSTB3NndJSDZ0TjNNWGV6M1VfSFE9czEyOC1jMHgwMDAwMDAwMC1jYy1ycC1tbyIsInJhdGluZyI6NSwidGV4dCI6IiJ9LHsiYXV0aG9yTmFtZSI6IkxhdG95YSBDb2hlbiIsImF1dGhvclBob3RvVXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FMVi1ValdkTE14REpINFhLLUxLSllaaXV2OHFLUTF3WTlVM1ZTWXlPd3ZOTUtsd2hrTFNQUUk9czEyOC1jMHgwMDAwMDAwMC1jYy1ycC1tbyIsInJhdGluZyI6NSwidGV4dCI6IiJ9XX0="></script>
  ```
  **Note:** this specific snippet is Shapo's **floating badge** (hovers bottom-right site-wide). Keep it if desired, **and** build a proper in-page **Reviews section** container ready for Shapo's inline "Reviews Wall/Carousel" embed (owner will paste that embed code later). Until then, seed the section with the 5 known reviewer names + 5★ so it isn't empty.

---

## 1. Project Overview

Build a marketing + enrollment website for **Sultana's Daycare & Babysitting**, a **home daycare** in Bradford West Gwillimbury, Ontario. This is a **normal (non-3D) website** with a **charming, childish, storybook feel** — warm pastels, bright friendly accents, rounded shapes, playful rounded fonts, soft shadows, gentle bouncy animations, and cute hand-drawn doodle accents (clouds, stars, crayons, rainbows). It must still feel clean and trustworthy for parents.

- **Structure:** single long scrolling page with a **sticky top nav** and smooth scroll.
- **Tagline:** "Best Home Daycare in Bradford West Gwillimbury."
- **Palette/logo:** none yet — choose a warm, friendly palette (soft sky blue, grass green, sunny yellow, gentle coral/pink) and a temporary playful wordmark until the logo is uploaded.

**Page section order:** Header/hero → **Updates & Photos** → Application form → Services → Reviews → Contact → Footer.

---

## 2. Cross-Cutting Design Motif — Creative Photo Cutouts (IMPORTANT)

Photos should appear **throughout the whole site**, presented in playful, scrapbook-style ways — not plain rectangles. Build a reusable **`<PhotoCutout>`** component with variants and use it in the hero, updates, services, reviews, and contact areas:

- **Masked shapes:** circle, blob/organic, star, heart, arch, scalloped/wavy edge.
- **Framing styles:** polaroid frames with a caption and slight random tilt; sticker cutout (thick white border + soft drop shadow); taped-photo (little tape graphic in corners).
- **Collage moments:** small overlapping photo clusters at odd angles.
- **Dividers:** torn-paper / wavy / cloud section edges between sections.
- Everything responsive and using `next/image`, with graceful placeholders until real photos arrive.

---

## 3. Tech Stack (use exactly this)

- **Next.js (App Router) + React + TypeScript**
- **Tailwind CSS**
- **Framer Motion** (gentle bounce/float/fade on scroll; respect `prefers-reduced-motion`)
- **lucide-react** (icons)
- Playful Google Fonts via `next/font` — rounded display font (**Fredoka** or **Baloo 2**) + friendly body font (**Quicksand** or **Nunito**)
- **next/script** for the Shapo review loader
- **Google Apps Script** web app backend (form → Google Sheet + email)
- Deploy to **Vercel**, source on **GitHub**

---

## 4. Updates & Photos Section (top feature)

- **News feed:** update cards, each with **photo, date, title, short blurb** (e.g., "Now enrolling for Fall!", "Snow day fun ❄️"), newest first, using `<PhotoCutout>` styling.
- **Photo gallery:** a gallery grid/strip with a simple **lightbox** (click to enlarge), photos shown as mixed cutouts/polaroids.
- **Management (default):** editable `src/data/updates.ts` (`{ date, title, blurb, image }[]`) + `/public/updates/` folder for photos, with clear code comments on how to add one.
- **Optional upgrade (note only):** read updates from a Google Sheet tab via Apps Script `doGet`.
- Seed with 3–4 placeholder updates + placeholder images.

---

## 5. Build Plan (phase by phase, pause after each)

### Phase 0 — Scaffold
Next.js + TS + Tailwind + Framer Motion + lucide-react + fonts. Init git, push to GitHub repo `sultanas-daycare` under `farazqamar2008-netizen`. Add `NEXT_PUBLIC_FORM_ENDPOINT` env placeholder. Confirm blank deploy to Vercel. Build the design system first: color tokens, fonts, rounded/shadow utilities, the **`<PhotoCutout>`** component + shape masks, doodle/decoration components, animated section wrappers, section-divider components.

### Phase 1 — Layout shell
Sticky top nav (logo + links: Updates, Apply, Services, Reviews, Contact), smooth scroll, hero (wordmark + tagline + big "Apply Now" button scrolling to form), playful section dividers.

### Phase 2 — Updates & Photos
Build feed + gallery + lightbox per §4, using cutouts, seeded with placeholders, gentle scroll-in animations.

### Phase 3 — Application form
Fields:
- **Parent name** *(required)*
- **Contact info: email + phone** *(required)*
- **Number of children** *(required)* — drives repeating child blocks
- **Per child (repeating):** child name *(required)*, **date of birth** *(required)*, pet/food allergies *(optional)*
- **Required schedule** — free text, *optional*
- **Starting date** — *optional*

Validate required fields; friendly kid-styled inputs/errors. On success:
> "Thank you! We'll reach out about availability and booking times."

### Phase 4 — Services (cheerful icon cards)
- **Hours:** Monday–Friday, 7:30 AM – 5:00 PM
- **Meals & snacks:** 1 morning snack, 1 lunch, 1 afternoon snack
- **Sleep:** 2 hours nap time in a dedicated sleeping room
- **Outdoor play:** 2 hours daily
- **Learning play:** circle time, story time, dance time, drama play, art & colouring, alphabets & counting
- **Care basics:** washroom time / diaper changes as needed, **always supervised**
- **Extra:** weekend care and emergency care for current and previous families

### Phase 5 — Backend (Google Apps Script)
Front end POSTs form JSON to `NEXT_PUBLIC_FORM_ENDPOINT`. Script appends a row to a Google Sheet and emails `sultanasdaycare@gmail.com` the details **plus paste-ready Yes/No reply templates** (plain text, usable over email or text).
**CORS:** POST with `Content-Type: text/plain;charset=utf-8` + `JSON.stringify(...)` body.

Starter `Code.gs` (owner deploys):

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Applications') || ss.getSheets()[0];
    var children = (data.children || []).map(function (c) {
      return c.name + ' (DOB: ' + c.dob + (c.allergies ? ', allergies: ' + c.allergies : '') + ')';
    });
    sheet.appendRow([
      new Date(), data.parentName, data.email, data.phone,
      data.numChildren, children.join(' | '),
      data.schedule || '', data.startDate || ''
    ]);

    var subject = 'New Daycare Application — ' + data.parentName;
    var body =
      'New application received:\n\n' +
      'Parent: ' + data.parentName + '\n' +
      'Email: ' + data.email + '\n' +
      'Phone: ' + data.phone + '\n' +
      'Children (' + data.numChildren + '):\n  ' + children.join('\n  ') + '\n' +
      'Schedule: ' + (data.schedule || '—') + '\n' +
      'Start date: ' + (data.startDate || '—') + '\n\n' +
      '----------------------------------------\n' +
      'COPY-PASTE REPLY — YES (we have availability):\n' +
      'Hi ' + data.parentName + ', thank you for your interest in Sultana\'s Daycare! ' +
      'We\'re happy to let you know we have availability. We\'d love to set up a time to meet ' +
      'and go over scheduling and next steps. When works best for you? — Sultana\'s Daycare\n\n' +
      '----------------------------------------\n' +
      'COPY-PASTE REPLY — NO (no availability right now):\n' +
      'Hi ' + data.parentName + ', thank you so much for considering Sultana\'s Daycare. ' +
      'Unfortunately we don\'t have availability that matches your needs right now, but we\'d be ' +
      'glad to add you to our waitlist and reach out the moment a spot opens. Wishing you all the best. ' +
      '— Sultana\'s Daycare\n';

    MailApp.sendEmail('sultanasdaycare@gmail.com', subject, body);
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Phase 6 — Reviews & Contact
**Reviews:** load the Shapo floating badge via `next/script` (§0) and build an in-page Reviews section container ready for Shapo's inline widget embed (owner adds later); seed with the 5 reviewer names at 5★ meanwhile.
**Contact:** phone **416-500-8494**, email **sultanasdaycare@gmail.com**, address **135 Sutherland Ave, Bradford West Gwillimbury, ON**, the **provided Google Map iframe** (§0, made responsive), and a **contact form** (name/email/message) posting to the same endpoint (`mailto:` fallback).

### Phase 7 — Footer & polish
- **Footer:** links to **Website Policy** and **Application Policy** as clearly-labeled **placeholder drafts** with a visible "draft pending review against local childcare regulations" note. Include phone/email/address + friendly sign-off.
- **Polish:** mobile-first responsive, accessible (keyboard nav, focus states, alt text, reduced-motion), optimized images (`next/image`), **local SEO** (title + meta targeting "home daycare in Bradford West Gwillimbury," Open Graph, `LocalBusiness`/`ChildCare` JSON-LD with address + phone + 4.7 rating).

### Phase 8 — Deploy
Final Vercel deploy. Confirm application + contact forms write to the Sheet and send email once the endpoint URL is added.

---

## 6. Quality Bar
- Warm, playful, cohesive; clearly a kids' place, still clean and trustworthy.
- Creative photo cutouts recur across the whole site.
- Fully responsive; great on phones.
- Forms validate and fail gracefully if the endpoint is unset/unreachable.
- Owner can post an update (text + photo) by editing one data file + dropping in an image (clear in-code instructions).
- Clean, typed, componentized code; no hard-coded secrets.
