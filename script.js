/* ---------- DATOS DE LOS GIGS (con títulos / descripciones en ambos idiomas) ---------- */
const gigData = [
  {
    id: 1,
    title: { en: "Stunning Mobile UI", es: "UI móvil impresionante" },
    desc: {
      en: "I will design a modern & user-friendly mobile interface using Figma or Adobe XD.",
      es: "Diseñaré una interfaz móvil moderna y amigable usando Figma o Adobe XD.",
    },
    price: "S/ 700.00",
    img: "https://engineersahabedu.com/wp-content/uploads/2024/06/mobile-ui.jpg",
  },
  {
    id: 2,
    title: {
      en: "Professional Video Editing",
      es: "Edición de video profesional",
    },
    desc: {
      en: "Polished cuts, transitions & color grading for your footage.",
      es: "Cortes pulidos, transiciones y etalonaje profesional para tu material.",
    },
    price: "S/ 900.00",
    img: "https://images.pexels.com/photos/8263353/pexels-photo-8263353.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: { en: "eCommerce Website", es: "Sitio web eCommerce" },
    desc: {
      en: "Launch your Shopify or WooCommerce store with a clean responsive design.",
      es: "Lanza tu tienda Shopify o WooCommerce con un diseño limpio y responsivo.",
    },
    price: "S/ 1 700.00",
    img: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    title: {
      en: "Interactive Data Dashboards",
      es: "Dashboards de datos interactivos",
    },
    desc: {
      en: "Custom dashboards in Power BI / Tableau for insightful analytics.",
      es: "Dashboards personalizados en Power BI / Tableau para analítica profunda.",
    },
    price: "S/ 480.00",
    img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: { en: "Retro Logo Design", es: "Diseño de logo retro" },
    desc: {
      en: "Classic & timeless logo packs with full brand guidelines.",
      es: "Logos clásicos y atemporales con guía de marca completa.",
    },
    price: "S/ 380.00",
    img: "https://s3-alpha.figma.com/hub/file/5100863044/8d6ecbcf-ab67-427f-b849-7f9398c61bd9-cover.png",
  },
  {
    id: 6,
    title: {
      en: "Landing-Page Copywriting",
      es: "Copywriting para landing-pages",
    },
    desc: {
      en: "Persuasive, SEO-optimized copy that converts visitors into customers.",
      es: "Copy persuasivo y optimizado para SEO que convierte visitantes en clientes.",
    },
    price: "S/ 250.00",
    img: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/61ba1a76b86f7c0573e04541_tier-11-long-form-landing-page-example.png",
  },
];

/* ---------- TEXTOS ESTÁTICOS ---------- */
const i18n = {
  en: {
    // Navigation
    navHome: "Home",
    navLogin: "Login",
    navRegister: "Register",
    navAboutUs: "About Us",
    navAboutProduct: "About the Product",
    
    homeTitle: "Welcome to GigU",
    homeSubtitle: "Explore these freelance opportunities",
    loginTitle: "Login",
    loginSwitch: "Don't have an account?",
    loginEmail: "Email",
    loginPassword: "Password",
    loginSubmit: "Submit",
    registerTitle: "Register",
    regSwitch: "Already have an account?",
    regName: "Name",
    regLastname: "Lastname",
    regEmail: "Email",
    regPassword: "Password",
    regRole: "Role",
    regSubmit: "Submit",
    roleBuyer: "buyer",
    roleSeller: "seller",
    aboutTitle: "About Us",
    aboutP1:
      "We are a team passionate about technology and design, creating modern, accessible and high-impact web experiences.",
    aboutP2:
      "From startups to established companies, we work with commitment and attention to detail to deliver tailor-made solutions that connect with your audience.",
    viewMore: "View More",
    back: "Back",
    aboutProductTitle: "About the Product",
    aboutProductP1:
      "Our product is a platform that connects freelance talent with real opportunities in a safe, accessible and efficient environment.",
    aboutProductP2:
      "It enables buyers and sellers to collaborate transparently, with tools designed to streamline hiring, tracking and delivery.",
  },
  es: {
    // Navigation
    navHome: "Inicio",
    navLogin: "Iniciar Sesión",
    navRegister: "Registrarse",
    navAboutUs: "Sobre Nosotros",
    navAboutProduct: "Sobre el Producto",
    
    homeTitle: "Bienvenido a GigU",
    homeSubtitle: "Explora estas oportunidades freelance",
    loginTitle: "Iniciar Sesión",
    loginSwitch: "¿No tienes una cuenta?",
    loginEmail: "Correo electrónico",
    loginPassword: "Contraseña",
    loginSubmit: "Enviar",
    registerTitle: "Registrarse",
    regSwitch: "¿Ya tienes una cuenta?",
    regName: "Nombre",
    regLastname: "Apellido",
    regEmail: "Correo",
    regPassword: "Contraseña",
    regRole: "Rol",
    regSubmit: "Registrar",
    roleBuyer: "comprador",
    roleSeller: "vendedor",
    aboutTitle: "Sobre Nosotros",
    aboutP1:
      "Somos un equipo apasionado por la tecnología y el diseño, creando experiencias web modernas, accesibles y de gran impacto.",
    aboutP2:
      "Desde startups hasta empresas consolidadas, trabajamos con compromiso y atención al detalle para entregar soluciones a medida que conecten con su audiencia.",
    viewMore: "Ver más",
    back: "Regresar",
    aboutProductTitle: "Sobre el Producto",
    aboutProductP1:
      "Nuestro producto es una plataforma que conecta talento freelance con oportunidades reales en un entorno seguro, accesible y eficiente.",
    aboutProductP2:
      "Permite a compradores y vendedores colaborar de forma transparente, con herramientas diseñadas para facilitar la contratación, el seguimiento y la entrega de proyectos.",
  },
};

let currentLang = "en";

/* ---------- RENDER TARJETAS ---------- */
const container = document.getElementById("cardContainer");

function renderCards() {
  container.innerHTML = "";
  gigData.forEach((gig) => {
    const card = document.createElement("article");
    card.className = "gig-card";
    card.innerHTML = `
      <img src="${gig.img}" alt="gig image">
      <h4>${gig.title[currentLang]}</h4>
      <p class="desc">${gig.desc[currentLang]}</p>
      <span class="price">${gig.price}</span>
      <button class="view-more" data-id="${gig.id}">${i18n[currentLang].viewMore}</button>
    `;
    container.appendChild(card);
  });
}
renderCards();

/* ---------- CAMBIO DE VISTA ---------- */
function switchView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("show"));
  document.getElementById(id).classList.add("show");

  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));
  document
    .querySelectorAll(`.nav-link[data-section='${id}']`)
    .forEach((l) => l.classList.add("active"));
}

document.querySelectorAll("[data-section]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    switchView(link.getAttribute("data-section"));
  });
});

/* ---------- DETALLE DE GIG ---------- */
container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("view-more")) return;
  const gig = gigData.find((g) => g.id == e.target.dataset.id);
  if (!gig) return;

  document.getElementById("gigImg").src = gig.img;
  document.getElementById("gigTitle").textContent = gig.title[currentLang];
  document.getElementById("gigDesc").textContent = gig.desc[currentLang];
  document.getElementById("gigPrice").textContent = gig.price;
  document.querySelector("#gig-details .btn-primary").textContent =
    i18n[currentLang].back;

  switchView("gig-details");
});

/* ---------- TRADUCCIÓN DINÁMICA ---------- */
function applyTranslations(lang) {
  currentLang = lang;

  // Navigation
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const section = link.getAttribute("data-section");
    switch (section) {
      case "home":
        link.textContent = i18n[lang].navHome;
        break;
      case "login":
        link.textContent = i18n[lang].navLogin;
        break;
      case "register":
        link.textContent = i18n[lang].navRegister;
        break;
      case "sobre-nosotros":
        link.textContent = i18n[lang].navAboutUs;
        break;
      case "about-product":
        link.textContent = i18n[lang].navAboutProduct;
        break;
    }
  });

  // Home
  document.querySelector("#home h1").textContent = i18n[lang].homeTitle;
  document.querySelector("#home .subtitle").textContent =
    i18n[lang].homeSubtitle;

  // Login
  document.querySelector("#login h2").textContent = i18n[lang].loginTitle;
  const loginLabels = document.querySelectorAll("#loginForm label");
  if (loginLabels.length >= 2) {
    loginLabels[0].textContent = i18n[lang].loginEmail;
    loginLabels[1].textContent = i18n[lang].loginPassword;
  }
  document.querySelector("#loginForm button").textContent =
    i18n[lang].loginSubmit;
  document.querySelector("#login .small-link").childNodes[0].textContent =
    i18n[lang].loginSwitch + " ";

  // Register
  document.querySelector("#register h2").textContent = i18n[lang].registerTitle;
  const regLabels = document.querySelectorAll("#registerForm label");
  if (regLabels.length >= 5) {
    regLabels[0].textContent = i18n[lang].regName;
    regLabels[1].textContent = i18n[lang].regLastname;
    regLabels[2].textContent = i18n[lang].regEmail;
    regLabels[3].textContent = i18n[lang].regPassword;
    regLabels[4].textContent = i18n[lang].regRole;
  }
  document.querySelector("#registerForm button").textContent =
    i18n[lang].regSubmit;
  document.querySelector("#register .small-link").childNodes[0].textContent =
    i18n[lang].regSwitch + " ";

  // Options de rol
  const options = document.querySelectorAll("#regRole option");
  if (options.length >= 2) {
    options[0].textContent = i18n[lang].roleBuyer;
    options[1].textContent = i18n[lang].roleSeller;
  }

  // Sobre Nosotros
  document.querySelector("#sobre-nosotros h2").textContent =
    i18n[lang].aboutTitle;
  const aboutPs = document.querySelectorAll("#sobre-nosotros p");
  if (aboutPs.length >= 2) {
    aboutPs[0].textContent = i18n[lang].aboutP1;
    aboutPs[1].textContent = i18n[lang].aboutP2;
  }

  // Botón Back en detalles
  const backBtn = document.querySelector("#gig-details .btn-primary");
  if (backBtn) backBtn.textContent = i18n[lang].back;
  
  // About Product
  const aboutProduct = document.querySelector("#about-product");
  if (aboutProduct) {
    aboutProduct.querySelector("h2").textContent = i18n[lang].aboutProductTitle;
    const ps = aboutProduct.querySelectorAll("p");
    if (ps.length >= 2) {
      ps[0].textContent = i18n[lang].aboutProductP1;
      ps[1].textContent = i18n[lang].aboutProductP2;
    }
  }
  
  // Cards
  renderCards();
}

/* ---------- BOTONES LANG ---------- */
document.querySelectorAll(".lang").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".lang")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyTranslations(btn.textContent.trim().toLowerCase());
  });
});

/* ---------- INICIAL ---------- */
applyTranslations(currentLang);
