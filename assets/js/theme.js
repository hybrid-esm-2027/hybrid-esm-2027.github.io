// Light/dark theme toggle. With no stored choice the page follows the OS
// (prefers-color-scheme); a click stores an explicit "light" or "dark".
(function () {
  var KEY = "theme";
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function current() {
    return root.getAttribute("data-theme") || (media.matches ? "dark" : "light");
  }
  function sync(button) {
    var dark = current() === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    button.title = button.getAttribute("aria-label");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    button.hidden = false;
    sync(button);
    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* storage blocked: theme lasts for this page only */ }
      sync(button);
    });
    // Follow OS changes only while the visitor has not chosen explicitly.
    media.addEventListener("change", function () { if (!stored()) sync(button); });
  });
})();
