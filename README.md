# Sunny Softwares

Next.js site for **Sunny Softwares**, with TypeScript and Tailwind CSS. Set up for migrating your existing Lovable (React + Vite) code.

## Folder structure

| Path | Purpose |
|------|---------|
| `src/app/` | App Router: `layout.tsx`, `page.tsx`, `not-found.tsx`, `globals.css` |
| `src/components/layout/` | `Header.tsx`, `Footer.tsx` ← paste Lovable `components/layout/*` |
| `src/components/sections/` | `Hero`, `About`, `Services`, `Products`, `Industries`, `WhyChooseUs`, `Portfolio`, `Testimonials`, `Contact` ← paste Lovable `components/sections/*` |
| `src/components/ui/` | Shadcn/ui components. Add via: `npx shadcn@latest add button` (etc.) |
| `src/constants/` | `index.ts` – `WHY_CHOOSE_US`, `INDUSTRIES`; merge with your Lovable `constants/index.ts` |
| `src/hooks/` | `use-mobile.tsx`, `use-toast.ts` ← paste your implementations |
| `src/lib/` | `utils.ts` – `cn()` for class merging (used by shadcn) |

## Migrating from Lovable

1. **Constants:** Merge `src/constants/index.ts` from Lovable into `src/constants/index.ts`.
2. **Layout:** Paste `Header.tsx` and `Footer.tsx` into `src/components/layout/`. Use `Link` from `next/link` instead of `react-router`’s `Link`/`NavLink`.
3. **Sections:** Paste each section from Lovable `components/sections/` into the matching file in `src/components/sections/`. Add `"use client"` at the top if the component uses hooks, `useState`, or browser APIs.
4. **UI (shadcn):** Add components as needed: `npx shadcn@latest add button`, `npx shadcn@latest add card`, etc. They are installed into `src/components/ui/`.
5. **Routing:** In Next.js App Router, `src/pages/Index.tsx` becomes `src/app/page.tsx` (already wired to your sections). For `NotFound`, use `src/app/not-found.tsx` (already in place).
6. **Icons:** `lucide-react` is installed; use `import { IconName } from "lucide-react"` and map your string icons (e.g. `"Users"`) to `<Users />`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
