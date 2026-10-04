document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#enquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#name").value.trim();
      const phone = document.querySelector("#phone").value.trim();
      const message = document.querySelector("#message").value.trim();

      const text = `Hello, I want to enquire about Prajapati Samaj Hostel, Sirohi.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message || "Please share room availability and hostel details.")}`;
      window.open(`https://wa.me/919414994756?text=${text}`, "_blank");
    });
  }
});
