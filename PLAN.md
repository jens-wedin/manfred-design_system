# Manfred Design System — v1 Plan

## Context
The project currently contains only brand reference materials (Brand Guidelines PDF, Host Grotesk font family, Logotype SVGs). The goal is to scaffold a Storybook + React + TypeScript design system that codifies these brand assets into reusable tokens and components.

---

## Stack
- **Storybook 8** (React-Vite builder)
- **React 18 + TypeScript 5**
- **npm**
- **CSS Modules** for component styles
- **CSS custom properties** for design tokens

---

## File Structure

```
manfred-design_system/
├── References/                          ← untouched
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── index.ts
│   │   └── tokens.css                  ← CSS custom properties (runtime truth)
│   ├── styles/
│   │   └── fonts.css                   ← @font-face for Host Grotesk
│   ├── assets/fonts/                   ← Host Grotesk TTFs (copied from References)
│   ├── components/
│   │   ├── Typography/
│   │   │   ├── Typography.tsx
│   │   │   ├── Typography.module.css
│   │   │   ├── Typography.stories.tsx
│   │   │   └── index.ts
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── Logo/
│   │       ├── Logo.tsx                ← SVG paths inlined from References
│   │       ├── Logo.module.css
│   │       ├── Logo.stories.tsx
│   │       └── index.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

---

## Design Tokens

### Brand Colors
| Token | Value | Name |
|---|---|---|
| `--color-almost-black` | `#1E1E24` | Almost Black |
| `--color-business-blue` | `#2C28EC` | Business Blue |
| `--color-human-pink` | `#EFD6D3` | Human Pink |
| `--color-beige` | `#E6DCC8` | Beige |
| `--color-light-beige` | `#F4F3E8` | Light Beige |

### Typography
- Font: `Host Grotesk` — Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)
- Scale: xs(12px) → sm(14px) → md(16px) → lg(18px) → xl(20px) → 2xl(24px) → 3xl(32px) → 4xl(40px) → 5xl(56px)

### Spacing
4px base grid: `--space-1` (4px) through `--space-16` (64px)

---

## Components (v1)

### 1. `Typography`
Polymorphic text component.
- Variants: `headline1`–`headline4` (ExtraBold), `large` (Light), `body` / `bodySmall` (Regular), `label` (SemiBold), `caption`
- Props: `variant`, `as` (HTML element), `color` (`default | inverse | brand | muted`), `children`, `className`

### 2. `Button`
- Variants: `primary` (dark fill), `brand` (blue fill), `outline`, `ghost`
- Sizes: `sm | md | lg`
- Props: standard `<button>` attrs + `variant`, `size`, `isLoading`, `fullWidth`

### 3. `Logo`
- Inline SVG, paths verbatim from References
- Variants: `wordmark` | `monogram`
- Colors: `blue` | `black` | `white`
- Props: `variant`, `color`, `height`, `aria-label`, `className`

---

## Verification
1. `npm run storybook` → opens at `localhost:6006`
2. Typography renders Host Grotesk (not system fallback)
3. Logo shows wordmark and monogram in all 3 colors
4. Button shows all 4 variants and 3 sizes
5. Dark/blue Storybook backgrounds test inverse/white variants
