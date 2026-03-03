# Pencil Design System — Foundation Components

**Date:** 2026-03-03
**File:** `pencil/NEW-manfred-design-system.pen`
**Frame:** Design System Components (`nWAZ5`)
**Approach:** Reusable components (Category B — All-in-one Category Grid)

## Scope (Phase 1 — Foundations)

Typography, Button, Badge, TextInput.

## Layout

Frame `nWAZ5` → vertical flex, padding: 48px, gap: 64px between sections.
Each section: bold label header + horizontal row of component instances.

## Components

### Typography
9 reusable text symbols, one per variant:
- headline1: 56px / 800 / line-height 1.1
- headline2: 40px / 800 / line-height 1.1
- headline3: 32px / 800 / line-height 1.3
- headline4: 24px / 800 / line-height 1.3
- large: 20px / 300 / line-height 1.5
- body: 16px / 400 / line-height 1.7
- bodySmall: 14px / 400 / line-height 1.7
- label: 14px / 600 / line-height 1.5
- caption: 12px / 400 / line-height 1.5

Colors: default `#1e1e24`, brand `#2c28ec`, muted (60% opacity)

### Button
5 variants × 3 sizes = 15 symbols
- primary: bg `#1e1e24`, text white
- brand: bg `#2c28ec`, text white
- outline: transparent bg, `#1e1e24` border (2px)
- ghost: no border/bg, `#1e1e24` text
- inverse: white bg, `#2c28ec` text (shown on dark swatch)

Sizes: sm (8/16 padding, 14px), md (12/24, 16px), lg (16/32, 18px)
Border-radius: 9999px, font-weight: 600
Disabled state: 40% opacity

### Badge
6 variants × 2 sizes = 12 symbols
Pill shape (radius: 9999px), semibold, 12px text
- neutral: bg `#e8e8ea`, text `#3f3f45`
- brand: bg `#2c28ec`, text white
- success: bg `#d1fae5`, text `#065f46`
- warning: bg `#fef3c7`, text `#92400e`
- error: bg `#fee2e2`, text `#991b1b`
- info: bg `#eaeafd`, text `#1a188e`

Sizes: sm (height 18px), md (height 22px)

### TextInput
States: default, focus, error, success, disabled
3 sizes: sm (32px), md (40px), lg (48px)
Border: 1.5px `#d1d1d4`, border-radius: 8px
Focus: blue border `#5653f0` + 3px ring
Error: red border `#991b1b`
Success: green border `#065f46`
Disabled: muted bg `#e8e8ea`, 60% opacity

## Next phases
Alert, Toast, Checkbox, Radio, FormField, SearchBar, ProgressBar, Breadcrumb, Modal, Tooltip, Logo, Icon, Spinner
