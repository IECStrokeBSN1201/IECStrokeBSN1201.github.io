// HERO LOAD ANIMATION
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("show");
});

// HERO FADE ON SCROLL + PROGRESS BAR
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const hero = document.querySelector(".hero");

  if (y > 200) hero.classList.add("fade");
  else hero.classList.remove("fade");

  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (y / height) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

// COLLAPSE FUNCTION (keeps your structure intact)
function toggleCollapse(el) {
  const section = el.nextElementSibling;
  section.classList.toggle("active");
}

// MODAL DATA
const modalData = {
  ischaemic: `
    <h2>Ischemic Stroke</h2>
    <p>Blockage of blood vessel in the brain.</p>
  `,
  hemorrhagic: `
    <h2>Hemorrhagic Stroke</h2>
    <p>Rupture of blood vessel causing bleeding in the brain.</p>
  `,
  ischemic_treat: `
    <h2>Ischemic Treatment</h2>
    <p>tPA, thrombectomy, anticoagulants</p>
  `,
  hemorrhagic_treat: `
    <h2>Hemorrhagic Treatment</h2>
    <p>Surgery, pressure control, hematoma removal</p>
  `
};

// OPEN MODAL
function openModal(key) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-content").innerHTML = modalData[key];
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// CLOSE ON OUTSIDE CLICK
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});
