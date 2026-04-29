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

// =========================
// EXPANDABLE CARDS (TYPES)
// =========================
document.querySelectorAll(".expandable").forEach(card => {
  card.addEventListener("click", () => {

    // close others
    document.querySelectorAll(".expandable").forEach(c => {
      if (c !== card) c.classList.remove("active");
    });

    // toggle current
    card.classList.toggle("active");
  });
});


// =========================
// SHARED DROPDOWN DATA
// =========================

const befastData = {
  balance: "Biglaang pagkawala ng balanse o pagkahilo. Maaaring hindi makalakad nang maayos.",
  eyes: "Malabong paningin o pagkawala ng paningin.",
  face: "Paglaylay ng mukha. Subukang ngumiti.",
  arms: "Panghihina ng braso. Subukang itaas ang dalawang braso.",
  speech: "Pagkabulol o hirap magsalita.",
  time: "Mahalaga ang oras. Tumawag agad sa 911."
};

const riskData = {
  bp: "Pinakamalaking sanhi ng stroke. Pinapahina ang ugat.",
  smoking: "Nagpapakitid ng ugat.",
  diabetes: "Nakakasira ng blood vessels.",
  cholesterol: "Nagbabara ang ugat.",
  obesity: "Konektado sa hypertension at diabetes.",
  alcohol: "Nagpapataas ng blood pressure."
};

const preventData = {
  bp: "Regular check at gamot kung kailangan.",
  diet: "Masustansyang pagkain, iwas sa fatty food.",
  exercise: "30 minuto araw-araw."
};

const treatmentData = {
  ischemic: `
    <strong>tPA</strong> – tunawin ang blood clot.<br>
    <strong>Thrombectomy</strong> – alisin ang bara.<br>
    <strong>Antiplatelets</strong> – iwas clot.
  `,
  hemorrhagic: `
    <strong>BP Control</strong> – pigilan pagdurugo.<br>
    <strong>Surgery</strong> – ayusin ugat.<br>
    <strong>Hematoma Removal</strong><br>
    <strong>Craniotomy</strong>
  `
};


// =========================
// FUNCTION: HANDLE GROUP
// =========================

function setupGroup(cardsSelector, dropdownId, data) {
  const cards = document.querySelectorAll(cardsSelector);
  const dropdown = document.getElementById(dropdownId);

  let activeCard = null;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.info;

      // IF SAME CARD CLICKED → CLOSE
      if (activeCard === card) {
        dropdown.classList.remove("show");
        dropdown.innerHTML = "";
        card.classList.remove("active");
        activeCard = null;
        return;
      }

      // REMOVE ALL ACTIVE STATES
      cards.forEach(c => c.classList.remove("active"));

      // SET ACTIVE
      card.classList.add("active");
      activeCard = card;

      // SET CONTENT
      dropdown.innerHTML = `<p>${data[key]}</p>`;

      // SHOW DROPDOWN
      dropdown.classList.add("show");
    });
  });
}


// =========================
// INIT ALL GROUPS
// =========================

setupGroup(".befast-card", "befast-info", befastData);
setupGroup(".risk-card", "risk-info", riskData);
setupGroup(".prevent-card", "prevent-info", preventData);
setupGroup(".treatment-card", "treatment-info", treatmentData);


// =========================
// SCROLL REVEAL (KEEP)
// =========================
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
