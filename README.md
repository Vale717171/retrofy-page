# Retrofy Page

Retrofy Page is a lightweight, privacy-friendly Chrome Extension that turns the current webpage into a funny late-1990s-style version.

This is an MVP. It does not include analytics, a backend, external requests, or a build system.

## Features

- Manifest V3 Chrome extension.
- Toolbar popup with:
  - mode selector: `Soft 90s`, `GeoCities Chaos`, `Pure HTML`
  - `Retrofy this page`
  - `Open Retro Browser`
  - `Windows 95 Desktop`
  - `Export as .htm`
  - `Remove retro mode`
  - `Support the project` footer link
- Injects CSS and JavaScript only into the active tab after a button click.
- Uses a single root class: `retrofy-page-active`.
- Reversible effect.
- Friendly errors on restricted pages such as `chrome://extensions`.
- Works best on ordinary pages such as Wikipedia, blogs, news articles, and simple company pages.
- Retro Browser controls navigate the current tab and try to restore the frame after navigation in the same tab.
- Windows 95 Desktop opens a draggable and resizable fake desktop window with a snapshot of the current page inside.
- Extra retro effects include CRT scanlines, pixel-style cursors, mouse sparkles, marquee/blink text, rainbow headings, and CSS pixel-art under construction flair.
- Images get a subtle SVG posterize filter for a 256-color-era look without making photos unreadable.
- `Retrofy this page` plays a short inline 56k-style dial-up sound with no external audio request.
- A fake `Loading... 28.8 kbps` overlay appears before applying retro mode.
- `Export as .htm` downloads a standalone retro-styled HTML snapshot of the current page.

## Install locally

1. Open Chrome.
2. Go to `chrome://extensions`.
3. Enable `Developer mode`.
4. Click `Load unpacked`.
5. Select this folder.
6. Pin `Retrofy Page` from the extensions menu if you want quick access.

## Test locally

1. Open an ordinary website, for example `https://en.wikipedia.org/wiki/World_Wide_Web`.
2. Click the Retrofy Page toolbar icon.
3. Choose `Soft 90s` and click `Retrofy this page`.
4. Confirm the fake `Loading... 28.8 kbps` overlay appears before the page switches to a 1990s-style look.
5. Try `GeoCities Chaos` and confirm the page becomes louder and more chaotic.
6. Try `Pure HTML` and confirm the page becomes stripped back and mostly unstyled.
7. Click `Open Retro Browser`.
8. Confirm the page gets a retro browser frame with working Back, Forward, Stop, Refresh, Home, and address bar navigation.
9. Click `Windows 95 Desktop` and confirm a fake desktop opens with the page snapshot in a draggable/resizable window.
10. Click `Export as .htm` and confirm Chrome downloads a standalone `.htm` file.
11. Click the `X` in the Retro Browser titlebar or desktop window and confirm retro mode closes.
12. Open Retro Browser again, then click `Refresh`, `Home`, or enter a new URL in the address bar.
13. Confirm the status bar says Retro Browser will try to restore itself after navigation.
14. Confirm the frame comes back after the new page loads when Chrome still allows reinjection for that tab.
15. Click `Remove retro mode`.
16. Confirm the page returns to normal.
17. Open a restricted page such as `chrome://extensions`.
18. Click `Retrofy this page` and confirm the popup shows a friendly error.

## Privacy

Retrofy Page does not track users, collect data, call a backend, or load external scripts. The only external URL is the visible `Support the project` link in the popup footer, which opens only when clicked.

Retro Browser and Windows 95 Desktop use `webNavigation` plus session storage only to restore the retro frame after navigation in a tab where you already clicked the extension. No browsing history is collected or sent anywhere.

## Project structure

- `manifest.json` configures the MV3 extension.
- `popup.html` renders the toolbar popup.
- `popup.css` styles the popup.
- `popup.js` handles popup actions and active-tab injection.
- `background.js` removes injected CSS when Retro Browser is closed from inside the page and restores Retro Browser/Desktop after navigation.
- `contentScript.js` toggles page state, small retro decorations, and the Retro Browser frame.
- `retrofy.css` contains the reversible visual treatment.
- `assets/` contains the extension icons.
- `tests/` contains small security regression tests.

## Modes

- `Soft 90s` keeps the default retro treatment.
- `GeoCities Chaos` adds tiled backgrounds, louder colors, extra marquee energy, and stronger decorative styling.
- `Pure HTML` strips the page back toward a plain HTML document.
