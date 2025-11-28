# 🚀 Netlify CMS Setup Guide

## ✅ Yang Sudah Disetup

Netlify CMS (Decap CMS) sudah **SIAP PAKAI** dengan features:

### 📁 File Structure:
```
Nails-Art-Dewi/
├── admin-cms/
│   ├── index.html          # CMS admin panel
│   └── config.yml          # CMS configuration
├── _data/                  # Data storage (Git-based)
│   ├── testimonials/       # Customer reviews
│   ├── stats/              # Social proof numbers
│   ├── packages/           # Gel polish packages
│   ├── tiers/              # Nail art tiers
│   ├── extensions/         # Extension services
│   ├── gallery/            # Gallery images
│   └── settings/           # Site settings
├── js/
│   └── cms-loader.js       # Load data dari CMS
└── netlify.toml            # Netlify configuration
```

### 🎯 Collections Available:
1. ✅ **Testimonials** - Customer reviews dengan foto
2. ✅ **Social Proof Stats** - Numbers (customers, rating, followers)
3. ✅ **Packages** - Gel polish packages & pricing
4. ✅ **Tiers** - Nail art tier levels
5. ✅ **Extensions** - Extension services
6. ✅ **Gallery** - Nail art photos
7. ✅ **Settings** - Contact info, hours, SEO

---

## 📋 Deployment Steps

### Step 1: Push ke GitHub

```bash
# 1. Initialize git (if not yet)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Add Netlify CMS setup"

# 4. Add remote (ganti dengan repo kamu)
git remote add origin https://github.com/username/repo-name.git

# 5. Push
git push -u origin main
```

### Step 2: Deploy ke Netlify

#### A. Via Netlify Website (Easiest)

1. **Buka** [netlify.com](https://netlify.com)
2. **Sign up/Login** dengan GitHub account
3. **Click** "Add new site" → "Import an existing project"
4. **Connect** GitHub repository
5. **Deploy settings:**
   - Branch: `main`
   - Build command: (leave empty)
   - Publish directory: `.` (root)
6. **Click** "Deploy site"

#### B. Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Step 3: Enable Netlify Identity

**PENTING**: CMS butuh authentication!

1. **Di Netlify Dashboard:**
   - Go to "Site settings"
   - Click "Identity"
   - Click "Enable Identity"

2. **Enable Git Gateway:**
   - Scroll down ke "Services"
   - Click "Enable Git Gateway"
   - This allows CMS to commit changes to GitHub

3. **Invite yourself:**
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter email kamu
   - Check email & accept invitation

### Step 4: Configure Registration

1. **Open** Netlify Identity settings
2. **Registration preferences:**
   - Set to "Invite only" (recommended)
   - Or "Open" jika mau public signup

3. **External providers** (optional):
   - Enable GitHub, Google, etc untuk login

---

## 🎨 Cara Pakai Admin Panel

### Login:

1. **Visit:** `https://yoursite.netlify.app/admin`
2. **Login** dengan Netlify Identity:
   - Email & password (dari invitation)
   - Or GitHub/Google jika enabled
3. **Dashboard** akan muncul!

### Edit Testimonials:

```
1. Click "Testimonials" di sidebar
2. Click "New Testimonial"
3. Fill form:
   - Customer Name
   - Rating (1-5)
   - Review Text
   - Upload Avatar
   - Upload Before-After Image
4. Click "Save"
5. Click "Publish" (top right)
6. Wait 2-3 minutes → Auto-deploy!
```

### Update Prices:

```
1. Click "Gel Polish Packages" di sidebar
2. Select package yang mau di-update
3. Edit "Price" field
4. Click "Save" → "Publish"
5. Done!
```

### Update Stats:

```
1. Click "Social Proof Statistics"
2. Edit numbers:
   - Total Customers
   - Average Rating
   - Total Reviews
   - IG Followers
   - Years Experience
3. Save → Publish
4. Stats auto-update di website!
```

---

## 📸 Media Management

### Upload Images:

**Method 1: Via CMS (Recommended)**
```
1. Di form testimonial/gallery
2. Click "Choose an image"
3. Upload dari computer
4. Image auto-uploaded ke Git
5. Path auto-generated
```

**Method 2: Manual Upload**
```
1. Upload ke /assets/images/
2. Commit & push ke GitHub
3. Use path di CMS: /assets/images/filename.jpg
```

### Image Best Practices:

✅ **Compress** sebelum upload (< 500KB)
✅ Use **descriptive names** (customer-sarah.jpg, not IMG_1234.jpg)
✅ Optimal sizes:
   - Avatar: 200x200px
   - Before-After: 800x600px
   - Gallery: 600x800px

---

## 🔄 Workflow Setelah Edit

```
Edit di Admin Panel
  ↓
Click "Save"
  ↓
Click "Publish"
  ↓
CMS commits to GitHub
  ↓
GitHub triggers Netlify
  ↓
Netlify rebuilds site (2-3 min)
  ↓
Website updated!
  ↓
All visitors see changes
```

---

## 🎯 Editorial Workflow (Optional)

### Enable Draft Mode:

Di `config.yml`, add:
```yaml
publish_mode: editorial_workflow
```

**Benefits:**
- Save as Draft
- Request Review
- Publish when ready
- Better for teams

### Workflow States:
```
Draft → In Review → Ready → Published
```

---

## 🛠️ Troubleshooting

### Problem: Cannot login to /admin

**Solution:**
1. Check Netlify Identity is enabled
2. Check Git Gateway is enabled
3. Verify email invitation accepted
4. Clear browser cache
5. Try incognito mode

### Problem: Changes not appearing

**Solution:**
1. Check "Deploys" tab di Netlify dashboard
2. Wait for deploy to finish (2-3 min)
3. Hard refresh browser (Ctrl+Shift+R)
4. Check if publish was clicked (not just save)

### Problem: Image upload fails

**Solution:**
1. Check file size < 5MB
2. Check file format (JPG/PNG)
3. Try compress image first
4. Check Git Gateway is enabled

### Problem: Build failed

**Solution:**
1. Check "Deploys" → "Deploy log"
2. Look for error messages
3. Verify netlify.toml syntax
4. Check config.yml syntax (YAML is strict!)

---

## 📊 Configuration Tips

### Change Backend Branch:

In `config.yml`:
```yaml
backend:
  name: git-gateway
  branch: main  # Change to 'master' if needed
```

### Add More Collections:

In `config.yml`:
```yaml
collections:
  - name: "blog"
    label: "Blog Posts"
    folder: "_data/blog"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Date", name: "date", widget: "datetime"}
      - {label: "Body", name: "body", widget: "markdown"}
```

### Customize Widget Options:

```yaml
# String with pattern validation
- {label: "Phone", name: "phone", widget: "string", pattern: ['^\\+62', 'Must start with +62']}

# Number with min/max
- {label: "Price", name: "price", widget: "number", min: 0, max: 1000000}

# Select with options
- {label: "Status", name: "status", widget: "select", options: ["active", "inactive"]}
```

---

## 🔒 Security Best Practices

### 1. Restrict Access:
- Set Identity to "Invite only"
- Only invite trusted users
- Use strong passwords

### 2. Enable 2FA:
- Go to Netlify account settings
- Enable two-factor authentication

### 3. Review Commits:
- Check GitHub commits regularly
- Monitor who's making changes
- Use branch protection if multiple admins

### 4. Backup:
- GitHub = automatic backup
- Download /_data folder regularly
- Export settings periodically

---

## 💰 Costs

### Free Tier Includes:
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ 1000 Identity users
- ✅ HTTPS/SSL
- ✅ Custom domain
- ✅ Form submissions

### Paid Plans (if needed):
- **Pro**: $19/month (1TB bandwidth, more features)
- **Business**: $99/month (team features)

**For nail salon website: FREE TIER is MORE than enough!** ✅

---

## 📈 Performance

### Build Times:
- Initial deploy: 1-2 minutes
- Content updates: 30-60 seconds
- Media uploads: 2-3 minutes

### Caching:
- Static files cached by CDN
- Images auto-optimized
- Fast global delivery

### Tips for Speed:
- Compress images before upload
- Use WebP format if possible
- Minimize large files
- Enable Netlify Image CDN (in settings)

---

## 🎓 Learning Resources

### Official Docs:
- **Decap CMS**: https://decapcms.org/docs/
- **Netlify**: https://docs.netlify.com/
- **Git Gateway**: https://docs.netlify.com/visitor-access/git-gateway/

### Video Tutorials:
- Search YouTube: "Netlify CMS tutorial"
- Search: "Decap CMS setup"

### Community:
- Netlify Community Forum
- GitHub Discussions
- Stack Overflow

---

## ✅ Checklist Deploy

- [ ] Push code ke GitHub
- [ ] Connect repo ke Netlify
- [ ] Deploy successful
- [ ] Enable Netlify Identity
- [ ] Enable Git Gateway
- [ ] Invite yourself as user
- [ ] Accept email invitation
- [ ] Login to /admin
- [ ] Test create testimonial
- [ ] Test update stats
- [ ] Test image upload
- [ ] Verify changes appear on site
- [ ] Set custom domain (optional)
- [ ] Setup DNS (if custom domain)
- [ ] Test from mobile device
- [ ] Share admin URL with team (if any)

---

## 🎉 What's Next?

After successful deployment:

1. **Replace dummy data:**
   - Delete default testimonials
   - Add real customer reviews
   - Update real prices
   - Upload actual photos

2. **Customize settings:**
   - Update WhatsApp number
   - Update Instagram handle
   - Update address & maps
   - Update business hours

3. **SEO optimization:**
   - Update site title & description
   - Add proper keywords
   - Submit sitemap to Google
   - Setup Google Analytics

4. **Marketing:**
   - Share website link
   - Post on Instagram
   - Add to WhatsApp status
   - Print on business cards

---

## 🆘 Need Help?

### Quick Support:
1. Check this documentation first
2. Check Netlify dashboard logs
3. Check browser console (F12)
4. Google error messages
5. Ask in Netlify community forum

### Common Questions:

**Q: Berapa lama deploy?**
A: 2-3 menit per update

**Q: Bisa upload video?**
A: Sebaiknya tidak (large files). Use YouTube embed instead.

**Q: Bisa multiple admin?**
A: Ya! Invite users via Netlify Identity

**Q: Data aman?**
A: Ya! Tersimpan di GitHub + Netlify backup

**Q: Butuh database?**
A: Tidak! Git-based storage is enough

---

**Congratulations! 🎉 Website kamu sekarang punya CMS professional yang GRATIS!**

Selamat meng-manage content dengan mudah! 💅✨
