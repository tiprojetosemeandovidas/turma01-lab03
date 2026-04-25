// Loader simples para garantir que a experiência comece fluida
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Configuração Avançada do ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1500,
    delay: 300,
    reset: false
});

sr.reveal('.reveal', { interval: 200 });
sr.reveal('.reveal-top', { origin: 'top', delay: 100 });
sr.reveal('.reveal-bottom', { delay: 600 });

// Efeito de Mouse Parallax no Hero
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const content = document.querySelector('.hero-overlay');
    content.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
