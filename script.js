// COLLAPSE SECTIONS
function toggleSection(el) {
  const content =
    el.parentElement.querySelector(".hidden-content") ||
    el.nextElementSibling;

  if (!content) return;

  content.classList.toggle("active");
}

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});

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
