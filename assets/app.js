document.addEventListener('DOMContentLoaded', () => {
    // Espera a que el usuario haga clic en cualquier parte de la página para iniciar la reproducción
    document.body.addEventListener('click', () => {
        const audio = new Audio('./sounds/727808__vcantos__land_forest_birds.aiff');
        audio.loop = true;
        audio.volume = 0.5;
        setTimeout(() => {
            audio.play().catch(error => {
                console.error('Error al intentar reproducir el audio:', error);
            });
        }, 1000); // Espera 1 segundo antes de reproducir el audio
        
        // Oculta el mensaje de bienvenida después de la interacción
        document.getElementById('welcome-message').style.display = 'none';
    });
});
