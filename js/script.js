// =============================================
// NAIL ART BY DEWI SALON - MAIN JAVASCRIPT
// Scroll Animations, Carousel, Floating Effects
// =============================================

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// === INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation for performance
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// === GALLERY CAROUSEL ===
class GalleryCarousel {
    constructor() {
        this.track = document.getElementById('galleryTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.items = document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        
        this.init();
        this.setupResizeHandler();
    }
    
    init() {
        if (!this.track || !this.prevBtn || !this.nextBtn) return;
        
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Touch/swipe support
        let startX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        this.track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            isDragging = false;
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
    
    getItemsPerView() {
        const width = window.innerWidth;
        if (width < 640) return 1;
        if (width < 1024) return 2;
        return 3;
    }
    
    setupResizeHandler() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.itemsPerView = this.getItemsPerView();
                this.updateCarousel();
            }, 250);
        });
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    
    next() {
        const maxIndex = this.items.length - this.itemsPerView;
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }
    
    updateCarousel() {
        const itemWidth = this.items[0].offsetWidth;
        const gap = 24; // Match CSS gap
        const offset = -(this.currentIndex * (itemWidth + gap));
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Update button states
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.prevBtn.style.cursor = this.currentIndex === 0 ? 'not-allowed' : 'pointer';
        
        const maxIndex = this.items.length - this.itemsPerView;
        this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
        this.nextBtn.style.cursor = this.currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GalleryCarousel();
});

// === AUTO CAROUSEL (OPTIONAL) ===
// Uncomment to enable auto-play
/*
let autoPlayInterval;
const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        const carousel = new GalleryCarousel();
        carousel.next();
    }, 5000);
};

const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
};

document.addEventListener('DOMContentLoaded', () => {
    startAutoPlay();
    
    // Stop auto-play when user interacts
    document.getElementById('prevBtn')?.addEventListener('click', () => {
        stopAutoPlay();
    });
    
    document.getElementById('nextBtn')?.addEventListener('click', () => {
        stopAutoPlay();
    });
});
*/

// === PARALLAX EFFECT FOR FLOATING DECORATIONS ===
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
});

function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const decorations = document.querySelectorAll('.floating-decoration');
    
    decorations.forEach((decoration, index) => {
        const speed = 0.1 + (index * 0.02);
        const yPos = -(scrolled * speed);
        decoration.style.transform = `translateY(${yPos}px)`;
    });
}

// === NAVBAR SCROLL EFFECT (OPTIONAL) ===
// Uncomment if you want to add a sticky header with scroll effects
/*
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 200) {
        header?.classList.add('hidden');
    } else {
        header?.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});
*/

// === LAZY LOADING FOR IMAGES ===
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px'
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// === BUTTON RIPPLE EFFECT ===
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === PERFORMANCE OPTIMIZATION ===
// Debounce function for scroll/resize events
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

// === WHATSAPP FLOATING BUTTON BUBBLE ===
let bubbleTimeout;
let bubbleShown = false;

// Show bubble after 3 seconds
setTimeout(() => {
    const bubble = document.getElementById('whatsappBubble');
    if (bubble && !bubbleShown) {
        bubble.classList.add('show');
        bubbleShown = true;
        
        // Auto hide after 10 seconds
        bubbleTimeout = setTimeout(() => {
            bubble.classList.remove('show');
        }, 10000);
    }
}, 3000);

// Close bubble on button click
const bubbleClose = document.getElementById('bubbleClose');
if (bubbleClose) {
    bubbleClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const bubble = document.getElementById('whatsappBubble');
        if (bubble) {
            bubble.classList.remove('show');
            clearTimeout(bubbleTimeout);
        }
    });
}

// === HIDE BUBBLE ON SCROLL ===
let lastScrollTop = 0;
window.addEventListener('scroll', debounce(() => {
    const bubble = document.getElementById('whatsappBubble');
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (Math.abs(st - lastScrollTop) > 100 && bubble) {
        bubble.classList.remove('show');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, 100));

// === CONSOLE LOG (REMOVE IN PRODUCTION) ===
console.log('%c💅 Nail Art by Dewi Salon', 'font-size: 20px; color: #d9b18a; font-weight: bold;');
console.log('%cWebsite loaded successfully! ✨', 'font-size: 14px; color: #6b6b6b;');

// === WHATSAPP TRACKING (OPTIONAL) ===
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked:', link.href);
        // Add analytics tracking here if needed
        // Example: gtag('event', 'whatsapp_click', { ... });
    });
});

// === FAQ ACCORDION (OPTIONAL ENHANCEMENT) ===
// Uncomment if you want collapsible FAQ
/*
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        faqItem.classList.toggle('active');
        
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});
*/

// === VIEWPORT HEIGHT FIX FOR MOBILE ===
// Fix for mobile browsers where 100vh includes address bar
function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', debounce(setVH, 250));

// === EASTER EGG: KONAMI CODE ===
// Fun little easter egg for developers/users
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join(',').includes(konamiSequence.join(','))) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        alert('💅✨ You found the secret nail polish collection! ✨💅');
    }
});
