// HERO ANIMATION
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("hero-show");
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(el => {
  observer.observe(el);
});

// PARALLAX FLOATING CIRCLES
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".circle").forEach((circle, i) => {
    const speed = (i + 1) * 0.15;
    circle.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
