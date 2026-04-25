// Animações suaves de entrada
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200,
    origin: 'bottom'
});

// Efeito de brilho que segue o mouse (UX Premium)
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    hero.style.background = `radial-gradient(circle at ${x}% ${y}%, #1d0e33 0%, #0a0a0a 70%)`;
});
