
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");

  if (menuBtn && nav) {
    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Smooth reveal animations for sections/cards as they enter the viewport.
  const revealItems = document.querySelectorAll(
    ".section, .feature, .facility-card, .price-card, .notice, .contact-card, .enquiry-box, .gallery-grid img, .food-image, .map-overlay"
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min((index % 4) * 70, 210)}ms`;
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const form = document.querySelector("#enquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const phone = document.querySelector("#phone").value.trim();
      const message = document.querySelector("#message").value.trim();

      const text =
        `Hello, I want to enquire about Prajapati Samaj Hostel, Sirohi.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Message: ${message || "Please share room availability and hostel details."}`;

      window.open(
        `https://wa.me/919414994756?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener"
      );
    });
  }
});
