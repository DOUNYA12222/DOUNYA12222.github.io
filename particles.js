document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".site-header");
  const starField = document.getElementById("starField");

  if (!header || !starField) {
    return;
  }

  function createParticles() {
    starField.innerHTML = "";
    const count = window.innerWidth < 700 ? 55 : 110;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("span");
      particle.className = "star-particle";
      particle.dataset.depth = (Math.random() * 1.2 + 0.35).toFixed(2);
      particle.style.setProperty("--x", Math.random() * 100 + "%");
      particle.style.setProperty("--y", Math.random() * 90 + "%");
      particle.style.setProperty("--s", Math.random() * 3.5 + 2 + "px");
      particle.style.setProperty("--o", Math.random() * 0.5 + 0.42);
      particle.style.setProperty("--d", Math.random() * -4 + "s");
      starField.appendChild(particle);
    }
  }

  function moveParticles(clientX, clientY) {
    const rect = header.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const directionX = (x - centerX) / centerX;
    const directionY = (y - centerY) / centerY;

    header.style.setProperty("--mouse-x", x + "px");
    header.style.setProperty("--mouse-y", y + "px");
    header.style.setProperty("--stars-x", directionX * 26 + "px");
    header.style.setProperty("--stars-y", directionY * 20 + "px");

    document.querySelectorAll(".star-particle").forEach(function(particle) {
      const depth = Number(particle.dataset.depth);
      particle.style.setProperty("--move-x", directionX * depth * 48 + "px");
      particle.style.setProperty("--move-y", directionY * depth * 34 + "px");
    });
  }

  createParticles();
  moveParticles(window.innerWidth / 2, window.innerHeight / 2);

  window.addEventListener("mousemove", function(event) {
    moveParticles(event.clientX, event.clientY);
  });

  window.addEventListener("resize", createParticles);
});
