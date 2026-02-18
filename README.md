# Manfred Design System

Brand tokens, typography, and core React components for the Manfred product.

## Getting started

```bash
npm install
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006).

---

## Project structure

```
src/
├── tokens/
│   ├── tokens.css        # CSS custom properties — single source of truth
│   ├── colors.ts         # Brand colors as TypeScript constants
│   ├── typography.ts     # Font family, weights, sizes, line heights
│   ├── spacing.ts        # 4px-grid spacing scale
│   └── index.ts          # Re-exports all token objects
├── styles/
│   └── fonts.css         # @font-face declarations for Host Grotesk
├── assets/
│   └── fonts/            # Host Grotesk TTF files (12 weights)
├── components/
│   ├── Typography/       # Text component with brand type scale
│   ├── Button/           # Interactive button with brand variants
│   └── Logo/             # Inline SVG logo (wordmark + monogram)
└── index.ts              # Library barrel — import from here

References/               # Brand Guidelines PDF, font source files, logotype assets
```

---

## Design tokens

All tokens are available as CSS custom properties (via `tokens.css`) and as TypeScript objects (via `src/tokens`).

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-almost-black` | `#1e1e24` | Primary text, dark surfaces |
| `--color-business-blue` | `#2c28ec` | Brand primary, CTAs |
| `--color-human-pink` | `#efd6d3` | Warm accent surface |
| `--color-beige` | `#e6dcc8` | Neutral warm surface |
| `--color-light-beige` | `#f4f3e8` | Default warm background |
| `--color-white` | `#ffffff` | Default surface, inverse text |

### Typography

Font: **Host Grotesk** — a modern geometric sans-serif.

| Role | Weight | Usage |
|---|---|---|
| ExtraBold (800) | Headlines | Large display text |
| Regular (400) | Body | Main content |
| Light (300) | Large | Pull quotes, single sentences |
| SemiBold (600) | Label | UI labels, buttons |

Type scale: `xs` (12px) · `sm` (14px) · `md` (16px) · `lg` (18px) · `xl` (20px) · `2xl` (24px) · `3xl` (32px) · `4xl` (40px) · `5xl` (56px)

### Spacing

4px base grid: `--space-1` (4px) through `--space-16` (64px).

---

## Components

### Typography

```tsx
import { Typography } from '@manfred/design-system';

<Typography variant="headline1">Big statement</Typography>
<Typography variant="body" color="muted">Secondary text</Typography>
<Typography variant="label" as="label">Field label</Typography>
```

**Variants:** `headline1` · `headline2` · `headline3` · `headline4` · `large` · `body` · `bodySmall` · `label` · `caption`

**Colors:** `default` · `inverse` · `brand` · `muted`

**`as` prop** — override the rendered HTML element (defaults are set per variant).

---

### Button

```tsx
import { Button } from '@manfred/design-system';

<Button variant="primary">Get started</Button>
<Button variant="brand" size="lg">Primary CTA</Button>
<Button variant="outline" isLoading>Saving…</Button>
```

**Variants:** `primary` (dark) · `brand` (blue) · `outline` · `ghost`

**Sizes:** `sm` · `md` · `lg`

**Props:** `isLoading` · `fullWidth` · all standard `<button>` HTML attributes

---

### Logo

```tsx
import { Logo } from '@manfred/design-system';

<Logo variant="wordmark" color="blue" height={48} />
<Logo variant="monogram" color="white" height={32} />
```

**Variants:** `wordmark` (full "manfred" logotype) · `monogram` ("m" mark)

**Colors:** `blue` · `black` · `white`

**`height`** — sets the height in px; width scales proportionally.

---

## Using tokens in your CSS

Import `tokens.css` in your app entry to access all CSS custom properties:

```css
.my-component {
  color: var(--color-business-blue);
  font-family: var(--font-family-base);
  padding: var(--space-4) var(--space-6);
}
```

Or import the TypeScript objects:

```ts
import { colors, spacing, fontWeight } from '@manfred/design-system';

const style = {
  color: colors.businessBlue,
  padding: spacing[4],
};
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run storybook` | Start Storybook dev server at port 6006 |
| `npm run build-storybook` | Build static Storybook for deployment |

---

## Reference files

The original brand assets live in `References/` and are not modified:

- `References/Brand Guidelines.pdf` — full brand guidelines document
- `References/Fonts/Host Grotesk/` — source font files
- `References/Logotype/` — logo SVG, PDF, and PNG in all variants
