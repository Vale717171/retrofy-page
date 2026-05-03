# Store Listing Draft for Retrofy Page

## Short Description

Turn ordinary webpages into a nostalgic 1990s-style version with one click.

## Full Description

Retrofy Page is a lightweight Chrome extension that transforms any webpage into a humorous late-1990s-style experience on demand. After clicking the extension icon in your browser toolbar, choose from three retro modes:

- **Soft 90s**: Tasteful nostalgic styling with CRT scanlines, pixel fonts, and classic web badges.
- **GeoCities Chaos**: Louder, more colorful styling with tiled backgrounds and extra retro energy.
- **Pure HTML**: Strips the page back toward a plain HTML document.

The extension adds decorations like "Best viewed with Netscape Navigator" badges, under construction icons, marquee text, and a fake "28.8 kbps" dial-up loading screen.

Two interactive features let you browse your page inside nostalgic frames:
- **Retro Browser**: A fake Netscape-style browser frame with working navigation.
- **Windows 95 Desktop**: A draggable window98-style desktop with your page inside.

The extension only activates after you click a button - it never runs automatically.

## Single-Purpose Statement

Retrofy Page's single purpose is to add a reversible, user-initiated 1990s-style visual transformation to the current webpage.

## Permission Justifications

| Permission | Justification |
|------------|-------------|
| `activeTab` | Required to inject content into the active tab. This is a restricted permission that only grants access after explicit user action. No automatic page access. |
| `scripting` | Required to inject CSS and JavaScript into the page after the user clicks a button. |
| `storage` (session) | Uses session storage only to temporarily track which tabs have retro mode active. Data is cleared when the tab closes. No persistent user data stored. |
| `webNavigation` | Uses webNavigation only to restore the Retro Browser or Desktop frame after the user navigates within an already-activated tab. No browsing history is collected. |

### Why Not Host Permissions

The extension does not request host permissions (`<all_urls>`). Content injection happens only through `activeTab` after the user clicks a button, which is the most restrictive approach in Manifest V3.

### Privacy

The extension:
- Does not collect analytics
- Does not track users
- Does not make backend calls
- Does not load external scripts
- Does not sell or transfer user data

See PRIVACY.md for the full privacy policy.

## Privacy Field Suggestions

When submitting to the Chrome Web Store, the following privacy disclosures apply:

- **Does this extension collect any user data?** No.
- **Does this extension collect any content or information from users' browsers?** No.
- **Is any user data sent to external servers?** No (except the optional "Support" link which opens an external website only when clicked).
- **Does this extension need any permissions to work?** Yes - see Permission Justifications above.

## Screenshots Checklist

Prepare 1-3 screenshots for the store listing:

- [ ] Screenshot of a retro-styled Wikipedia or similar content-rich page in "Soft 90s" mode
- [ ] Screenshot showing the popup UI with mode selector and buttons
- [ ] Screenshot of "GeoCities Chaos" mode on a colorful site OR Retro Browser frame OR Windows 95 Desktop

Screenshot tips:
- Use 1280x800 resolution
- Show real content (not a blank or mock page)
- Capture the extension icon in the browser toolbar

## Submission Notes

- Category: Productivity or Fun (consider Fun for the playful nature)
- Minimum Chrome version: Manifest V3 compatible (Chrome 88+)
- This extension is free with no monetization