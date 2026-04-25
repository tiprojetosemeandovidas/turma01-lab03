// 1. Configuração do ScrollReveal (Efeitos de Entrada)
const sr = ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: 800,
    delay: 100,
    reset: false // Mantém visível após animar
});

// Animação em cascata para os serviços
sr.reveal('.service-item', { interval: 150 });

// Animação para as avaliações (vem de baixo)
sr.reveal('.review-card', { origin: 'bottom', interval: 200, distance: '50px' });

// Revelação extra para o título e textos do Hero (vem de cima)
sr.reveal('.reveal-top', { origin: 'top', distance: '50px', delay: 300, interval: 100 });


// 2. Lógica de Agendamento Inteligente
document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', (e) => {
        const isGold = e.target.classList.contains('gold');
        
        if (!isGold) {
            // Link externo para agendamento online (Trinks)
            window.open('https://www.trinks.com/spaco-singular-salao-e-estetica', '_blank');
        } else {
            // Link para conversa direta de Noivas via WhatsApp
            const textoNoiva = encodeURIComponent("Olá! Gostaria de saber mais sobre os pacotes exclusivos do Dia da Noiva no Diamond Beauty Lounge.");
            window.open(`https://wa.me/5500000000000?text=${textoNoiva}`, '_blank');
        }
    });
});
