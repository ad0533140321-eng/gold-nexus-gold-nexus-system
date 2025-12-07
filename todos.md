# Milestone 1: Brand Identity & Public Marketplace UI

**Objective:** Deliver a pixel-perfect, interactive shell with high-end visuals, mock data, and full responsiveness.

---

## Sprint 1: The "Premium" Foundation (Est. 1 Hour)

- [ ] **Setup:** Initialize project (`create-next-app`, TypeScript, Tailwind CSS, ESLint)
- [ ] **Setup:** Install `shadcn/ui` (Button, Card, Badge, Input, Separator, Sheet)
- [ ] **Design:** Configure Typography
  - [ ] Install Playfair Display for headings (font-serif)
  - [ ] Install Inter for body text (font-sans)
- [ ] **Design:** Configure Color Palette
  - [ ] Metallic Gold `#D4AF37`
  - [ ] Off-White `#F9FAFB`
  - [ ] Charcoal `#1a202c`
- [ ] **Assets:** Generate SVG logo “Gold Nexus” (Serif) and place in `/public`

---

## Sprint 2: Global Components (Est. 2 Hours)

- [ ] **Top Bar Ticker** (`Ticker.tsx`)
  - [ ] Thin gray bar, scrolling mock data (Gold $2000, Silver $23)
  - [ ] Fully responsive
- [ ] **Navbar** (`Navbar.tsx`)
  - [ ] Desktop: Logo, Buy/Sell/About, Login, Cart
  - [ ] Mobile: Hamburger menu via Shadcn Sheet
  - [ ] Sticky position
- [ ] **Footer** (`Footer.tsx`)
  - [ ] Dark Charcoal background
  - [ ] Gold text
  - [ ] Links + Secure Shipping badge

---

## Sprint 3: Homepage & Data Structure (Est. 2 Hours)

- [ ] **Mock Data Schema** (`data/mockProducts.ts`)
  - [ ] Fields: `id`, `name`, `description`, `price`, `weight`, `karat`, `category`, `image`, `stockStatus`
- [ ] **Hero Section**
  - [ ] Split layout (text left / image right)
  - [ ] Copy: “Secure Your Wealth with Physical Gold.”
  - [ ] CTA: “Shop Marketplace”
- [ ] **Featured Products Grid**
  - [ ] Create `ProductCard.tsx` (glassmorphism, hover)
  - [ ] Map 4 products from mock data

---

## Sprint 4: Marketplace & Product Details (Est. 3 Hours)

- [ ] **Marketplace Page** (`/marketplace`)
  - [ ] Sidebar filters UI (Category, Karat, Price Range)
  - [ ] Main grid: 8–12 products
- [ ] **Product Page** (`/product/[id]`)
  - [ ] Two-column layout
  - [ ] Left: High-res product image
  - [ ] Right: Title, Gold-colored price, Weight badge, Stock indicator
  - [ ] Quantity selector + Add to Cart
  - [ ] Tabs: Description, Specifications (Karat, Weight, Vendor)

---

# QC Checklist (Before Delivery)

- [ ] **speed:** compress all images in resolution and tinypng
- [ ] **Mobile Check:** Navbar works on iPhone SE
- [ ] **Font Check:** Headings = serif, body = sans-serif
- [ ] **Vibe Check:** Light, clean, private-bank feel
