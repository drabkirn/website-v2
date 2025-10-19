window.addEventListener("DOMContentLoaded", function () {
  const STORAGE_KEY = "theme";
  const themeIconSun = document.querySelector(".theme-icon-sun");
  const themeIconMoon = document.querySelector(".theme-icon-moon");

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore write failures
    }
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function applyTheme(theme, withTransition = true) {
    const htmlEl = document.documentElement;
    // Add a temporary class to enable CSS transitions (only for manual toggles)
    if (withTransition) {
      htmlEl.classList.add("theme-transition");
    }
    htmlEl.setAttribute("data-bs-theme", theme);

    // Update toggle icon visibility
    const showSun = theme === "dark"; // in dark mode, show sun (to indicate switching to light)
    themeIconSun?.classList?.toggle("d-none", !showSun);
    themeIconMoon?.classList?.toggle("d-none", showSun);
    // Remove transition class after animations complete
    if (withTransition) {
      window.setTimeout(function () {
        htmlEl.classList.remove("theme-transition");
      }, 220);
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme") || getPreferredTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setStoredTheme(nextTheme);
    applyTheme(nextTheme, true);
  }

  // Initial apply should not transition because head-inline script already set it
  applyTheme(getPreferredTheme(), false);

  themeIconSun?.addEventListener("click", toggleTheme);
  themeIconMoon?.addEventListener("click", toggleTheme);
});