const retrofyButton = document.getElementById("retrofyButton");
const removeButton = document.getElementById("removeButton");
const statusEl = document.getElementById("status");

const restrictedProtocols = ["chrome:", "edge:", "about:", "brave:", "opera:", "vivaldi:"];

retrofyButton.addEventListener("click", () => runOnActiveTab("enable"));
removeButton.addEventListener("click", () => runOnActiveTab("disable"));

async function runOnActiveTab(action) {
  setStatus(action === "enable" ? "Retrofying this page..." : "Removing retro mode...");
  setButtonsDisabled(true);

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.id || !tab.url) {
      throw new Error("No active tab found.");
    }

    if (isRestrictedUrl(tab.url)) {
      throw new Error("Chrome does not allow extensions to change this kind of page. Try Retrofy Page on a normal website.");
    }

    if (action === "enable") {
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
      args: [action],
      func: (requestedAction) => {
        window.retrofyPage?.[requestedAction]?.();
      }
    });

    setStatus(action === "enable" ? "Retro mode is on. Welcome back to the dial-up era." : "Retro mode removed.");
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
  removeButton.disabled = isDisabled;
}
