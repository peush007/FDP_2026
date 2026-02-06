// Theme toggle (Light/Dark) + save preference
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    themeIcon.textContent = "☀️";
    themeText.textContent = "Light";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    themeIcon.textContent = "🌙";
    themeText.textContent = "Dark";
    localStorage.setItem("theme", "dark");
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") setTheme("light");
else setTheme("dark");

// Toggle on click
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple contact form validation (front-end demo)
const contactForm = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

function isValidEmail(email) {
  // Simple validation (not perfect, but good for demo)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Brutal truth: empty/invalid form looks amateur. So validate properly.
  if (fullName.length < 2) {
    statusEl.textContent = "Enter a valid name (at least 2 characters).";
    statusEl.style.color = "var(--danger)";
    return;
  }
  if (!isValidEmail(email)) {
    statusEl.textContent = "Enter a valid email address.";
    statusEl.style.color = "var(--danger)";
    return;
  }
  if (message.length < 10) {
    statusEl.textContent = "Message is too short (minimum 10 characters).";
    statusEl.style.color = "var(--danger)";
    return;
  }

  statusEl.textContent = "Message sent (demo). Add backend/email service to make it real.";
  statusEl.style.color = "var(--primary2)";

  contactForm.reset();
});
