(() => {
  const rootClass = "retrofy-page-active";
  const chromeId = "retrofy-page-chrome";

  if (window.retrofyPage) {
    return;
  }

  window.retrofyPage = {
    enable,
    disable
  };

  function enable() {
    document.documentElement.classList.add(rootClass);
    addRetroChrome();
  }

  function disable() {
    document.documentElement.classList.remove(rootClass);
    document.getElementById(chromeId)?.remove();
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
})();
