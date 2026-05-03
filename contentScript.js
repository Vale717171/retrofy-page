(() => {
  const rootClass = "retrofy-page-active";
  const chromeId = "retrofy-page-chrome";
  const browserClass = "retrofy-browser-active";
  const browserId = "retrofy-browser-frame";
  const desktopClass = "retrofy-desktop-active";
  const desktopId = "retrofy-win95-desktop";
  const effectsId = "retrofy-page-effects";
  const loaderId = "retrofy-page-loader";
  const modeClasses = ["retrofy-mode-soft", "retrofy-mode-chaos", "retrofy-mode-pure-html"];
  const sparkleClass = "retrofy-page-sparkle";
  let lastSparkleAt = 0;
  let isMouseTrailActive = false;

  if (window.retrofyPage) {
    return;
  }

  window.retrofyPage = {
    enable,
    browser,
    desktop,
    export: exportHtml,
    disable
  };

  async function enable(_pageUrl, mode = "soft") {
    await showFakeLoader();
    document.documentElement.classList.add(rootClass);
    document.documentElement.classList.remove(browserClass, desktopClass);
    setMode(mode);
    document.getElementById(browserId)?.remove();
    document.getElementById(desktopId)?.remove();

    if (mode === "pure-html") {
      document.getElementById(chromeId)?.remove();
      document.getElementById(effectsId)?.remove();
      disableMouseTrail();
      return;
    }

    addRetroChrome();
    addRetroEffects();
    enableMouseTrail();
    playDialUpSound();
  }

  async function browser(pageUrl, mode = "soft", _cssText = "", skipLoader = false) {
    if (!skipLoader) {
      await showFakeLoader();
    }

    document.documentElement.classList.add(rootClass, browserClass);
    setMode(mode);
    document.getElementById(chromeId)?.remove();
    addRetroBrowser(pageUrl);

    if (mode === "pure-html") {
      document.getElementById(effectsId)?.remove();
      disableMouseTrail();
      return;
    }

    addRetroEffects();
    enableMouseTrail();
  }

  async function desktop(pageUrl, mode = "soft", cssText = "", skipLoader = false) {
    if (!skipLoader) {
      await showFakeLoader();
      playDesktopStartupSound();
    }

    document.documentElement.classList.add(rootClass, desktopClass);
    document.documentElement.classList.remove(browserClass);
    setMode(mode);
    document.getElementById(chromeId)?.remove();
    document.getElementById(browserId)?.remove();
    addWin95Desktop(pageUrl, mode, cssText);
    addRetroEffects();
    enableMouseTrail();
  }

  function disable() {
    document.documentElement.classList.remove(rootClass, browserClass, desktopClass);
    document.documentElement.classList.remove(...modeClasses);
    document.getElementById(chromeId)?.remove();
    document.getElementById(browserId)?.remove();
    document.getElementById(desktopId)?.remove();
    document.getElementById(effectsId)?.remove();
    document.getElementById(loaderId)?.remove();
    document.querySelectorAll(`.${sparkleClass}`).forEach((sparkle) => sparkle.remove());
    disableMouseTrail();
  }

  function exportHtml(_pageUrl, mode = "soft", cssText = "") {
    const clone = document.documentElement.cloneNode(true);
    const exportMode = modeClasses.includes(`retrofy-mode-${mode}`) ? mode : "soft";

    clone.classList.add(rootClass, `retrofy-mode-${exportMode}`);
    clone.classList.remove(browserClass);
    clone.querySelector(`#${loaderId}`)?.remove();
    clone.querySelectorAll(`.${sparkleClass}`).forEach((sparkle) => sparkle.remove());

    if (exportMode === "pure-html") {
      clone.querySelector(`#${chromeId}`)?.remove();
      clone.querySelector(`#${effectsId}`)?.remove();
    } else {
      ensureExportChrome(clone, exportMode);
      ensureExportEffects(clone);
    }

    let head = clone.querySelector("head");

    if (!head) {
      head = document.createElement("head");
      clone.insertBefore(head, clone.firstChild);
    }
    const base = document.createElement("base");
    base.href = location.href;
    const style = document.createElement("style");
    style.textContent = cssText;
    const note = document.createComment(" Exported with Retrofy Page. No external Retrofy assets are required. ");

    head.prepend(note);
    head.prepend(style);
    head.prepend(base);

    const html = `<!doctype html>\n${clone.outerHTML}`;
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${getExportFilename()}-retrofy.htm`;
    document.body.append(link);
    link.click();

    window.setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.remove();
    }, 1000);
  }

  function setMode(mode) {
    const normalizedMode = modeClasses.includes(`retrofy-mode-${mode}`) ? mode : "soft";
    document.documentElement.classList.remove(...modeClasses);
    document.documentElement.classList.add(`retrofy-mode-${normalizedMode}`);
  }

  function showFakeLoader() {
    if (!document.body) {
      return Promise.resolve();
    }

    document.getElementById(loaderId)?.remove();

    const loader = document.createElement("div");
    loader.id = loaderId;
    loader.setAttribute("role", "status");
    loader.setAttribute("aria-live", "polite");
    loader.innerHTML = `
      <div class="retrofy-loader-window">
        <div class="retrofy-loader-title">Dial-up connection</div>
        <div class="retrofy-loader-copy">Loading... 28.8 kbps</div>
        <div class="retrofy-loader-bar"><span></span></div>
        <div class="retrofy-loader-details">Handshaking with nostalgia server...</div>
      </div>
    `;

    document.body.append(loader);

    return new Promise((resolve) => {
      window.setTimeout(() => {
        loader.remove();
        resolve();
      }, 1550);
    });
  }

  function addRetroChrome() {
    if (document.getElementById(chromeId) || !document.body) {
      return;
    }

    const visitorNumber = getVisitorNumber();
    const chrome = document.createElement("div");
    chrome.id = chromeId;
    chrome.setAttribute("aria-hidden", "true");
    chrome.innerHTML = `
      <div class="retrofy-page-marquee"><span>WELCOME TO MY PAGE - Best viewed in 800x600 - Sign my guestbook!</span></div>
      <div class="retrofy-chaos-strip"><span>COOL LINKS - FREE MIDI - WEB RING - EMAIL ME - HOT NEW SITE</span></div>
      <div class="retrofy-page-banner"><span class="retrofy-page-blink">New!</span> Best viewed in 800x600</div>
      <div class="retrofy-browser-badge">Best viewed with Netscape Navigator</div>
      <div class="retrofy-page-corner">
        <div class="retrofy-page-worker" title="Under construction"></div>
        <strong>UNDER CONSTRUCTION</strong>
        <span>Visitor #${visitorNumber}</span>
      </div>
    `;

    document.body.prepend(chrome);
  }

  function addRetroEffects() {
    if (document.getElementById(effectsId) || !document.body) {
      return;
    }

    const effects = document.createElement("div");
    effects.id = effectsId;
    effects.setAttribute("aria-hidden", "true");
    effects.innerHTML = getRetroEffectsMarkup();

    document.body.append(effects);
  }

  function ensureExportChrome(clone, mode) {
    if (clone.querySelector(`#${chromeId}`)) {
      return;
    }

    const body = clone.querySelector("body");

    if (!body) {
      return;
    }

    const chrome = document.createElement("div");
    const visitorNumber = getVisitorNumber();
    chrome.id = chromeId;
    chrome.setAttribute("aria-hidden", "true");
    chrome.innerHTML = `
      <div class="retrofy-page-marquee"><span>WELCOME TO MY PAGE - Best viewed in 800x600 - Sign my guestbook!</span></div>
      ${mode === "chaos" ? `<div class="retrofy-chaos-strip"><span>COOL LINKS - FREE MIDI - WEB RING - EMAIL ME - HOT NEW SITE</span></div>` : ""}
      <div class="retrofy-page-banner"><span class="retrofy-page-blink">New!</span> Best viewed in 800x600</div>
      <div class="retrofy-browser-badge">Best viewed with Netscape Navigator</div>
      <div class="retrofy-page-corner">
        <div class="retrofy-page-worker" title="Under construction"></div>
        <strong>UNDER CONSTRUCTION</strong>
        <span>Visitor #${visitorNumber}</span>
      </div>
    `;
    body.prepend(chrome);
  }

  function ensureExportEffects(clone) {
    if (clone.querySelector(`#${effectsId}`)) {
      return;
    }

    const body = clone.querySelector("body");

    if (!body) {
      return;
    }

    const effects = document.createElement("div");
    effects.id = effectsId;
    effects.setAttribute("aria-hidden", "true");
    effects.innerHTML = getRetroEffectsMarkup();
    body.append(effects);
  }

  function getRetroEffectsMarkup() {
    return `
      <svg class="retrofy-page-filter-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="retrofy-page-posterize" color-interpolation-filters="sRGB">
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"></feFuncR>
            <feFuncG type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"></feFuncG>
            <feFuncB type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"></feFuncB>
          </feComponentTransfer>
        </filter>
      </svg>
      <div class="retrofy-page-crt"></div>
      <div class="retrofy-page-crt-flicker"></div>
    `;
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
        <span class="retrofy-page-rainbow">Retro Browser 0.9</span>
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

  function addWin95Desktop(pageUrl, mode, cssText) {
    document.getElementById(desktopId)?.remove();

    if (!document.body) {
      return;
    }

    const desktop = document.createElement("div");
    desktop.id = desktopId;
    desktop.innerHTML = `
      <div class="retrofy-win95-icon">
        <div class="retrofy-win95-icon-art"></div>
        <span>My Page</span>
      </div>
      <div class="retrofy-win95-window" style="left: 48px; top: 46px; width: min(860px, calc(100vw - 96px)); height: min(620px, calc(100vh - 116px));">
        <div class="retrofy-win95-titlebar" data-retrofy-drag-handle>
          <span>${escapeAttribute(document.title || "Current Page")}</span>
          <button type="button" data-retrofy-desktop-close title="Close">X</button>
        </div>
        <div class="retrofy-win95-menubar">File&nbsp;&nbsp;Edit&nbsp;&nbsp;View&nbsp;&nbsp;Window&nbsp;&nbsp;Help</div>
        <div class="retrofy-win95-address">Address: ${escapeAttribute(pageUrl || location.href)}</div>
        <div class="retrofy-win95-frame-slot"></div>
        <div class="retrofy-win95-resizer" data-retrofy-resize-handle></div>
      </div>
      <div class="retrofy-win95-taskbar">
        <button type="button">Start</button>
        <span>Retrofy Page</span>
        <time>${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time>
      </div>
    `;

    const iframe = document.createElement("iframe");
    iframe.title = "Retro desktop page snapshot";
    iframe.setAttribute("sandbox", "");
    iframe.srcdoc = getDesktopSnapshot(mode, cssText);
    desktop.querySelector(".retrofy-win95-frame-slot")?.append(iframe);

    desktop.querySelector("[data-retrofy-desktop-close]")?.addEventListener("click", () => {
      disable();
      chrome.runtime?.sendMessage?.({ type: "retrofy:removeCss" });
    });

    makeDesktopWindowInteractive(desktop);
    document.body.append(desktop);
  }

  function getDesktopSnapshot(mode, cssText) {
    const clone = document.documentElement.cloneNode(true);
    const snapshotMode = modeClasses.includes(`retrofy-mode-${mode}`) ? mode : "soft";
    clone.classList.add(rootClass, `retrofy-mode-${snapshotMode}`);
    clone.classList.remove(browserClass, desktopClass);
    clone.querySelector(`#${loaderId}`)?.remove();
    clone.querySelector(`#${desktopId}`)?.remove();
    clone.querySelector(`#${browserId}`)?.remove();
    clone.querySelectorAll(`.${sparkleClass}`).forEach((sparkle) => sparkle.remove());

    if (snapshotMode === "pure-html") {
      clone.querySelector(`#${chromeId}`)?.remove();
      clone.querySelector(`#${effectsId}`)?.remove();
    } else {
      ensureExportChrome(clone, snapshotMode);
      ensureExportEffects(clone);
    }

    let head = clone.querySelector("head");

    if (!head) {
      head = document.createElement("head");
      clone.insertBefore(head, clone.firstChild);
    }

    const base = document.createElement("base");
    base.href = location.href;
    const style = document.createElement("style");
    style.textContent = cssText;
    head.prepend(style);
    head.prepend(base);

    return `<!doctype html>\n${clone.outerHTML}`;
  }

  function makeDesktopWindowInteractive(desktop) {
    const win = desktop.querySelector(".retrofy-win95-window");
    const dragHandle = desktop.querySelector("[data-retrofy-drag-handle]");
    const resizeHandle = desktop.querySelector("[data-retrofy-resize-handle]");

    dragHandle?.addEventListener("mousedown", (event) => {
      event.preventDefault();
      const rect = win.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const move = (moveEvent) => {
        const maxLeft = window.innerWidth - 120;
        const maxTop = window.innerHeight - 90;
        win.style.left = `${Math.max(0, Math.min(maxLeft, moveEvent.clientX - offsetX))}px`;
        win.style.top = `${Math.max(0, Math.min(maxTop, moveEvent.clientY - offsetY))}px`;
      };

      const stop = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", stop);
    });

    resizeHandle?.addEventListener("mousedown", (event) => {
      event.preventDefault();
      const rect = win.getBoundingClientRect();
      const startX = event.clientX;
      const startY = event.clientY;

      const resize = (moveEvent) => {
        const width = Math.max(320, Math.min(window.innerWidth - rect.left - 8, rect.width + moveEvent.clientX - startX));
        const height = Math.max(240, Math.min(window.innerHeight - rect.top - 34, rect.height + moveEvent.clientY - startY));
        win.style.width = `${width}px`;
        win.style.height = `${height}px`;
      };

      const stop = () => {
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stop);
      };

      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stop);
    });
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
    updateBrowserStatus("Loading... Retro Browser will try to restore itself after navigation.");
    window.setTimeout(navigate, 250);
  }

  function enableMouseTrail() {
    if (!supportsMouseTrail()) {
      return;
    }

    if (isMouseTrailActive) {
      return;
    }

    isMouseTrailActive = true;
    document.addEventListener("mousemove", addSparkle);
  }

  function disableMouseTrail() {
    if (!isMouseTrailActive) {
      return;
    }

    isMouseTrailActive = false;
    document.removeEventListener("mousemove", addSparkle);
  }

  // Plays a local extension audio asset set by popup.js before this script runs.
  // Fails silently if the URL was not provided or autoplay is blocked.
  function playLocalSound(volume = 0.22) {
    const audioUrl = window.retrofyAudioUrl;

    if (!audioUrl) {
      return;
    }

    const audio = new Audio(audioUrl);
    audio.volume = volume;
    audio.play().catch(() => {
      // Autoplay may be blocked on some pages; that is fine.
    });
  }

  function playDialUpSound() {
    playLocalSound(0.22);
  }

  function playDesktopStartupSound() {
    playLocalSound(0.18);
  }

  function addSparkle(event) {
    const now = Date.now();

    if (now - lastSparkleAt < 55 || !document.documentElement.classList.contains(rootClass)) {
      return;
    }

    lastSparkleAt = now;

    const sparkle = document.createElement("span");
    sparkle.className = sparkleClass;
    sparkle.textContent = "*";
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
    document.body.append(sparkle);

    window.setTimeout(() => sparkle.remove(), 700);
  }

  function supportsMouseTrail() {
    return window.matchMedia?.("(pointer: fine)")?.matches && !("ontouchstart" in window);
  }

  function normalizeAddress(value) {
    const trimmedValue = String(value || "").trim();

    if (!trimmedValue) {
      return "";
    }

    try {
      return getSafeWebUrl(trimmedValue);
    } catch {
      try {
        return getSafeWebUrl(`https://${trimmedValue}`);
      } catch {
        return "";
      }
    }
  }

  function getSafeWebUrl(value) {
    const url = new URL(value);

    if (!["http:", "https:"].includes(url.protocol)) {
      return "";
    }

    return url.href;
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

  function getExportFilename() {
    const host = location.hostname || "retro-page";
    const title = document.title || host;
    return `${host}-${title}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "retrofy-page";
  }

  function getVisitorNumber() {
    return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  }
})();
