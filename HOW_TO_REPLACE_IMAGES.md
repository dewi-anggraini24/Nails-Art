# 📸 Cara Replace Dummy Images dengan Foto Asli

## ✅ Gambar Dummy Sudah Terpasang!

Website sekarang menggunakan **placeholder images** yang auto-generate:
- **Avatars**: https://i.pravatar.cc/ (random profile pictures)
- **Before-After**: https://picsum.photos/ (random stock photos)

Semua gambar ini **bisa di-replace via admin panel** tanpa coding!

---

## 🎨 Cara Replace via Admin Panel (Decap CMS)

### **Step 1: Login ke Admin**

1. **Visit**: https://nails-art.netlify.app/admin-cms/
2. **Login** dengan Netlify Identity credentials
3. **Dashboard** akan terbuka

---

### **Step 2: Edit Testimonial & Upload Images**

#### A. Pilih Testimonial
1. **Click** collection: **"Testimonials"**
2. **Pilih** salah satu testimonial (contoh: Sarah M.)
3. **Click "Edit"**

#### B. Upload Avatar Customer
1. **Scroll** ke field: **"Customer Avatar"**
2. **Click** "Choose an image" atau drag-drop
3. **Upload** foto customer (200x200px recommended)
4. **Select** dari library atau upload baru
5. **Avatar URL** akan otomatis berubah

#### C. Upload Before-After Photo
1. **Scroll** ke field: **"Before-After Image"**
2. **Click** "Choose an image"
3. **Upload** foto nail art results (800x600px recommended)
4. **Select** file
5. **Before-After URL** akan otomatis berubah

#### D. Publish Changes
1. **Click "Save"** (button di atas)
2. **Click "Publish"**
3. **Wait 2-3 minutes** for auto-deploy
4. **Refresh website** → Images berubah! ✅

---

## 📋 Image Requirements

### **Customer Avatars:**
- **Format**: JPG, PNG, WebP
- **Size**: 200x200px (minimum 150x150px)
- **Aspect Ratio**: Square (1:1)
- **File Size**: < 500KB
- **Quality**: Clear, professional photo
- **Background**: Any (will be cropped circle)

### **Before-After Photos:**
- **Format**: JPG, PNG
- **Size**: 800x600px (minimum 600x400px)
- **Aspect Ratio**: 4:3 landscape
- **File Size**: < 1MB
- **Quality**: High-res, well-lit
- **Focus**: Show nail art clearly

---

## 🎯 Best Practices

### Photography Tips:

#### **Customer Photos:**
1. ✅ Natural lighting atau ring light
2. ✅ Face clearly visible
3. ✅ Friendly expression
4. ✅ Professional look
5. ✅ **Get customer permission!**

#### **Nail Art Photos:**
1. ✅ Top-down angle (bird's eye view)
2. ✅ Clean white/cream background
3. ✅ Natural or bright lighting
4. ✅ Focus on nail details
5. ✅ Show all 5 nails clearly
6. ✅ Hands relaxed & elegant pose

---

## 📂 File Organization (Optional)

CMS automatically organizes uploads in:
```
/assets/images/
├── avatars/          ← Customer photos
├── before-after/     ← Nail art results
└── uploads/          ← Other images
```

**Naming convention:**
```
Good: customer-sarah-m.jpg, nailart-french-manicure.jpg
Bad: IMG_1234.jpg, photo.jpg
```

---

## 🔄 Bulk Replace (Multiple Images)

### Method 1: One by One via Admin
1. Login admin
2. Edit each testimonial
3. Upload new images
4. Publish

### Method 2: Via Git (Advanced)
1. Upload images ke `/assets/images/`
2. Edit testimonial `.md` files
3. Update URLs
4. Push to GitHub

---

## 🖼️ Where Images Are Used

### Testimonials Section (Homepage):
- **6 customer avatars** (circular)
- **6 before-after photos** (landscape cards)

### Admin Panel:
- **Upload interface** for new testimonials
- **Image library** untuk reuse

### Future Features (Via Admin):
- Gallery section images
- Package preview images
- Logo upload

---

## ⚠️ Common Issues & Solutions

### Issue 1: Image Terlalu Besar
**Solution:** Resize dulu sebelum upload
- Tools: TinyPNG.com, Squoosh.app
- Target: < 500KB for avatars, < 1MB for before-after

### Issue 2: Image Not Showing
**Solution:**
1. Check deploy status (wait 2-3 min)
2. Clear browser cache (Ctrl+F5)
3. Check image URL di testimonial data

### Issue 3: Image Quality Blur
**Solution:** Upload higher resolution
- Minimum: 600x400px for before-after
- Recommended: 800x600px or higher

### Issue 4: Wrong Aspect Ratio
**Solution:** Crop before upload
- Avatars: 1:1 (square)
- Before-After: 4:3 (landscape)
- Tools: Canva, Photopea (free online editors)

---

## 🎨 Free Image Resources (If Needed)

### Stock Photos:
- **Unsplash**: https://unsplash.com/s/photos/nail-art
- **Pexels**: https://pexels.com/search/manicure
- **Pixabay**: https://pixabay.com/images/search/nails

### Image Editing:
- **Canva**: https://canva.com (crop, resize, filters)
- **Photopea**: https://photopea.com (free Photoshop alternative)
- **TinyPNG**: https://tinypng.com (compress images)

---

## ✅ Checklist Before Go Live

- [ ] Replace all 6 customer avatars
- [ ] Replace all 6 before-after photos
- [ ] Get customer permissions for photos
- [ ] Optimize image sizes (< 1MB each)
- [ ] Test on mobile devices
- [ ] Check loading speed
- [ ] Verify all images load properly

---

## 🚀 Quick Summary

**Current State:** Dummy placeholders from pravatar.cc & picsum.photos
**Goal:** Upload real customer photos & nail art results
**Method:** Via admin panel at `/admin-cms/`
**Time:** 5-10 minutes per testimonial
**Deploy:** Auto-deploy in 2-3 minutes after publish

**No coding required!** 💅✨

---

## 📞 Need Help?

If images tidak work after upload:
1. Check Netlify deploy log
2. Verify image URLs di GitHub repo
3. Clear browser cache
4. Wait 3-5 minutes for CDN propagation

**Ready to make it yours!** 🎨📸
