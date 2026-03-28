// ── Intersection Observer: fade-up & skill bars ────────────────────
const fadeEls = document.querySelectorAll(".fade-up");
const skillFills = document.querySelectorAll(".level-fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

fadeEls.forEach((el) => observer.observe(el));

// Animate skill bars when section enters viewport
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

skillFills.forEach((el) => skillObserver.observe(el));

// ── Navbar shrink on scroll ────────────────────────────────────────
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(24,26,38,0.97)";
  } else {
    navbar.style.background = "rgba(30,32,48,0.82)";
  }
});

// ── Active nav link highlight ──────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = "";
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.style.color = "var(--purple)";
          }
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((s) => navObserver.observe(s));

// ── Auto year ─────────────────────────────────────────────────────
document.getElementById("current-year").textContent = new Date().getFullYear();
