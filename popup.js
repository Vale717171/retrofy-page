const retrofyButton = document.getElementById("retrofyButton");
const retroBrowserButton = document.getElementById("retroBrowserButton");
const removeButton = document.getElementById("removeButton");
const modeSelect = document.getElementById("modeSelect");
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

    if (action === "enable" || action === "browser") {
      await removeRetrofyCss(tab.id);
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
      args: [action, tab.url, modeSelect.value],
      func: (requestedAction, pageUrl, mode) => {
        return window.retrofyPage?.[requestedAction]?.(pageUrl, mode);
      }
    });

    if (action === "disable") {
      await removeRetrofyCss(tab.id);
    }

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
  statusEl.textContent = message;
}

function setButtonsDisabled(isDisabled) {
  retrofyButton.disabled = isDisabled;
  retroBrowserButton.disabled = isDisabled;
  removeButton.disabled = isDisabled;
  modeSelect.disabled = isDisabled;
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

function getLoadingMessage(action) {
  if (action === "browser") {
    return "Opening Retro Browser...";
  }

  return action === "enable" ? "Retrofying this page..." : "Removing retro mode...";
}

function getSuccessMessage(action) {
  if (action === "browser") {
    return "Retro Browser is open for this page.";
  }

  return action === "enable" ? "Retro mode is on. Welcome back to the dial-up era." : "Retro mode removed.";
}
