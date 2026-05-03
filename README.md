# Retrofy Page

Retrofy Page is a lightweight, privacy-friendly Chrome Extension that turns the current webpage into a funny late-1990s-style version.

This is an MVP. It does not include analytics, a backend, external requests, or a build system.

## Features

- Manifest V3 Chrome extension.
- Toolbar popup with:
  - `Retrofy this page`
  - `Open Retro Browser`
  - `Remove retro mode`
  - `Support the project` footer link
- Injects CSS and JavaScript only into the active tab after a button click.
- Uses a single root class: `retrofy-page-active`.
- Reversible effect.
- Friendly errors on restricted pages such as `chrome://extensions`.
- Works best on ordinary pages such as Wikipedia, blogs, news articles, and simple company pages.
- Retro Browser controls navigate the current tab. After a full page load, reopen Retro Browser from the popup if the frame is gone.
- Extra retro effects include CRT scanlines, pixel-style cursors, mouse sparkles, marquee/blink text, rainbow headings, and CSS pixel-art under construction flair.
- `Retrofy this page` plays a short inline 56k-style dial-up sound with no external audio request.

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
3. Click `Retrofy this page`.
4. Confirm the page switches to a 1990s-style look.
5. Click `Open Retro Browser`.
6. Confirm the page gets a retro browser frame with working Back, Forward, Stop, Refresh, Home, and address bar navigation.
7. Click the `X` in the Retro Browser titlebar and confirm retro mode closes.
8. Open Retro Browser again, then click `Refresh`, `Home`, or enter a new URL in the address bar.
9. Confirm the status bar warns you that the frame may disappear after navigation.
10. Reopen Retro Browser from the popup if the frame is gone after the new page loads.
11. Click `Remove retro mode`.
12. Confirm the page returns to normal.
13. Open a restricted page such as `chrome://extensions`.
14. Click `Retrofy this page` and confirm the popup shows a friendly error.

## Privacy

Retrofy Page does not track users, collect data, call a backend, or load external scripts. The only external URL is the visible `Support the project` link in the popup footer, which opens only when clicked.

## Project structure

- `manifest.json` configures the MV3 extension.
- `popup.html` renders the toolbar popup.
- `popup.css` styles the popup.
- `popup.js` handles popup actions and active-tab injection.
- `background.js` removes injected CSS when Retro Browser is closed from inside the page.
- `contentScript.js` toggles page state, small retro decorations, and the Retro Browser frame.
- `retrofy.css` contains the reversible visual treatment.

## Future modes

The MVP is intentionally small, but the structure can later support more modes such as:

- Soft 90s
- Geocities Chaos
- Pure HTML
