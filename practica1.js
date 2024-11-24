document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'F12') {
        const imagenFondo = document.getElementById('imagen');
        // Cambiar el fondo por una imagen aleatoria de Picsum
        imagenFondo.style.backgroundImage = 'url(https://picsum.photos/1920/1080)';
    }
});