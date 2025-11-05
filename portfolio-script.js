// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ============================================
// Header Scroll Effect
// ============================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Section Navigation Highlight
// ============================================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Ignora anchors vazios como '#'
        if (href === '#') return;
        e.preventDefault();
        try {
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        } catch (err) {
            // Se o seletor for inválido, faz fallback para topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Suporte explícito ao botão flutuante de Home
const floatHomeBtn = document.querySelector('.float-home-btn');
if (floatHomeBtn) {
    floatHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const home = document.getElementById('home');
        if (home) {
            const headerOffset = 80;
            const elementPosition = home.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// ============================================
// Intersection Observer for Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optionally stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with 'reveal' class
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Also observe skill categories, timeline items, education cards for staggered animation
document.querySelectorAll('.skill-category, .timeline-item, .education-card, .contact-method').forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// Dynamic Year in Footer
// ============================================
const updateFooterYear = () => {
    const yearElement = document.querySelector('.footer-text');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Jean Carlos. Todos os direitos reservados.`;
    }
};

updateFooterYear();

// ============================================
// Skill Tags Interactive Effect
// ============================================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Loading Animation (Optional)
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Parallax Effect for Hero Section (Optional)
// ============================================
const heroContent = document.querySelector('.hero-content');
const heroBlob = document.querySelector('.hero-blob');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${rate}px)`;
    }
    
    if (heroBlob && scrolled < window.innerHeight) {
        heroBlob.style.transform = `translateY(${rate * 0.3}px) rotate(${scrolled * 0.1}deg)`;
    }
});

// ============================================
// Console Message (Easter Egg)
// ============================================
console.log('%c👋 Olá, Developer!', 'color: #00ff88; font-size: 20px; font-weight: bold;');
console.log('%cGostou do portfólio? Entre em contato!', 'color: #00ccff; font-size: 14px;');
console.log('%c📧 jeancarlosdias88@gmail.com', 'color: #a0a0a0; font-size: 12px;');

// ============================================
// Handle External Links
// ============================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// ============================================
// Copy Email to Clipboard (Optional Enhancement)
// ============================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Allow default mailto behavior
        // But could add copy to clipboard functionality here if desired
    });
});

// ============================================
// Preload Critical Resources
// ============================================
const preloadResources = () => {
    // Add any critical resources that need preloading
    // This is a placeholder for future enhancements
};

preloadResources();

// ============================================
// Performance Monitoring (Optional)
// ============================================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}