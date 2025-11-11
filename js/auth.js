// Authentication Helper Functions

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem("user") !== null
}

// Get current user
function getCurrentUser() {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

// Logout function
function logout() {
  localStorage.removeItem("user")
  window.location.href = "index.html"
}

// Check page access
function checkPageAccess() {
  const currentPage = window.location.pathname
  const user = getCurrentUser()

  if (currentPage.includes("dashboard") && !isLoggedIn()) {
    console.log("[v0] User not logged in, redirecting to login")
    window.location.href = "login.html"
  }
}

// Initialize auth check on every page
document.addEventListener("DOMContentLoaded", checkPageAccess)

// Export functions
window.isLoggedIn = isLoggedIn
window.getCurrentUser = getCurrentUser
window.logout = logout
window.checkPageAccess = checkPageAccess
