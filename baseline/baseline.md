# Baseline (captured before redesign, branch redesign/tasteskill-v2, source = main)

## Routes
- / (single page). Anchors: #home #about #portfolio (Qualification) #skills #projects #certificates #contact
- Logo link: href="index.html" (nav__logo)

## Document
- <title>: Bharath Portfolio
- meta description: none
- canonical: none
- og/twitter tags: none
- lang: en
- Favicon: favicon.ico

## Nav labels (in order)
Home, About, Qualification, Skills, Projects, Certificates, Contact

## Section headings (h2) and subtitles
- About Me / My Introduction
- Qualification / My personel journey
- Skills / My Technical Level
- Projects / Most recent works
- Certificates & Achievements / My Accomplishments
- Get in touch / Contact Me

## Hero
- h1: Bharath Prakash (+ hand SVG)
- h3: Master's Student at Hochschule Offenburg
- p: Full Stack Developer - Python | SQL | React.js | JavaScript | MSSQL | MySQL
- CTA: GitHub -> https://github.com/Bharath2228

## Forms
- None. Contact is mailto link + LinkedIn link.

## Logo / brand
- Wordmark text "Bharath" in nav; no logo file. Profile photo: src/assets/Profile-Pic.png (About), Profile-Pic-Cropped.jpg (Home).

## Brand tokens (src/App.css)
- Grayscale only: --hue 0, --sat 0%. Title #333-ish (hsl 0 0 20%), text hsl(0 0 46%), body hsl(0 0 98%), container #fff.
- Accent: none defined (only the yellow hand SVG #FFDD67 / #EBA352).
- Font: Poppins 400/500/600 via Google Fonts @import (App.css line 2).
- Radius: buttons 1rem; home photo animated blob radius.

## Icon families
- Boxicons 2.1.4 (CDN unpkg) and Unicons 4.0.8 (CDN iconscout). Two families.

## External hosts
- unpkg.com, unicons.iconscout.com, fonts.googleapis.com, plus ~7 third-party certificate cover images (cdn.sanity.io, media.licdn.com, a0.awsstatic.com, spiralytics, everspringpartners, miro.medium.com, amtrustfinancial)

## Lighthouse (dev server, source = main; report files in this folder)
- Performance 60 | Accessibility 83 | Best practices 75 | SEO 91
- LCP 10.1 s | CLS 0.002 | TBT 210 ms | Speed index 5.0 s
- Failing audits: color-contrast, heading-order, link-name (icon-only links), meta-description, errors-in-console, third-party-cookies, inspector-issues
- Note: dev build is unoptimized. Re-run against a production build before judging performance.
- Screenshots: taken in the in-app browser (desktop 1440, mobile 375), not saved here.
