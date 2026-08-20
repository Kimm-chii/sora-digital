# Sora Digital — Bespoke Digital Experiences

A high-end, editorial-style digital agency portfolio built for Sora Digital. The platform showcases premium digital design services—from elegant wedding invitations to robust e-commerce solutions—using a sophisticated dark-mode aesthetic, smooth typography pairings, and elegant entrance animations.

## ✨ Features

- **Editorial Aesthetic:** A minimalist, dark-themed interface focusing on generous negative space, high contrast, and refined typography (Outfit & Zen Kaku Gothic New).
- **Cinematic Intro:** A bespoke entrance animation featuring a custom rotating star mark and smooth fade-ins.
- **Centralized Content Management:** All text, services, portfolio items, and images are managed through a single data file (`src/data/content.ts`) for effortless updates without touching UI code.
- **Fluid Motion:** Powered by `motion/react` for elegant scroll reveals, hover interactions, and seamless transitions.
- **Fully Responsive:** Tailored for both mobile, tablet, and desktop viewing experiences with precise layout scaling.

## 🛠 Tech Stack

- **Framework:** React 18 & TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Motion
- **Icons:** Lucide React

## 🚀 Getting Started

To run this project locally:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## 📝 How to Update Content & Images

The website is designed to be easily updatable by anyone. 

1. **Add new images** to the `src/assets/images/` or `public/` directory.
2. Open `src/data/content.ts`.
3. Update the text, titles, or `image` paths in the relevant sections (Hero, About, Services, Portfolio, Footer).
4. Save the file. The website will automatically update its layout, animations, and styling to fit your new content without needing to edit the complex React components!

## 📄 License

This project is proprietary for Sora Digital unless stated otherwise.
