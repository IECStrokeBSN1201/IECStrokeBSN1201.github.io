// HERO ANIMATION
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("hero-show");
});

// HERO FADE ON SCROLL
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  if (window.scrollY > 150) {
    hero.style.opacity = "0.3";
  } else {
    hero.style.opacity = "1";
  }
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(el => observer.observe(el));

// COLLAPSIBLE SECTIONS
function toggleSection(el) {
  const content = el.parentElement.querySelector(".hidden-content") 
               || el.nextElementSibling;

  content.classList.toggle("active");
}

// EXPANDABLE CARDS
document.querySelectorAll(".expandable").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
  });
});

// PARALLAX FLOATING CIRCLES
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".circle").forEach((circle, i) => {
    const speed = (i + 1) * 0.15;
    circle.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
