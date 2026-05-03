const retrofyButton = document.getElementById("retrofyButton");
const retroBrowserButton = document.getElementById("retroBrowserButton");
const removeButton = document.getElementById("removeButton");
const statusEl = document.getElementById("status");

const restrictedProtocols = ["chrome:", "edge:", "about:", "brave:", "opera:", "vivaldi:"];

retrofyButton.addEventListener("click", () => runOnActiveTab("enable"));
retroBrowserButton.addEventListener("click", () => runOnActiveTab("browser"));
removeButton.addEventListener("click", () => runOnActiveTab("disable"));

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

    const isPersistent = action === "browser" ? await requestPersistentBrowserPermission() : false;

    if (action === "enable" || action === "browser") {
      await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["retrofy.css"]
      });
    }

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["contentScript.js"]
    });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [action, tab.url],
      func: (requestedAction, pageUrl) => {
        window.retrofyPage?.[requestedAction]?.(pageUrl);
      }
    });

    if (action === "browser" || action === "disable") {
      await chrome.runtime.sendMessage({
        type: "retrofy:setBrowserPersistence",
        tabId: tab.id,
        isEnabled: action === "browser" && isPersistent
      });
    }

    setStatus(getSuccessMessage(action, isPersistent));
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
  statusEl.textContent = message;
}

function setButtonsDisabled(isDisabled) {
  retrofyButton.disabled = isDisabled;
  retroBrowserButton.disabled = isDisabled;
  removeButton.disabled = isDisabled;
}

async function requestPersistentBrowserPermission() {
  const permission = { origins: ["<all_urls>"] };
  const alreadyGranted = await chrome.permissions.contains(permission);

  if (alreadyGranted) {
    return true;
  }

  setStatus("Chrome may ask for site access so Retro Browser can stay open after navigation.");
  return chrome.permissions.request(permission);
}

function getLoadingMessage(action) {
  if (action === "browser") {
    return "Opening Retro Browser...";
  }

  return action === "enable" ? "Retrofying this page..." : "Removing retro mode...";
}

function getSuccessMessage(action, isPersistent = false) {
  if (action === "browser") {
    return isPersistent
      ? "Retro Browser is open and will stay on during navigation."
      : "Retro Browser is open for this page. Persistence was not enabled.";
  }

  return action === "enable" ? "Retro mode is on. Welcome back to the dial-up era." : "Retro mode removed.";
}
