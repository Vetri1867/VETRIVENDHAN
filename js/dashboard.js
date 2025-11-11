// Dashboard specific functionality

// Declare isLoggedIn function
function isLoggedIn() {
  // Placeholder for actual authentication check
  return localStorage.getItem("authToken") !== null
}

// Declare getCurrentUser function
function getCurrentUser() {
  // Placeholder for actual user retrieval logic
  return JSON.parse(localStorage.getItem("user"))
}

document.addEventListener("DOMContentLoaded", () => {
  // Verify user is logged in before initializing
  if (!isLoggedIn()) {
    console.log("[v0] Redirecting to login - user not authenticated")
    window.location.href = "login.html"
    return
  }

  initializeDashboard()
})

function initializeDashboard() {
  // Load user data
  const user = getCurrentUser()
  console.log("[v0] Dashboard initialized for:", user?.email || user?.name)

  // Setup navigation
  setupDashboardNavigation()

  setupMobileMenu()

  // Animate stat cards
  animateStatCards()

  initReminders()

  setupRemindersButton()
}

function setupMobileMenu() {
  const menuToggle = document.getElementById("menuToggle")
  const sidebar = document.getElementById("sidebar")
  const overlay = document.getElementById("mobileOverlay")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("hidden")
      overlay.classList.toggle("hidden")
    })
  }

  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.add("hidden")
      overlay.classList.add("hidden")
    })
  })
}

function closeMobileMenu() {
  const sidebar = document.getElementById("sidebar")
  const overlay = document.getElementById("mobileOverlay")
  sidebar.classList.add("hidden")
  overlay.classList.add("hidden")
}

function setupDashboardNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
    })
  })
}

function animateStatCards() {
  const cards = document.querySelectorAll('[class*="animate-scale-in"]')
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
}

function setupRemindersButton() {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    if (link.textContent.includes("Reminders")) {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        openRemindersModal()
      })
    }
  })
}

function initReminders() {
  // Placeholder for reminders initialization logic
  console.log("[v0] Reminders system initialized")
}

function openRemindersModal() {
  // Placeholder for opening reminders modal logic
  console.log("[v0] Opening reminders modal")
}

window.closeMobileMenu = closeMobileMenu
