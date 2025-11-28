# 🚀 Migrasi ke Vercel & Setup Admin Panel

Project kamu sudah siap untuk dideploy ke Vercel! 
Karena kita pindah dari Netlify, ada beberapa penyesuaian yang harus dilakukan agar Admin Panel (CMS) tetap jalan.

---

## 1️⃣ Deploy ke Vercel

1. **Push kode terbaru ke GitHub**:
   ```bash
   git add .
   git commit -m "Persiapan migrasi ke Vercel"
   git push
   ```

2. **Buka Dashboard Vercel** (vercel.com):
   - Klik **"Add New..."** -> **"Project"**
   - Import repository: `Nails-Art` (milikmu)
   - Framework Preset: **Other** (biarkan default)
   - Root Directory: `./` (biarkan default)
   - Klik **"Deploy"**

3. **Tunggu Deploy Selesai**:
   - Setelah selesai, kamu akan dapat URL (misal: `nails-art.vercel.app`)
   - Website utamamu sudah live! 🎉

---

## 2️⃣ Mengaktifkan Admin Panel (PENTING!)

Di Vercel, kita tidak bisa pakai "Netlify Identity" (login email simple) lagi. Kita ganti pakai **GitHub Login**.

### Cara Login Admin Baru:
1. Buka `https://nama-project-kamu.vercel.app/admin`
2. Akan muncul tombol **"Login with GitHub"**
3. Klik & Authorize
4. Kamu akan masuk ke dashboard admin!

### ⚠️ Jika Error "Auth Provider Not Found" / "Netlify Identity not found":

Karena CMS butuh server autentikasi, ada 2 opsi:

#### Opsi A: Gunakan Server Publik (Paling Mudah)
Saya sudah siapkan config untuk ini. Coba login dulu. Jika gagal, edit file `admin-cms/config.yml`:

```yaml
backend:
  name: github
  repo: dewi-anggraini24/Nails-Art
  branch: main
  base_url: https://decap-cms-auth.vercel.app  # Tambahkan baris ini
```
*(Note: `decap-cms-auth.vercel.app` adalah server komunitas gratis. Kalau tidak jalan, pakai Opsi B)*

#### Opsi B: Deploy Auth Server Sendiri (Gratis & Lebih Stabil)
Jika kamu mau server sendiri (recommended):
1. Klik link ini untuk deploy server auth kilat di Vercelmu: 
   [Deploy Vercel Auth Backend](https://vercel.com/new/clone?repository-url=https://github.com/democrance/vercel-auth-backend)
2. Setelah deploy, kamu dapat URL (misal: `my-auth-server.vercel.app`)
3. Masukkan URL itu ke `admin-cms/config.yml`:
   ```yaml
   base_url: https://my-auth-server.vercel.app
   ```
4. Push perubahan ke GitHub.

---

## 📝 Ringkasan Perubahan Code

1. **Created `vercel.json`**: Konfigurasi agar `/admin` mengarah ke panel CMS.
2. **Updated `admin-cms/config.yml`**: Mengubah backend dari `git-gateway` (Netlify) ke `github` (Vercel).
3. **Removed Netlify Identity**: Menghapus script login lama dari `index.html` karena tidak jalan di Vercel.

---

## ❓ FAQ

**Q: Kenapa ribet pakai OAuth/GitHub login?**
A: Karena Vercel adalah hosting murni, tidak punya fitur user management bawaan seperti Netlify. Jadi kita "numpang" login pakai GitHub (aman & gratis).

**Q: Apa data saya hilang?**
A: **TIDAK**. Semua data (testimoni, harga, dll) tersimpan di folder `_data/` di GitHub. Aman selamanya.

**Q: Apakah kuota Vercel cukup?**
A: **Sangat cukup!** Kuota bandwidth Vercel jauh lebih besar untuk free tier dibanding Netlify (100GB vs 100GB tapi soft limitnya lebih longgar biasanya).

Selamat mencoba di rumah baru! 🏠✨
