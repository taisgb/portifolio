// Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const mainNav = document.getElementById('main-nav');

mobileMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

// Atualizar ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Filtro do Portfólio
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Mostrar loading
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Redirecionar para página de obrigado
                window.location.href = contactForm.querySelector('input[name="_next"]').value;
            } else {
                throw new Error('Erro ao enviar formulário');
            }
        } catch (error) {
            // Mostrar mensagem de erro
            const errorMessage = document.createElement('div');
            errorMessage.className = 'form-error';
            errorMessage.textContent = 'Ocorreu um erro ao enviar. Por favor, tente novamente mais tarde.';
            errorMessage.style.color = 'var(--danger-color)';
            errorMessage.style.marginTop = '15px';
            errorMessage.style.textAlign = 'center';
            
            const existingMessage = contactForm.querySelector('.form-error');
            if (existingMessage) existingMessage.remove();
            
            contactForm.appendChild(errorMessage);
        } finally {
            // Restaurar botão
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de scroll no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
