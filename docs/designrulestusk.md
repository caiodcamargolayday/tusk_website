# TUSK — Design Rules & Brand Guidelines

> *Gather around* — South African Braai BBQ & Cape Region Wines

---

## 1. Brand Identity

TUSK is a refined South African dining experience built around the spirit of togetherness. The visual identity draws from botanical illustration, vintage naturalism, and the raw beauty of the Cape region — blending old-world elegance with contemporary energy.

**Core tagline:** *Gather around*  
**Brand voice:** Warm, confident, rooted. Evokes tradition, togetherness, and timeless quality.

---

## 2. Color Palette

### Primary Colors

| Name | HEX | RGB | CMYK |
|------|-----|-----|------|
| **Tusk Vintage Green** | `#1a381f` | 26, 56, 31 | 85 / 50 / 89 / 63 |
| **Tusk Beige** | `#eee9dd` | 238, 233, 221 | 8 / 7 / 15 / 0 |
| **Dark Tusk** (near-black) | `#231f20` | 35, 31, 32 | 72 / 67 / 59 / 79 |
| **White** | `#ffffff` | 255, 255, 255 | 0 / 0 / 0 / 0 |

### Accent Color

| Name | HEX | RGB | CMYK |
|------|-----|-----|------|
| **Vintage Red** | `#911e1e` | 145, 30, 30 | 27 / 98 / 89 / 30 |

> ⚠️ **Vintage Red is reserved for distinctive emphasis only.** Use sparingly and exclusively for key UI elements such as conversion buttons, CTAs, or special event highlights. Never use it as a dominant color.

### CSS Custom Properties

```css
:root {
  --color-green:      #1a381f;
  --color-beige:      #eee9dd;
  --color-dark:       #231f20;
  --color-white:      #ffffff;
  --color-red:        #911e1e;

  /* Semantic aliases */
  --color-bg-dark:    var(--color-dark);
  --color-bg-light:   var(--color-beige);
  --color-text-light: var(--color-beige);
  --color-text-dark:  var(--color-dark);
  --color-brand:      var(--color-green);
  --color-cta:        var(--color-red);
}
```

---

## 3. Approved Color Combinations

Always maintain high contrast. Only use these approved pairings:

| Foreground | Background | Use Case |
|-----------|-----------|----------|
| Tusk Beige (`#eee9dd`) | Vintage Green (`#1a381f`) | Logo on dark brand surfaces |
| Tusk Beige (`#eee9dd`) | Dark Tusk (`#231f20`) | Logo on black/dark UI |
| Dark Tusk (`#231f20`) | White (`#ffffff`) | Body text, light interfaces |
| Dark Tusk (`#231f20`) | Tusk Beige (`#eee9dd`) | Text on warm background surfaces |

> Never place Dark Tusk on Vintage Green — insufficient contrast. Never place White text on Tusk Beige — too low contrast.

---

## 4. Typography

### Display / Headlines
**Font:** `Big Caslon Medium`  
**Use for:** Hero headings, section titles, logo wordmark contexts, large display text.  
**Character:** Traditional, timeless, editorial weight.

```css
.heading {
  font-family: 'Big Caslon', 'Caslon', Georgia, serif;
  font-weight: 500;
  letter-spacing: -0.01em;
}
```

### Body Copy
**Font family:** `Gill Sans`  
Three weights in use:

| Weight | Name | Use |
|--------|------|-----|
| Light | `Gill Sans Light` | Primary body text, clean layouts, menu descriptions |
| Regular | `Gill Sans Regular` | Subtle emphasis, secondary headlines, hierarchy |
| Light Italic | `Gill Sans Light Italic` | Informality, accent copy, *"Gather around"* tagline style |

```css
body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
  font-weight: 300; /* Light */
}

.emphasis {
  font-weight: 400; /* Regular */
}

.accent-copy {
  font-style: italic;
  font-weight: 300;
}
```

### Typography Scale (recommended)

| Role | Size | Font | Weight |
|------|------|------|--------|
| Display / Hero | 72–96px | Big Caslon | Medium |
| H1 | 48–64px | Big Caslon | Medium |
| H2 | 32–40px | Gill Sans | Regular |
| H3 | 22–28px | Gill Sans | Regular |
| Body | 15–18px | Gill Sans | Light |
| Caption / Label | 12–14px | Gill Sans | Light Italic |

---

## 5. Logo

### Wordmark
The TUSK logo is a wordmark set in **Big Caslon Medium**, all caps. It is the primary visual identifier of the brand.

**Rules:**
- Never stretch, skew, or distort the logo in any dimension.
- Never restyle the font or apply effects (drop shadows, outlines, gradients).
- Maintain consistent usage across all brand touchpoints.
- Minimum clear space: equal to the height of the "T" on all sides.

### Approved Logo Versions

| Version | Foreground | Background | When to use |
|---------|-----------|-----------|-------------|
| Primary | Dark Tusk `#231f20` | White / Beige | Default use on light backgrounds |
| Reversed | Tusk Beige `#eee9dd` | Dark Tusk `#231f20` | Dark backgrounds, packaging |
| Brand | Tusk Beige `#eee9dd` | Vintage Green `#1a381f` | On-brand green surfaces |

### Social Icon
A circular badge using **Vintage Green** (`#1a381f`) as the background with the **TUSK** wordmark in **Tusk Beige** (`#eee9dd`). Used as profile picture / social avatar.

---

## 6. Brand Artwork

The signature visual element is a **large-scale botanical mural** — an aged, painterly illustration of South African flora (proteas, fynbos, aloes) set against a hazy Cape landscape. 

This artwork:
- Serves as the primary background texture for hero sections, posters, and print.
- Should always appear at full bleed when used.
- Works overlaid with the TUSK wordmark in Tusk Beige with slight transparency.
- Establishes the brand's connection to nature, South Africa, and artisanal craft.

---

## 7. Imagery Direction

### Food Photography
- **Style:** Refined, editorial, scroll-stopping.
- **Lighting:** Dramatic directional light; contrasty highlights and deep shadows.
- **Composition:** Contemporary — overhead, 45°, close-up details.
- **Color:** Rich and saturated; echoing brand palette (greens in napkins/fabrics, warm neutrals in surfaces).
- **People:** Include hands and people sharing food to reinforce the "gather around" message.
- **Subject matter:** Braai meats, wine glasses, table spreads, fire and smoke.

### Brand Photography
- **Style:** Classic film-camera feel — organic grain, cool tones, high composition quality.
- **References:** *Vice Magazine, Vogue, Classic Nike, Vintage Sports editorial.*
- **Subject matter:** Cape landscapes, protea flowers, botanical details, the restaurant interior, staff.
- **Goal:** Stand out distinctly in social media feeds and ad channels.

---

## 8. UI / Web Application Rules

### Layout
- Use generous whitespace — the brand breathes.
- Alternate between dark (black/green) and light (white/beige) sections for contrast and rhythm.
- Typography-led design: let headlines do the visual work. Avoid cluttered layouts.
- Full-bleed imagery is preferred over contained/boxed images.

### Buttons & CTAs
- Primary CTA: **Vintage Red** (`#911e1e`) background with **White** or **Beige** text.
- Secondary / ghost button: Beige border with Beige text on dark backgrounds; Dark border on light backgrounds.
- Never use Vintage Red for decorative or non-interactive elements.

### Navigation
- Minimal and typographic. No heavy borders or complex menus.
- Logo/wordmark centered or left-aligned.
- Dark or transparent nav over imagery; switch to Beige/light on light backgrounds.

### Dividers & Accents
- Thin horizontal rules (`1px`) in Beige or Dark Tusk to separate sections.
- Avoid drop shadows; prefer flat layering and typography hierarchy.

---

## 9. Voice & Tone

| Attribute | Description |
|-----------|-------------|
| **Warm** | Inviting, community-driven. Never cold or transactional. |
| **Confident** | Direct, assured. No hedging or filler copy. |
| **Rooted** | References South African heritage, land, fire, sharing. |
| **Elegant** | Refined language without being pretentious. |

**Examples of copy direction:**
- *"Experience the spirit of South Africa with Braai BBQ and the finest Cape region wines."*
- *"Chef's menu. Refined taste."*
- *"Gather around."*

---

## 10. Do's and Don'ts

### ✅ Do
- Use Big Caslon for all major headings.
- Keep Vintage Red exclusive to CTAs and highlights.
- Use the botanical mural artwork as a signature brand element.
- Pair Tusk Beige with deep green or black backgrounds.
- Show people, fire, community, and abundance in imagery.
- Let the brand breathe — white space is intentional.

### ❌ Don't
- Distort, recolor, or skew the TUSK wordmark.
- Use Vintage Red as a background or decorative color.
- Use generic stock photography unrelated to South African identity.
- Place light text on Tusk Beige (insufficient contrast).
- Mix brand fonts with unrelated typefaces (e.g., system fonts, sans-serifs outside Gill Sans).
- Overload layouts — the brand is refined, not maximalist.

---

*TUSK Brand Guidelines — April 2024*
