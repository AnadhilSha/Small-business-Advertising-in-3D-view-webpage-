# 🎲 3DMarket — Small Business Advertising in 3D

> **See it. Explore it. Experience it.**

A premium, interactive 3D product showcase website for small businesses. Customers can rotate, zoom, and explore products in an immersive 3D environment — like a virtual showroom.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

---

## ✨ Features

- 🎯 **Interactive 3D Product Viewer** — 360° rotation, zoom, drag, auto-rotate
- 🏪 **Small Business Marketplace** — Browse products from independent makers
- 🎨 **Premium Dark UI** — Glassmorphism, soft glows, cinematic animations
- 📱 **Fully Responsive** — Desktop, tablet, and mobile optimized
- ⚡ **Performance First** — Dynamic imports, lazy loading, capped pixel ratio
- 🎬 **Scroll Animations** — Framer Motion powered entrance effects
- 🎨 **Color Variants** — Switch product colors in real-time on the 3D model
- 📊 **Business Dashboard** — Product management, analytics, and order tracking UI

## 🖥️ Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Landing | `/` | Cinematic hero with interactive 3D product, scroll sections |
| 🔐 Login | `/login` | Split-screen login with animated 3D background |
| 🛍️ Products | `/products` | Searchable/filterable product marketplace |
| 🔍 Product Viewer | `/product/[id]` | Full-screen interactive 3D viewer with product details |
| 🏢 Businesses | `/businesses` | Small business showcase with profiles |
| 📊 Dashboard | `/dashboard` | Business owner dashboard with add product, orders, analytics |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| 3D Engine | Three.js + React Three Fiber + @react-three/drei |
| Animation | Framer Motion 11 |
| Icons | Lucide React |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/3dmarket.git
cd 3dmarket

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
3dmarket/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Landing page
│   ├── login/page.tsx            # Login page
│   ├── products/page.tsx         # Product explorer
│   ├── product/[id]/page.tsx     # 3D product viewer
│   ├── businesses/page.tsx       # Business showcase
│   └── dashboard/page.tsx        # Business dashboard
├── components/
│   ├── three/                    # 3D components (React Three Fiber)
│   │   ├── ProductViewer.tsx     # Reusable 3D viewer
│   │   ├── ProductModels.tsx     # 8 procedural 3D models
│   │   ├── Lighting.tsx          # Studio lighting rig
│   │   ├── HeroScene.tsx         # Landing page 3D scene
│   │   └── LoginScene.tsx        # Login background scene
│   ├── ui/                       # Shared UI components
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Button.tsx            # Button variants
│   │   ├── GlassCard.tsx         # Glassmorphism card
│   │   ├── ProductCard.tsx       # Product grid card
│   │   ├── BusinessCard.tsx      # Business card
│   │   ├── SearchBar.tsx         # Search input
│   │   ├── FilterSidebar.tsx     # Filter controls
│   │   └── Footer.tsx            # Site footer
│   └── sections/                 # Landing page sections
│       ├── Hero.tsx              # Hero with 3D product
│       ├── Features.tsx          # Feature cards
│       ├── Categories.tsx        # Category browser
│       ├── FeaturedProducts.tsx  # Product spotlight
│       ├── FeaturedBusinesses.tsx# Business spotlight
│       └── CallToAction.tsx      # CTA section
├── data/                         # Mock data
│   ├── products.ts               # 8 demo products
│   ├── businesses.ts             # 6 small businesses
│   └── categories.ts             # 6 categories
└── lib/
    └── utils.ts                  # Utility functions
```

## 🎮 3D Models

All 3D products are **procedurally generated** using Three.js primitives — no external model files needed:

| Model | Description |
|-------|-------------|
| 💡 Desk Lamp | Cylinder base + arm + cone shade |
| 🎧 Headphones | Torus band + sphere earcups |
| 🪑 Chair | Box seat + cylinder legs + backrest |
| ⌚ Watch | Cylinder face + torus bezel + band |
| 🏺 Vase | LatheGeometry organic profile |
| 👟 Sneaker | Layered boxes for sole + upper |
| 🎒 Backpack | Rounded boxes + cylinder straps |
| ☕ Coffee Mug | Cylinder body + torus handle |

## 📄 License

MIT License — free to use for personal and commercial projects.

---

**Built with ❤️ for small businesses**
