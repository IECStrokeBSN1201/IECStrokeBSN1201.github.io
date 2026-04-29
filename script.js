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

// =======================
// EXPANDABLE CARDS
// =======================
document.querySelectorAll(".expandable").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

// =======================
// BEFAST DATA
// =======================
const befastData = {
  balance: "Biglaang pagkawala ng balanse o pagkahilo.",
  eyes: "Pagkakaroon ng malabong paningin o pagkawala ng paningin.",
  face: "Paglaylay ng mukha. Subukang ngumiti.",
  arms: "Panghihina ng braso. Subukang itaas pareho.",
  speech: "Pagkabulol o hirap magsalita.",
  time: "Tumawag agad sa 911. TIME IS CRITICAL."
};

document.querySelectorAll(".befast-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.info;
    const box = document.getElementById("befast-info");

    box.innerHTML = `<p>${befastData[key]}</p>`;
    box.classList.add("show");
  });
});

// =======================
// RISK DATA
// =======================
const riskData = {
  bp: "Pinakamalaking sanhi ng stroke.",
  smoking: "Nagpapakitid ng ugat.",
  diabetes: "Nakakasira ng blood vessels.",
  cholesterol: "Nagbabara ng ugat.",
  obesity: "Nagpapataas ng risk.",
  alcohol: "Nagpapataas ng blood pressure."
};

document.querySelectorAll(".risk-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.info;
    const box = document.getElementById("risk-info");

    box.innerHTML = `<p>${riskData[key]}</p>`;
    box.classList.add("show");
  });
});

// =======================
// PREVENTION DATA
// =======================
const preventData = {
  bp: "Regular checkup at maintenance.",
  diet: "Healthy food, less salt & fat.",
  exercise: "30 mins daily exercise."
};

document.querySelectorAll(".prevent-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.info;
    const box = document.getElementById("prevent-info");

    box.innerHTML = `<p>${preventData[key]}</p>`;
    box.classList.add("show");
  });
});

// =======================
// TREATMENT DATA
// =======================
const treatmentData = {
  ischemic: "tPA, thrombectomy, antiplatelets.",
  hemorrhagic: "Surgery, BP control, craniotomy."
};

document.querySelectorAll(".treatment-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.info;
    const box = document.getElementById("treatment-info");

    box.innerHTML = `<p>${treatmentData[key]}</p>`;
    box.classList.add("show");
  });
});
