# Orbis

An online learning platform — browse courses, enroll, and track progress
from a student dashboard.

## Stack

- React 19 + React Router 7
- Vite 8
- Tailwind CSS 4

## Getting started

```bash
pnpm install
pnpm dev
```

Build for production with `pnpm build`, preview with `pnpm preview`.

## Project structure

- `src/pages/public` — marketing site (home, courses, pricing, about)
- `src/pages/auth` — login / register
- `src/pages/dashboard` — protected student dashboard
- `src/components` — shared UI (buttons, nav, course cards, hero)
- `src/context/AuthContext.jsx` — auth state used by `ProtectedRoute`
- `src/data/courses.js` — course catalog data
