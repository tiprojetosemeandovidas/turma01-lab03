// Efeito de entrada para os serviços conforme o scroll
const sr = ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: 800,
    delay: 100
});

sr.reveal('.service-item', { interval: 150 });
sr.reveal('.review-card', { origin: 'bottom', interval: 200 });

// Simulação de clique de agendamento (UX)
document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', (e) => {
        // Se não for o "Dia da Noiva", redireciona para o Trinks
        if(!e.target.classList.contains('gold')) {
            window.open('https://www.trinks.com/spaco-singular-salao-e-estetica', '_blank');
        } else {
            // Noivas geralmente preferem atendimento direto
            window.location.href = "https://wa.me/seu-numero?text=Quero saber mais sobre o Dia da Noiva";
        }
    });
});
