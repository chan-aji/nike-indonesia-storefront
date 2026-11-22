import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { TopUtilityBar } from './components/TopUtilityBar'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProductListingPage } from './pages/ProductListingPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { CartPage } from './pages/CartPage'
import { FavouritesPage } from './pages/FavouritesPage'
import { HelpPage } from './pages/HelpPage'
import { StoreLocatorPage } from './pages/StoreLocatorPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { KidsPage } from './pages/KidsPage'
import { MenPage } from './pages/MenPage'
import { WomenPage } from './pages/WomenPage'
import { SalePage } from './pages/SalePage'
import { ProductModal } from './components/ProductModal'
import { CartDrawer } from './components/CartDrawer'
import { SearchModal } from './components/SearchModal'
import { PRODUCTS } from './data/products'
import type { Product, CartItem } from './types'

function AppContent() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Alphafly 4 preloaded
      size: 'EU 42.5',
      quantity: 1
    }
  ])
  const [wishlistIds, setWishlistIds] = useState<string[]>(['af1-07'])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3500)
  }

  const handleOpenProduct = (productId: string) => {
    const found = PRODUCTS.find(p => p.id === productId)
    if (found) {
      setActiveProduct(found)
    } else {
      setActiveProduct(PRODUCTS[0])
    }
  }

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => item.product.id === product.id && item.size === size)
      if (existingIdx > -1) {
        const updated = [...prev]
        updated[existingIdx].quantity += 1
        return updated
      }
      return [...prev, { product, size, quantity: 1 }]
    })
    setActiveProduct(null)
    setIsCartOpen(true)
    showToast(`Added ${product.name} (Size: ${size}) to your Bag`)
  }

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index)
      return
    }
    setCartItems(prev => {
      const updated = [...prev]
      updated[index].quantity = newQty
      return updated
    })
  }

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds(prev => {
      const exists = prev.includes(productId)
      if (exists) {
        showToast('Removed from Favourites')
        return prev.filter(id => id !== productId)
      } else {
        showToast('Added to Favourites')
        return [...prev, productId]
      }
    })
  }

  const handleCheckout = () => {
    setIsCartOpen(false)
    navigate('/checkout')
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const totalCartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      {/* 1. Top Utility Bar (36px) */}
      <TopUtilityBar />

      {/* 2. Main Navigation Header (60px sticky with mega-menu including Gifts) */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={(category) => {
          showToast(`Browsing category: ${category}`)
        }}
      />

      {/* Routing Pages */}
      <Routes>
        <Route path="/" element={<HomePage onOpenQuickView={handleOpenProduct} />} />
        <Route path="/men" element={<MenPage onOpenQuickView={handleOpenProduct} />} />
        <Route path="/women" element={<WomenPage onOpenQuickView={handleOpenProduct} />} />
        <Route path="/kids" element={<KidsPage onOpenQuickView={handleOpenProduct} />} />
        <Route path="/sale" element={<SalePage onOpenQuickView={handleOpenProduct} />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetailPage
              onAddToCart={handleAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onCheckout={handleCheckout}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <FavouritesPage
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/stores" element={<StoreLocatorPage />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              items={cartItems}
              onClearCart={handleClearCart}
            />
          }
        />
      </Routes>

      {/* Global Nike Footer */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={activeProduct ? wishlistIds.includes(activeProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false)
          navigate('/cart')
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(productId) => {
          navigate(`/product/${productId}`)
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111111] text-white px-5 py-3 rounded-md shadow-2xl flex items-center space-x-3 text-[14px] font-medium animate-in slide-in-from-bottom duration-200">
          <div className="w-2 h-2 rounded-full bg-[#D3391A]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
