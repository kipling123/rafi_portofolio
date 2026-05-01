# 🚀 Rafi Ikbar Fahrezy — Portfolio 3D

Portofolio interaktif 3D dengan background putih, Three.js, dan animasi modern.

## ⚡ Cara Menjalankan

### 1. Install Node.js
Download & install dari https://nodejs.org (pilih versi LTS)

### 2. Buka folder ini di VS Code
```
File → Open Folder → pilih folder "rafi-portfolio"
```

### 3. Buka Terminal di VS Code
```
Terminal → New Terminal
```

### 4. Install dependencies
```bash
npm install
```

### 5. Jalankan development server
```bash
npm run dev
```

### 6. Buka browser
Buka http://localhost:5173

---

## 📁 Struktur File

```
rafi-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              ← Entry point
    ├── App.jsx               ← Root component
    ├── data/
    │   └── index.js          ← Edit data kamu di sini!
    ├── hooks/
    │   ├── useTyping.js
    │   └── useInView.js
    ├── styles/
    │   └── global.css
    └── components/
        ├── ThreeScene.jsx    ← 3D background
        ├── Cursor.jsx        ← Custom cursor
        ├── Navbar.jsx
        ├── TiltCard.jsx      ← Reusable 3D tilt card
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        └── Contact.jsx
```

## ✏️ Cara Edit Data

Buka `src/data/index.js` dan edit:
- Nama, deskripsi, info kontak
- Skills dan level
- Proyek-proyek kamu
- Pengalaman kerja

## 🎨 Fitur

- ✅ 3D Background dengan Three.js (partikel + wireframe objects)
- ✅ Background putih mewah dengan noise texture
- ✅ Custom cursor smooth dengan lag effect
- ✅ Tilt card 3D interaktif di semua section
- ✅ Typing animation di hero
- ✅ Animated skill bars dengan filter kategori
- ✅ Project cards dengan hover effects & shine
- ✅ Contact form dengan animasi focus
- ✅ Scroll reveal animations
- ✅ Floating badges di hero
- ✅ Responsive design
