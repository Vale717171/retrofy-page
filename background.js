const persistentTabsKey = "retrofyBrowserTabs";
const restrictedProtocols = ["chrome:", "edge:", "about:", "brave:", "opera:", "vivaldi:", "chrome-extension:"];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type !== "retrofy:setBrowserPersistence") {
    return false;
  }

  setBrowserPersistence(message.tabId, message.isEnabled)
    .then(() => sendResponse({ ok: true }))
    .catch((error) => sendResponse({ ok: false, error: error.message }));

  return true;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") {
    return;
  }

  restoreRetroBrowser(tabId, tab.url);
});

chrome.tabs.onRemoved.addListener((tabId) => {
  setBrowserPersistence(tabId, false);
});

async function setBrowserPersistence(tabId, isEnabled) {
  if (!tabId) {
    return;
  }

  const tabs = await getPersistentTabs();

  if (isEnabled) {
    tabs[String(tabId)] = true;
  } else {
    delete tabs[String(tabId)];
  }

  await chrome.storage.session.set({ [persistentTabsKey]: tabs });
}

async function restoreRetroBrowser(tabId, url) {
  const tabs = await getPersistentTabs();

  if (!tabs[String(tabId)] || isRestrictedUrl(url)) {
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

    await chrome.scripting.executeScript({
      target: { tabId },
      args: [url],
      func: (pageUrl) => {
        window.retrofyPage?.browser?.(pageUrl);
      }
    });
  } catch {
    await setBrowserPersistence(tabId, false);
  }
}

async function getPersistentTabs() {
  const result = await chrome.storage.session.get(persistentTabsKey);
  return result[persistentTabsKey] || {};
}

function isRestrictedUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return restrictedProtocols.includes(parsedUrl.protocol);
  } catch {
    return true;
  }
}
