const navigationStateKey = "retrofyNavigationState";
const restrictedProtocols = ["chrome:", "edge:", "about:", "brave:", "opera:", "vivaldi:", "chrome-extension:"];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === "retrofy:removeCss" && sender.tab?.id) {
    chrome.scripting.removeCSS({
      target: { tabId: sender.tab.id },
      files: ["retrofy.css"]
    }).catch(() => {
      // The stylesheet may already be gone.
    });
    clearNavigationState(sender.tab.id);
    return;
  }

  if (message?.type === "retrofy:setNavigationState") {
    setNavigationState(message.tabId, message.state)
      .then(() => sendResponse({ ok: true }))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }
});

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.frameId !== 0) {
    return;
  }

  restoreNavigationState(details.tabId, details.url);
});

chrome.tabs.onRemoved.addListener((tabId) => {
  clearNavigationState(tabId);
});

async function restoreNavigationState(tabId, url) {
  const state = await getNavigationState(tabId);

  if (!state || isRestrictedUrl(url)) {
    return;
  }

  try {
    await chrome.scripting.insertCSS({
      target: { tabId },
      files: ["retrofy.css"]
    });

    await chrome.scripting.executeScript({
      target: { tabId },
      files: ["contentScript.js"]
    });

    const cssText = state.action === "desktop" ? await loadRetrofyCss() : "";

    await chrome.scripting.executeScript({
      target: { tabId },
      args: [state.action, url, state.mode || "soft", cssText, true],
      func: (action, pageUrl, mode, css, skipLoader) => {
        return window.retrofyPage?.[action]?.(pageUrl, mode, css, skipLoader);
      }
    });
  } catch {
    await clearNavigationState(tabId);
  }
}

async function setNavigationState(tabId, state) {
  if (!tabId) {
    return;
  }

  if (!state) {
    await clearNavigationState(tabId);
    return;
  }

  const states = await getNavigationStates();
  states[String(tabId)] = state;
  await chrome.storage.session.set({ [navigationStateKey]: states });
}

async function clearNavigationState(tabId) {
  const states = await getNavigationStates();
  delete states[String(tabId)];
  await chrome.storage.session.set({ [navigationStateKey]: states });
}

async function getNavigationState(tabId) {
  const states = await getNavigationStates();
  return states[String(tabId)];
}

async function getNavigationStates() {
  const result = await chrome.storage.session.get(navigationStateKey);
  return result[navigationStateKey] || {};
}

async function loadRetrofyCss() {
  const response = await fetch(chrome.runtime.getURL("retrofy.css"));
  return response.text();
}

function isRestrictedUrl(url) {
  try {
    return restrictedProtocols.includes(new URL(url).protocol);
  } catch {
    return true;
  }
}
