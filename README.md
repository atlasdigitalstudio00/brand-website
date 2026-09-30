# Atlas Studio

<div align="center">

![Atlas Studio Logo](/public/logo.png)

### Practical Digital Resources for Modern Work

**Curated templates, step-by-step guides, automation systems, and digital products engineered for developers, creators, freelancers, and digital professionals.**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-violet?style=for-the-badge)](LICENSE)

[Features](#key-features) • [Tech Stack](#tech-stack) • [Quick Start](#getting-started) • [Architecture](#project-structure) • [Content Management](#content-management) • [Design System](#design-system) • [SEO & Metadata](#seo--metadata) • [Deployment](#deployment)

</div>

---

## Overview

**Atlas Studio** is a modern, faceless digital brand platform designed to distribute high-signal resources, actionable frameworks, workflow templates, tools, and digital products for modern digital work.

Built from the ground up with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS 4**, Atlas Studio delivers an ultra-fast, visually polished, and conversion-optimized experience. The platform incorporates subtle motion animations, glassmorphic UI treatments, dynamic glow orbs, dark/light theme awareness, and deep SEO infrastructure.

---

## Key Features

### 🌟 Core Experience & Design
- **Curated Premium Aesthetics**: Glassmorphic card surfaces, tailored violet/cyan glow orbs, subtle gradient headers, and dot-grid background textures.
- **Micro-Interactions & Scroll Animations**: Powered by [Framer Motion](https://www.framer.com/motion/) with `AnimateOnScroll` viewport observation and stagger animation containers.
- **Adaptive Theme System**: Integrated light and dark mode styles configured with CSS custom properties and `prefers-color-scheme`.
- **Responsive Layout**: Fluid layouts across mobile, tablet, and widescreen monitors with an accessible mobile drawer navigation.

### 📚 Content Engine
- **In-Depth Articles & Technical Guides (`/blog`, `/blog/[slug]`)**:
  - Filterable by tags and categories (e.g., *Career Tools*, *Development*, *Docker*, *Workflows*).
  - Estimated reading times, human-readable publish dates, and structured article sections.
  - Related articles recommendation engine.
  - Open Graph social share metadata and Article JSON-LD structured data.
- **Digital Product Catalog (`/shop`, `/shop/[slug]`)**:
  - Showcase digital products like the *Team Avatar Maker*, *Developer Documentation Kit*, and *SaaS Planning Template*.
  - Rich feature lists, "Who It Is For" audience matching, badge highlights (*Digital product*, *In development*), and external checkout links (e.g., Gumroad).
  - Modular image and placeholder asset support.
- **Curated Resource Library (`/resources`, `/resources/[slug]`)**:
  - Quick-start templates, deployment checklists, and developer toolkits.
  - One-click copy/download hooks and external resource redirection.
- **Recommended Tools Directory**:
  - Handpicked productivity and design software recommendations (e.g., Linear, Raycast, Figma).

### 🏢 Platform & Marketing Pages
- **Interactive Homepage (`/`)**: High-impact hero section, trust badges, featured product showcases, latest editorial feed, resource grids, and newsletter subscription capture.
- **About Page (`/about`)**: Brand philosophy, principles (*Practical over theoretical*, *Design with restraint*, *Engineered for longevity*), and audience breakdown.
- **Contact Page (`/contact`)**: Functional contact form with category selector, client-side validation, and instant feedback states.
- **Compliance & Legal (`/privacy`, `/terms`)**: Comprehensive terms of service, privacy policies, and affiliate disclosure sections.

---

## Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | React Server Components, file-system routing, and built-in image optimization |
| **Compiler** | [React Compiler](https://react.dev/learn/react-compiler) | Automatic memoization via `babel-plugin-react-compiler` |
| **Library** | [React 19](https://react.dev/) | Latest React core with actions and improved concurrent features |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety for content schemas and UI components |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Next-generation CSS-first configuration using `@theme inline` tokens |
| **Animation** | [Framer Motion 13](https://www.framer.com/motion/) | Smooth entrance transitions, staggering, and interactive gestures |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icons |
| **Typography** | [Geist Sans & Mono](https://vercel.com/font) | High-legibility modern sans-serif and monospace font pairing |
| **Linting** | [ESLint 9](https://eslint.org/) | Next.js flat configuration ruleset |

---

## Project Structure

```text
atlas-studio/
├── public/                       # Static public assets (logos, icons, product previews)
│   ├── images/
│   │   ├── hero/                 # Hero promotional graphics
│   │   └── products/             # Product preview images (e.g. team-avatar-maker)
│   └── logo.png                  # Brand logo
├── src/
│   ├── app/                      # Next.js App Router (pages and layouts)
│   │   ├── about/                # /about page
│   │   ├── blog/                 # /blog index and /blog/[slug] dynamic routes
│   │   ├── contact/              # /contact page with submission form
│   │   ├── privacy/              # /privacy policy
│   │   ├── resources/            # /resources index and /resources/[slug] routes
│   │   ├── shop/                 # /shop index and /shop/[slug] product detail routes
│   │   ├── terms/                # /terms and affiliate disclosures
│   │   ├── globals.css           # Global design system tokens and Tailwind CSS 4 setup
│   │   ├── layout.tsx            # Root layout with Header, Footer, and global metadata
│   │   ├── page.tsx              # Homepage
│   │   ├── robots.ts             # Dynamic robots.txt generation
│   │   └── sitemap.ts            # Dynamic sitemap.xml route generator
│   ├── components/               # Modular UI component library
│   │   ├── layout/               # Structural layouts (Header, Footer, ArticleLayout, Detail views)
│   │   ├── navigation/           # Navigation bars, contact forms, and mobile menus
│   │   └── ui/                   # Reusable atomic UI (Buttons, Cards, Badges, GlowOrbs, Animations)
│   ├── config/                   # Site-wide settings and navigation configuration
│   │   └── site.ts               # Site metadata, primary menu, and footer links
│   ├── content/                  # Structured typed content stores
│   │   ├── blog/                 # Articles, tutorials, and guides
│   │   ├── products/             # Digital shop products and recommended tools
│   │   └── resources/            # Curated templates and downloadable resources
│   ├── lib/                      # Core utility functions
│   │   └── utils.ts              # Class name merging and common helpers
│   └── types/                    # Shared TypeScript definitions
│       └── content.ts            # Interfaces for Articles, Products, Resources, and Tools
├── .env.example                  # Template for required environment variables
├── next.config.ts                # Next.js configuration (React Compiler enabled)
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration for Tailwind CSS 4
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed locally:
- [Node.js](https://nodejs.org/) (version **18.18.0** or **>=20.0.0** recommended)
- `npm`, `pnpm`, or `yarn`

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/atlasdigitalstudio00/brand-website.git
cd atlas-studio

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a local `.env.local` file by copying the example:

```bash
cp .env.example .env.local
```

Set your production or local domain URL:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note:** In production (e.g. Vercel), configure `NEXT_PUBLIC_SITE_URL` to your live domain (e.g. `https://atlasstudio.com`) to generate valid canonical links, Open Graph URLs, and `sitemap.xml` entries.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the website.

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack / Fast Refresh |
| `npm run build` | Compiles the production build with type checking and optimization |
| `npm run start` | Boots the compiled production server |
| `npm run lint` | Runs ESLint to check for code quality and style violations |

---

## Content Management

Atlas Studio utilizes a decoupled, type-safe content architecture. All articles, digital products, and resources are defined as structured TypeScript datasets in `src/content/`, enabling fast editing and zero-downtime additions without touching presentation components.

### 1. Adding a Blog Article

To add a new article, append a record to `latestArticles` in `src/content/blog/index.ts`:

```typescript
import type { Article } from "@/types/content";

export const latestArticles: Article[] = [
  // ...
  {
    slug: "streamline-remote-developer-workflows",
    title: "Streamlining Remote Developer Workflows",
    description: "Key tools and operational rituals for distributed software teams.",
    category: "Development",
    date: "June 10, 2026",
    isoDate: "2026-06-10",
    readingTime: "5 min read",
    href: "/blog/streamline-remote-developer-workflows",
    tags: ["Development", "Productivity"],
    body: [
      {
        heading: "Audit your daily friction",
        paragraphs: ["Focus on eliminating duplicate status updates..."],
        bullets: ["Automate PR reminders", "Centralize deployment notes"]
      }
    ]
  }
];
```

*Dynamic routes (`/blog/[slug]`) and sitemap entries will automatically populate from this array.*

### 2. Adding a Digital Product

To add or update a product in the shop, update `products` in `src/content/products/index.ts`:

```typescript
{
  slug: "team-avatar-maker",
  name: "Team Avatar Maker",
  shortDescription: "Create customizable avatars for teams, profiles, and communities.",
  description: "An interactive avatar generator for designing profile visuals quickly...",
  price: "See on Gumroad",
  productType: "Interactive avatar generator",
  features: [
    "Customizable face, hair, skin tone, and expression combinations",
    "Profile-ready variations for teams and communities",
    "Downloadable PNG, JPEG, and WebP exports"
  ],
  whoItIsFor: "Teams, creators, and professionals needing consistent avatars.",
  purchaseUrl: "https://atlasstudio4.gumroad.com/l/avatar-generator",
  badge: "Digital product",
  image: {
    src: "/images/products/team-avatar-maker/team-avatar-maker-preview.webp",
    alt: "Team Avatar Maker Preview"
  }
}
```

### 3. Adding a Resource or Checklist

Add entries to `featuredResources` in `src/content/resources/index.ts`:

```typescript
{
  title: "Docker Deployment Checklist",
  description: "A practical checklist for preparing a containerized project for production.",
  category: "Guides & Tutorials",
  type: "checklist",
  slug: "docker-deployment-checklist",
  href: "/resources/docker-deployment-checklist",
  cta: "View resource",
  downloadUrl: "/downloads/docker-checklist.pdf" // Optional
}
```

---

## Design System

The application uses **Tailwind CSS 4** paired with an HSL/hex-tailored design token system defined in `src/app/globals.css`.

### Color Tokens

- **Primary Canvas**: Dark indigo/slate (`--primary: #1a1235`, `--background: #fafbff`)
- **Accent Radiance**: Deep violet (`--accent: #7c3aed`), cyan glow (`--accent-2: #06b6d4`), and warm amber (`--accent-3: #f59e0b`)
- **Gradients**:
  - `--gradient-primary`: Dual violet-to-cyan gradient
  - `--gradient-hero`: Multi-stop midnight purple hero backdrop
  - `--gradient-text`: Animated text gradient
- **Surface Elevation**: Multi-tiered box shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-glow`)

### Key Components

- **`<GlowOrbs />`**: Layered radial blur gradients that render decorative atmospheric light without affecting layout flow.
- **`<Button />`**: Unified button primitive supporting `primary`, `secondary`, `gradient`, `ghost`, and `outline` variants, with loading states and icon slots.
- **`<ArticleCard />`, `<ProductCard />`, `<ResourceCard />`**: Consistent card surfaces featuring hover elevation, badge tags, and responsive typography.
- **`<AnimateOnScroll />`**: Viewport-triggered fade-up and scale-in animations with reduced-motion fallbacks.

---

## SEO & Metadata

Atlas Studio is fully optimized for search visibility and social distribution:

- **Dynamic Sitemap (`/sitemap.xml`)**: Generated on demand in `src/app/sitemap.ts`, combining static pages, dynamic blog posts, products, and resource URLs with accurate `lastModified` stamps.
- **Robots Rule Engine (`/robots.txt`)**: Controlled by `src/app/robots.ts`, referencing the current site base URL.
- **Open Graph & Twitter Cards**: Configured globally in `RootLayout` (`src/app/layout.tsx`) and enhanced individually on detail pages.
- **JSON-LD Structured Data**: Embedded in article detail views (`ArticleLayout.tsx`) for rich Google Search snippet parsing.

---

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com):

1. Push your changes to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Configure the environment variable:
   - `NEXT_PUBLIC_SITE_URL`: Your live domain (e.g., `https://atlasstudio.com`)
4. Click **Deploy**. Vercel will run `npm run build` and provision edge CDN distribution.

Alternatively, compile and host with Docker or standard Node.js servers:

```bash
npm run build
npm run start
```

---

## License & Ownership

© 2026 **Atlas Studio**. All rights reserved.  
Unauthorized duplication, distribution, or resale of private templates and proprietary content is strictly prohibited.