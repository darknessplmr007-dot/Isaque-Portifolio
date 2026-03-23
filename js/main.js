// Inicializar ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

// Animações para seções
sr.reveal('#sobre', { delay: 300 });
sr.reveal('#projetos', { delay: 400 });
sr.reveal('#conhecimentos', { delay: 500 });
sr.reveal('#contato', { delay: 600 });
sr.reveal('footer', { delay: 700 });

// Animação para projetos individuais
sr.reveal('.projeto', { 
    origin: 'left', 
    distance: '30px', 
    interval: 200 
});

// Animação para o header
sr.reveal('header', { origin: 'top', distance: '30px' });

// Animação para o botão
sr.reveal('button', { origin: 'right', distance: '50px' });

// Animação para h2 e h4
sr.reveal('h2', { origin: 'left', distance: '40px' });
sr.reveal('h4', { origin: 'right', distance: '40px' });

// Efeito de digitação
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing');
    if (typingElement) {
        const text = 'Desenvolvedor Full Stack.';
        typeWriter(typingElement, text, 150);
    }

    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
