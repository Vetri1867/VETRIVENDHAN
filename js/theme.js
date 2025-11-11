// Theme Management

const THEME_KEY = "omr-theme"

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark"
  setTheme(savedTheme)
  setupThemeToggle()
}

// Set theme
function setTheme(theme) {
  const html = document.documentElement

  if (theme === "dark") {
    html.classList.add("dark")
    localStorage.setItem(THEME_KEY, "dark")
  } else {
    html.classList.remove("dark")
    localStorage.setItem(THEME_KEY, "light")
  }
}

// Toggle theme
function toggleTheme() {
  const currentTheme = localStorage.getItem(THEME_KEY) || "dark"
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  setTheme(newTheme)
  updateThemeButton()
}

// Setup theme toggle button
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
    updateThemeButton()
  }
}

// Update theme button text
function updateThemeButton() {
  const themeToggle = document.getElementById("themeToggle")
  if (themeToggle) {
    const currentTheme = localStorage.getItem(THEME_KEY) || "dark"
    themeToggle.textContent = currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", initializeTheme)
