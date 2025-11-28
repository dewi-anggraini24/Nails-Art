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
        this.track = document.getElementById('gallery-track'); // Updated ID to match HTML
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        // Select items dynamically in case they are added later
        this.items = () => document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();

        this.init();
        this.setupResizeHandler();
    }

    init() {
        if (!this.track || !this.prevBtn || !this.nextBtn) return;

        // Remove existing listeners to prevent duplicates if re-initialized
        const newPrevBtn = this.prevBtn.cloneNode(true);
        const newNextBtn = this.nextBtn.cloneNode(true);
        this.prevBtn.parentNode.replaceChild(newPrevBtn, this.prevBtn);
        this.nextBtn.parentNode.replaceChild(newNextBtn, this.nextBtn);
        this.prevBtn = newPrevBtn;
        this.nextBtn = newNextBtn;

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

        // Initial update
        this.updateCarousel();
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
        const items = this.items();
        const maxIndex = items.length - this.itemsPerView;
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }

    updateCarousel() {
        const items = this.items();
        if (items.length === 0) return;

        const itemWidth = items[0].offsetWidth;
        const gap = 24; // Match CSS gap
        const offset = -(this.currentIndex * (itemWidth + gap));
        this.track.style.transform = `translateX(${offset}px)`;

        // Update button states
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.prevBtn.style.cursor = this.currentIndex === 0 ? 'not-allowed' : 'pointer';

        const maxIndex = items.length - this.itemsPerView;
        this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
        this.nextBtn.style.cursor = this.currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    }
}

// Expose to window for CMS loader
window.GalleryCarousel = GalleryCarousel;

// Initialize carousel when DOM is loaded (will be re-initialized by CMS loader)
document.addEventListener('DOMContentLoaded', () => {
    // Only init if track has children (static content), otherwise wait for CMS
    if (document.getElementById('gallery-track')?.children.length > 0) {
        new GalleryCarousel();
    }
});

// ... (Auto Carousel commented out) ...

// ... (Parallax Effect) ...

// ... (Navbar Scroll Effect) ...

// ... (Lazy Loading) ...

// === BUTTON RIPPLE EFFECT (Event Delegation) ===
document.addEventListener('click', function (e) {
    const button = e.target.closest('.btn');
    if (button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
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
