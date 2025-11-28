# 💅 Nail Art by Dewi Salon - Landing Page

Landing page minimalis, elegan, dan estetik untuk bisnis nail art dengan admin panel CRUD lengkap.

## ✨ Fitur

### Landing Page
- **Design Minimalis & Elegan**: Pastel color palette, rounded cards, soft shadows
- **Responsive**: Mobile-friendly, tampil sempurna di semua device
- **Animasi Halus**:
  - Scroll animations (fade-in, slide-up dengan Intersection Observer)
  - Hover effects pada cards dan buttons
  - Floating decorations (sparkle, hearts, bubbles)
  - Gallery carousel dengan touch/swipe support
- **Sections Lengkap**:
  - Hero section dengan CTA
  - Why Choose Us (4 value propositions)
  - Gel Polish Packages (3 tiers)
  - Nail Art Tiers (Simple, Soft Glam, Extra Playful)
  - Extensions & Add-ons
  - Gallery carousel
  - Booking section
  - FAQ
  - Footer dengan contact info

### Admin Panel
- **Login System**: Username & password authentication
- **CRUD Operations**: Create, Read, Update, Delete untuk:
  - Packages (gel polish packages)
  - Gallery (nail art photos)
  - Tiers (nail art service tiers)
  - Extensions (extension services)
- **Settings Management**:
  - Contact information
  - Business hours
  - Password change
- **Data Storage**: LocalStorage-based (persistent)
- **Toast Notifications**: User feedback untuk setiap action
- **Responsive Dashboard**: Mobile-friendly admin interface

## 📁 Struktur Folder

```
Nails-Art-Dewi/
├── index.html              # Landing page utama
├── README.md               # Dokumentasi
├── css/
│   └── style.css          # Styling landing page
├── js/
│   └── script.js          # JavaScript untuk animasi & carousel
├── admin/
│   ├── admin.html         # Admin panel interface
│   ├── admin-style.css    # Styling admin panel
│   └── admin.js           # CRUD functionality
└── assets/
    └── images/
        ├── hero-nails.jpg  # Hero section image
        ├── nail-1.jpg      # Gallery item 1
        ├── nail-2.jpg      # Gallery item 2
        ├── nail-3.jpg      # Gallery item 3
        ├── nail-4.jpg      # Gallery item 4
        ├── nail-5.jpg      # Gallery item 5
        └── nail-6.jpg      # Gallery item 6
```

## 🎨 Design System

### Color Palette
- **White**: `#ffffff` - Background utama
- **Cream**: `#faf6f2` - Secondary background
- **Gold Brown**: `#d9b18a` - Primary accent
- **Gold Brown Dark**: `#d19b6c` - Primary accent dark
- **Pastel Pink**: `#f7e8ef` - Soft accent
- **Pastel Lilac**: `#f3e9ff` - Soft accent alt

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- **xs**: 8px
- **sm**: 16px
- **md**: 24px
- **lg**: 40px
- **xl**: 64px
- **xxl**: 96px

### Border Radius
- **sm**: 12px
- **md**: 20px
- **lg**: 28px

## 🚀 Cara Menggunakan

### 1. Setup Awal
1. Download/clone repository ini
2. Buka `index.html` di browser untuk melihat landing page
3. Buka `admin/admin.html` untuk akses admin panel

### 2. Menambahkan Gambar
Letakkan gambar nail art Anda di folder `assets/images/`:
- `hero-nails.jpg` - Untuk hero section (recommended: 800x600px)
- `nail-1.jpg` hingga `nail-6.jpg` - Untuk gallery (recommended: 600x800px)

**Tips Gambar**:
- Format: JPG atau PNG
- Ukuran maksimal: 500KB per file (compress untuk performa)
- Aspect ratio gallery: 3:4 (portrait)
- Pastikan gambar berkualitas tinggi dan aesthetic

### 3. Admin Panel

#### Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

#### Mengubah Password Default
1. Login ke admin panel
2. Buka menu Settings
3. Isi form "Change Password"
4. Password baru akan tersimpan

#### Mengelola Packages
1. Login ke admin panel
2. Klik menu "Packages"
3. Klik "Add New" untuk menambah package baru
4. Isi form:
   - Icon (emoji)
   - Package name
   - Description
   - Price (format: IDR xx.xxx)
   - Features (pisahkan dengan koma)
5. Klik "Save"

#### Mengelola Gallery
1. Klik menu "Gallery"
2. Klik "Add New"
3. Isi:
   - Image URL (relative path: `../assets/images/nama-file.jpg`)
   - Caption
4. Klik "Save"

#### Mengelola Nail Art Tiers
1. Klik menu "Nail Art Tiers"
2. Tambah/edit tier dengan form:
   - Emoji
   - Tier name
   - Description
   - Examples (pisahkan dengan koma)
   - Price range
   - Note

#### Mengelola Extensions
1. Klik menu "Extensions"
2. Tambah/edit extension service
3. Isi form lengkap
4. Save

#### Settings
Update informasi kontak dan jam operasional:
- WhatsApp number
- Instagram handle
- Address
- Weekday hours
- Sunday hours

## 📱 WhatsApp Integration

Ganti nomor WhatsApp di `index.html`:
```html
href="https://wa.me/6281234567890"
```
Ganti `6281234567890` dengan nomor WhatsApp Anda (format: 62xxx tanpa +).

## 🎯 Optimasi & Tips

### Performance
- Compress semua gambar sebelum upload
- Gunakan WebP format untuk gambar modern
- Aktifkan browser caching

### SEO
- Update meta tags di `<head>`:
  ```html
  <meta name="description" content="Your description">
  <meta name="keywords" content="nail art, gel polish, ...">
  ```
- Tambahkan Google Analytics tracking code

### Animasi
Semua animasi menggunakan:
- **Intersection Observer**: Efficient scroll animations
- **CSS Transitions**: Smooth hover effects
- **RequestAnimationFrame**: Optimized parallax

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🔧 Kustomisasi

### Mengubah Warna
Edit di `css/style.css`:
```css
:root {
    --gold-brown: #your-color;
    --cream: #your-color;
    /* dst */
}
```

### Mengubah Font
Ganti di `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Lalu update di CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Menambah Section Baru
1. Tambah HTML di `index.html`
2. Tambah styling di `css/style.css`
3. Tambah `class="animate-on-scroll"` untuk animasi

## 🐛 Troubleshooting

### Gambar tidak muncul
- Cek path gambar sudah benar
- Pastikan file ada di folder `assets/images/`
- Cek nama file (case-sensitive)

### Animasi tidak jalan
- Cek browser support untuk Intersection Observer
- Buka Console untuk lihat error
- Clear cache browser

### Data admin hilang
- Data tersimpan di localStorage browser
- Jangan clear browser data
- Export data penting secara manual

### Gallery carousel tidak slide
- Cek JavaScript console untuk error
- Pastikan ada minimal 3 gambar
- Refresh browser

## 📦 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

Free to use untuk Dewi Salon. Customize sesuai kebutuhan.

## 💡 Credits

Design & Development by AI Assistant
Inspirasi: Linear.app, modern nail art aesthetic websites

---

## 🎨 Placeholder Images

Karena gambar asli belum tersedia, tambahkan gambar Anda sendiri ke folder `assets/images/` dengan nama:
- `hero-nails.jpg` - Hero section
- `nail-1.jpg` - Gallery item 1
- `nail-2.jpg` - Gallery item 2
- `nail-3.jpg` - Gallery item 3
- `nail-4.jpg` - Gallery item 4
- `nail-5.jpg` - Gallery item 5
- `nail-6.jpg` - Gallery item 6

Atau gunakan placeholder dari sumber gratis seperti:
- Unsplash.com (search: nail art)
- Pexels.com (search: manicure)
- Your own nail art photos!

---

Selamat menggunakan! Jika ada pertanyaan atau butuh bantuan kustomisasi, silakan kontak developer 💅✨
