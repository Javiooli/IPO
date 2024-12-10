    // Cargar la barra de navegación desde nav.html
    fetch('../nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      // Identificar la página actual
      const currentPath = window.location.pathname;

      // Seleccionar todos los enlaces destacables
      const links = document.querySelectorAll('.highlightable');

      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          // Cambiar el color para destacar el enlace activo
          link.style.color = 'rgb(57, 204, 204)'; 
          // Aplicar un estilo visual que no afecte la interacción
          link.style.fontWeight = 'bold';
          link.style.textDecoration = 'underline';
          // Cambiar el cursor para indicar que no se puede interactuar
          link.style.cursor = 'default';
          // Deshabilitar funcionalidad sin eliminar el enlace
          link.addEventListener('click', (e) => e.preventDefault());
        }
      });
    })
    .catch(error => console.error('Error al cargar la barra de navegación:', error));