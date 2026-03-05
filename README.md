# Personal Hub

A modern developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Overview

Personal Hub is a lightweight portfolio website that presents:

- a short personal introduction on the landing page
- an about section with professional background
- a project gallery with modal-based details and GitHub links
- a timeline view for career and learning milestones

The project is optimized for responsive layouts and uses subtle animation for a clean, interactive experience.

## Live Sections

- `/` Home
- `/about` About
- `/project` Projects
- `/timeline` Timeline

## Key Features

- App Router architecture with modular page structure
- Responsive desktop/mobile navigation
- Typewriter intro animation on the home page
- Animated timeline entries with `framer-motion`
- Project detail modal with technology badges
- One-click email copy interaction for contact
- Social/profile links in footer

## Tech Stack

- Framework: Next.js 16
- Language: TypeScript
- UI: React 19
- Styling: Tailwind CSS 4
- Animation: Framer Motion, React Type Animation
- Icons: React Icons

## Project Structure

```text
app/
  page.tsx
  about/
    page.tsx
  project/
    page.tsx
    _data/project.ts
  timeline/
    page.tsx
    _data/timeline.ts
components/
  nav-bar.tsx
  footer.tsx
  modal.tsx
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or Bun if preferred)

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` Start local development server
- `npm run build` Build production bundle
- `npm run start` Start production server
- `npm run lint` Run ESLint checks

## Deployment

The app is ready for deployment on Vercel.

```bash
npm run build
npm run start
```
