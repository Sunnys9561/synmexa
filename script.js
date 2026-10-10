document.addEventListener("DOMContentLoaded", () => {

  /* Scroll reveal */
  const elements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    elements.forEach((element, index) => {
      element.style.transitionDelay =
        `${Math.min(index * 35, 210)}ms`;

      observer.observe(element);
    });
  } else {
    elements.forEach((element) => {
      element.classList.add("show");
    });
  }


  /* Smooth navigation */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  /* Current year */
  const year = document.querySelector("footer small");

  if (year) {
    year.textContent =
      `© ${new Date().getFullYear()} SYNMEXA. All rights reserved.`;
  }

});
