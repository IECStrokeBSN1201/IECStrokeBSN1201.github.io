// HERO ANIMATION
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("show");
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

// PARALLAX CIRCLES
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  document.querySelectorAll(".circle").forEach((c, i) => {
    c.style.transform = `translateY(${y * (0.1 + i * 0.05)}px)`;
  });

  // HERO FADE OUT
  const hero = document.querySelector(".hero");
  if (y > 200) hero.classList.add("fade");
  else hero.classList.remove("fade");

  // PROGRESS BAR
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (y / docHeight) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

// ACCORDION TOGGLE
function toggleSection(el) {
  const content = el.nextElementSibling;
  content.classList.toggle("active");
}
