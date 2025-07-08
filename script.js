const gigData = [
  {
    id: 1,
    title: "Stunning Mobile UI",
    desc: "I will design a modern & user-friendly mobile interface using Figma or Adobe XD.",
    price: "S/ 700.00",
    img: "https://engineersahabedu.com/wp-content/uploads/2024/06/mobile-ui.jpg",
  },
  {
    id: 2,
    title: "Professional Video Editing",
    desc: "Polished cuts, transitions & color grading for your footage.",
    price: "S/ 900.00",
    img: "https://images.pexels.com/photos/8263353/pexels-photo-8263353.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "eCommerce Website",
    desc: "Launch your Shopify or WooCommerce store with a clean responsive design.",
    price: "S/ 1 700.00",
    img: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    title: "Interactive Data Dashboards",
    desc: "Custom dashboards in Power BI / Tableau for insightful analytics.",
    price: "S/ 480.00",
    img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Retro Logo Design",
    desc: "Classic & timeless logo packs with full brand guidelines.",
    price: "S/ 380.00",
    img: "https://s3-alpha.figma.com/hub/file/5100863044/8d6ecbcf-ab67-427f-b849-7f9398c61bd9-cover.png",
  },
  {
    id: 6,
    title: "Landing-Page Copywriting",
    desc: "Persuasive, SEO-optimized copy that converts visitors into customers.",
    price: "S/ 250.00",
    img: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/61ba1a76b86f7c0573e04541_tier-11-long-form-landing-page-example.png",
  },
];

const container = document.getElementById("cardContainer");

function renderCards() {
  container.innerHTML = "";
  gigData.forEach((gig) => {
    const card = document.createElement("article");
    card.className = "gig-card";
    card.innerHTML = `
      <img src="${gig.img}" alt="gig image">
      <h4>${gig.title}</h4>
      <p class="desc">${gig.desc}</p>
      <span class="price">${gig.price}</span>
      <button class="view-more" data-id="${gig.id}">View More</button>
    `;
    container.appendChild(card);
  });
}
renderCards();

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

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("view-more")) return;
  const gig = gigData.find((g) => g.id == e.target.dataset.id);
  if (!gig) return;

  document.getElementById("gigImg").src = gig.img;
  document.getElementById("gigTitle").textContent = gig.title;
  document.getElementById("gigDesc").textContent = gig.desc;
  document.getElementById("gigPrice").textContent = gig.price;

  switchView("gig-details");
});

document.querySelectorAll(".lang").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".lang")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    alert("UI language changed to: " + btn.textContent);
  });
});
