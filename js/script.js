// ============================================
// Informática Samtech - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // Theme Toggle (Claro / Escuro)
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    const themeStorageKey = 'samtech-theme';
    const systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function getInitialTheme() {
        const savedTheme = window.localStorage.getItem(themeStorageKey);
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
        return systemDarkQuery.matches ? 'dark' : 'light';
    }

    function updateThemeToggleUI(theme) {
        if (!themeToggle) {
            return;
        }

        const icon = themeToggle.querySelector('i');
        const label = themeToggle.querySelector('.theme-toggle-label');
        const isDark = theme === 'dark';

        if (icon) {
            icon.classList.remove('fa-moon', 'fa-sun');
            icon.classList.add(isDark ? 'fa-moon' : 'fa-sun');
        }

        if (label) {
            label.textContent = 'Tema';
        }

        themeToggle.setAttribute('aria-label', isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro');
        themeToggle.setAttribute('title', isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro');
        themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }

    function applyTheme(theme, savePreference = false) {
        const normalizedTheme = theme === 'light' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', normalizedTheme);
        updateThemeToggleUI(normalizedTheme);

        if (savePreference) {
            window.localStorage.setItem(themeStorageKey, normalizedTheme);
        }
    }

    applyTheme(getInitialTheme());

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme, true);
        });
    }

    systemDarkQuery.addEventListener('change', function(e) {
        const hasSavedPreference = window.localStorage.getItem(themeStorageKey);
        if (!hasSavedPreference) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ============================================
    // Mouse Glow / Parallax Effect
    // ============================================
    let mouseFrame = null;
    let mouseInside = false;
    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.2;
    let touchEndTimer = null;
    let lastParticleSpawn = 0;
    const maxMouseParticles = 20;
    const particleGapMs = 70;
    const mouseParticles = [];
    const mouseTrailPoints = [];
    const maxTrailPoints = 26;
    let trailAnimationFrame = null;

    const mouseOrbit = document.createElement('div');
    mouseOrbit.className = 'mouse-orbit';
    document.body.appendChild(mouseOrbit);

    const mouseRipple = document.createElement('div');
    mouseRipple.className = 'mouse-ripple';
    document.body.appendChild(mouseRipple);

    const mouseTrailCanvas = document.createElement('canvas');
    mouseTrailCanvas.className = 'mouse-trail-canvas';
    document.body.appendChild(mouseTrailCanvas);
    const mouseTrailContext = mouseTrailCanvas.getContext('2d');

    function resizeTrailCanvas() {
        const pixelRatio = window.devicePixelRatio || 1;
        mouseTrailCanvas.width = Math.floor(window.innerWidth * pixelRatio);
        mouseTrailCanvas.height = Math.floor(window.innerHeight * pixelRatio);
        mouseTrailCanvas.style.width = '100vw';
        mouseTrailCanvas.style.height = '100vh';
        mouseTrailContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function drawMouseTrail() {
        if (!mouseTrailContext) {
            return;
        }

        mouseTrailContext.clearRect(0, 0, window.innerWidth, window.innerHeight);

        if (mouseTrailPoints.length < 2) {
            return;
        }

        mouseTrailContext.save();
        mouseTrailContext.lineCap = 'round';
        mouseTrailContext.lineJoin = 'round';
        mouseTrailContext.globalCompositeOperation = 'lighter';

        for (let i = 1; i < mouseTrailPoints.length; i += 1) {
            const start = mouseTrailPoints[i - 1];
            const end = mouseTrailPoints[i];
            const alpha = end.life * 0.82;
            const width = 1.6 + (i / mouseTrailPoints.length) * 5.2;

            const gradient = mouseTrailContext.createLinearGradient(start.x, start.y, end.x, end.y);
            gradient.addColorStop(0, `rgba(39, 225, 255, ${alpha * 0.28})`);
            gradient.addColorStop(0.45, `rgba(39, 225, 255, ${alpha * 1})`);
            gradient.addColorStop(1, `rgba(73, 255, 179, ${alpha * 0.34})`);

            mouseTrailContext.strokeStyle = gradient;
            mouseTrailContext.lineWidth = width;
            mouseTrailContext.shadowBlur = 22;
            mouseTrailContext.shadowColor = `rgba(39, 225, 255, ${alpha * 0.42})`;
            mouseTrailContext.beginPath();
            mouseTrailContext.moveTo(start.x, start.y);
            mouseTrailContext.lineTo(end.x, end.y);
            mouseTrailContext.stroke();
        }

        mouseTrailContext.restore();
    }

    function stepMouseTrail() {
        for (let i = mouseTrailPoints.length - 1; i >= 0; i -= 1) {
            mouseTrailPoints[i].life -= 0.03;
            if (mouseTrailPoints[i].life <= 0) {
                mouseTrailPoints.splice(i, 1);
            }
        }

        drawMouseTrail();

        if (mouseTrailPoints.length > 0) {
            trailAnimationFrame = window.requestAnimationFrame(stepMouseTrail);
        } else {
            trailAnimationFrame = null;
            mouseTrailContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
    }

    function pushMouseTrailPoint(x, y) {
        mouseTrailPoints.push({
            x,
            y,
            life: 1
        });

        while (mouseTrailPoints.length > maxTrailPoints) {
            mouseTrailPoints.shift();
        }

        if (!trailAnimationFrame) {
            trailAnimationFrame = window.requestAnimationFrame(stepMouseTrail);
        }
    }

    function spawnMouseParticle(x, y, force = false) {
        const now = performance.now();

        if (!force && now - lastParticleSpawn < particleGapMs) {
            return;
        }

        lastParticleSpawn = now;

        if (mouseParticles.length >= maxMouseParticles) {
            const oldParticle = mouseParticles.shift();
            if (oldParticle && oldParticle.parentNode) {
                oldParticle.parentNode.removeChild(oldParticle);
            }
        }

        const particle = document.createElement('span');
        particle.className = 'mouse-particle';

        const size = 3 + Math.random() * 4;
        const distance = 10 + Math.random() * 24;
        const angle = Math.random() * Math.PI * 2;
        const dx = Math.cos(angle) * distance * 0.85;
        const dy = Math.sin(angle) * distance * 0.55 - (8 + Math.random() * 14);
        const duration = 620 + Math.random() * 240;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--particle-size', `${size}px`);
        particle.style.setProperty('--particle-dx', `${dx}px`);
        particle.style.setProperty('--particle-dy', `${dy}px`);
        particle.style.setProperty('--particle-duration', `${duration}ms`);

        document.body.appendChild(particle);
        mouseParticles.push(particle);

        particle.addEventListener('animationend', function() {
            const index = mouseParticles.indexOf(particle);
            if (index !== -1) {
                mouseParticles.splice(index, 1);
            }
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, { once: true });
    }

    function updateMouseVisuals() {
        const x = mouseX;
        const y = mouseY;

        document.body.style.setProperty('--mouse-x', `${x}px`);
        document.body.style.setProperty('--mouse-y', `${y}px`);
        document.body.style.setProperty('--mouse-intensity', mouseInside ? '1' : '0');

        mouseOrbit.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        mouseRipple.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        mouseRipple.classList.add('active');
        spawnMouseParticle(x, y);
        pushMouseTrailPoint(x, y);

        window.clearTimeout(mouseRipple._hideTimer);
        mouseRipple._hideTimer = window.setTimeout(() => {
            mouseRipple.classList.remove('active');
        }, 120);
    }

    function deactivateMouseVisuals() {
        mouseInside = false;
        document.body.classList.remove('mouse-active');
        document.body.style.setProperty('--mouse-intensity', '0');
        mouseRipple.classList.remove('active');
    }

    function scheduleTouchEnd() {
        window.clearTimeout(touchEndTimer);
        touchEndTimer = window.setTimeout(() => {
            deactivateMouseVisuals();
        }, 180);
    }

    resizeTrailCanvas();

    window.addEventListener('pointermove', function(e) {
        if (e.pointerType === 'touch') {
            window.clearTimeout(touchEndTimer);
        }

        mouseInside = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.body.classList.add('mouse-active');

        if (mouseFrame) {
            return;
        }

        mouseFrame = window.requestAnimationFrame(() => {
            updateMouseVisuals();
            mouseFrame = null;
        });
    }, { passive: true });

    window.addEventListener('pointerleave', function() {
        deactivateMouseVisuals();
    });

    window.addEventListener('resize', resizeTrailCanvas, { passive: true });

    window.addEventListener('pointerdown', function(e) {
        if (e.pointerType === 'touch') {
            window.clearTimeout(touchEndTimer);
        }

        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseInside = true;
        document.body.classList.add('mouse-active');
        spawnMouseParticle(mouseX, mouseY, true);
        updateMouseVisuals();
    }, { passive: true });

    window.addEventListener('pointerup', function(e) {
        if (e.pointerType === 'touch') {
            scheduleTouchEnd();
        }
    }, { passive: true });

    window.addEventListener('pointercancel', function(e) {
        if (e.pointerType === 'touch') {
            scheduleTouchEnd();
        } else {
            deactivateMouseVisuals();
        }
    }, { passive: true });

    updateMouseVisuals();

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
        const processCards = document.querySelectorAll('.process-card');
        const logoTiles = document.querySelectorAll('.logo-tile');
        const faqItems = document.querySelectorAll('.faq-item');
        
        const allCards = [
            ...serviceCards,
            ...statCards,
            ...infoCards,
            ...portfolioCards,
            ...processCards,
            ...logoTiles,
            ...faqItems
        ];
        
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
