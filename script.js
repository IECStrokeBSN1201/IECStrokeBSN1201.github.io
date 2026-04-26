// COLLAPSE
function toggleSection(el) {
  const content =
    el.parentElement.querySelector(".hidden-content") ||
    el.nextElementSibling;

  if (!content) return;

  content.classList.toggle("active");
}

// SCROLL REVEAL (STAGGERED)
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.05}s`;
  observer.observe(card);
});

// EXPANDABLE
document.querySelectorAll(".expandable").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
  });
});

// PARALLAX BLOBS
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  document.querySelectorAll(".circle").forEach((c, i) => {
    const speed = (i + 1) * 0.2;
    c.style.transform = `translateY(${y * speed}px)`;
  });
});

// SUBTLE HEADER FLOAT
setInterval(() => {
  const header = document.querySelector(".header-card");
  if (header) {
    header.style.transform = "translateY(-3px)";
    setTimeout(() => {
      header.style.transform = "translateY(0)";
    }, 800);
  }
}, 2000);
