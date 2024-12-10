let currentIndex = 0; // Índice de la imagen actual

// Función para mostrar la imagen en el índice dado
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide'); // Selecciona todas las imágenes
    if (index >= slides.length) {
        currentIndex = 0; // Reinicia al primer slide
    } else if (index < 0) {
        currentIndex = slides.length - 1; // Va al último slide si el índice es negativo
    } else {
        currentIndex = index; // Actualiza el índice actual
    }
    
    const offset = -currentIndex * 100; // Calcula el desplazamiento necesario
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

// Función para cambiar la imagen (siguiente o anterior)
function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Cambia automáticamente cada 3 segundos
setInterval(() => {
    changeSlide(1); // Cambia a la siguiente imagen
}, 3000);

// Inicializa el carrusel mostrando el primer slide
showSlide(currentIndex);
