// =============================================
// ADMIN PANEL - NAIL ART BY DEWI SALON
// CRUD Operations with localStorage
// =============================================

// === AUTHENTICATION ===
const AUTH = {
    username: 'admin',
    password: 'admin123',
    isAuthenticated: false
};

// === DATA STORAGE KEYS ===
const STORAGE_KEYS = {
    packages: 'dewi_salon_packages',
    gallery: 'dewi_salon_gallery',
    tiers: 'dewi_salon_tiers',
    extensions: 'dewi_salon_extensions',
    testimonials: 'dewi_salon_testimonials',
    stats: 'dewi_salon_stats',
    settings: 'dewi_salon_settings'
};

// === DEFAULT DATA ===
const DEFAULT_DATA = {
    packages: [
        {
            id: 1,
            icon: '💅',
            name: 'Manicure Only',
            description: 'Perawatan kuku dasar tanpa cat',
            price: 'IDR 35.000',
            features: ['Dry manicure profesional', 'Rapikan bentuk kuku', 'Perawatan kutikula', 'Buffing & polish natural']
        },
        {
            id: 2,
            icon: '💖',
            name: 'Regular Gel Polish',
            description: 'Warna solid dengan hasil glossy sempurna',
            price: 'IDR 65.000',
            features: ['Manicure lengkap', 'Gel polish 1 warna', 'Glossy finish premium', 'Tahan 2-3 minggu', 'Pilihan 100+ warna'],
            featured: true
        },
        {
            id: 3,
            icon: '✨',
            name: 'Premium Gel Polish',
            description: 'Kualitas terbaik dengan hasil maksimal',
            price: 'IDR 85.000',
            features: ['Manicure premium', 'Gel polish premium brand', 'Ultra glossy & pigmented', 'Tahan hingga 4 minggu', 'Extra shine & smooth']
        }
    ],
    tiers: [
        {
            id: 1,
            emoji: '🌸',
            name: 'Tier 1 – Simple Cute',
            description: 'Desain minimalis yang tetap eye-catching',
            examples: ['Line art tipis', 'French nails', 'Polkadots', 'Small foil accent', 'Minimalist shapes'],
            priceRange: 'IDR 20.000 - 50.000',
            note: 'Harga bervariasi sesuai detail'
        },
        {
            id: 2,
            emoji: '💫',
            name: 'Tier 2 – Soft Glam',
            description: 'Sentuhan glam yang tetap soft dan elegan',
            examples: ['Blush nails', 'Ombre gradient', 'Marble simple', 'Chrome line', 'Glitter accent'],
            priceRange: 'IDR 60.000 - 100.000',
            note: 'Kombinasi 2-3 teknik',
            featured: true
        },
        {
            id: 3,
            emoji: '🎀',
            name: 'Tier 3 – Extra Playful',
            description: 'Statement nails yang bikin semua orang terpukau',
            examples: ['3D nail art', 'Cute bows', 'Aura nails', 'Karakter lucu', 'Full custom design'],
            priceRange: 'IDR 120.000 - 200.000',
            note: 'Detail kompleks & materials premium'
        }
    ],
    extensions: [
        {
            id: 1,
            icon: '💅',
            name: 'Soft Gel Tips Extension',
            description: 'Extension praktis dengan tips gel yang fleksibel dan natural. Cocok untuk pemula yang ingin kuku lebih panjang.',
            priceRange: 'IDR 150.000 - 200.000',
            features: ['Natural finish', 'Fleksibel & ringan', 'Aplikasi cepat', 'Aman untuk kuku']
        },
        {
            id: 2,
            icon: '✨',
            name: 'Soft Gel Extension (Builder Gel)',
            description: 'Extension premium menggunakan builder gel untuk hasil yang lebih kuat, natural, dan tahan lama hingga 3-4 minggu.',
            priceRange: 'IDR 250.000 - 350.000',
            features: ['Ultra natural look', 'Lebih kuat & tahan lama', 'Customize shape & length', 'Tidak merusak kuku asli'],
            featured: true
        },
        {
            id: 3,
            icon: '🧼',
            name: 'Removal (Soak-off)',
            description: 'Lepas gel polish atau extension dengan aman menggunakan teknik soak-off. Tanpa merusak kuku asli.',
            priceRange: 'IDR 50.000 - 80.000',
            features: ['Soak-off aman', 'Tidak pakai kikir keras', 'Kuku tetap sehat', '+ Vitamin kuku gratis']
        }
    ],
    gallery: [
        { id: 1, url: '../assets/images/nail-1.jpg', caption: 'Simple cute line art' },
        { id: 2, url: '../assets/images/nail-2.jpg', caption: 'Blush ombre gradient' },
        { id: 3, url: '../assets/images/nail-3.jpg', caption: 'French with gold accent' },
        { id: 4, url: '../assets/images/nail-4.jpg', caption: '3D bow nail art' },
        { id: 5, url: '../assets/images/nail-5.jpg', caption: 'Marble chrome nails' },
        { id: 6, url: '../assets/images/nail-6.jpg', caption: 'Aura nails aesthetic' }
    ],
    testimonials: [
        {
            id: 1,
            name: 'Sarah M.',
            rating: 5,
            review: 'Nail artnya detail banget! Aku bawa referensi dari Pinterest dan hasilnya persis seperti yang aku mau. Gel polishnya juga tahan lama, udah 3 minggu masih glossy. Recommended banget!',
            avatarUrl: 'assets/images/customer-1.jpg',
            beforeAfterUrl: 'assets/images/before-after-1.jpg'
        },
        {
            id: 2,
            name: 'Dina A.',
            rating: 5,
            review: 'Tempatnya bersih dan nyaman banget. Kak Dewi sabar dan teliti, dry manicure-nya rapih sampai kutikula. Hasilnya clean dan estetik sesuai yang aku harapkan. Pasti balik lagi!',
            avatarUrl: 'assets/images/customer-2.jpg',
            beforeAfterUrl: 'assets/images/before-after-2.jpg'
        },
        {
            id: 3,
            name: 'Laras K.',
            rating: 5,
            review: 'Pertama kali coba extension di sini dan hasilnya natural banget! Kukunya jadi panjang tapi tetap nyaman dipake. Harganya juga affordable untuk kualitas premium. Worth it banget deh!',
            avatarUrl: 'assets/images/customer-3.jpg',
            beforeAfterUrl: 'assets/images/before-after-3.jpg'
        },
        {
            id: 4,
            name: 'Mira S.',
            rating: 4,
            review: 'Desain nail artnya lucu-lucu dan creative! Aku request 3D bow nails dan hasilnya lebih cantik dari ekspektasi. Pengerjaan memang agak lama tapi worth it karena detailnya maksimal.',
            avatarUrl: 'assets/images/customer-4.jpg',
            beforeAfterUrl: 'assets/images/before-after-4.jpg'
        },
        {
            id: 5,
            name: 'Putri L.',
            rating: 5,
            review: 'Paling suka sama pelayanannya yang ramah dan profesional. Dijelasin detail soal perawatan kuku juga. Gel polishnya aman dan nggak bikin kuku rusak. Highly recommended untuk yang baru pertama kali!',
            avatarUrl: 'assets/images/customer-5.jpg',
            beforeAfterUrl: 'assets/images/before-after-5.jpg'
        },
        {
            id: 6,
            name: 'Nina R.',
            rating: 5,
            review: 'Best nail art experience ever! Dari konsultasi, pemilihan warna, sampai eksekusi semuanya perfect. Ruangannya juga cozy dan aesthetic, bikin betah. Pasti jadi langganan aku nih!',
            avatarUrl: 'assets/images/customer-6.jpg',
            beforeAfterUrl: 'assets/images/before-after-6.jpg'
        }
    ],
    stats: {
        totalCustomers: 500,
        avgRating: '4.9',
        totalReviews: '200+',
        igFollowers: 10,
        yearsExp: 3
    },
    settings: {
        whatsapp: '+62 812-3456-7890',
        instagram: '@dewisalon',
        address: 'Jl. Contoh Alamat No. 123, Jakarta',
        weekdayHours: '10.00 - 20.00 WIB',
        sundayHours: 'By Appointment'
    }
};

// === UTILITY FUNCTIONS ===
const Storage = {
    get(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    init() {
        Object.keys(STORAGE_KEYS).forEach(key => {
            if (!this.get(STORAGE_KEYS[key])) {
                this.set(STORAGE_KEYS[key], DEFAULT_DATA[key]);
            }
        });
    }
};

const Toast = {
    show(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        toast.className = `toast ${type} show`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
};

// === LOGIN HANDLER ===
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === AUTH.username && password === AUTH.password) {
        AUTH.isAuthenticated = true;
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'flex';
        Storage.init();
        loadSection('packages');
        Toast.show('Login successful! Welcome back 💅');
    } else {
        Toast.show('Invalid username or password', 'error');
    }
});

// === LOGOUT HANDLER ===
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    AUTH.isAuthenticated = false;
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
    document.getElementById('loginForm').reset();
});

// === NAVIGATION ===
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const section = item.dataset.section;
        loadSection(section);
    });
});

function loadSection(section) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`${section}Section`).classList.add('active');
    
    const titles = {
        packages: 'Manage Packages',
        gallery: 'Manage Gallery',
        tiers: 'Manage Nail Art Tiers',
        extensions: 'Manage Extensions',
        testimonials: 'Manage Testimonials',
        stats: 'Social Proof Statistics',
        settings: 'Settings'
    };
    
    document.getElementById('sectionTitle').textContent = titles[section];
    
    const addBtn = document.getElementById('addNewBtn');
    if (section === 'settings' || section === 'stats') {
        addBtn.style.display = 'none';
    } else {
        addBtn.style.display = 'flex';
        addBtn.onclick = () => openModal(section);
    }
    
    switch(section) {
        case 'packages':
            renderPackages();
            break;
        case 'gallery':
            renderGallery();
            break;
        case 'tiers':
            renderTiers();
            break;
        case 'extensions':
            renderExtensions();
            break;
        case 'testimonials':
            renderTestimonials();
            break;
        case 'stats':
            loadStats();
            break;
        case 'settings':
            loadSettings();
            break;
    }
}

// === RENDER FUNCTIONS ===
function renderPackages() {
    const packages = Storage.get(STORAGE_KEYS.packages) || [];
    const tbody = document.getElementById('packagesTableBody');
    
    if (packages.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state"><div class="empty-state-icon">📦</div><h3>No packages yet</h3><p>Add your first package to get started</p></td></tr>';
        return;
    }
    
    tbody.innerHTML = packages.map(pkg => `
        <tr>
            <td><span style="font-size: 32px;">${pkg.icon}</span></td>
            <td><strong>${pkg.name}</strong></td>
            <td>${pkg.description}</td>
            <td><strong>${pkg.price}</strong></td>
            <td>${pkg.features.length} features</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editItem('packages', ${pkg.id})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteItem('packages', ${pkg.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderTiers() {
    const tiers = Storage.get(STORAGE_KEYS.tiers) || [];
    const tbody = document.getElementById('tiersTableBody');
    
    if (tiers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state"><div class="empty-state-icon">⭐</div><h3>No tiers yet</h3></td></tr>';
        return;
    }
    
    tbody.innerHTML = tiers.map(tier => `
        <tr>
            <td><span style="font-size: 32px;">${tier.emoji}</span></td>
            <td><strong>${tier.name}</strong></td>
            <td>${tier.description}</td>
            <td>${tier.examples.length} examples</td>
            <td><strong>${tier.priceRange}</strong></td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editItem('tiers', ${tier.id})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteItem('tiers', ${tier.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderExtensions() {
    const extensions = Storage.get(STORAGE_KEYS.extensions) || [];
    const tbody = document.getElementById('extensionsTableBody');
    
    if (extensions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state"><div class="empty-state-icon">✨</div><h3>No extensions yet</h3></td></tr>';
        return;
    }
    
    tbody.innerHTML = extensions.map(ext => `
        <tr>
            <td><span style="font-size: 32px;">${ext.icon}</span></td>
            <td><strong>${ext.name}</strong></td>
            <td>${ext.description.substring(0, 60)}...</td>
            <td><strong>${ext.priceRange}</strong></td>
            <td>${ext.features.length} features</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editItem('extensions', ${ext.id})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteItem('extensions', ${ext.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderTestimonials() {
    const testimonials = Storage.get(STORAGE_KEYS.testimonials) || [];
    const tbody = document.getElementById('testimonialsTableBody');
    
    if (testimonials.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state"><div class="empty-state-icon">💬</div><h3>No testimonials yet</h3><p>Add customer reviews to build trust</p></td></tr>';
        return;
    }
    
    tbody.innerHTML = testimonials.map(test => {
        const stars = '★'.repeat(test.rating) + '☆'.repeat(5 - test.rating);
        return `
            <tr>
                <td><img src="../${test.avatarUrl}" alt="${test.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/50/d9b18a/ffffff?text=${test.name.charAt(0)}'"></td>
                <td><strong>${test.name}</strong></td>
                <td><span style="color: #FFD700; font-size: 18px;">${stars}</span> (${test.rating}/5)</td>
                <td style="max-width: 300px;">${test.review.substring(0, 100)}${test.review.length > 100 ? '...' : ''}</td>
                <td><img src="../${test.beforeAfterUrl}" alt="Before After" style="width: 80px; height: 60px; border-radius: 8px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/80x60/f5f5f5/d9b18a?text=BA'"></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="editItem('testimonials', ${test.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem('testimonials', ${test.id})">Delete</button>
                </td>
            </tr>
        `;
    }).join('');
}

function loadStats() {
    const stats = Storage.get(STORAGE_KEYS.stats) || DEFAULT_DATA.stats;
    
    document.getElementById('totalCustomers').value = stats.totalCustomers;
    document.getElementById('avgRating').value = stats.avgRating;
    document.getElementById('totalReviews').value = stats.totalReviews;
    document.getElementById('igFollowers').value = stats.igFollowers;
    document.getElementById('yearsExp').value = stats.yearsExp;
    
    // Update preview
    updateStatsPreview(stats);
}

function updateStatsPreview(stats) {
    document.getElementById('previewCustomers').textContent = stats.totalCustomers + '+';
    document.getElementById('previewRating').textContent = stats.avgRating + '/5';
    document.getElementById('previewReviews').textContent = stats.totalReviews;
    document.getElementById('previewIG').textContent = stats.igFollowers + 'K+';
    document.getElementById('previewYears').textContent = stats.yearsExp;
}

function renderGallery() {
    const gallery = Storage.get(STORAGE_KEYS.gallery) || [];
    const grid = document.getElementById('galleryGrid');
    
    if (gallery.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🖼️</div><h3>No gallery items yet</h3><p>Add your first nail art photo</p></div>';
        return;
    }
    
    grid.innerHTML = gallery.map(item => `
        <div class="gallery-item-admin">
            <img src="${item.url}" alt="${item.caption}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'300\\'%3E%3Crect fill=\\'%23f7e8ef\\' width=\\'300\\' height=\\'300\\'/%3E%3Ctext fill=\\'%23d9b18a\\' font-family=\\'Arial\\' font-size=\\'16\\' x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\'%3EImage Not Found%3C/text%3E%3C/svg%3E'">
            <div class="gallery-item-overlay">
                <p>${item.caption}</p>
                <div class="gallery-item-actions">
                    <button class="btn btn-sm btn-secondary" onclick="editItem('gallery', ${item.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem('gallery', ${item.id})">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadSettings() {
    const settings = Storage.get(STORAGE_KEYS.settings) || DEFAULT_DATA.settings;
    
    document.getElementById('whatsapp').value = settings.whatsapp;
    document.getElementById('instagram').value = settings.instagram;
    document.getElementById('address').value = settings.address;
    document.getElementById('weekdayHours').value = settings.weekdayHours;
    document.getElementById('sundayHours').value = settings.sundayHours;
}

// === MODAL FUNCTIONS ===
let currentSection = '';
let editingId = null;

function openModal(section, id = null) {
    currentSection = section;
    editingId = id;
    
    const modal = document.getElementById('dataModal');
    const modalTitle = document.getElementById('modalTitle');
    const formFields = document.getElementById('formFields');
    
    modal.classList.add('active');
    
    if (id) {
        modalTitle.textContent = `Edit ${section.slice(0, -1)}`;
        const data = Storage.get(STORAGE_KEYS[section]);
        const item = data.find(i => i.id === id);
        populateForm(section, item);
    } else {
        modalTitle.textContent = `Add New ${section.slice(0, -1)}`;
        formFields.innerHTML = getFormFields(section);
    }
}

function getFormFields(section) {
    const forms = {
        packages: `
            <div class="form-group">
                <label>Icon (Emoji)</label>
                <input type="text" id="icon" placeholder="💅" required>
            </div>
            <div class="form-group">
                <label>Package Name</label>
                <input type="text" id="name" placeholder="e.g., Premium Gel Polish" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="description" placeholder="Brief description" required></textarea>
            </div>
            <div class="form-group">
                <label>Price</label>
                <input type="text" id="price" placeholder="IDR 65.000" required>
            </div>
            <div class="form-group">
                <label>Features (comma separated)</label>
                <textarea id="features" placeholder="Feature 1, Feature 2, Feature 3" required></textarea>
            </div>
        `,
        tiers: `
            <div class="form-group">
                <label>Emoji</label>
                <input type="text" id="emoji" placeholder="🌸" required>
            </div>
            <div class="form-group">
                <label>Tier Name</label>
                <input type="text" id="name" placeholder="Tier 1 - Simple Cute" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="description" required></textarea>
            </div>
            <div class="form-group">
                <label>Examples (comma separated)</label>
                <textarea id="examples" placeholder="Line art, French nails, Polkadots" required></textarea>
            </div>
            <div class="form-group">
                <label>Price Range</label>
                <input type="text" id="priceRange" placeholder="IDR 20.000 - 50.000" required>
            </div>
            <div class="form-group">
                <label>Note</label>
                <input type="text" id="note" placeholder="Additional info">
            </div>
        `,
        extensions: `
            <div class="form-group">
                <label>Icon (Emoji)</label>
                <input type="text" id="icon" placeholder="💅" required>
            </div>
            <div class="form-group">
                <label>Service Name</label>
                <input type="text" id="name" placeholder="Soft Gel Extension" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="description" required></textarea>
            </div>
            <div class="form-group">
                <label>Price Range</label>
                <input type="text" id="priceRange" placeholder="IDR 150.000 - 200.000" required>
            </div>
            <div class="form-group">
                <label>Features (comma separated)</label>
                <textarea id="features" placeholder="Feature 1, Feature 2" required></textarea>
            </div>
        `,
        gallery: `
            <div class="form-group">
                <label>Image URL</label>
                <input type="text" id="url" placeholder="../assets/images/nail-1.jpg" required>
            </div>
            <div class="form-group">
                <label>Caption</label>
                <input type="text" id="caption" placeholder="Beautiful nail art" required>
            </div>
        `,
        testimonials: `
            <div class="form-group">
                <label>Customer Name</label>
                <input type="text" id="name" placeholder="Sarah M." required>
            </div>
            <div class="form-group">
                <label>Rating (1-5)</label>
                <select id="rating" required>
                    <option value="5">5 Stars ★★★★★</option>
                    <option value="4">4 Stars ★★★★☆</option>
                    <option value="3">3 Stars ★★★☆☆</option>
                    <option value="2">2 Stars ★★☆☆☆</option>
                    <option value="1">1 Star ★☆☆☆☆</option>
                </select>
            </div>
            <div class="form-group">
                <label>Review Text</label>
                <textarea id="review" rows="4" placeholder="Customer review..." required></textarea>
            </div>
            <div class="form-group">
                <label>Avatar Image URL</label>
                <input type="text" id="avatarUrl" placeholder="assets/images/customer-1.jpg" required>
                <small>Upload ke folder assets/images/ dulu</small>
            </div>
            <div class="form-group">
                <label>Before-After Image URL</label>
                <input type="text" id="beforeAfterUrl" placeholder="assets/images/before-after-1.jpg" required>
                <small>Upload ke folder assets/images/ dulu</small>
            </div>
        `
    };
    
    return forms[section] || '';
}

function populateForm(section, item) {
    const formFields = document.getElementById('formFields');
    formFields.innerHTML = getFormFields(section);
    
    Object.keys(item).forEach(key => {
        const field = document.getElementById(key);
        if (field) {
            if (Array.isArray(item[key])) {
                field.value = item[key].join(', ');
            } else if (key !== 'id' && key !== 'featured') {
                field.value = item[key];
            }
        }
    });
}

function closeModal() {
    document.getElementById('dataModal').classList.remove('active');
    document.getElementById('dataForm').reset();
    currentSection = '';
    editingId = null;
}

document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('cancelBtn')?.addEventListener('click', closeModal);

// === FORM SUBMISSION ===
document.getElementById('dataForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = Storage.get(STORAGE_KEYS[currentSection]) || [];
    const formData = {};
    
    document.querySelectorAll('#formFields input, #formFields textarea').forEach(field => {
        const key = field.id;
        let value = field.value;
        
        if (key === 'features' || key === 'examples') {
            value = value.split(',').map(v => v.trim());
        }
        
        formData[key] = value;
    });
    
    if (editingId) {
        const index = data.findIndex(item => item.id === editingId);
        data[index] = { ...data[index], ...formData };
        Toast.show('Item updated successfully! ✨');
    } else {
        const newId = data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1;
        data.push({ id: newId, ...formData });
        Toast.show('Item added successfully! 💅');
    }
    
    Storage.set(STORAGE_KEYS[currentSection], data);
    loadSection(currentSection);
    closeModal();
});

// === DELETE FUNCTION ===
function deleteItem(section, id) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    const data = Storage.get(STORAGE_KEYS[section]);
    const filtered = data.filter(item => item.id !== id);
    Storage.set(STORAGE_KEYS[section], filtered);
    loadSection(section);
    Toast.show('Item deleted successfully');
}

// === EDIT FUNCTION ===
function editItem(section, id) {
    openModal(section, id);
}

// Make functions global
window.deleteItem = deleteItem;
window.editItem = editItem;

// === SETTINGS FORMS ===
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const settings = {
        ...Storage.get(STORAGE_KEYS.settings),
        whatsapp: document.getElementById('whatsapp').value,
        instagram: document.getElementById('instagram').value,
        address: document.getElementById('address').value
    };
    
    Storage.set(STORAGE_KEYS.settings, settings);
    Toast.show('Contact information saved! 💅');
});

document.getElementById('hoursForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const settings = {
        ...Storage.get(STORAGE_KEYS.settings),
        weekdayHours: document.getElementById('weekdayHours').value,
        sundayHours: document.getElementById('sundayHours').value
    };
    
    Storage.set(STORAGE_KEYS.settings, settings);
    Toast.show('Business hours saved! ✨');
});

// Stats Form Handler
document.getElementById('statsForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const stats = {
        totalCustomers: parseInt(document.getElementById('totalCustomers').value),
        avgRating: document.getElementById('avgRating').value,
        totalReviews: document.getElementById('totalReviews').value,
        igFollowers: parseInt(document.getElementById('igFollowers').value),
        yearsExp: parseInt(document.getElementById('yearsExp').value)
    };
    
    Storage.set(STORAGE_KEYS.stats, stats);
    updateStatsPreview(stats);
    Toast.show('Statistics saved! 📊 Data akan tampil di landing page');
});

// Real-time preview update for stats form
['totalCustomers', 'avgRating', 'totalReviews', 'igFollowers', 'yearsExp'].forEach(fieldId => {
    document.getElementById(fieldId)?.addEventListener('input', (e) => {
        const stats = {
            totalCustomers: parseInt(document.getElementById('totalCustomers').value) || 0,
            avgRating: document.getElementById('avgRating').value || '0',
            totalReviews: document.getElementById('totalReviews').value || '0',
            igFollowers: parseInt(document.getElementById('igFollowers').value) || 0,
            yearsExp: parseInt(document.getElementById('yearsExp').value) || 0
        };
        updateStatsPreview(stats);
    });
});

document.getElementById('passwordForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const current = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    
    if (current !== AUTH.password) {
        Toast.show('Current password is incorrect', 'error');
        return;
    }
    
    if (newPass !== confirm) {
        Toast.show('Passwords do not match', 'error');
        return;
    }
    
    if (newPass.length < 6) {
        Toast.show('Password must be at least 6 characters', 'error');
        return;
    }
    
    AUTH.password = newPass;
    document.getElementById('passwordForm').reset();
    Toast.show('Password updated successfully! 🔒');
});

// === INITIALIZE ===
console.log('%c💅 Admin Panel Loaded', 'font-size: 16px; color: #d9b18a; font-weight: bold;');
