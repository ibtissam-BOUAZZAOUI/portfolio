// année footer
document.getElementById("year").textContent = new Date().getFullYear();

// menu mobile
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("show");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// modal projets
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-desc");
const modalTech = document.querySelector(".modal-tech");
const modalLink = document.querySelector(".modal-link");

document.querySelectorAll(".project .open").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project");
    modalTitle.textContent = card.dataset.title || "";
    modalDesc.textContent = card.dataset.desc || "";
    modalTech.textContent = "Technos : " + (card.dataset.tech || "");
    if (modalLink) modalLink.href = card.dataset.link || "#";


    const img = card.dataset.img;
    if (img && img !== "#") {
      modalImg.src = img;
      modalImg.alt = card.dataset.title || "Projet";
      modalImg.style.display = "block";
    } else {
      modalImg.style.display = "none";
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

closeBtn?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
document.querySelectorAll(".project").forEach((card) => {
  const imgEl = card.querySelector(".thumb-img");
  const imgs = (card.dataset.images || "").split("|").map(s => s.trim()).filter(Boolean);

  if (!imgEl || imgs.length < 2) return;

  let i = 0;
  setInterval(() => {
    i = (i + 1) % imgs.length;
    imgEl.src = imgs[i];
  }, 2000); // change toutes les 2s
});
/*
// EmailJS init
emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Envoi en cours...";

  try {
    await emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form
    );

    statusEl.textContent = "Message envoyé ✅ Merci !";
    form.reset();
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Erreur ❌ Réessaie ou contacte-moi par email.";
  }
});
*/