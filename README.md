# Nike Indonesia (ID) — 100% Pixel-Perfect Storefront Clone

A high-fidelity, pixel-perfect replication of the official **Nike Indonesia (`https://www.nike.com/id/`)** storefront architecture, built with modern web technologies and clean-room scraped assets.

![Nike Banner](https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/d51a66e4-e0c1-4b13-8120-22c92e92ec79/nike-just-do-it.png)

---

## 🌟 Key Features

### 1. Dedicated Category Landing Hubs
- **Home (`/`)**:
  - Full-width "GIVE SPORT" ribbon tape with authentic typography.
  - 2.06:1 Space Jam Hero banner (*"Greatness Is Never Out of Reach"*).
  - 2-card featured grid (LeBron XXIV & Tennis Gifting).
  - 3-card Trending campaign (Paulina, Vini Jr., AJ4 Bred).
  - Creator showcase (*@annethong* with Moon Shoe, *@ilykyleaux* with Zoom Skylon 11).
  - Spotlight silhouettes grid & Shop by Sport.
- **Men (`/men`)**:
  - Category quick-nav pills (*Shoes, Clothing, Accessories, Shop All Sale, Best Sellers*).
  - Hero carousel with *Alphafly 4*, *Never Miss a Day*, and *Train Everything*.
  - 2x2 Featured campaign cards.
  - Shop by Colour slider (*Dark Neutrals, Earth Brown, Dusty Blue*).
  - Curated Men's Packshots with live IDR pricing and stock badges.
  - Shop Essentials & Gear Up by Sport.
- **Women (`/women`)**:
  - Category quick-nav pills (*Shoes, Clothing, Accessories, Bras & Leggings, Best Sellers*).
  - Hero carousel with *Moon Shoe* (iconic waffle heritage), *Never Miss a Day*, and *Train Everything*.
  - 2x2 Featured campaign cards (*Unwrap a Winning Look*, *Alphafly 4*).
  - Shop by Colour slider (*Hyper Pink, Bold Berry & Brown, Deep Red*).
  - New Arrivals carousel & Shop Essentials.
- **Kids (`/kids`)**:
  - *Nike Basketball × LEGO® Collection* hero banner.
  - 4 Shop by Age widescreen cards (2.68:1 ratio: *Babies & Toddlers, Little Kids, Big Kids, Teens*).
  - New In carousel with 16 authentic Kids items.
  - 4 Featured 2x2 cards & 3 Fit Guides (Football, Running, Lifestyle).
  - 8 Best Reads editorial guides.
- **Sale (`/sale`)**:
  - End of Season Sale banner with discount percentages (up to 40% OFF).
  - Gender filter tabs (*All Sale, Men's Sale, Women's Sale, Kids' Sale*).
  - Sort by Featured, Price Low to High, and Price High to Low.
  - Markdown pricing with genuine strike-through pricing.

### 2. Full Storefront & E-Commerce Logic
- **Header & Navigation ([Header.tsx](src/components/Header.tsx))**:
  - Top utility bar with Jordan Jumpman, Converse Chevron, and Help dropdown.
  - Sticky primary navbar with Nike Swoosh, mega-menu flyouts, and mobile slide-over drawer.
  - Announcement bar with auto-rotating messages and manual arrow controls.
- **Product Listing Page (`/products`)**:
  - 260px collapsible filter sidebar (Gender, Category, Color, Price Range).
  - Dynamic sorting, active filter tags, and responsive product grid.
- **Product Detail Page (`/product/:id`)**:
  - Asymmetric 60/40 layout with macro multi-angle image gallery.
  - Interactive EU size picker with out-of-stock slash indicators and error validation.
  - Collapsible accordions for *Delivery & Returns* and *Reviews*.
- **Cart & Slide-Over Drawer (`/cart`)**:
  - Free delivery progress threshold (Rp 1.500.000 limit).
  - Dynamic quantity selectors, remove item, and live subtotal calculation.
- **Wishlist & Favourites (`/favourites`)**:
  - Global wishlist state synced with navbar badge.
- **Indonesian Checkout Flow (`/checkout`)**:
  - 3-step checkout with Indonesian payment gateways (BCA Virtual Account, Credit Card, QRIS / GoPay).
  - Order review and invoice confirmation screen.
- **Store Locator (`/stores`)**:
  - 7 official Indonesian Nike stores (Senayan City, Grand Indonesia, Kota Kasablanka, PIM 3, etc.) with operational hours and directions.
- **Help Center (`/help`)**:
  - Categorized FAQ search and collapsible accordions.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/) with Rolldown / ESBuild
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Authentic Nike / Jordan / Converse SVGs
- **Typography**: Nike Futura Bold Condensed, Helvetica Neue, Nike Sans

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `yarn` or `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chan-aji/nike-indonesia-storefront.git
   cd nike-indonesia-storefront
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## ⚖️ Disclaimer

This project is created strictly for educational, portfolio, and UI/UX research purposes. All Nike trademarks, logos, athletes, brand imagery, and product designs remain the sole property of **NIKE, Inc.**
