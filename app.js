const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const message = document.getElementById("message");
const button = form.querySelector("button");
const buttonIcon = button.querySelector("i");

// Helper function to validate email
function isValidEmail(email) {
  // Simple regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  // Clear any previous message
  message.textContent = "";
  message.style.color = "";

  if (!isValidEmail(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "#e74c3c"; // red
    return;
  }

  // Simulate subscribing
  button.disabled = true;
  button.style.opacity = "0.7";
  buttonIcon.classList.remove("fa-arrow-right");
  buttonIcon.classList.add("fa-spinner", "fa-spin");
  button.textContent = " Subscribing...";
  button.prepend(buttonIcon);

  // Simulate async request (e.g., AJAX call)
  setTimeout(() => {
    button.disabled = false;
    button.style.opacity = "1";
    buttonIcon.classList.remove("fa-spinner", "fa-spin");
    buttonIcon.classList.add("fa-arrow-right");
    button.textContent = "Subscribe ";
    button.appendChild(buttonIcon);

    message.textContent = "Thank you for subscribing!";
    message.style.color = "#3ecf8e"; // green

    // Reset form
    form.reset();
  }, 1500);
});
