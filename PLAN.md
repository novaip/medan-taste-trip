# 📋 EXECUTION PLAN: Landing Page Media Kit & Brand Collaboration
**Niche:** Kuliner & Travel Medan  
**Target:** 100% Pixel-Consistent implementation from Google Stitch UI Design  
**Tech Stack:** Semantic HTML5, Tailwind CSS, Vanilla JavaScript  
**Deployment Target:** GitHub + Cloudflare Pages  

---

## 📑 Daftar Isi
1. [Prinsip & Standar Pengembangan](#1-prinsip--standar-pengembangan)
2. [Arsitektur File & Struktur Folder](#2-arsitektur-file--struktur-folder)
3. [Design System & Token Translation (Google Stitch ➔ Tailwind)](#3-design-system--token-translation-google-stitch--tailwind)
4. [Breakdown Komponen per Section (Mobile-First)](#4-breakdown-komponen-per-section-mobile-first)
5. [Spesifikasi Interaktivitas Vanilla JavaScript](#5-spesifikasi-interaktivitas-vanilla-javascript)
6. [Pre-Flight Checklist: SEO, Open Graph & Accessibility](#6-pre-flight-checklist-seo-open-graph--accessibility)
7. [Prosedur Deployment (GitHub ➔ Cloudflare Pages)](#7-prosedur-deployment-github--cloudflare-pages)
8. [Instruksi Eksekusi Khusus AI Coding Agent (Prompt Sequence)](#8-instruksi-eksekusi-khusus-ai-coding-agent-prompt-sequence)

---

## 1. Prinsip & Standar Pengembangan

Untuk memastikan hasil implementasi akurat dan tidak melenceng dari desain Google Stitch:
- **No Heavy Frameworks:** Murni HTML5 semantik, CSS (Tailwind), dan Vanilla JS tanpa runtime dependencies (React/Vue/jQuery dilarang).
- **Pixel-Accurate Consistency:** Setiap token warna (HEX), spasi (padding/margin), tipografi (font size, line height, letter spacing), dan radius sudut pada Google Stitch harus dipetakan langsung ke Tailwind utility class atau custom theme config.
- **Mobile-First Approach:** Default CSS styling ditujukan untuk layar mobile (`360px - 480px`), kemudian ditingkatkan bertahap ke tablet (`md: 768px`) dan desktop (`lg: 1024px`, `xl: 1280px`).
- **Zero-Layout Shift (CLS 0):** Seluruh elemen gambar dan ikon wajib mencantumkan atribut `width`, `height`, dan `loading="lazy"`.
- **Accessibility (a11y):** Kontras rasio warna minimal WCAG AA (4.5:1), tombol interaktif memiliki `aria-label`, dan navigasi ramah pembaca layar (screen reader).

---

## 2. Arsitektur File & Struktur Folder

Struktur proyek dirancang bersih, modular, dan siap di-deploy secara statis ke Cloudflare Pages tanpa konfigurasi bundler yang rumit:

```text
d:/Belajar BLOGM/
├── .github/
│   └── workflows/
│       └── deploy.yml              # (Opsional jika menggunakan GitHub Actions, Cloudflare Pages native build lebih disarankan)
├── assets/
│   ├── css/
│   │   └── custom.css              # Custom utility tambahan (animasi toast, keyframes khusus Stitch)
│   ├── js/
│   │   ├── modules/
│   │   │   ├── mobile-menu.js      # Kontrol hamburger & drawer menu
│   │   │   ├── copy-email.js       # Clipboard API & toast notification
│   │   │   ├── form-validation.js  # Validasi form inquiry & feedback UI
│   │   │   └── stats-counter.js    # Animasi count-up angka metrik (IntersectionObserver)
│   │   └── main.js                 # Entry point inisialisasi semua modul JS
│   ├── images/
│   │   ├── hero/                   # Foto profil & visual makanan/destinasi Medan (WebP format)
│   │   ├── brands/                 # Logo brand klien sebelumnya (SVG/PNG transparan)
│   │   ├── portfolio/              # Foto thumbnail review kuliner/hotel/trip
│   │   ├── og-image.jpg            # Banner Open Graph 1200x630 px
│   │   └── favicon/                # Favicon.ico, apple-touch-icon, icon-192, icon-512
│   └── icons/                      # SVG icons inline atau sprite (Instagram, TikTok, Mail, Map, Star)
├── docs/
│   └── media-kit.pdf               # File Media Kit resmi yang dapat diunduh oleh Brand
├── _headers                        # Aturan HTTP Security & Caching Headers untuk Cloudflare Pages
├── _redirects                      # Aturan canonical URL & shortlinks (misal: /mediakit -> /docs/media-kit.pdf)
├── index.html                      # Halaman utama landing page (HTML5 Semantik)
├── package.json                    # Konfigurasi Tailwind CLI & scripts build/watch
├── tailwind.config.js              # Token warna, font family, & spacing dari Google Stitch
├── robots.txt                      # Direktif perayapan mesin pencari (SEO)
├── sitemap.xml                     # Peta situs XML untuk indexing Google
└── PLAN.md                         # Dokumen acuan eksekusi ini
```

---

## 3. Design System & Token Translation (Google Stitch ➔ Tailwind)

Petakan desain Google Stitch ke dalam `tailwind.config.js`:

### 3.1. Palette Warna (Niche: Kuliner & Wisata Medan)
*Karakter visual: Hangat, menggugah selera (kuliner), autentik, dan profesional untuk B2B brand deal.*

```javascript
// tailwind.config.js preview
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C84B31',     // Merah Rempah / Sambal Medan (Primary CTA, highlight text)
          primaryHover: '#A83B24',// Hover state primary
          secondary: '#EBB071',   // Kuning Bumbu / Kari Gurih (Badge, aksen rating, icon)
          dark: '#1D1D1D',        // Hitam Kopi Sidikalang (Teks utama, heading)
          muted: '#636B69',       // Abu-abu netral (Subtext, metadata)
          lightBg: '#FDFBF7',     // Putih Krem Lembut (Latar belakang utama, bukan putih murni #fff)
          cardBg: '#FFFFFF',      // Putih bersih untuk elevated cards
          accent: '#2D6E7E',      // Hijau Danau Toba / Tropis (Highlight travel & trip package)
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'], // Display & Heading dari Stitch
        body: ['Inter', 'system-ui', 'sans-serif'],            // Body readability tinggi
      },
      boxShadow: {
        'stitch-sm': '0 2px 8px -2px rgba(29, 29, 29, 0.06)',
        'stitch-md': '0 12px 24px -6px rgba(29, 29, 29, 0.08), 0 4px 8px -2px rgba(29, 29, 29, 0.04)',
        'stitch-hover': '0 20px 32px -8px rgba(200, 75, 49, 0.15)',
      },
      borderRadius: {
        'stitch-btn': '9999px', // Pill-shape CTA seperti ciri khas Stitch modern
        'stitch-card': '20px',  // Sudut membulat modern khas Google Stitch
      }
    }
  }
}
```

---

## 4. Breakdown Komponen per Section (Mobile-First)

Setiap bagian wajib menggunakan tag HTML5 yang tepat dan class responsif:

| Section # | Nama Section | Tag Semantik | Aturan Tata Letak (Mobile ➔ Desktop) | Elemen Stitch Wajib |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Top Utility & Header** | `<header role="banner">` | Mobile: Sticky glassmorphism blur, Logo + Hamburger menu.<br>Desktop (`lg:`): Sticky bar, logo teks/grafis, links menu horizontal, CTA "Unduh Media Kit". | Tombol CTA Pill, backdrop-blur-md, badge lokasi "Medan, ID". |
| **02** | **Hero Section** | `<section id="hero">` | Mobile: Stacked vertikal (Teks hook ➔ CTA stack ➔ Foto kreator dengan badge floating).<br>Desktop (`lg:`): 2-Kolom (55% Copywriting + 45% Foto kreator + Floating cards). | Headline berbobot tebal, Social Proof pills ("250K+ Foodies reached/bulan"), Two CTAs (Primary: Kolaborasi, Secondary: Copy Email). |
| **03** | **Brand Trust & Collab Logos** | `<section id="clients">` | Mobile: Horizontal auto-scroll / 2 baris grid 3 kolom berukuran logo proporsional.<br>Desktop: Grid 6 kolom dengan filter grayscale 80% yang menjadi full color saat hover. | Judul pengantar kecil uppercase: "DIPERCAYA OLEH BRAND & UMKM KULINER". |
| **04** | **Key Audience Metrics (Media Kit Bar)** | `<section id="metrics">` | Mobile: Grid 2x2 cards.<br>Desktop (`md:`): Bar memanjang 4 kolom dengan garis pemisah vertikal elegan. | Metrik utama: Total Followers, Monthly Impressions, Demografi Medan & Sumut (%), Dominasi Usia (18-34 thn). Angka dianimasikan dengan count-up. |
| **05** | **Services & Deliverables** | `<section id="services">` | Mobile: 1 kolom kartu vertikal.<br>Desktop (`lg:`): 3 kolom kartu berjejer (Cards elevated). | 3 Paket Layanan: <br>1. *Dine & Review* (Reels/TikTok + Google Maps 5★ Review)<br>2. *Travel & Staycation Medan/Sumut* (Story series + YouTube/Reels)<br>3. *Event & Grand Opening Attendance* (Live coverage + feed post). |
| **06** | **Portfolio & Content Highlights** | `<section id="portfolio">` | Mobile: Tab filter kategori (Semua, Kuliner Legendaris, Cafe Hits, Staycation) + 1 kolom feed.<br>Desktop (`md:`): Grid 3 kolom kartu video/foto dengan tag performa (views/engagement). | Tombol "Lihat Postingan Asli" (Link ke IG/TikTok), badge engagement rate ("1.2M Views"). |
| **07** | **Case Studies & Testimonials** | `<section id="testimonials">` | Mobile: Single card carousel / vertical card.<br>Desktop (`lg:`): 2-Kolom kartu testimoni dari Pemilik Resto / Marketing Brand dengan foto & nama bisnis. | Quote icon, 5-Star rating icon, badge metrik peningkatan omzet/reservasi klien. |
| **08** | **Collaboration Inquiry Form** | `<section id="contact">` | Mobile: 1 Kolom form lebar penuh.<br>Desktop (`lg:`): 2 Kolom (Kiri: Direct Contact details, WhatsApp, Email, FAQ ringkas; Kanan: Form input interaktif). | Input fields: Nama Brand/PIC, Email, Jenis Kolaborasi (Dropdown), Estimasi Anggaran (Pills/Radio), Catatan/Brief, Tombol Submit dengan indikator loading. |
| **09** | **Footer** | `<footer role="contentinfo">` | Mobile: Tumpuk di tengah (Center-aligned), icon medsos di bawah.<br>Desktop: 3 Kolom seimbang (Brand info + Quick links + Social channels). | Copyright, link ke Instagram/TikTok/YouTube, label "Dibuat dengan bangga di Medan". |

---

## 5. Spesifikasi Interaktivitas Vanilla JavaScript

Seluruh script dibuat tanpa library pihak ketiga (`Zero-Dependency`), menggunakan ES6 standard.

### 5.1. Mobile Drawer Navigation (`mobile-menu.js`)
- **Pemicu:** Tombol Hamburger (`#menu-toggle`) dengan ikon burger/silang (SVG).
- **Target:** Mobile Drawer Menu (`#mobile-drawer`) dan Backdrop Overlay (`#menu-overlay`).
- **Aksi:**
  1. Toggle class `hidden` atau `translate-x-full` dengan transisi CSS `transition-all duration-300 ease-in-out`.
  2. Kunci scrolling halaman saat menu terbuka (`document.body.classList.toggle('overflow-hidden')`).
  3. Tutup drawer otomatis ketika salah satu nav-link di-klik atau tombol `ESC` ditekan.
  4. Atribut aksesibilitas: Update `aria-expanded="true/false"`.

### 5.2. One-Click Copy Email & Floating Toast (`copy-email.js`)
- **Pemicu:** Tombol "Salin Email" (`#btn-copy-email`) di Hero atau Contact section.
- **Aksi:**
  1. Eksekusi `navigator.clipboard.writeText("kerjasama@namadomain.com")`.
  2. Tampilkan Toast Notification di kanan bawah / tengah atas:
     - Pesan: *"✓ Alamat email berhasil disalin ke clipboard!"*
     - Animasi: Slide-in + Fade-in (`opacity-100 translate-y-0`), jeda 3 detik, lalu slide-out (`opacity-0 translate-y-2`).
  3. Fallback: Jika Clipboard API diblokir browser, tampilkan prompt seleksi teks alternatif.

### 5.3. Form Validasi & Feedback State (`form-validation.js`)
- **Pemicu:** Submit form kolaborasi (`#collab-form`).
- **Aturan Validasi:**
  - Nama Brand/PIC: Wajib, minimal 3 karakter.
  - Email: Format email valid (`regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
  - Jenis Kolaborasi: Wajib dipilih (bukan opsi placeholder).
  - Pesan/Brief: Minimal 10 karakter.
- **Handling UI State:**
  - *Invalid:* Tambahkan border merah (`border-red-500`) dan teks error di bawah input yang bersangkutan.
  - *Submitting:* Ubah teks tombol menjadi *"Mengirim pesan..."*, tambahkan spinner icon SVG, disable tombol (`disabled = true`).
  - *Success:* Reset form, sembunyikan form, dan tampilkan kartu konfirmasi sukses: *"Terima kasih! Penawaran kolaborasi Anda telah kami terima. Kami akan merespons dalam 1x24 jam."*
  - *Integrasi Endpoint:* Gunakan endpoint Formspree, Web3Forms, atau Cloudflare Worker via `fetch(url, { method: 'POST', body: formData })`.

### 5.4. Count-Up Stats Animation (`stats-counter.js`)
- Menggunakan `IntersectionObserver` agar animasi angka bertambah (misal: 0 ➔ 250K, 0 ➔ 8.4%) hanya berjalan saat section angka mulai terlihat di layar pengguna (*viewport*).
- Durasi animasi seragam (1.5 detik per angka) dengan easing function yang halus.

---

## 6. Pre-Flight Checklist: SEO, Open Graph & Accessibility

Sebelum file di-push ke repository, AI Agent wajib memverifikasi item berikut pada `index.html`:

### 6.1. Metadata Utama (SEO On-Page)
- [ ] `<title>`: `Nama Creator | Medan Food & Travel Content Creator - Media Kit & Partnership`
- [ ] `<meta name="description">`: Padat (150-160 karakter), memuat kata kunci: *Kuliner Medan, Food Blogger Medan, Wisata Sumut, Endorsement Kuliner, Rate Card*.
- [ ] `<meta name="robots" content="index, follow">`
- [ ] `<link rel="canonical" href="https://domain-anda.pages.dev/">`
- [ ] `<link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico">`

### 6.2. Open Graph & Social Sharing Cards
- [ ] `<meta property="og:type" content="website">`
- [ ] `<meta property="og:title" content="...">`
- [ ] `<meta property="og:description" content="...">`
- [ ] `<meta property="og:image" content="https://domain-anda.pages.dev/assets/images/og-image.jpg">` (Rasio 1.91:1, dimensi ideal 1200 x 630 px)
- [ ] `<meta name="twitter:card" content="summary_large_image">`

### 6.3. Schema Markup (Structured Data JSON-LD)
Sisipkan di dalam tag `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nama Content Creator",
  "jobTitle": "Food & Travel Content Creator",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Medan",
    "addressRegion": "Sumatera Utara",
    "addressCountry": "ID"
  },
  "url": "https://domain-anda.pages.dev",
  "sameAs": [
    "https://instagram.com/username",
    "https://tiktok.com/@username",
    "https://youtube.com/@username"
  ],
  "knowsAbout": ["Kuliner Khas Medan", "Pariwisata Sumatera Utara", "Cafe & Resto Review", "Hotel & Staycation"]
}
</script>
```

### 6.4. Performa & Optimasi Aset
- [ ] Seluruh foto menggunakan format `.webp` dengan kompresi optimal (< 150KB per gambar).
- [ ] Semua tag `<img>` memiliki atribut `alt` yang deskriptif (misal: `alt="Review Mie Aceh Titi Bobrok oleh Creator"`).
- [ ] Semua tag `<img>` memiliki atribut eksplisit `width="..."` dan `height="..."` untuk mencegah Layout Shift.
- [ ] Gunakan `loading="lazy"` untuk seluruh gambar di bawah fold (Section 03 ke bawah).

---

## 7. Prosedur Deployment (GitHub ➔ Cloudflare Pages)

### 7.1. File Konfigurasi Cloudflare Pages

Buat file `_headers` di root directory:
```http
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: document-domain=(), geolocation=(), camera=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

Buat file `_redirects` di root directory:
```text
/mediakit   /docs/media-kit.pdf   302
/wa         https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20kolaborasi%20brand   302
```

### 7.2. Langkah Eksekusi Git & Deployment
1. **Inisialisasi Git Lokal:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial landing page food & travel medan media kit"
   ```
2. **Push ke GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. **Setup Cloudflare Pages:**
   - Buka Cloudflare Dashboard ➔ **Workers & Pages** ➔ **Create Application** ➔ **Pages** ➔ **Connect to Git**.
   - Pilih repository GitHub yang baru dibuat.
   - **Build settings:**
     - *Framework preset:* None
     - *Build command:* Jika menggunakan Tailwind CLI: `npx tailwindcss -o ./assets/css/style.css --minify` (atau kosongkan jika CSS sudah dikompilasi lokal).
     - *Build output directory:* `/` (root directory).
   - Klik **Save and Deploy**. Cloudflare akan memberikan URL instan `https://<project-name>.pages.dev`.

---

## 8. Instruksi Eksekusi Khusus AI Coding Agent (Prompt Sequence)

AI Agent diinstruksikan untuk menjalankan proyek ini dalam **4 Tahap Berurutan**:

### 🔹 Tahap 1: Inisialisasi Project & Konfigurasi Token Desain
1. Buat struktur folder sesuai Bab 2.
2. Inisialisasi `package.json` dan `tailwind.config.js`. Masukkan seluruh color palette, font family, border-radius, dan shadow khas Stitch sesuai Bab 3.
3. Buat file `assets/css/custom.css` untuk animasi toast dan styling scrollbar.

### 🔹 Tahap 2: Implementasi Semantic HTML5 (Skeleton to Content)
1. Tulis `index.html` dengan struktur semantik lengkap dari Section 01 hingga 09 (Bab 4).
2. Terapkan kelas Tailwind secara mobile-first (jangan gunakan class desktop tanpa prefix `md:` atau `lg:`).
3. Pastikan copy teks mengusung tone of voice khas Medan yang ramah, profesional, dan meyakinkan untuk calon klien brand F&B/Pariwisata.

### 🔹 Tahap 3: Implementasi Modul Interaktivitas JavaScript
1. Tulis kode pada `assets/js/modules/mobile-menu.js`.
2. Tulis kode pada `assets/js/modules/copy-email.js` beserta container Toast HTML-nya.
3. Tulis kode pada `assets/js/modules/form-validation.js`.
4. Tulis kode pada `assets/js/modules/stats-counter.js`.
5. Gabungkan dan panggil seluruh modul di `assets/js/main.js`.

### 🔹 Tahap 4: Verifikasi Akhir & Pre-Flight Check
1. Verifikasi kelengkapan meta tag SEO, Open Graph, dan JSON-LD Schema (Bab 6).
2. Buat file `robots.txt`, `sitemap.xml`, `_headers`, dan `_redirects` (Bab 7).
3. Jalankan pengujian tampilan pada viewport 375px (Mobile), 768px (Tablet), dan 1280px (Desktop).
4. Konfirmasikan bahwa tidak ada aset eksternal yang hilang atau link yang rusak sebelum deployment.
