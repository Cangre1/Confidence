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

//SERVICIOS HOME//

function mostrarParametro(event) {
  // Obtiene el elemento <a> más cercano al elemento clicado
  const linkElement = event.target.closest("a");

  // Verifica si se encontró el elemento <a>
  if (linkElement) {
    // Obtiene la URL del enlace
    const url = new URL(linkElement.href);

    // Obtiene el valor del parámetro 'slide' de la URL
    const slideParam = url.searchParams.get("slide");

    // Muestra el parámetro en la consola
    console.log("Parámetro slide:", slideParam);
  }
}

// Obtén el valor del parámetro 'slide' de la URL
const urlParams = new URLSearchParams(window.location.search);
const slideParam = urlParams.get("slide");

// Inicializa el slider
const swiperDesk = new Swiper(".mySwiper", {
  slidesPerView: 8,
  simulateTouch: true,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      // Verifica si se proporcionó el parámetro 'slide' y es un número válido
      if (slideParam && !isNaN(slideParam)) {
        // Convierte el valor del parámetro 'slide' a un índice de slide (resta 1)
        const slideIndex = parseInt(slideParam) - 1;

        // Verifica si el índice de slide es válido
        if (slideIndex >= 0 && slideIndex < this.slides.length) {
          // Cambia al slide correspondiente
          this.slideTo(slideIndex);
        }
      }
    },
  },
});

// Obtén todas las diapositivas con la clase "slide-item"
const slideItems = document.querySelectorAll(".slide-item");

// Agrega un controlador de eventos "click" a cada diapositiva
slideItems.forEach((slide) => {
  slide.addEventListener("click", () => {
    // Obtén el índice de la diapositiva haciendo referencia al atributo "data-index"
    const slideIndex = parseInt(slide.dataset.index);

    // Desplázate a la diapositiva correspondiente utilizando la función "slideTo" de Swiper
    swiperDesk.slideTo(slideIndex);
  });
});

swiperDesk.on("slideChange", function () {
  var bloqueOculto = document.querySelectorAll(".section-detalle");

  // Ocultar todos los bloques ocultos
  bloqueOculto.forEach(function (bloque) {
    bloque.style.display = "none";
  });

  // Mostrar el bloque correspondiente al índice activo
  bloqueOculto[swiperDesk.activeIndex % 8].style.display = "block";
});
