// ==========================
// THEME CLAIR / SOMBRE
// ==========================

const html = document.documentElement;
const themeToggleBtn = document.getElementById("themeToggle");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

(function initTheme() {
  if (!themeToggleBtn) return;

  const storedTheme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
  setTheme(initialTheme);

  themeToggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    setTheme(next);
  });
})();

// ==========================
// NAVIGATION MOBILE
// ==========================

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
  });
}

// ==========================
// NEWSLETTER (footer)
// ==========================

const newsletterForm = document.querySelector(".footer form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre inscription à la newsletter !");
    newsletterForm.reset();
  });
}

// ==========================
// FORMULAIRE CONTACT
// ==========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci, votre message a bien été envoyé !");
    contactForm.reset();
  });
}

// ==========================
// PAGE PRODUITS : clic démo
// ==========================

const productButtons = document.querySelectorAll(
  ".page-shop .product-card .btn-primary," +
    ".page-produits .product-card .btn-primary"
);

if (productButtons.length) {
  productButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert(
        "Produit ajouté (démo). Tu pourras connecter un vrai panier plus tard."
      );
    });
  });
}

// ==========================
// ANIMATIONS DE SCROLL
// ==========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observer les sections et cartes produits
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const productCards = document.querySelectorAll(".shop-card");

  sections.forEach((section, index) => {
    section.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(section);
  });

  productCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(card);
  });
});

// ==========================
// MODAL PRODUIT
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalProductImage");
  const modalTitle = document.getElementById("modalProductTitle");
  const modalDesc = document.getElementById("modalProductDesc");
  const modalPrice = document.getElementById("modalProductPrice");
  const modalRef = document.getElementById("modalProductRef");
  const closeBtn = document.querySelector(".modal-close");

  // Attach click events to product cards
  const productCards = document.querySelectorAll(".shop-card");
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector(".product-media img").src;
      const title = card.querySelector(".product-title").textContent;
      const desc = card.querySelector(".product-desc").textContent;
      const price = card.querySelector(".product-price").textContent;
      const ref = card.querySelector(".product-cta").textContent;

      modalImage.src = imgSrc;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalPrice.textContent = price;
      modalRef.textContent = ref;

      modal.style.display = "block";
    });
  });

  // Close modal on close button click
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
