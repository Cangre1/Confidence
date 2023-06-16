//INICIO DE FUNCION 1//
let service1 = document.getElementById("service1");
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");

if (service1) {
  service1.addEventListener("click", (e) => {
    slide2.classList.remove("text-lime-500");
    slide2.classList.add("text-red-500");
  });
}
//FIN DE FUNCION 1//

// MENÚ MOBILE START //
let menuHambur = document.getElementById("menu-hambur");
let menumobile = document.getElementById("menu-mobile");
let menuclose = document.getElementById("menu-close");
let btnWhat = document.getElementById("btn-whatsapp");
let body = document.body;

menuHambur.addEventListener("click", () => {
  menumobile.classList.remove("translate-x-full");
  body.style.overflow = "hidden"; // Bloquear el scroll
});

menuclose.addEventListener("click", () => {
  menumobile.classList.add("translate-x-full");
  body.style.overflow = "auto"; // Desbloquear el scroll
});

//Cierre automatico de menu//

let navLinks = document.querySelectorAll("#menu-mobile a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menumobile.classList.add("translate-x-full");
    body.style.overflow = "auto"; // Desbloquear el scroll
  });
});

// Obtén todos los enlaces con anclas
let anchorLinks = document.querySelectorAll('a[href^="#"]');

// Agrega un controlador de eventos a cada enlace
anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    let targetId = link.getAttribute("href"); // Obtiene el ID del objetivo

    if (targetId !== "#") {
      let targetElement = document.querySelector(targetId); // Obtiene el elemento objetivo

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave hacia el objetivo
      }
    }
  });
});
// MENÚ MOBILE END //
