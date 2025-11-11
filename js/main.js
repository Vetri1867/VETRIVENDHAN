// Main JavaScript for OMR Scheduler

// Utility function to get element
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// Initialize page on load
document.addEventListener("DOMContentLoaded", () => {
  console.log("OMR Scheduler loaded successfully")
  initializeEventListeners()
})

// Event Listeners
function initializeEventListeners() {
  // Login form
  const loginForm = $("#loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }

  // Register form
  const registerForm = $("#registerForm")
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister)
  }

  // Admin login form
  const adminLoginForm = $("#adminLoginForm")
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", handleAdminLogin)
  }

  // Navigation links
  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", handleNavClick)
  })
}

// Handle Login
function handleLogin(e) {
  e.preventDefault()
  const email = $("#email").value
  const password = $("#password").value
  const messageDiv = $("#formMessage")

  if (!email || !password) {
    showMessage(messageDiv, "Please fill in all fields", "error")
    return
  }

  // Validate email format
  if (!isValidEmail(email)) {
    showMessage(messageDiv, "Please enter a valid email address", "error")
    return
  }

  // Simulate API call
  console.log("Logging in with:", { email, password })
  showMessage(messageDiv, "Login successful! Redirecting...", "success")

  setTimeout(() => {
    localStorage.setItem("user", JSON.stringify({ email, type: "user" }))
    window.location.href = "dashboard.html"
  }, 1500)
}

// Handle Register
function handleRegister(e) {
  e.preventDefault()
  const name = $("#name").value
  const email = $("#email").value
  const password = $("#password").value
  const confirmPassword = $("#confirm-password").value
  const messageDiv = $("#formMessage")

  if (!name || !email || !password || !confirmPassword) {
    showMessage(messageDiv, "Please fill in all fields", "error")
    return
  }

  if (!isValidEmail(email)) {
    showMessage(messageDiv, "Please enter a valid email address", "error")
    return
  }

  if (password.length < 6) {
    showMessage(messageDiv, "Password must be at least 6 characters", "error")
    return
  }

  if (password !== confirmPassword) {
    showMessage(messageDiv, "Passwords do not match", "error")
    return
  }

  // Simulate API call
  console.log("Registering with:", { name, email, password })
  showMessage(messageDiv, "Account created successfully! Redirecting...", "success")

  setTimeout(() => {
    localStorage.setItem("user", JSON.stringify({ name, email, type: "user" }))
    window.location.href = "dashboard.html"
  }, 1500)
}

// Handle Admin Login
function handleAdminLogin(e) {
  e.preventDefault()
  const email = $("#email").value
  const password = $("#password").value
  const messageDiv = $("#formMessage")

  if (!email || !password) {
    showMessage(messageDiv, "Please fill in all fields", "error")
    return
  }

  if (!isValidEmail(email)) {
    showMessage(messageDiv, "Please enter a valid email address", "error")
    return
  }

  // Simulate admin validation
  console.log("Admin login attempt:", { email, password })
  showMessage(messageDiv, "Admin login successful! Redirecting...", "success")

  setTimeout(() => {
    localStorage.setItem("user", JSON.stringify({ email, type: "admin" }))
    window.location.href = "dashboard.html"
  }, 1500)
}

// Handle Navigation
function handleNavClick(e) {
  e.preventDefault()
  $$(".nav-link").forEach((link) => link.classList.remove("active"))
  e.target.classList.add("active")
}

// Utility: Show message
function showMessage(element, message, type) {
  element.textContent = message
  element.className = "mt-4 p-4 rounded-lg hidden"

  if (type === "success") {
    element.classList.add("bg-green-500/20", "text-green-300", "border", "border-green-500/30")
  } else if (type === "error") {
    element.classList.add("bg-red-500/20", "text-red-300", "border", "border-red-500/30")
  }

  element.classList.remove("hidden")
}

// Utility: Validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Logout function
function logout() {
  localStorage.removeItem("user")
  window.location.href = "index.html"
}

// Export functions for use in other files
window.showMessage = showMessage
window.isValidEmail = isValidEmail
window.logout = logout
