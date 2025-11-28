// =============================================
// CMS DATA LOADER (Dynamic Content)
// Load data from JSON files managed by Decap CMS
// =============================================

/**
 * Fetch JSON data from a URL
 * @param {string} url - URL to fetch
 * @returns {Promise<object|null>} - Parsed JSON data or null
 */
async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return await response.json();
    } catch (error) {
        console.error('Error loading CMS data:', error);
        return null;
    }
}

/**
 * Render Packages Section
 * @param {object} data - Packages data
 */
function renderPackages(data) {
    const container = document.getElementById('package-grid');
    if (!container || !data || !data.packages) return;

    container.innerHTML = data.packages.map((pkg, index) => `
        <div class="package-card ${pkg.isPrimary ? 'featured' : ''} animate-on-scroll" style="animation-delay: ${index * 0.1}s">
            ${pkg.isPrimary && pkg.badge ? `<div class="popular-badge">${pkg.badge}</div>` : ''}
            <div class="package-header">
                <div class="package-icon">${pkg.icon}</div>
                <h3>${pkg.name}</h3>
                <p class="package-desc">${pkg.description}</p>
            </div>
            <div class="package-price">${pkg.price}</div>
            <ul class="package-features">
                ${pkg.features.map(feature => `<li>✓ ${feature}</li>`).join('')}
            </ul>
            <a href="https://wa.me/6281234567890?text=${encodeURIComponent(pkg.whatsappText)}" 
               class="btn ${pkg.isPrimary ? 'btn-primary' : 'btn-outline'}" 
               target="_blank">${pkg.buttonText}</a>
        </div>
    `).join('');
}

/**
 * Render Tiers Section
 * @param {object} data - Tiers data
 */
function renderTiers(data) {
    const container = document.getElementById('tier-grid');
    if (!container || !data || !data.tiers) return;

    container.innerHTML = data.tiers.map((tier, index) => `
        <div class="tier-card ${tier.featured ? 'featured' : ''} animate-on-scroll" style="animation-delay: ${index * 0.1}s">
            <div class="tier-emoji">${tier.emoji}</div>
            <h3>${tier.name}</h3>
            <p class="tier-desc">${tier.description}</p>
            <div class="tier-examples">
                ${tier.examples.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="tier-price">${tier.price}</div>
            ${tier.note ? `<p class="tier-note">${tier.note}</p>` : ''}
        </div>
    `).join('');
}

/**
 * Render Extensions Section
 * @param {object} data - Extensions data
 */
function renderExtensions(data) {
    const container = document.getElementById('extension-grid');
    if (!container || !data || !data.extensions) return;

    container.innerHTML = data.extensions.map((ext, index) => `
        <div class="extension-card ${ext.isPrimary ? 'featured' : ''} animate-on-scroll" style="animation-delay: ${index * 0.1}s">
            <div class="extension-icon">${ext.icon}</div>
            <h3>${ext.name}</h3>
            <p class="extension-desc">${ext.description}</p>
            <ul class="extension-features">
                ${ext.features.map(feature => `<li>✓ ${feature}</li>`).join('')}
            </ul>
            <div class="extension-price">${ext.price}</div>
            <a href="https://wa.me/6281234567890?text=${encodeURIComponent(ext.whatsappText)}" 
               class="btn ${ext.isPrimary ? 'btn-primary' : 'btn-outline'}" 
               target="_blank">${ext.buttonText}</a>
        </div>
    `).join('');
}

/**
 * Render Gallery Section
 * @param {object} data - Gallery data
 */
function renderGallery(data) {
    const container = document.getElementById('gallery-track');
    if (!container || !data || !data.gallery) return;

    container.innerHTML = data.gallery.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.caption}">
            <div class="gallery-overlay">${item.caption}</div>
        </div>
    `).join('');
}

/**
 * Initialize CMS data loading
 */
async function initCMSData() {
    console.log('🔄 Loading dynamic content...');

    // Load all data in parallel
    const [packages, tiers, extensions, gallery, contact] = await Promise.all([
        loadJSON('data/packages.json'),
        loadJSON('data/tiers.json'),
        loadJSON('data/extensions.json'),
        loadJSON('data/gallery.json'),
        loadJSON('data/settings/contact.json')
    ]);

    // Render sections
    if (packages) renderPackages(packages);
    if (tiers) renderTiers(tiers);
    if (extensions) renderExtensions(extensions);
    if (gallery) {
        renderGallery(gallery);
        // Re-initialize carousel after gallery items are rendered
        if (window.GalleryCarousel) {
            new window.GalleryCarousel();
        }
    }

    // Update contact info if available
    if (contact) {
        window.CMSLoader.updateContactInfo(contact);
    }

    console.log('✅ Dynamic content loaded!');

    // Re-trigger scroll animations if needed
    if (window.IntersectionObserver) {
        setTimeout(() => {
            const newElements = document.querySelectorAll('.animate-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            newElements.forEach(el => observer.observe(el));
        }, 100);
    }
}

/**
 * Update contact information (Helper)
 */
function updateContactInfo(contact) {
    if (!contact) return;

    // Update WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        if (contact.whatsapp) {
            const number = contact.whatsapp.replace(/[^0-9]/g, '');
            // Preserve existing text param if any
            const url = new URL(link.href);
            const text = url.searchParams.get('text');
            let newHref = `https://wa.me/${number}`;
            if (text) newHref += `?text=${encodeURIComponent(text)}`;
            link.setAttribute('href', newHref);
        }
    });

    // Update Instagram links
    document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
        if (contact.instagram) {
            const handle = contact.instagram.replace('@', '');
            link.setAttribute('href', `https://instagram.com/${handle}`);
        }
    });

    // Update address
    const addressEl = document.querySelector('.footer-contact p:nth-child(2)');
    if (addressEl && contact.address) {
        addressEl.innerText = contact.address; // Use innerText to preserve newlines
    }

    // Update Google Maps
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe && contact.mapsUrl) {
        mapIframe.setAttribute('src', contact.mapsUrl);
    }
}

// Export functions
window.CMSLoader = {
    initCMSData,
    updateContactInfo
};

// Load data when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCMSData);
} else {
    initCMSData();
}
