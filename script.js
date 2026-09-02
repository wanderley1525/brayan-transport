const nav = document.getElementById("mainNav");
const toast = document.getElementById("toastMessage");
let currentLanguage = "es";

window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 35));

const gallery = document.querySelector("#travelCarousel .carousel-inner");
const indicators = document.querySelector("#travelCarousel .carousel-indicators");
const galleryImages = Array.from({ length: 38 }, (_, index) => index + 1);
const destinations = [
  ["Malecón de Santo Domingo", "Santo Domingo Malecon"],
  ["Parque Colón, Zona Colonial", "Colón Park, Colonial Zone"],
  ["Obelisco de Santo Domingo", "Santo Domingo Obelisk"],
  ["Calle de la Zona Colonial", "Colonial Zone Street"],
  ["Ruinas de San Francisco", "San Francisco Ruins"],
  ["Malecón de Santo Domingo", "Santo Domingo Malecon"],
  ["Iglesia de la Zona Colonial", "Colonial Zone Church"],
  ["Playa Bávaro, Punta Cana", "Bávaro Beach, Punta Cana"],
  ["Playa Bávaro, Punta Cana", "Bávaro Beach, Punta Cana"],
  ["Isla Saona", "Saona Island"],
  ["Isla Saona", "Saona Island"],
  ["Paseo en catamarán", "Catamaran trip"],
  ["Aguas turquesas del Caribe", "Turquoise Caribbean waters"],
  ["Playa dominicana", "Dominican beach"],
  ["Playa Bávaro, Punta Cana", "Bávaro Beach, Punta Cana"],
  ["Excursión acuática", "Water excursion"],
  ["Laguna del Caribe", "Caribbean lagoon"],
  ["Paseo en catamarán", "Catamaran trip"],
  ["Playa de Isla Saona", "Saona Island beach"],
  ["Piscina natural", "Natural pool"],
  ["Excursión en lancha", "Boat excursion"],
  ["Costa de Isla Saona", "Saona Island coast"],
  ["Playa de Isla Saona", "Saona Island beach"],
  ["Piscina natural", "Natural pool"],
  ["Tour en catamarán", "Catamaran tour"],
  ["Estrella de mar, Bayahíbe", "Starfish, Bayahibe"],
  ["Zona Colonial de Santo Domingo", "Santo Domingo Colonial Zone"],
  ["Patrimonio Colonial", "Colonial heritage"],
  ["Calle de Santo Domingo", "Santo Domingo street"],
  ["Plaza de la Bandera", "Flag Plaza"],
  ["Sendero natural dominicano", "Dominican nature trail"],
  ["Malecón de Santo Domingo", "Santo Domingo Malecon"],
  ["Arte urbano dominicano", "Dominican street art"],
  ["Cueva del Caribe", "Caribbean cave"],
  ["Palacio Nacional, Santo Domingo", "National Palace, Santo Domingo"],
  ["Interior histórico", "Historic interior"],
  ["Monumento Colonial", "Colonial monument"],
  ["Calle Colonial", "Colonial street"]
];
galleryImages.forEach((number) => {
  const source = `imagen/1 (${number}).jpeg`;
  const [spanishName, englishName] = destinations[number - 1];
  const slide = document.createElement("div");
  slide.className = `carousel-item${number === 1 ? " active" : ""}`;
  slide.innerHTML = `<img src="${source}" alt="${spanishName}" loading="lazy"><div class="carousel-caption"><span data-es="${spanishName}" data-en="${englishName}">${spanishName}</span></div>`;
  gallery.appendChild(slide);
  const indicator = document.createElement("button");
  indicator.type = "button";
  indicator.dataset.bsTarget = "#travelCarousel";
  indicator.dataset.bsSlideTo = String(number - 1);
  indicator.setAttribute("aria-label", `Ir a la imagen ${number}`);
  if (number === 1) indicator.classList.add("active");
  indicators.appendChild(indicator);
});

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  document.querySelectorAll("[data-placeholder-es]").forEach((input) => {
    input.placeholder = input.dataset[`placeholder${language === "es" ? "Es" : "En"}`];
  });
  document.querySelectorAll(".lang").forEach((button) => button.classList.toggle("active", button.dataset.lang === language));
}

document.querySelectorAll(".lang").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
