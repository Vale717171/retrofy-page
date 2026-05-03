# Manual QA Checklist for Retrofy Page

This checklist helps verify the extension works correctly before submitting to the Chrome Web Store.

## Pre-Submission Setup

1. Open Chrome and go to `chrome://extensions`
2. Enable Developer mode
3. Click Load unpacked and select this folder
4. Pin the extension to your toolbar

## Basic Functionality Tests

### Test: Extension Loads
- [ ] Extension icon appears in toolbar
- [ ] Clicking icon opens the popup
- [ ] Popup shows mode selector and action buttons

### Test: Retrofy This Page
- [ ] Navigate to a normal website (e.g., Wikipedia)
- [ ] Select "Soft 90s" mode
- [ ] Click "Retrofy this page"
- [ ] Fake "Loading... 28.8 kbps" overlay appears briefly
- [ ] Page transforms to retro style
- [ ] CRT scanlines or retro decorations are visible
- [ ] Dial-up sound plays (if audio is allowed on the page)
- [ ] "Best viewed in 800x600" banner is visible

### Test: Mode Variations
- [ ] Click "Remove retro mode"
- [ ] Page returns to normal
- [ ] Select "GeoCities Chaos" mode and apply
- [ ] Verify louder, more colorful styling
- [ ] Select "Pure HTML" mode and apply
- [ ] Verify page is more stripped back

### Test: Retro Browser
- [ ] Click "Open Retro Browser"
- [ ] Browser frame appears around page
- [ ] Back/Forward buttons work
- [ ] Address bar accepts input and navigates
- [ ] After navigation, frame restores automatically
- [ ] Closing the browser removes retro mode

### Test: Windows 95 Desktop
- [ ] Click "Windows 95 Desktop"
- [ ] Desktop with window appears
- [ ] Window is draggable
- [ ] Window is resizable
- [ ] Closing the window removes retro mode

### Test: Export
- [ ] Click "Export as .htm"
- [ ] File downloads with .htm extension
- [ ] Opening the file shows retro-styled content

### Test: Real 90s
- [ ] Click "Real 90s"
- [ ] New tab opens with an archived 1996-1999 page
- [ ] Archive.org is used for the snapshot

### Test: Restricted Pages
- [ ] Go to chrome://extensions or another restricted page
- [ ] Click extension icon
- [ ] Click "Retrofy this page"
- [ ] Verify popup shows a friendly error message
- [ ] Extension does not crash

## Clean Uninstall Tests
- [ ] Remove extension from chrome://extensions
- [ ] No errors in console during removal
- [ ] Previously retrofied pages return to normal after refresh

## Extension Manifest Tests
- [ ] No host_permissions using `<all_urls>`
- [ ] No analytics or tracking scripts referenced
- [ ] No external backend calls in code
- [ ] Icons are present in assets/ folder

## Privacy Verification
- [ ] No network requests to external servers during normal use
- [ ] No cookies set by the extension
- [ ] No localStorage or persistent storage used
- [ ] storage.session is used only for tab navigation state

## Edge Cases
- [ ] Retrofy a page, close the tab, reopen the same URL - should not auto-retro
- [ ] Retrofy multiple tabs in same window - each works independently
- [ ] Use keyboard (Tab + Enter) in popup to activate - works
- [ ] Long page titles work in Retro Browser frame
- [ ] Unicode content in pages renders correctly

## Browser Compatibility
- [ ] Works in latest stable Chrome
- [ ] No console errors on load
- [ ] No console errors during normal operation

## Store Readiness
- [ ] Extension has a clear single purpose
- [ ] Privacy policy is documented (PRIVACY.md)
- [ ] Store listing content is drafted (STORE_LISTING.md)
- [ ] Screenshots are prepared per checklist
- [ ] No unused permissions in manifest

## Final Steps

- [ ] Review all test items as passed
- [ ] Package extension: `chrome://extensions` > Pack extension
- [ ] Review packed CRX for any unexpected files
- [ ] Proceed to Chrome Web Store submission