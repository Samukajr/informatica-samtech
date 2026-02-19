// Função para abrir o suporte (você pode customizar com seu e-mail ou formulário)
function abrirSuporte() {
    // Opção 1: Abrir e-mail
    window.location.href = "mailto:ti@yuna.com.br?subject=Solicitação de Suporte Técnico";
    
    // Opção 2: Se preferir um link para um formulário, descomente:
    // window.open("https://seudominio.com/suporte", "_blank");
    
    // Opção 3: Se preferir um WhatsApp (adicione seu número):
    // window.open("https://wa.me/5521999999999?text=Olá, preciso de ajuda técnica!", "_blank");
}

// Animação de entrada suave dos cards quando entram no viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observar a seção de intro
const introCard = document.querySelector('.intro-card');
if (introCard) {
    introCard.style.opacity = '0';
    observer.observe(introCard);
}

// Suavizar o scroll (se o navegador não suportar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Efeito de parallax suave ao fazer scroll (opcional)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    if (header && scrolled < window.innerHeight) {
        header.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    }
});

// Adicionar classe de feedback ao clicar no botão
document.querySelector('.cta-button')?.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

// Detectar tema escuro do sistema (opcional)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Se o usuário tiver preferência por tema escuro, você pode adicionar estilos aqui
    console.log('Preferência de tema escuro detectada');
}

// Função para contar visitors (opcional - descomente se quiser usar)
/*
function contarVisitas() {
    let visitas = localStorage.getItem('visitasCampanha') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitasCampanha', visitas);
    console.log(`Total de visitas: ${visitas}`);
}

contarVisitas();
*/

// Log de informações (você pode remover em produção)
console.log('%c🚀 Campanha de Conscientização Carregada!', 
    'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%cVamos juntos manter nosso ambiente digital seguro e eficiente!', 
    'color: #666; font-size: 12px;');