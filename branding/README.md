# PJT Development — Brand Assets

Standalone, ready-to-use brand files. Hand this folder to a developer or agent as-is.

**Tagline:** From ideas to apps.
**Mark:** the PJT monogram — P, J and T merged into one glyph, with a spark cut-out for the idea at its heart.

---

## Logos (`/logo`)

Vector, infinitely scalable. **`pjt-mark.svg` uses `currentColor`** — set the color in CSS (`color: #2c45dd`) and the spark stays transparent on any background.

| File | Use |
|------|-----|
| `pjt-mark.svg` | Primary — inherits `currentColor`, transparent spark. Best for the web. |
| `pjt-mark-cobalt.svg` | Fixed cobalt `#2C45DD` (light backgrounds) |
| `pjt-mark-green.svg` | Fixed signal-green `#6EE787` (dark backgrounds) |
| `pjt-mark-white.svg` | White (on color/photo) |
| `pjt-mark-black.svg` | Ink `#15171C` (one-color print) |
| `pjt-lockup-horizontal-light.svg` | Mark + "PJT Development" wordmark, cobalt |
| `pjt-lockup-horizontal-dark.svg` | Same, green on near-black |

## Favicon & app icons (`/favicon`)

| File | Size | Use |
|------|------|-----|
| `favicon.svg` | vector | Modern browsers (`<link rel="icon">`) |
| `favicon-16.png` / `favicon-32.png` | 16 / 32 | Legacy favicons |
| `apple-touch-icon-180.png` | 180 | iOS home screen |
| `icon-192.png` / `icon-512.png` | 192 / 512 | PWA / Android manifest |

## Social media (`/social`)

Every asset is provided as **`.svg`** (editable, brand-accurate text in Schibsted Grotesk) **and `.png`** (ready to upload).

| File | Dimensions | Platform |
|------|-----------|----------|
| `avatar-cobalt-1000` | 1000×1000 | Profile picture (all platforms) — primary |
| `avatar-dark-1000` | 1000×1000 | Profile picture — dark variant |
| `og-image` | 1200×630 | Open Graph / link previews (LinkedIn, Slack, iMessage) |
| `x-header` | 1500×500 | X / Twitter header |
| `linkedin-banner` | 1584×396 | LinkedIn personal / company banner |
| `facebook-cover` | 1640×856 | Facebook page cover |
| `youtube-channel-art` | 2560×1440 | YouTube channel art (safe area centered) |
| `instagram-post` | 1080×1080 | Instagram / square post template |
| `github-social-preview` | 1280×640 | GitHub repo social preview |

> Both formats render the wordmark in real **Schibsted Grotesk**. The `.svg` files are the editable source of truth; the `.png` exports are ready to upload as-is.

---

## Color

**Light world**
- Cobalt `#2C45DD` — primary accent
- Ink `#15171C` · Paper `#FFFFFF` · Mist `#F5F5F2`

**Dark world**
- Signal Green `#6EE787` — primary accent
- Near Black `#0B0C0E` · Surface `#101216` · Frost `#F3F5F7`

## Type

- **Schibsted Grotesk** — headlines, body, UI
- **Archivo** — dark-world display alternate
- **JetBrains Mono** — labels, eyebrows, code

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800;900&family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap">
```

## Favicon snippet

```html
<link rel="icon" href="/favicon/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32.png">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon-180.png">
```

## Clear space & misuse

Keep clear space around the mark equal to the height of the T crossbar. Don't stretch, rotate, recolor outside the palette, or fill in the spark.

---

*PJT Development · Brand Assets v1 · 2026*
