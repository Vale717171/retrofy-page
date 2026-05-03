# Privacy Policy for Retrofy Page

Retrofy Page is a client-side-only Chrome extension that transforms the current webpage into a nostalgic 1990s-style appearance after explicit user action. This document explains what data the extension does and does not collect.

## Data Collection

**Retrofy Page does not collect any user data.**

- No analytics
- No tracking
- No backend calls
- No external scripts or dependencies
- No sale or transfer of data
- No collection of browsing history

## How Retrofy Page Works

The extension only runs JavaScript and CSS in the active tab **after the user explicitly clicks a button** in the extension's popup. The extension does not run automatically on any website.

## Permissions Explanation

| Permission | Purpose |
|------------|---------|
| `activeTab` | Injects content into the active tab only when the user clicks a button. This is the most restrictive tab permission in Manifest V3. |
| `scripting` | Injects the retro styling and content script into the page after user action. |
| `storage` (session) | Stores temporary extension state about which tabs have retro mode active. This is cleared when the tab closes. No persistent storage. |
| `webNavigation` | Restores the Retro Browser or Windows 95 Desktop frame after the user navigates within an already-activated tab. No history is collected or sent anywhere. |

## External Links

The only external URL in the extension is the "Support the project" link in the popup footer, which opens a third-party donation site (Buy Me a Coffee) only when clicked. This link does not pass any user data.

## Contact

For questions about this privacy policy, open an issue on the project repository.