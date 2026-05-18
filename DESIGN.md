---
name: Architect of Precision
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code-snippet:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is crafted for a high-tier technical consultant, blending the authoritative polish of a premium SaaS product with the bespoke sophistication of a personal professional brand. It evokes feelings of extreme precision, deep technical expertise, and futuristic innovation.

The visual direction utilizes **Glassmorphism** and **Minimalism**. It relies on deep, layered backgrounds that provide a sense of infinite depth, contrasted by razor-sharp typography and vibrant "source-code" inspired accents. The UI is designed to feel like a high-end terminal or command center—clean, data-informed, and powerful. Whitespace is used aggressively to separate complex technical concepts, ensuring the narrative remains digestible despite the technical depth.

## Colors

The palette is anchored in a **Deep Navy/Near-Black** environment to maximize contrast for technical data.
- **Primary & Secondary:** An "Electric Blue" and "Cyan" duo creates a high-energy, technical glow. Use these for primary actions and highlights.
- **Tertiary:** "Soft Violet" is reserved for secondary data visualizations or to distinguish between different service offerings.
- **Gold Highlights:** Used exclusively for high-value metrics, accolades, or "North Star" achievements. This must be used sparingly (less than 1% of the UI) to maintain its prestige.
- **Surface Strategy:** Backgrounds transition from `#070B14` for the base to `#0B1220` for elevated containers, creating a subtle hierarchical lift.

## Typography

The design system uses **Geist** across all roles to lean into its technical, developer-centric DNA.
- **Display & Headlines:** Use heavy weights (700-800) with tight letter spacing. This creates a "monumental" feel for key value propositions.
- **Body Text:** Standard weight (400) with generous line-height (1.6) ensures long-form case studies remain highly readable.
- **Labels:** Use the `label-caps` style for small meta-data, categories, or technical tags to provide a structured, organized appearance.
- **Technical Emphasis:** Use the `code-snippet` style for displaying technologies, frameworks, or process steps.

## Layout & Spacing

The layout philosophy follows a **12-column fixed grid** on desktop, moving to a single-column stack on mobile.
- **Rhythm:** An 8px base unit drives all padding and margin decisions. 
- **Sectioning:** Extreme vertical spacing (`160px`) is used between major sections to emphasize the "Premium" nature of the brand, giving each achievement room to breathe.
- **Grid Usage:** Content often spans 6 columns (50%) or 8 columns (centered) to prevent line lengths from becoming too wide for comfortable reading.
- **Alignment:** Use strict left-alignment for technical details and descriptions, while hero sections may utilize centered typography for impact.

## Elevation & Depth

This design system rejects traditional drop shadows in favor of **Tonal Layers** and **Backdrop Blurs**.
- **Surface Hierarchy:** The deepest layer is the background. Cards and sections sit "above" it using a 1px border of `rgba(255, 255, 255, 0.08)` and a subtle `0.04` white fill.
- **Glassmorphism:** All interactive cards must use `backdrop-filter: blur(12px)`. This creates a sense of physical material and high-end manufacturing.
- **Glows:** Instead of shadows, use "Bloom" effects. A soft, low-opacity radial gradient of the Primary Color (#3B82F6) can be placed behind key CTA sections or interactive cards to suggest luminosity and energy.

## Shapes

To maintain a "Technical & Sharp" aesthetic, the system uses **Soft (0.25rem)** roundedness. 
- **Cards & Inputs:** Use the base `0.25rem` (4px) radius. This provides just enough softness to feel modern without losing the precision of a sharp corner.
- **Buttons:** Primary buttons can utilize a slightly larger `0.5rem` radius to make them more inviting and distinct from the structural grid.
- **Icons:** Use linear, 2px stroke icons. Avoid filled icons unless used as a status indicator.

## Components

### Buttons
- **Primary:** Solid Electric Blue gradient to Cyan, white text, 500 weight.
- **Secondary:** Ghost style. 1px border (`border_glass`), no fill, subtle hover glow.
- **Metric Chips:** Gold text (#FBBF24) with a tiny 1px gold border and 5% gold fill.

### Cards
- **Consultancy Cards:** Glassmorphic background, subtle inner border. Content should be strictly aligned.
- **Case Study Cards:** Use large image backgrounds with a "frosted" footer containing the title and technical tags.

### Form Fields
- Dark backgrounds (#070B14), 1px glass border. On focus, the border transitions to Primary Blue with a subtle outer bloom effect.

### Interactive Elements
- **Lists:** Use custom "chevron-right" or "terminal cursor" bullet points in Cyan (#22D3EE) to reinforce the technical theme.
- **Hover States:** Any interactive glass element should increase its backdrop blur and border opacity (from 0.08 to 0.2) when hovered.