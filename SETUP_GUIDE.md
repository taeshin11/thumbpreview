# ThumbPreview — Setup Guide

## 1. Google Apps Script (Data Collection + Visitor Counter)

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Rename the first sheet tab to anything (e.g., "data") — this stores form submissions.
3. The script will auto-create a "visitors" sheet for the counter.

### Step 2: Add the Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**.
2. Delete any existing code in `Code.gs`.
3. Copy the contents of `google-apps-script/Code.gs` from this repo and paste it in.
4. Click **Save** (Ctrl+S).

### Step 3: Deploy as Web App
1. Click **Deploy > New deployment**.
2. Click the gear icon and select **Web app**.
3. Set:
   - **Description**: "ThumbPreview webhook"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**.
5. Authorize the app when prompted.
6. Copy the **Web app URL** (it looks like `https://script.google.com/macros/s/.../exec`).

### Step 4: Add URLs to Frontend
1. Open `public/js/analytics.js` — paste the URL into the `COUNTER_URL` variable.
2. Open `public/js/data-collect.js` — paste the URL into the `WEBHOOK_URL` variable.

---

## 2. Adsterra Ad Setup

### Step 1: Create an Adsterra Account
1. Go to [Adsterra Publisher Signup](https://publishers.adsterra.com/sign-up).
2. Register as a Publisher.
3. Add your deployed site URL (e.g., `https://thumbpreview.netlify.app`).
4. Wait for approval (usually under 24 hours).

### Step 2: Create Ad Units
In your Adsterra dashboard:
1. Go to **Ad Units > Create**.
2. Create these units:
   - **Banner 728x90** — for header and footer banners
   - **Native Banner** — for below the mockups section
   - **Rectangle 300x250** — for the desktop sidebar
3. Copy each ad unit's `<script>` code.

### Step 3: Paste Ad Code into HTML
Open `public/index.html` and find these comment markers:

| Placement | Search for |
|---|---|
| Header Banner | `<!-- ADSTERRA AD UNIT: header-banner -->` |
| Sidebar (desktop) | `<!-- ADSTERRA AD UNIT: sidebar-ad -->` |
| Native (below mockups) | `<!-- ADSTERRA AD UNIT: native-ad -->` |
| Footer Banner | `<!-- ADSTERRA AD UNIT: footer-banner -->` |

Paste the corresponding `<script>` tag inside each `<div>`.

### Alternative Ad Networks
If Adsterra approval is slow:
- [PropellerAds](https://propellerads.com)
- [Monetag](https://monetag.com)
- [HilltopAds](https://hilltopads.com)

---

## 3. Deployment

### Option A: Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=./public
```

### Option B: Vercel
```bash
npm i -g vercel
vercel login
vercel --prod ./public
```

After deploying, update the canonical URL, OG tags, and sitemap with your actual deployed URL.

---

## 4. GitHub Repo
```bash
gh repo create thumbpreview --public --description "Free YouTube Thumbnail Previewer" --source=. --remote=origin --push
```
