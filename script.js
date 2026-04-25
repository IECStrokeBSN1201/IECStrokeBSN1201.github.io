// HERO LOAD
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("show");
});

// SCROLL EFFECTS
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  if (window.scrollY > 200) {
    hero.classList.add("fade");
  } else {
    hero.classList.remove("fade");
  }

  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / height) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

// CARD ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
});

document.querySelectorAll(".card").forEach(c => observer.observe(c));

// COLLAPSE
function toggleCollapse(el) {
  el.nextElementSibling.classList.toggle("active");
}

// MODAL DATA
const modalData = {
  ischaemic: "<h2>Ischemic Stroke</h2><p>Blockage of blood vessel.</p>",
  hemorrhagic: "<h2>Hemorrhagic Stroke</h2><p>Bleeding in brain.</p>",
  ischemic_treat: "<h2>Treatment</h2><p>tPA, thrombectomy</p>",
  hemorrhagic_treat: "<h2>Treatment</h2><p>Surgery, pressure control</p>"
};

function openModal(key) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-content").innerHTML = modalData[key];
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
