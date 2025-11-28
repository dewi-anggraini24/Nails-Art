// =============================================
// CMS DATA LOADER
// Load data from Netlify CMS markdown files
// =============================================

/**
 * Parse frontmatter from markdown content
 * @param {string} content - Raw markdown content with frontmatter
 * @returns {object} - Parsed frontmatter data
 */
function parseFrontmatter(content) {
    const fmRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(fmRegex);
    
    if (!match) return null;
    
    const frontmatter = {};
    const lines = match[1].split('\n');
    
    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) return;
        
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();
        
        // Remove quotes
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        }
        if (value.startsWith("'") && value.endsWith("'")) {
            value = value.slice(1, -1);
        }
        
        // Convert numbers
        if (!isNaN(value) && value !== '') {
            value = Number(value);
        }
        
        // Convert booleans
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        
        frontmatter[key] = value;
    });
    
    return frontmatter;
}

/**
 * Load testimonials from _data/testimonials/
 * @returns {Promise<Array>} - Array of testimonial objects
 */
async function loadTestimonials() {
    try {
        // Try to fetch from GitHub (production)
        const response = await fetch('/_data/testimonials/');
        if (!response.ok) throw new Error('Not found');
        
        // Parse directory listing (this won't work on static hosting)
        // We need a different approach - use a manifest file
        
    } catch (error) {
        console.log('CMS data not available, using hardcoded data');
        return null;
    }
}

/**
 * Load stats from _data/stats/stats.md
 * @returns {Promise<object>} - Stats object
 */
async function loadStats() {
    try {
        const response = await fetch('/_data/stats/stats.md');
        if (!response.ok) throw new Error('Stats not found');
        
        const content = await response.text();
        const stats = parseFrontmatter(content);
        
        return stats;
    } catch (error) {
        console.log('Stats not available from CMS, using defaults');
        return null;
    }
}

/**
 * Load settings from _data/settings/*.json
 * @param {string} type - contact, hours, or seo
 * @returns {Promise<object>} - Settings object
 */
async function loadSettings(type) {
    try {
        const response = await fetch(`/_data/settings/${type}.json`);
        if (!response.ok) throw new Error(`${type} settings not found`);
        
        const settings = await response.json();
        return settings;
    } catch (error) {
        console.log(`${type} settings not available from CMS`);
        return null;
    }
}

/**
 * Initialize CMS data loading
 * This function attempts to load data from CMS files
 * Falls back to hardcoded data if CMS files not available
 */
async function initCMSData() {
    console.log('🔄 Attempting to load data from Netlify CMS...');
    
    // Try to load stats
    const stats = await loadStats();
    if (stats) {
        console.log('✅ Stats loaded from CMS:', stats);
        updateStatsDisplay(stats);
    }
    
    // Try to load settings
    const contact = await loadSettings('contact');
    if (contact) {
        console.log('✅ Contact settings loaded from CMS');
        updateContactInfo(contact);
    }
}

/**
 * Update stats display with CMS data
 */
function updateStatsDisplay(stats) {
    // Update customers
    const customersEl = document.querySelector('.stat-card:nth-child(1) .stat-number[data-target]');
    if (customersEl && stats.totalCustomers) {
        customersEl.setAttribute('data-target', stats.totalCustomers);
    }
    
    // Update rating
    const ratingEl = document.querySelector('.stat-card:nth-child(2) .stat-number');
    const reviewsEl = document.querySelector('.stat-card:nth-child(2) .stat-label');
    if (ratingEl && stats.avgRating) {
        ratingEl.innerHTML = `${stats.avgRating}<span class="stat-suffix">/5</span>`;
    }
    if (reviewsEl && stats.totalReviews) {
        reviewsEl.textContent = `Rating dari ${stats.totalReviews} Reviews`;
    }
    
    // Update IG followers
    const igEl = document.querySelector('.stat-card:nth-child(3) .stat-number[data-target]');
    if (igEl && stats.igFollowers) {
        igEl.setAttribute('data-target', stats.igFollowers);
    }
    
    // Update years
    const yearsEl = document.querySelector('.stat-card:nth-child(4) .stat-number[data-target]');
    if (yearsEl && stats.yearsExp) {
        yearsEl.setAttribute('data-target', stats.yearsExp);
    }
}

/**
 * Update contact information with CMS data
 */
function updateContactInfo(contact) {
    // Update WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        if (contact.whatsapp) {
            const number = contact.whatsapp.replace(/[^0-9]/g, '');
            const currentHref = link.getAttribute('href');
            const newHref = currentHref.replace(/wa\.me\/\d+/, `wa.me/${number}`);
            link.setAttribute('href', newHref);
        }
    });
    
    // Update Instagram links
    document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
        if (contact.instagram) {
            const handle = contact.instagram.replace('@', '');
            link.setAttribute('href', `https://instagram.com/${handle}`);
            link.textContent = contact.instagram;
        }
    });
    
    // Update address
    const addressEl = document.querySelector('.footer-contact p:nth-child(2)');
    if (addressEl && contact.address) {
        addressEl.textContent = contact.address;
    }
    
    // Update Google Maps
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe && contact.mapsUrl) {
        mapIframe.setAttribute('src', contact.mapsUrl);
    }
}

// Load CMS data when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCMSData);
} else {
    initCMSData();
}

// Export functions for use in other scripts
window.CMSLoader = {
    loadStats,
    loadSettings,
    parseFrontmatter,
    updateStatsDisplay,
    updateContactInfo
};
