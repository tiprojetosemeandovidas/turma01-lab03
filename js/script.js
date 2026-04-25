// Configuração do efeito de entrada (ScrollReveal)
const sr = ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: 800,
    delay: 100,
    reset: false // Para manter os elementos na tela após aparecerem
});

// Aplicando aos serviços com intervalo entre eles (efeito cascata)
sr.reveal('.service-item', { interval: 150 });

// Aplicando às avaliações com origem de baixo
sr.reveal('.review-card', { origin: 'bottom', interval: 200 });

// Revelação extra para o título do Hero
sr.reveal('.reveal-top', { origin: 'top', distance: '50px', delay: 300 });

// Lógica de Agendamento Inteligente
document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', (e) => {
        // Verifica se é o botão "Dia da Noiva" (classe .gold)
        if (!e.target.classList.contains('gold')) {
            // Agendamento padrão via Trinks
            window.open('https://www.trinks.com/spaco-singular-salao-e-estetica', '_blank');
        } else {
            // Agendamento VIP via WhatsApp
            const msg = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para o Dia da Noiva no Diamond Beauty Lounge.");
            window.open(`https://wa.me/seu-numero?text=${msg}`, '_blank');
        }
    });
});
