# 🚀 Quick Setup Guide - Nail Art by Dewi Salon

## ⚡ 5-Minute Setup

### Step 1: Check Files
Pastikan struktur folder lengkap:
```
✅ index.html
✅ README.md
✅ css/style.css
✅ js/script.js
✅ admin/admin.html
✅ admin/admin-style.css
✅ admin/admin.js
✅ assets/images/ (folder)
```

### Step 2: Add Images
1. Siapkan 7 gambar nail art
2. Resize & compress (lihat `assets/images/README.md`)
3. Rename sesuai panduan:
   - `hero-nails.jpg` (800x600px)
   - `nail-1.jpg` sampai `nail-6.jpg` (600x800px)
4. Copy ke folder `assets/images/`

### Step 3: Update Contact Info
Edit `index.html`, cari dan ganti:

#### WhatsApp Number
```html
href="https://wa.me/6281234567890"
```
Ganti dengan nomor Anda (format: 62xxx)

#### Instagram
```html
<p>📸 Instagram: <a href="https://instagram.com/dewisalon" target="_blank">@dewisalon</a></p>
```

#### Address
```html
<p>📍 Jl. Contoh Alamat No. 123, Jakarta</p>
```

### Step 4: Test Website
1. Buka `index.html` di browser
2. Scroll dan test semua animasi
3. Klik semua tombol WhatsApp
4. Test gallery carousel (klik prev/next)
5. Test responsive (resize browser window)

### Step 5: Setup Admin
1. Buka `admin/admin.html`
2. Login dengan:
   - Username: `admin`
   - Password: `admin123`
3. Ganti password di Settings
4. Update contact info di Settings
5. Tambah/edit packages sesuai kebutuhan

---

## 🎨 Kustomisasi Lanjutan

### Ganti Warna Brand
Edit `css/style.css`, cari `:root` dan ubah:
```css
:root {
    --gold-brown: #d9b18a;        /* Warna utama Anda */
    --gold-brown-dark: #d19b6c;   /* Warna gelap */
    --pastel-pink: #f7e8ef;       /* Aksen 1 */
    --pastel-lilac: #f3e9ff;      /* Aksen 2 */
}
```

### Ganti Font
1. Pilih font di [Google Fonts](https://fonts.google.com)
2. Copy link tag ke `<head>` di `index.html` dan `admin/admin.html`
3. Update CSS:
```css
body {
    font-family: 'FontPilihan', sans-serif;
}
```

### Tambah Section
Bisa tambah section baru seperti:
- Testimonials
- Before/After
- Team/About
- Blog/Tips

---

## 📱 Deploy ke Hosting

### Option 1: Netlify (Gratis)
1. Buat akun di [netlify.com](https://netlify.com)
2. Drag & drop folder project
3. Domain otomatis: `your-site.netlify.app`
4. Custom domain (opsional)

### Option 2: GitHub Pages (Gratis)
1. Push ke GitHub repository
2. Settings → Pages
3. Enable GitHub Pages
4. Domain: `username.github.io/repo-name`

### Option 3: Vercel (Gratis)
1. Buat akun di [vercel.com](https://vercel.com)
2. Import project
3. Deploy otomatis

### Option 4: Hosting Tradisional
1. Zip semua file
2. Upload via FTP ke hosting
3. Extract di public_html
4. Akses via domain Anda

---

## 🔒 Security Tips

### Admin Panel
1. **Ganti password default** segera!
2. Jangan share login credentials
3. Password minimal 8 karakter, kombinasi huruf-angka-simbol
4. Untuk production, consider:
   - Backend authentication (PHP, Node.js)
   - Database untuk data (MySQL, MongoDB)
   - User roles & permissions

### Data Backup
LocalStorage bisa hilang jika:
- User clear browser data
- Browser reinstall
- Ganti device

**Solusi**:
1. Export data secara manual (copy dari DevTools)
2. Implementasi export/import feature
3. Atau gunakan backend + database

---

## 🎯 SEO Optimization

### Meta Tags
Tambahkan di `<head>` index.html:
```html
<meta name="description" content="Nail Art by Dewi Salon - Layanan gel polish, nail art custom, dan extension berkualitas premium di Jakarta">
<meta name="keywords" content="nail art, gel polish, manicure, nail extension, jakarta">
<meta property="og:title" content="Nail Art by Dewi Salon">
<meta property="og:description" content="Kuku cantik, clean, dan estetik yang tahan lama">
<meta property="og:image" content="https://yoursite.com/assets/images/hero-nails.jpg">
<meta property="og:url" content="https://yoursite.com">
```

### Google Analytics
1. Buat akun Google Analytics
2. Dapatkan tracking code
3. Paste sebelum `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Sitemap
Buat file `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 📊 Analytics & Tracking

### WhatsApp Click Tracking
Sudah built-in di `js/script.js`:
```javascript
// Tracks semua klik WhatsApp link
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp clicked:', link.href);
        // Add your analytics here
    });
});
```

Integrate dengan:
- Google Analytics events
- Facebook Pixel
- Custom tracking

---

## 🐛 Common Issues

### Gambar tidak muncul
**Solusi**:
- Cek path file benar
- Cek nama file (case-sensitive)
- Refresh dengan Ctrl+F5

### Animasi lag di mobile
**Solusi**:
- Compress gambar lebih kecil
- Kurangi jumlah floating decorations
- Disable parallax di mobile

### Admin data hilang
**Solusi**:
- Jangan clear browser cache
- Backup data dari localStorage
- Pertimbangkan backend solution

### Gallery tidak slide
**Solusi**:
- Minimal harus ada 3 gambar
- Check Console untuk errors
- Refresh browser

---

## 📞 Support

Jika ada masalah atau butuh kustomisasi:
1. Check README.md untuk dokumentasi lengkap
2. Check Console browser untuk error messages
3. Validate HTML/CSS dengan W3C validator

---

## ✅ Launch Checklist

Sebelum go-live:
- [ ] Semua gambar sudah di upload
- [ ] WhatsApp number sudah diganti
- [ ] Contact info sudah update
- [ ] Admin password sudah diganti
- [ ] Test di berbagai browser
- [ ] Test di mobile device
- [ ] Gallery terisi lengkap
- [ ] Packages info sudah akurat
- [ ] Harga sudah sesuai
- [ ] Meta tags SEO sudah diisi
- [ ] Analytics sudah dipasang
- [ ] Backup data admin

---

## 🎉 Next Steps

After launch:
1. **Marketing**: Share di Instagram, WhatsApp status
2. **Content**: Update gallery secara berkala
3. **Engagement**: Respond cepat di WhatsApp
4. **Analytics**: Monitor traffic dan conversions
5. **Improvement**: Gather feedback dan iterate

---

Selamat launching website! 💅✨

Semoga banyak customers yang datang lewat website ini! 🚀
