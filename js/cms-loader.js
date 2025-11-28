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
 * Initialize CMS data loading
 * This function attempts to load data from CMS files
 * Falls back to hardcoded data if CMS files not available
 */
async function initCMSData() {
    console.log('🔄 Attempting to load data from Netlify CMS...');
    
    // Try to load settings
    const contact = await loadSettings('contact');
    if (contact) {
        console.log('✅ Contact settings loaded from CMS');
        updateContactInfo(contact);
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
    loadSettings,
    parseFrontmatter,
    updateContactInfo
};
