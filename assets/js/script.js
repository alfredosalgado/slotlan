document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.whatsapp-btn');

  if (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Evita que el navegador siga el enlace `href`
      const phone = '56939273559'; // Número de teléfono
      const message = 'Hola, me interesa obtener más información.';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
  } else {
    console.error("No se encontró el botón de WhatsApp en el DOM.");
  }
});

// Obtén el botón de "Subir"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Cuando el usuario haga scroll hacia abajo, muestra el botón
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = "flex"; // Muestra el botón
  } else {
    scrollToTopBtn.style.display = "none"; // Oculta el botón
  }
};

// Cuando el usuario haga clic en el botón, realiza el desplazamiento suave
scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la acción predeterminada de ancla

  // Desplazamiento suave hasta la parte superior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Añade la transición suave
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-animado");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("titulo-visible"); // Agrega la animación cuando es visible
      } else {
        entry.target.classList.remove("titulo-visible"); // Quita la animación cuando deja de ser visible
      }
    });
  }, { threshold: 0.2 });

  titulos.forEach(titulo => observer.observe(titulo));
});



document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".texto-fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texto-visible"); // Activa la animación
      } else {
        entry.target.classList.remove("texto-visible"); // Permite que se repita
      }
    });
  }, { threshold: 0.2 });

  textos.forEach(texto => observer.observe(texto));
});










// Estado de los carruseles
const carousels = {};

// Inicializar cada carrusel
document.querySelectorAll('.carousel').forEach(carousel => {
  const gameId = carousel.getAttribute('data-game');
  carousels[gameId] = {
    currentIndex: 0,
    images: carousel.querySelectorAll('.carousel-images img'),
    interval: null
  };

  // Iniciar cambio automático
  startAutoSlide(gameId);
});

// Función para mover el carrusel
function moveCarousel(gameId, direction) {
  const carousel = carousels[gameId];
  const images = carousel.images;
  const totalImages = images.length;

  // Detener el cambio automático al interactuar
  clearInterval(carousel.interval);

  // Actualizar índice
  carousel.currentIndex = (carousel.currentIndex + direction + totalImages) % totalImages;

  // Mover imágenes
  const carouselImages = document.querySelector(`.carousel[data-game="${gameId}"] .carousel-images`);
  carouselImages.style.transform = `translateX(-${carousel.currentIndex * 100}%)`;

  // Reiniciar cambio automático
  startAutoSlide(gameId);
}

// Función para cambio automático
function startAutoSlide(gameId) {
  const carousel = carousels[gameId];
  carousel.interval = setInterval(() => {
    moveCarousel(gameId, 1);
  }, 5000); // Cambia cada 5 segundos
}

// Función para abrir WhatsApp
function openWhatsApp(gameName, imageUrl) {
  const message = `Quiero info sobre ${gameName}. Imagen: ${imageUrl}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/56939273559?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}










function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const isMoney = counter.classList.contains('money');
  let count = 0;
  const increment = target / 100; // Ajusta la velocidad de animación

  const updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.textContent = isMoney ? `+ ${Math.floor(count).toLocaleString('es-CL')}` : Math.floor(count).toLocaleString('es-CL');
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = isMoney ? `+ ${target.toLocaleString('es-CL')}` : target.toLocaleString('es-CL');
    }
  };

  updateCounter();
}

// Observer para detectar cuando los contadores sean visibles
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterBox = entry.target;
      counterBox.classList.add("visible"); // Aparece suavemente

      const counters = counterBox.querySelectorAll(".counter");
      counters.forEach(counter => {
        counter.textContent = "0"; // Reinicia el conteo cada vez que es visible
        animateCounter(counter);
      });
    }
  });
}, { threshold: 0.5 }); // Se activa cuando al menos el 50% del elemento es visible

// Aplicar el observer a cada contador
document.querySelectorAll('.counter-box').forEach(counterBox => observer.observe(counterBox));




// Función para abrir el modal (debes definirla según tu lógica)
function abrirModal(src) {
  console.log("Abriendo modal con: " + src);
  // Aquí iría tu código para mostrar el modal con la imagen
}

// Generar las miniaturas dinámicamente
const galeria = document.getElementById('galeria');
const totalImagenes = 33; // Número total de imágenes

for (let i = 1; i <= totalImagenes; i++) {
  // Crear el div contenedor
  const div = document.createElement('div');
  div.className = 'miniatura col-6 col-md-4 col-lg-3 d-flex justify-content-center texto-fade card';

  // Crear la imagen
  const img = document.createElement('img');
  img.className = 'rounded';
  img.src = `./assets/img/galeria/${i}.jpeg`;
  img.alt = `Imagen ${i}`;
  img.onclick = () => abrirModal(`./assets/img/galeria/${i}.jpeg`);

  // Añadir la imagen al div
  div.appendChild(img);

  // Añadir el div al contenedor de la galería
  galeria.appendChild(div);
}





document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popupModal");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");
  const closeSpan = document.querySelector(".close-btn");

  // 🚀 Hacer que el pop-up aparezca automáticamente al cargar la página
  setTimeout(() => {
    popup.style.display = "flex";
  }, 2000); // Espera 2 segundos antes de mostrarlo (puedes cambiar el tiempo)

  // Abrir el pop-up con el botón (opcional, sigue funcionando)
  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Cerrar el pop-up con el botón
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Cerrar el pop-up con la "X"
  closeSpan.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Cerrar el pop-up al hacer clic fuera de él
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});



function abrirModal(src) {
  var modal = document.getElementById("modal");
  var imagenGrande = document.getElementById("imagenGrande");
  imagenGrande.src = src;
  modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
}



