# Evalix | Precision-Driven Exam Correction

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/self-david/evalix-web)
[![Tech Stack](https://img.shields.io/badge/stack-Astro--React--Tailwind-orange.svg)](https://astro.build)

**Evalix** is a high-performance automated exam correction platform designed for academic institutions and independent educators. It leverages local artificial intelligence for near-instant optical scanning and accurate result generation.

---

## 🌐 EXAMS Ecosystem

Evalix is part of the **EXAMS Ecosystem**, a distributed suite of tools designed for full-cycle academic assessment management:

- **[laboratory](file:///c:/projects/EXAMS/laboratory)**: The core administrative engine. Used for creating exam templates, training custom AI models, and managing institutional data.
- **[scan-core](file:///c:/projects/EXAMS/scan-core)**: The high-performance Rust-based detection engine that powers both the web portal and the local scanning tools.
- **[evalix-app](file:///c:/projects/EXAMS/evalix-app)**: The cross-platform scanning interface used for mass processing of exams.

---

## 🎨 Design Identity

### Color Palette

The brand identity is built on a foundation of professional academic trust and modern technical efficiency.

- **Primary Brand**: `#0B3D91` (Professional Navy - Trust & Authority)
- **Secondary**: `#E0E0E0` (Neutral Grey - Cleanliness & Balance)
- **Dark Accent**: `#051C42` (Deep Space - Contrast)
- **Background**: `#F8FAFC` (Light Slate - Readability)

### Typography

- **Primary**: `Outfit` (Modern, geometric, and clean for headings)
- **Secondary**: `Inter` (Optimized for readability in body text)

---

## 🚀 Key Features

- **Local Processing**: Near-instant inference (~0.8s per exam) without server latency.
- **Dynamic Grading**: Automatic detection of marked answers via computer vision.
- **Custom Templates**: Create and calibrate exam sheets based on your specific needs.
- **Visual Analytics**: Interactive D3.js powered charts for performance tracking.
- **Offline Capability**: Native support for local workflows via Tauri.

---

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation & High Performance)
- **UI Library**: [React](https://react.dev/) (Interactive Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Modern Utility-First Styles)
- **Runtime**: [Tauri](https://tauri.app/) (Rust-based Multi-platform Deployment)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [D3.js](https://d3js.org/) (Precise DOM Manipulations & Visualizations)

---

## 📂 Project Structure

```text
src/
├── components/     # UI Components (Hero, Features, Pricing, etc.)
├── layouts/        # Page Layouts (MainLayout)
├── lib/            # Utility Functions & Logic
├── pages/          # Astro Routing & Pages
└── styles/         # Global Styles (Tailwind & CSS Variables)
```

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (Recommended)

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build

```bash
# Generate production-ready files
pnpm build
```

## 🚀 Deployment

The project is configured for seamless deployment on **Cloudflare Pages**.

### Steps to Deploy

1. **Build the project**:
   ```bash
   pnpm build
   ```
2. **Deploy to Cloudflare**:
   - Connect your GitHub repository to Cloudflare Pages.
   - Use the following settings:
     - **Framework preset**: `Astro`
     - **Build command**: `pnpm build`
     - **Build output directory**: `dist`
     - **Environment variables**: Ensure `NODE_VERSION` is set to `18` or higher.

---

## 🛡 License

Internal Project - All Rights Reserved.
