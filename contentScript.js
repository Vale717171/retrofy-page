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
    if (document.getElementById(browserId) || !document.body) {
      return;
    }

    const frame = document.createElement("div");
    frame.id = browserId;
    frame.setAttribute("aria-hidden", "true");
    frame.innerHTML = `
      <div class="retrofy-browser-titlebar">
        <span>Retro Browser 0.9</span>
        <span class="retrofy-browser-window-buttons">_ [] X</span>
      </div>
      <div class="retrofy-browser-menubar">File&nbsp;&nbsp;Edit&nbsp;&nbsp;View&nbsp;&nbsp;Go&nbsp;&nbsp;Bookmarks&nbsp;&nbsp;Help</div>
      <div class="retrofy-browser-toolbar">
        <span>Back</span>
        <span>Forward</span>
        <span>Stop</span>
        <span>Refresh</span>
        <span>Home</span>
      </div>
      <div class="retrofy-browser-address">
        <span>Address</span>
        <input type="text" value="${escapeAttribute(pageUrl || location.href)}" readonly>
      </div>
      <div class="retrofy-browser-status">Done</div>
    `;

    document.body.prepend(frame);
  }

  function escapeAttribute(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("\"", "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }
})();
