document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".service-card, .process-grid div, .hero-card, .about-content, .contact-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

  const year = document.querySelector("footer small");

  if (year) {
    year.textContent =
      `© ${new Date().getFullYear()} SYNMEXA. All rights reserved.`;
  }
});
