# Vitto — AI-First Lending Platform Website

A pixel-perfect, fully responsive multi-page marketing website for **Vitto**, an AI-first fintech lending platform.

## Tech Stack

- **React 19** + **Vite 8**
- **React Router v7** for client-side routing
- **Tailwind CSS v4** for styling
- **Google Fonts** (Inter)
- No component libraries — pure custom components

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/platform` | AI-First Platform |
| `/collections-intelligence` | Collections Intelligence |
| `/lending-lifecycle` | Lending Lifecycle |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npx vercel
```

### Option 2: Git Integration
1. Push to GitHub/GitLab
2. Import in [vercel.com/new](https://vercel.com/new)
3. Deploy automatically

The `vercel.json` file handles client-side routing rewrites.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with dropdown + mobile menu
│   ├── Footer.jsx          # Dark navy footer
│   ├── Button.jsx          # Reusable button (primary/outline/white)
│   ├── SectionBadge.jsx    # Colored pill badges
│   └── PlaceholderBox.jsx  # Product screenshot placeholders
├── pages/
│   ├── Home.jsx            # 9 sections
│   ├── AIPlatform.jsx      # AI platform deep dive
│   ├── CollectionsIntelligence.jsx  # Collections features
│   └── LendingLifecycle.jsx         # End-to-end lifecycle
├── App.jsx                 # Router + layout
├── main.jsx                # Entry point
└── index.css               # Tailwind + design system
```

## Design System

- **Primary**: `#E8194B` (red)
- **Secondary**: `#FF6B6B`
- **Dark**: `#0F1A2E` (navy)
- **Font**: Inter
- **Border Radius**: 8px cards, 24px pills
- **Shadows**: `0 4px 24px rgba(0,0,0,0.08)`
