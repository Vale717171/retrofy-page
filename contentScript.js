(() => {
  const rootClass = "retrofy-page-active";
  const chromeId = "retrofy-page-chrome";
  const browserClass = "retrofy-browser-active";
  const browserId = "retrofy-browser-frame";

  if (window.retrofyPage) {
    return;
  }

  window.retrofyPage = {
    enable,
    browser,
    disable
  };

  function enable() {
    document.documentElement.classList.add(rootClass);
    document.documentElement.classList.remove(browserClass);
    document.getElementById(browserId)?.remove();
    addRetroChrome();
  }

  function browser(pageUrl) {
    document.documentElement.classList.add(rootClass, browserClass);
    document.getElementById(chromeId)?.remove();
    addRetroBrowser(pageUrl);
  }

  function disable() {
    document.documentElement.classList.remove(rootClass, browserClass);
    document.getElementById(chromeId)?.remove();
    document.getElementById(browserId)?.remove();
  }

  function addRetroChrome() {
    if (document.getElementById(chromeId) || !document.body) {
      return;
    }

    const chrome = document.createElement("div");
    chrome.id = chromeId;
    chrome.setAttribute("aria-hidden", "true");
    chrome.innerHTML = `
      <div class="retrofy-page-banner">Best viewed in 800x600</div>
      <div class="retrofy-page-corner">
        <strong>UNDER CONSTRUCTION</strong>
        <span>Visitor #000042</span>
      </div>
    `;

    document.body.prepend(chrome);
  }

  function addRetroBrowser(pageUrl) {
    const existingFrame = document.getElementById(browserId);

    if (existingFrame) {
      updateBrowserAddress(pageUrl || location.href);
      updateBrowserStatus("Done");
      return;
    }

    if (!document.body) {
      return;
    }

    const frame = document.createElement("div");
    frame.id = browserId;
    frame.innerHTML = `
      <div class="retrofy-browser-titlebar">
        <span>Retro Browser 0.9</span>
        <span class="retrofy-browser-window-buttons" aria-label="Window controls">
          <span title="Minimize">_</span>
          <span title="Maximize">[]</span>
          <button type="button" data-retrofy-browser-action="close" title="Close Retro Browser">X</button>
        </span>
      </div>
      <div class="retrofy-browser-menubar">File&nbsp;&nbsp;Edit&nbsp;&nbsp;View&nbsp;&nbsp;Go&nbsp;&nbsp;Bookmarks&nbsp;&nbsp;Help</div>
      <div class="retrofy-browser-toolbar">
        <button type="button" data-retrofy-browser-action="back">Back</button>
        <button type="button" data-retrofy-browser-action="forward">Forward</button>
        <button type="button" data-retrofy-browser-action="stop">Stop</button>
        <button type="button" data-retrofy-browser-action="refresh">Refresh</button>
        <button type="button" data-retrofy-browser-action="home">Home</button>
      </div>
      <div class="retrofy-browser-address">
        <span>Address</span>
        <input type="text" value="${escapeAttribute(pageUrl || location.href)}" aria-label="Retro Browser address">
      </div>
      <div class="retrofy-browser-status">Done</div>
    `;

    frame.addEventListener("click", handleBrowserClick);
    frame.addEventListener("keydown", handleBrowserKeydown);
    document.body.prepend(frame);
  }

  function handleBrowserClick(event) {
    const button = event.target.closest("[data-retrofy-browser-action]");

    if (!button) {
      return;
    }

    event.preventDefault();
    runBrowserAction(button.dataset.retrofyBrowserAction);
  }

  function handleBrowserKeydown(event) {
    if (event.key !== "Enter" || !event.target.matches(".retrofy-browser-address input")) {
      return;
    }

    event.preventDefault();
    goToAddress(event.target.value);
  }

  function runBrowserAction(action) {
    if (action === "back") {
      navigateWithNotice(() => history.back());
      return;
    }

    if (action === "forward") {
      navigateWithNotice(() => history.forward());
      return;
    }

    if (action === "stop") {
      window.stop();
      updateBrowserStatus("Stopped");
      return;
    }

    if (action === "refresh") {
      navigateWithNotice(() => location.reload());
      return;
    }

    if (action === "home") {
      navigateWithNotice(() => location.assign(location.origin));
      return;
    }

    if (action === "close") {
      disable();
      chrome.runtime?.sendMessage?.({ type: "retrofy:removeCss" });
    }
  }

  function goToAddress(value) {
    const url = normalizeAddress(value);

    if (!url) {
      updateBrowserStatus("Invalid address");
      return;
    }

    navigateWithNotice(() => location.assign(url));
  }

  function navigateWithNotice(navigate) {
    updateBrowserStatus("Loading... reopen Retro Browser from the popup if the frame disappears.");
    window.setTimeout(navigate, 250);
  }

  function normalizeAddress(value) {
    const trimmedValue = String(value || "").trim();

    if (!trimmedValue) {
      return "";
    }

    try {
      return new URL(trimmedValue).href;
    } catch {
      try {
        return new URL(`https://${trimmedValue}`).href;
      } catch {
        return "";
      }
    }
  }

  function updateBrowserStatus(message) {
    const status = document.querySelector("#retrofy-browser-frame .retrofy-browser-status");

    if (status) {
      status.textContent = message;
    }
  }

  function updateBrowserAddress(pageUrl) {
    const address = document.querySelector("#retrofy-browser-frame .retrofy-browser-address input");

    if (address) {
      address.value = pageUrl;
    }
  }

  function escapeAttribute(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("\"", "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }
})();
