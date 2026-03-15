# Frontend Design Skills

## Project Context: nicolas-com-ar

This is a Next.js 13+ (App Router) personal website for Prof. Nicolás Valenzuela with focus on modern, warm design aesthetic.

## Design System

### Color Palette
- **Cream**: `#F8F6F1` - Light backgrounds, primary background color
- **Ink**: `#0F0F0F` - Primary text color, dark accents
- **Forest**: `#1A3A2A` - Deep green, hover states, forest accents
- **Gold**: `#C8A96E` - Warm highlights (secondary)
- **Muted**: `#888888` - Gray text, secondary content
- **Warm Brown**: `#8B7355` - Eyebrow text, credentials
- **Light Brown**: `#8B6040` - Tag/pill text
- **Beige Border**: `#D4B896` - Tag borders, accent borders

### Typography
- **Serif Font**: Lora (400, 500, 600, 700) via next/font/google
  - Used for: Headlines, H1, H2, H3, titles
  - CSS Variable: `--font-serif`
- **Sans Font**: DM Sans (400, 500, 600, 700) via next/font/google
  - Used for: Body text, labels, UI
  - CSS Variable: `--font-sans`

### Layout Patterns
- Max-width: `max-w-6xl`
- Padding: `px-6` desktop, `px-4` mobile
- Gap patterns: `gap-6` to `gap-12` depending on context

## Component Patterns

### Hero Section
- Mobile-first grid: `grid-cols-[1fr_auto] gap-4` mobile, `grid-cols-2 md+` desktop
- Photo: `rounded-full 96x96px` mobile, `rounded-2xl 280px` desktop
- Eyebrow: `text-xs` with warm brown color (`#8B7355`)
- H1: `text-4xl md:text-5xl` font-serif
- Subtitle: `text-base` text-muted
- Tags: `rounded-full border` pills with warm colors

### Credentials Band
- Background: `#EEE8DE`
- Text: `text-[10px] md:text-xs` with warm brown (`#8B7355`)
- Padding: `px-4 md:px-6`

### Metrics Section
- Layout: `flex flex-row` single line (no grid wrapping)
- Separators: `border-l border-gray-300` visible on all breakpoints
- Numbers: `text-xl md:text-2xl` font-serif text-forest

### Card Patterns
- Border: `border border-gray-300`
- Hover: `hover:border-forest/30 hover:shadow-md transition-all`
- Padding: `p-6`
- Rounded: `rounded-lg`

### CTA Buttons
- Primary: `bg-ink text-cream rounded-full px-6 py-2.5`
- Secondary: `border border-ink text-ink rounded-full px-6 py-2.5`
- All: `hover:opacity-90 transition-colors`

### Navigation
- Desktop: `hidden md:flex gap-6 text-sm`
- Mobile: hamburger button (☰) with vertical dropdown
- Dropdown: `bg-cream border-t border-gray-200`
- Link colors: `text-ink hover:text-forest transition-colors`

## Key Files

- `app/page.tsx` - Homepage with hero, metrics, credentials, sections
- `components/Navbar.tsx` - Client component with mobile menu
- `components/Footer.tsx` - Footer with bg-ink (not black)
- `lib/fonts.ts` - Font configuration
- `app/globals.css` - CSS variables for colors
- `tailwind.config.js` - Extended theme with custom colors

## Design Principles

1. **Mobile-First**: Always design mobile layouts first, then scale up
2. **Warm Aesthetic**: Use cream, warm browns, and forest green - no bright blues
3. **Typography-Driven**: Serif fonts for headings, sans for body
4. **Subtle Interactions**: Smooth transitions, hover states use forest color
5. **White Space**: Generous padding and gaps between sections
6. **Responsive Separators**: Vertical lines visible on all breakpoints
7. **Consistent Tags**: All pills use warm brown borders and text

## Common Tailwind Classes

```
Text colors: text-ink, text-forest, text-muted, text-cream
Backgrounds: bg-cream, bg-white, bg-forest, bg-ink
Borders: border-gray-300, border-forest/30, border-ink
Hover: hover:text-forest, hover:border-forest/30, hover:shadow-md
Rounded: rounded-full (pills), rounded-2xl (photos), rounded-lg (cards)
Responsive: hidden md:flex (desktop only), md:hidden (mobile only)
```

## Responsive Breakpoints

- **Mobile**: < 768px - hamburger menu, stacked layout
- **Tablet**: 768px-1024px - transitional breakpoint
- **Desktop**: > 1024px - full navigation, grid layouts

## File Structure

```
app/
  page.tsx           # Homepage
  layout.tsx         # Global layout with Navbar/Footer
  globals.css        # CSS variables
  components/
    JsonLd.tsx       # Schema.org markup component
  insights/
  topics/

components/
  Navbar.tsx         # Navigation with mobile menu
  Footer.tsx         # Footer

lib/
  fonts.ts           # Font configuration
  posts.ts           # Blog post utilities
  topics.ts          # Topic definitions

public/
  images/
    nicolas-valenzuela.png  # Profile photo
```