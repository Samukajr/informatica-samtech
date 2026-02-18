// ============================================
// Informática Samtech - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ============================================
    // Sticky Header on Scroll
    // ============================================
    const header = document.getElementById('header');

    function updateHeader() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // ============================================
    // Active Navigation Link on Scroll
    // ============================================
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ============================================
    // Smooth Scroll for Navigation Links
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Scroll to Top Button
    // ============================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // Contact Form Validation & Submission
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const assunto = document.getElementById('assunto').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Validate form
            if (!nome || !email || !assunto || !mensagem) {
                showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Validate email
            if (!isValidEmail(email)) {
                showFormMessage('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Validate phone if provided
            if (telefone && !isValidPhone(telefone)) {
                showFormMessage('Por favor, insira um telefone válido.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual backend integration)
            simulateFormSubmission(nome, email, telefone, assunto, mensagem);
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide message after 5 seconds for error, 10 seconds for success
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, type === 'error' ? 5000 : 10000);
    }

    function simulateFormSubmission(nome, email, telefone, assunto, mensagem) {
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Enviando...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showFormMessage(
                'Mensagem enviada com sucesso! Entraremos em contato em breve.',
                'success'
            );
            
            // Reset form
            contactForm.reset();
            
            // In a real implementation, you would send the data to a backend:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    telefone,
                    assunto,
                    mensagem
                })
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                if (data.success) {
                    showFormMessage('Mensagem enviada com sucesso!', 'success');
                    contactForm.reset();
                } else {
                    showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
                }
            })
            .catch(error => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
            });
            */
        }, 2000);
    }

    // ============================================
    // Scroll Animations for Elements
    // ============================================
    function isElementPartiallyInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        
        return (vertInView && horInView);
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const serviceCards = document.querySelectorAll('.service-card');
        const statCards = document.querySelectorAll('.stat-card');
        const infoCards = document.querySelectorAll('.info-card');
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        
        const allCards = [...serviceCards, ...statCards, ...infoCards, ...portfolioCards];
        
        allCards.forEach((card, index) => {
            if (isElementPartiallyInViewport(card) && !card.classList.contains('animated')) {
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.classList.add('animated');
                    }, 50);
                }, index * 100);
            }
        });
    };

    // ============================================
    // Accessibility: Keyboard Navigation
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ============================================
    // Performance: Debounce Scroll Events
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Debounced scroll handler for performance
    const debouncedScrollHandler = debounce(function() {
        updateHeader();
        updateActiveLink();
        animateOnScroll();
    }, 100);

    window.addEventListener('scroll', debouncedScrollHandler);

    // ============================================
    // Initialize
    // ============================================
    console.log('Informática Samtech - Website loaded successfully!');
    
    // Set initial active link
    updateActiveLink();
    
    // Trigger initial scroll animations
    animateOnScroll();
});
