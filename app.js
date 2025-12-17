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
