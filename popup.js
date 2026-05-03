const retrofyButton = document.getElementById("retrofyButton");
const retroBrowserButton = document.getElementById("retroBrowserButton");
const desktopButton = document.getElementById("desktopButton");
const exportButton = document.getElementById("exportButton");
const real90sButton = document.getElementById("real90sButton");
const removeButton = document.getElementById("removeButton");
const modeSelect = document.getElementById("modeSelect");
const statusEl = document.getElementById("status");
const defaultMode = "soft";

const restrictedProtocols = ["chrome:", "edge:", "about:", "brave:", "opera:", "vivaldi:"];
const real90sSites = [
  "www.yahoo.com",
  "www.altavista.com",
  "www.geocities.com",
  "www.netscape.com",
  "www.microsoft.com",
  "www.apple.com",
  "www.cnn.com",
  "www.nasa.gov",
  "www.imdb.com",
  "www.wired.com",
  "www.hotwired.com",
  "www.lycos.com",
  "www.excite.com",
  "www.slashdot.org",
  "www.theonion.com"
];

retrofyButton?.addEventListener("click", () => runOnActiveTab("enable"));
retroBrowserButton?.addEventListener("click", () => runOnActiveTab("browser"));
desktopButton?.addEventListener("click", () => runOnActiveTab("desktop"));
exportButton?.addEventListener("click", () => runOnActiveTab("export"));
real90sButton?.addEventListener("click", openReal90sPage);
removeButton?.addEventListener("click", () => runOnActiveTab("disable"));

async function runOnActiveTab(action) {
  setStatus(getLoadingMessage(action));
  setButtonsDisabled(true);

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.id || !tab.url) {
      throw new Error("No active tab found.");
    }

    if (isRestrictedUrl(tab.url)) {
      throw new Error("Chrome does not allow extensions to change this kind of page. Try Retrofy Page on a normal website.");
    }

    // Resolve local extension audio once; the content script receives only
    // this URL string — no binary data is transferred.
    const audioUrl = getAudioUrl(action);

    if (action === "enable" || action === "browser" || action === "desktop") {
      await ensureRetrofyCss(tab.id);
    }

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["contentScript.js"]
    });

    const retrofyCss = action === "export" || action === "desktop" ? await loadRetrofyCss() : "";

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [action, tab.url, getSelectedMode(), retrofyCss, audioUrl],
      func: (requestedAction, pageUrl, mode, cssText, resolvedAudioUrl) => {
        if (resolvedAudioUrl) {
          window.retrofyAudioUrl = resolvedAudioUrl;
        }
        return window.retrofyPage?.[requestedAction]?.(pageUrl, mode, cssText);
      }
    });

    if (action === "disable") {
      await removeRetrofyCss(tab.id);
    }

    await updateNavigationState(tab.id, action, getSelectedMode());

    setStatus(getSuccessMessage(action));
  } catch (error) {
    setStatus(error.message || "Retrofy Page could not change this page.");
  } finally {
    setButtonsDisabled(false);
  }
}

function isRestrictedUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return restrictedProtocols.includes(parsedUrl.protocol) || parsedUrl.protocol === "chrome-extension:";
  } catch {
    return true;
  }
}

function setStatus(message) {
  if (statusEl) {
    statusEl.textContent = message;
  }
}

function setButtonsDisabled(isDisabled) {
  [
    retrofyButton,
    retroBrowserButton,
    desktopButton,
    exportButton,
    real90sButton,
    removeButton,
    modeSelect
  ].forEach((control) => {
    if (control) {
      control.disabled = isDisabled;
    }
  });
}

function getAudioUrl(action) {
  if (action === "enable") {
    return chrome.runtime.getURL("assets/dialup.wav");
  }

  if (action === "desktop") {
    return chrome.runtime.getURL("assets/win95ish-chime.wav");
  }

  return "";
}

async function removeRetrofyCss(tabId) {
  try {
    await chrome.scripting.removeCSS({
      target: { tabId },
      files: ["retrofy.css"]
    });
  } catch {
    // The stylesheet may not be present yet, which is fine.
  }
}

async function ensureRetrofyCss(tabId) {
  const [{ result: isRetrofyActive } = {}] = await chrome.scripting.executeScript({
    target: { tabId },
    func: () => document.documentElement.classList.contains("retrofy-page-active")
  });

  if (isRetrofyActive) {
    return;
  }

  await removeRetrofyCss(tabId);
  await chrome.scripting.insertCSS({
    target: { tabId },
    files: ["retrofy.css"]
  });
}

async function loadRetrofyCss() {
  const response = await fetch(chrome.runtime.getURL("retrofy.css"));
  return response.text();
}

async function updateNavigationState(tabId, action, mode) {
  if (action === "browser" || action === "desktop") {
    await chrome.runtime.sendMessage({
      type: "retrofy:setNavigationState",
      tabId,
      state: { action, mode }
    });
    return;
  }

  if (action === "disable") {
    await chrome.runtime.sendMessage({
      type: "retrofy:setNavigationState",
      tabId,
      state: null
    });
  }
}

function getSelectedMode() {
  return modeSelect?.value || defaultMode;
}

function openReal90sPage() {
  const site = real90sSites[Math.floor(Math.random() * real90sSites.length)];
  const year = 1996 + Math.floor(Math.random() * 4);
  const url = `https://web.archive.org/web/${year}/${site}/`;
  chrome.tabs.create({ url });
}

function getLoadingMessage(action) {
  if (action === "desktop") {
    return "Opening Windows 95 Desktop...";
  }

  if (action === "export") {
    return "Preparing .htm export...";
  }

  if (action === "browser") {
    return "Opening Retro Browser...";
  }

  return action === "enable" ? "Retrofying this page..." : "Removing retro mode...";
}

function getSuccessMessage(action) {
  if (action === "desktop") {
    return "Windows 95 Desktop is open.";
  }

  if (action === "export") {
    return "Export ready. Check your downloads.";
  }

  if (action === "browser") {
    return "Retro Browser is open for this page.";
  }

  return action === "enable" ? "Retro mode is on. Welcome back to the dial-up era." : "Retro mode removed.";
}
