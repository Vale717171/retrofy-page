chrome.runtime.onMessage.addListener((message, sender) => {
  if (message?.type !== "retrofy:removeCss" || !sender.tab?.id) {
    return;
  }

  chrome.scripting.removeCSS({
    target: { tabId: sender.tab.id },
    files: ["retrofy.css"]
  }).catch(() => {
    // The stylesheet may already be gone.
  });
});
