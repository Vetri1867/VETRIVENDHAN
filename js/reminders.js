// Reminders and Notification Management

// Initialize reminders on page load
function initReminders() {
  const remindersSettings = localStorage.getItem("remindersSettings")
  if (remindersSettings) {
    const settings = JSON.parse(remindersSettings)
    document.getElementById("emailReminder").checked = settings.emailReminder
    document.getElementById("smsReminder").checked = settings.smsReminder
    document.getElementById("pushReminder").checked = settings.pushReminder

    if (settings.phoneNumber) {
      document.getElementById("phoneNumber").value = settings.phoneNumber
    }
  }

  // Request push notification permission if enabled
  if (localStorage.getItem("pushReminder") === "true" && "Notification" in window) {
    if (Notification.permission === "default") {
      Notification.requestPermission()
    }
  }
}

// Toggle email reminders
function toggleEmailReminder() {
  const emailReminder = document.getElementById("emailReminder").checked
  localStorage.setItem("emailReminder", emailReminder)
  console.log("[v0] Email reminders:", emailReminder)
}

// Toggle SMS reminders
function toggleSmsReminder() {
  const smsReminder = document.getElementById("smsReminder").checked
  const phoneInput = document.getElementById("phoneNumber")
  phoneInput.style.display = smsReminder ? "block" : "none"
  localStorage.setItem("smsReminder", smsReminder)
  console.log("[v0] SMS reminders:", smsReminder)
}

// Toggle push reminders
function togglePushReminder() {
  const pushReminder = document.getElementById("pushReminder").checked
  localStorage.setItem("pushReminder", pushReminder)

  // Request notification permission
  if (pushReminder && "Notification" in window) {
    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          sendPushNotification("Notifications Enabled", "You will now receive exam reminders via browser notifications")
        }
      })
    }
  }
  console.log("[v0] Push reminders:", pushReminder)
}

// Save all reminder preferences
function saveReminders() {
  const settings = {
    emailReminder: document.getElementById("emailReminder").checked,
    smsReminder: document.getElementById("smsReminder").checked,
    pushReminder: document.getElementById("pushReminder").checked,
    phoneNumber: document.getElementById("phoneNumber").value,
  }

  localStorage.setItem("remindersSettings", JSON.stringify(settings))
  console.log("[v0] Reminder settings saved:", settings)

  // Show success notification
  sendPushNotification("Settings Saved", "Your reminder preferences have been updated")
  closeRemindersModal()
}

// Send push notification (works offline)
function sendPushNotification(title, message) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body: message,
      icon: "assets/omr-loading.gif",
      badge: "assets/omr-loading.gif",
      tag: "omr-notification",
      requireInteraction: false,
    })
  }
}

// Simulate exam reminder (for demo purposes)
function scheduleExamReminder(examName, examDate) {
  const settings = JSON.parse(localStorage.getItem("remindersSettings") || "{}")

  // Calculate time until exam
  const now = new Date()
  const exam = new Date(examDate)
  const timeUntil = exam - now

  if (timeUntil > 0) {
    // Set timeout for reminder (in production, use actual backend)
    setTimeout(
      () => {
        if (settings.pushReminder) {
          sendPushNotification("Exam Reminder", `${examName} is starting soon!`)
        }

        // In production, these would call backend APIs:
        // - Email: sendEmail via EmailJS/Firebase/SendGrid
        // - SMS: sendSMS via Twilio API
        // - Push: sendPushToFCM via Firebase Cloud Messaging

        if (settings.emailReminder) {
          console.log("[v0] Would send email reminder to:", localStorage.getItem("userEmail"))
        }

        if (settings.smsReminder && settings.phoneNumber) {
          console.log("[v0] Would send SMS reminder to:", settings.phoneNumber)
        }
      },
      Math.min(timeUntil, 86400000),
    ) // Max 24 hours wait
  }
}

// Open reminders modal
function openRemindersModal() {
  document.getElementById("remindersModal").classList.remove("hidden")
  initReminders()
}

// Close reminders modal
function closeRemindersModal() {
  document.getElementById("remindersModal").classList.add("hidden")
}

// Make functions globally available
window.openRemindersModal = openRemindersModal
window.closeRemindersModal = closeRemindersModal
window.toggleEmailReminder = toggleEmailReminder
window.toggleSmsReminder = toggleSmsReminder
window.togglePushReminder = togglePushReminder
window.saveReminders = saveReminders
