const nav = document.getElementById("mainNav");
const toast = document.getElementById("toastMessage");
let currentLanguage = "es";

window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 35));

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

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const flight = document.getElementById("flight").value;
  const destination = document.getElementById("destination").value;
  const message = currentLanguage === "es"
    ? `Hola, quiero reservar un traslado desde el aeropuerto de Punta Cana. Fecha: ${date}. Vuelo: ${flight}. Destino: ${destination}.`
    : `Hello, I would like to book a transfer from Punta Cana airport. Date: ${date}. Flight: ${flight}. Destination: ${destination}.`;
  window.open(`https://wa.me/18095550123?text=${encodeURIComponent(message)}`, "_blank");
  toast.textContent = currentLanguage === "es" ? "Abriendo WhatsApp para completar tu reserva..." : "Opening WhatsApp to complete your booking...";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4500);
});
