lee complete all inst# PRD.md — ThumbPreview (YouTube Thumbnail Previewer)

> **This document is the single source of truth for the entire project.**
> Claude Code must read this file at the start of every session before writing any code.

---

## 1. Product Overview

| Field | Value |
|---|---|
| **Service Name** | ThumbPreview |
| **Short Title** | YT Thumbnail Tester |
| **Domain** | Free online tool — YouTube thumbnail preview simulator |
| **Target Users** | YouTubers, video editors, content creators, marketing teams |
| **Core Value** | Upload a thumbnail and instantly preview how it looks on real YouTube layouts (mobile, desktop, dark mode, light mode, sidebar, search results) — all processed client-side with zero server storage. |

---

## 2. Architecture & Cost Constraints

### 2.1 Zero-Cost Stack (MANDATORY)
This project must cost **$0/month** to operate. Every technology choice must respect this constraint.

| Layer | Choice | Reason |
|---|---|---|
| Frontend | Vanilla HTML + CSS + JS (single-page app) | No framework overhead, fast load, easy deploy |
| Hosting | **Netlify** or **Vercel** (free tier) | Free static hosting, auto-deploy from GitHub |
| Backend | None — 100% client-side | No server cost |
| Data Collection | **Google Sheets + Apps Script** webhook | Free form data storage |
| Analytics / Visitor Counter | Free JSON-based counter API (e.g., CountAPI alternative or custom Apps Script counter) | $0 cost |
| Domain | Use Netlify/Vercel default subdomain | Free |
| Ads | **Adsterra** (primary) | Fast approval, better CPM than AdSense for new sites |

### 2.2 No Server-Side Processing
- All thumbnail processing happens in the browser using `FileReader`, `URL.createObjectURL`, or Canvas API.
- No image is ever uploaded to any server.
- Privacy-first: explicitly state this on the site for trust & SEO.

---

## 3. Feature Specification

### Feature 1 — Thumbnail Upload & Preview Dashboard
- Drag-and-drop **or** file-picker upload (accept `.png`, `.jpg`, `.jpeg`, `.webp`).
- Immediately render the uploaded thumbnail into **pixel-perfect YouTube mockups**:
  1. **Desktop Home Feed** (light mode)
  2. **Desktop Home Feed** (dark mode)
  3. **Mobile Home Feed** (light mode)
  4. **Mobile Home Feed** (dark mode)
  5. **Desktop Search Results** page
  6. **Desktop Sidebar / Suggested Videos**
  7. **Shorts-style vertical card** (if aspect ratio matches)
- Each mockup must replicate real YouTube UI: channel avatar placeholder, video title placeholder ("Your Video Title Here" — editable), view count placeholder, timestamp badge overlay.
- User can **type a custom title** and **channel name** that updates live across all mockups.

### Feature 2 — Responsive Web Design (MANDATORY)
- Fully responsive: works perfectly on mobile (360px+), tablet (768px+), desktop (1280px+).
- Use CSS Grid / Flexbox. No fixed widths that break on small screens.
- Touch-friendly upload area on mobile.
- Mobile-first CSS approach.

### Feature 3 — Soft Color Palette & UI Design
- Background color must be **soft and muted** — no harsh whites or pure blacks.
  - Light mode base: `#F5F3EF` (warm cream) or similar soft neutral.
  - Dark mode base: `#1A1A2E` (soft navy) or similar.
- Accent color: soft coral `#E07A5F` or muted teal `#5F9EA0`.
- Typography: Use Google Fonts — a distinctive display font (e.g., "DM Sans", "Outfit", or "Satoshi") paired with a clean body font.
- Rounded corners (`border-radius: 12px`), subtle shadows, smooth transitions.
- The overall feel should be **calm, professional, and modern** — not generic AI slop.

### Feature 4 — Visitor Counter (Non-Intrusive)
- Display **Today's Visitors** and **Total Visitors** counts.
- Placement: **footer area** — visible but does not interfere with user experience.
- Implementation: Use a free counting mechanism:
  - Option A: Google Apps Script endpoint that increments a counter in Google Sheets.
  - Option B: Free CountAPI-compatible service.
- Style it subtly (small text, muted color, icon-based).

### Feature 5 — SEO Optimization (MANDATORY)
The site must rank well on search engines. Implement ALL of the following:
- Semantic HTML5 (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`).
- Complete `<head>` meta tags:
  - `<title>`: "Free YouTube Thumbnail Previewer — Test How Your Thumbnail Looks | ThumbPreview"
  - `<meta name="description">`: compelling 150-char description.
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
  - Twitter Card tags.
  - `<link rel="canonical">`.
- Structured data (JSON-LD) — `WebApplication` schema.
- `robots.txt` and `sitemap.xml`.
- Alt text on all images.
- Fast load time (target < 2s): inline critical CSS, defer non-critical JS, compress images.
- Mobile-friendly (Google Mobile-First Indexing).
- Clean URL structure.

### Feature 6 — Google Sheets Data Collection via Apps Script Webhook
**This must be fully implemented, not just a guide.**

When the user clicks the **"Preview"** button (or a separate "Save Results" CTA), automatically POST the following data to a Google Apps Script webhook:
- Timestamp
- Thumbnail filename (not the file itself)
- Custom title entered
- Custom channel name entered
- User-Agent string
- Screen resolution
- Referrer URL

**Implementation steps the coding agent MUST execute:**
1. Create a Google Apps Script (`Code.gs`) file content in the repo under `/google-apps-script/Code.gs`.
2. The script must:
   - Accept POST requests via `doPost(e)`.
   - Parse JSON body.
   - Append a row to a Google Sheet.
   - Return `ContentService.createTextOutput` with CORS headers.
3. In the frontend JS, on button click → `fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) })`.
4. Include a placeholder `WEBHOOK_URL` constant at the top of the JS file with a clear comment: `// REPLACE WITH YOUR DEPLOYED APPS SCRIPT WEB APP URL`.
5. Include a `SETUP_GUIDE.md` explaining how to deploy the Apps Script and get the URL.

### Feature 7 — Ad Monetization (Adsterra Primary)
**Revenue generation is a priority from day one.**

- **Primary ad network: Adsterra** (fast approval, good CPM for new sites).
- Reserve ad placements in the HTML:
  1. **Banner ad (728x90)** — between header and main tool area.
  2. **Native ad unit** — below the preview mockups section.
  3. **Sidebar ad (300x250)** — on desktop, beside the mockup gallery.
  4. **Footer banner** — above the footer.
- Each ad slot must have a clearly commented placeholder `<div>` with:
  ```html
  <!-- ADSTERRA AD UNIT: [placement-name] -->
  <!-- Replace the script below with your Adsterra ad code -->
  <div id="ad-[placement-name]" class="ad-container">
    <!-- PASTE YOUR ADSTERRA AD SCRIPT HERE -->
  </div>
  ```
- Ads must be responsive (hide sidebar ad on mobile, stack banners).
- Ads must NOT overlay or obstruct the main tool functionality.
- Include instructions in `SETUP_GUIDE.md`:
  1. Sign up at https://www.adsterra.com
  2. Create ad units for each placement (Banner, Native, Rectangle).
  3. Copy the provided `<script>` tags.
  4. Paste them into the corresponding `<div>` slots in `index.html`.
- **Alternative ad networks to consider if Adsterra is slow**: PropellerAds, HilltopAds, Monetag.

### Feature 8 — Deploy to Vercel or Netlify (ACTUAL DEPLOYMENT)
**Do NOT just write a guide. Actually deploy using CLI.**

- Use **Netlify CLI** or **Vercel CLI** to deploy the static site.
- The deployed URL hides the GitHub username (unlike GitHub Pages).
- Steps the coding agent MUST execute:
  1. Install CLI: `npm i -g netlify-cli` or `npm i -g vercel`.
  2. Run `netlify deploy --prod --dir=./public` or `vercel --prod ./public`.
  3. Capture and log the live URL.
  4. If authentication is needed, print instructions for the user.

---

## 4. File Structure

```
thumbpreview/
├── public/
│   ├── index.html          # Main SPA
│   ├── css/
│   │   └── style.css       # All styles (responsive, dark mode, soft palette)
│   ├── js/
│   │   ├── app.js          # Core logic (upload, preview, mockup rendering)
│   │   ├── analytics.js    # Visitor counter logic
│   │   └── data-collect.js # Google Sheets webhook POST logic
│   ├── assets/
│   │   ├── og-image.png    # Open Graph preview image
│   │   └── favicon.ico     # Favicon
│   ├── robots.txt
│   └── sitemap.xml
├── google-apps-script/
│   └── Code.gs             # Google Apps Script for webhook & visitor counter
├── PRD.md                  # This file
├── feature_list.json       # Harness: feature tracking
├── claude-progress.txt     # Harness: session progress log
├── init.sh                 # Harness: project initialization script
├── SETUP_GUIDE.md          # Deployment, Adsterra, Apps Script setup instructions
├── README.md               # Project overview & usage
└── .gitignore
```

---

## 5. Harness Design — Agent Workflow

### 5.1 Initialization Agent (Run Once)

On first session, create these three files:

**`feature_list.json`**
```json
{
  "features": [
    { "id": "F1", "name": "Project Scaffolding & HTML Structure", "status": "pending" },
    { "id": "F2", "name": "CSS — Soft Color Palette, Responsive Layout, Dark Mode", "status": "pending" },
    { "id": "F3", "name": "Thumbnail Upload & Client-Side Processing", "status": "pending" },
    { "id": "F4", "name": "YouTube Mockup Rendering (All 7 Views)", "status": "pending" },
    { "id": "F5", "name": "Custom Title & Channel Name Live Editing", "status": "pending" },
    { "id": "F6", "name": "Visitor Counter (Today + Total)", "status": "pending" },
    { "id": "F7", "name": "SEO — Meta Tags, JSON-LD, Sitemap, Robots.txt", "status": "pending" },
    { "id": "F8", "name": "Google Sheets Webhook Integration (Apps Script)", "status": "pending" },
    { "id": "F9", "name": "Adsterra Ad Placement Slots", "status": "pending" },
    { "id": "F10", "name": "GitHub Repo Creation & Initial Push", "status": "pending" },
    { "id": "F11", "name": "Deploy to Netlify/Vercel via CLI", "status": "pending" },
    { "id": "F12", "name": "SETUP_GUIDE.md & README.md", "status": "pending" },
    { "id": "F13", "name": "Final QA — Cross-device Testing & Polish", "status": "pending" }
  ]
}
```

**`claude-progress.txt`**
```
# ThumbPreview — Progress Log
# Updated by coding agent after each feature completion.

[Session 1] — Starting project...
```

**`init.sh`**
```bash
#!/bin/bash
# ThumbPreview — Initialization Script
cd thumbpreview/public
# For local development, just open index.html in browser.
# No server needed (pure static site).
# Optional: use a simple HTTP server for testing
npx serve .
```

### 5.2 Session Start Routine (EVERY SESSION)

Every coding session must begin with this exact sequence:
1. **Read** `claude-progress.txt` — understand what's done.
2. **Read** `feature_list.json` — find the next `"pending"` feature.
3. **Read** `PRD.md` — refresh on requirements for the current feature.
4. **Test** existing code (open in browser, check console errors).
5. **Implement** one feature completely.
6. **Test** the feature.
7. **Git commit** with descriptive message: `feat(F#): [description]`.
8. **Update** `feature_list.json` — set feature status to `"done"`.
9. **Update** `claude-progress.txt` — log what was done.
10. **Repeat** from step 2, or end session.

### 5.3 Git Push Milestones (MANDATORY)

Push to GitHub at these checkpoints:

| Milestone | Trigger | Commit Message Convention |
|---|---|---|
| M1 | F1 + F2 done (scaffolding + CSS) | `milestone: M1 — scaffolding & styling complete` |
| M2 | F3 + F4 + F5 done (core functionality) | `milestone: M2 — core preview engine complete` |
| M3 | F6 + F7 done (analytics + SEO) | `milestone: M3 — analytics & SEO complete` |
| M4 | F8 + F9 done (monetization + data) | `milestone: M4 — monetization & data collection ready` |
| M5 | F10 + F11 + F12 + F13 done (deploy + docs) | `milestone: M5 — production deploy & documentation` |

**Git commands to use:**
```bash
git add -A
git commit -m "milestone: M# — [description]"
git push origin main
```

### 5.4 GitHub Repo Creation (MANDATORY — Use `gh` CLI)

```bash
# Create the repo using GitHub CLI
gh repo create thumbpreview --public --description "Free YouTube Thumbnail Previewer — Test how your thumbnails look on real YouTube layouts" --source=. --remote=origin --push
```

- If `gh` is not installed: `brew install gh` (macOS) or `sudo apt install gh` (Linux) or download from https://cli.github.com.
- If not authenticated: `gh auth login`.
- **Automate everything via CLI. Do not ask the user to do manual steps if CLI can handle it.**

---

## 6. Coding Standards

- **No frameworks** — vanilla HTML/CSS/JS only.
- All processing client-side. Zero server calls except Google Sheets webhook and visitor counter.
- Comment every major section of code.
- Use CSS custom properties (`--var`) for theming.
- All interactive elements must have `:focus` styles for accessibility.
- Test in Chrome DevTools responsive mode for mobile/tablet/desktop.
- Use `async/await` for any fetch calls.
- Minify CSS/JS for production only if tooling is available; otherwise ship readable code.

---

## 7. Builder vs. Reviewer Agent Separation

### Builder Agent
- Implements features one by one following the feature list.
- Writes code, commits, updates progress files.
- Focuses on making things WORK.

### Reviewer Agent
- After each feature, review the code:
  - Does the HTML validate?
  - Is the CSS responsive at all breakpoints?
  - Are there console errors?
  - Does the mockup look like real YouTube?
  - Are ad slots properly placed and non-intrusive?
  - Is SEO markup complete?
- If issues found → fix before moving to next feature.

---

## 8. Deployment & Link Strategy

### Why NOT GitHub Pages
- GitHub Pages exposes your GitHub username in the URL (`username.github.io/repo`).
- Use **Netlify** or **Vercel** instead — free, custom subdomain, hides identity.

### Deployment via CLI (MANDATORY)
```bash
# Option A: Netlify
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod --dir=./public

# Option B: Vercel
npm i -g vercel
vercel login
vercel --prod ./public
```

The coding agent must **actually run these commands**, not just document them. If authentication requires user interaction, pause and provide clear instructions.

---

## 9. Google Apps Script — Complete Code

The coding agent must create `/google-apps-script/Code.gs` with this logic:

```javascript
// Code.gs — Deploy as Web App
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),                    // Timestamp
    data.thumbnailFilename || '',  // Filename
    data.videoTitle || '',         // Custom title
    data.channelName || '',        // Custom channel name
    data.userAgent || '',          // User-Agent
    data.screenResolution || '',   // Screen resolution
    data.referrer || ''            // Referrer URL
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  // Visitor counter endpoint
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('visitors');
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('visitors');
    sheet.getRange('A1').setValue('total');
    sheet.getRange('B1').setValue(0);
    sheet.getRange('A2').setValue('date');
    sheet.getRange('B2').setValue('');
    sheet.getRange('A3').setValue('today_count');
    sheet.getRange('B3').setValue(0);
  }

  var today = new Date().toISOString().split('T')[0];
  var lastDate = sheet.getRange('B2').getValue();
  var todayCount = sheet.getRange('B3').getValue();
  var totalCount = sheet.getRange('B1').getValue();

  if (lastDate !== today) {
    sheet.getRange('B2').setValue(today);
    sheet.getRange('B3').setValue(1);
    todayCount = 1;
  } else {
    todayCount++;
    sheet.getRange('B3').setValue(todayCount);
  }

  totalCount++;
  sheet.getRange('B1').setValue(totalCount);

  return ContentService
    .createTextOutput(JSON.stringify({ today: todayCount, total: totalCount }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## 10. Monetization Setup Instructions (for SETUP_GUIDE.md)

Include step-by-step:
1. **Adsterra Account Setup**
   - Go to https://publishers.adsterra.com/sign-up
   - Register as a Publisher.
   - Add your Netlify/Vercel site URL as a website.
   - Wait for approval (usually < 24 hours).
2. **Creating Ad Units**
   - Dashboard → Ad Units → Create.
   - Create these units: Banner 728x90, Native Banner, Rectangle 300x250.
   - Copy each ad unit's `<script>` code.
3. **Pasting Ad Code**
   - Open `index.html`.
   - Find each `<!-- ADSTERRA AD UNIT: [name] -->` comment.
   - Paste the corresponding script inside the `<div>`.
4. **Alternative Networks** (if Adsterra is slow to approve):
   - PropellerAds: https://propellerads.com
   - Monetag: https://monetag.com
   - HilltopAds: https://hilltopads.com

---

## 11. Troubleshooting & Automation Rules

- **If stuck on a CLI issue** → resolve it via CLI automation. Do NOT ask the user to manually fix things.
- **If `gh` CLI is not authenticated** → run `gh auth login` interactively or use `gh auth login --with-token`.
- **If Netlify/Vercel CLI needs auth** → run the login command and provide instructions for the token.
- **If a dependency fails to install** → try alternative approaches (CDN, manual download).
- **If Google Sheets webhook URL is not set** → leave a clear placeholder and log a warning in the console.
- **Every problem that CAN be solved via CLI MUST be solved via CLI.** No manual steps.

---

## 12. Success Criteria

- [ ] User can upload a thumbnail and see it in 7+ YouTube mockup views.
- [ ] Site is fully responsive (mobile, tablet, desktop).
- [ ] Dark mode and light mode mockups render correctly.
- [ ] Soft, warm color palette — no harsh whites or pure blacks.
- [ ] Visitor counter displays in footer (today + total).
- [ ] SEO: meta tags, OG tags, JSON-LD, sitemap, robots.txt all present.
- [ ] Google Sheets webhook POSTs data on button click.
- [ ] Adsterra ad slots are in place with clear instructions.
- [ ] Site is deployed live on Netlify or Vercel with a clean URL.
- [ ] GitHub repo created via `gh` CLI with milestone commits.
- [ ] Total monthly cost: **$0**.
- [ ] SETUP_GUIDE.md covers Adsterra, Apps Script, and deployment.
- [ ] Page loads in under 2 seconds.
- [ ] No console errors.

---

*End of PRD. Claude Code: read this file completely before starting any work.*
