document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // HERO ANIMATION
  // =========================
  window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.add("hero-show");
  });


  // =========================
  // SCROLL REVEAL (ONLY ONCE)
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


  // =========================
  // PARALLAX FLOATING CIRCLES
  // =========================
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

      document.querySelectorAll(".expandable").forEach(c => {
        if (c !== card) c.classList.remove("active");
      });

      card.classList.toggle("active");
    });
  });


  // =========================
  // DATA
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
    bp: "Pinakamalaking sanhi ng stroke.",
    smoking: "Nagpapakitid ng ugat.",
    diabetes: "Nakakasira ng blood vessels.",
    cholesterol: "Nagbabara ang ugat.",
    obesity: "Konektado sa hypertension.",
    alcohol: "Nagpapataas ng blood pressure."
  };

  const preventData = {
    bp: "Regular check at gamot kung kailangan.",
    diet: "Masustansyang pagkain.",
    exercise: "30 minuto araw-araw."
  };

  const treatmentData = {
    ischemic: `
      <strong>tPA</strong> – tunawin ang blood clot.<br>
      <strong>Thrombectomy</strong> – alisin ang bara.<br>
      <strong>Antiplatelets</strong>
    `,
    hemorrhagic: `
      <strong>BP Control</strong><br>
      <strong>Surgery</strong><br>
      <strong>Hematoma Removal</strong><br>
      <strong>Craniotomy</strong>
    `
  };


  // =========================
  // GROUP HANDLER (FIXED)
  // =========================
  function setupGroup(cardsSelector, dropdownId, data) {
    const cards = document.querySelectorAll(cardsSelector);
    const dropdown = document.getElementById(dropdownId);

    if (!cards.length || !dropdown) return;

    let activeCard = null;

    cards.forEach(card => {
      card.addEventListener("click", () => {

        const key = card.dataset.info;

        if (activeCard === card) {
          dropdown.classList.remove("show");
          dropdown.innerHTML = "";
          card.classList.remove("active");
          activeCard = null;
          return;
        }

        cards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");
        activeCard = card;

        dropdown.innerHTML = `<p>${data[key] || ""}</p>`;
        dropdown.classList.add("show");
      });
    });
  }


  // =========================
  // INIT GROUPS
  // =========================
  setupGroup(".befast-card", "befast-info", befastData);
  setupGroup(".risk-card", "risk-info", riskData);
  setupGroup(".prevent-card", "prevent-info", preventData);
  setupGroup(".treatment-card", "treatment-info", treatmentData);

});
