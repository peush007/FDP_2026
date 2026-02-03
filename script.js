// ===== Typing effect =====
const typingEl = document.getElementById("typing");

const lines = [
  "B.Tech IT Student",
  "Learning C and Python Full Stack",
  "Building projects to get job-ready"
];

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = lines[lineIndex];

  if (!deleting) {
    typingEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length + 10) deleting = true;
  } else {
    typingEl.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      charIndex = 0;
    }
  }

  const speed = deleting ? 35 : 55;
  setTimeout(typeLoop, speed);
}
typeLoop();

// ===== Theme toggle =====
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("light");
updateThemeIcon();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
});

function updateThemeIcon() {
  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "☀️" : "🌙";
}

// ===== Mobile menu =====
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Close menu when clicking a link (mobile)
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => menu.classList.remove("open"));
});

// ===== Contact form (UI only) =====
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const msg = document.getElementById("cMsg").value.trim();

  // Basic validation
  if (!name || !email || !msg) {
    statusEl.textContent = "Fill all fields.";
    return;
  }

  statusEl.textContent = "Message sent (demo). Add backend later.";
  form.reset();
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
