document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "Pesan berhasil dikirim! (Demo form)";
    form.reset();
  });

  // Efek reveal saat bagian halaman masuk ke layar
  const elements = document.querySelectorAll(".section .reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
  });
});
