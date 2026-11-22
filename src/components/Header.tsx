import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NikeSwoosh, JordanJumpman, ConverseChevron } from './Icons'
import { NAVIGATION_MENUS, TOP_UTILITY_LINKS } from '../data/navigation'
import type { NavMenu } from '../types'
import { Search, Heart, ShoppingBag, Menu as MenuIcon, X, ChevronRight, ChevronLeft } from 'lucide-react'

interface HeaderProps {
  cartCount: number
  wishlistCount: number
  onOpenCart: () => void
  onOpenSearch: () => void
  onOpenWishlist?: () => void
  onSelectCategory?: (category: string) => void
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onSelectCategory
}) => {
  const navigate = useNavigate()
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null)
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const [selectedMobileMenu, setSelectedMobileMenu] = useState<NavMenu | null>(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (menuId: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenuId(menuId)
    }, 150) // Exact measured 150ms delay
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenuId(null)
    }, 100)
  }

  const handleNavClick = (menuId: string) => {
    setActiveMenuId(null)
    if (menuId === 'kids') {
      navigate('/kids')
    } else if (menuId === 'men') {
      navigate('/men')
    } else if (menuId === 'women') {
      navigate('/women')
    } else if (menuId === 'sale') {
      navigate('/sale')
    } else if (menuId === 'snkrs') {
      navigate('/products?category=lifestyle')
    } else {
      navigate(`/products?category=${menuId}`)
    }
    if (onSelectCategory) onSelectCategory(menuId)
  }

  const handleSubLinkClick = (link: string) => {
    setActiveMenuId(null)
    setMobileDrawerOpen(false)
    setSelectedMobileMenu(null)
    if (link.toLowerCase().includes('running')) {
      navigate('/products?category=running')
    } else if (link.toLowerCase().includes('basketball') || link.toLowerCase().includes('lebron') || link.toLowerCase().includes('jordan')) {
      navigate('/products?category=basketball')
    } else if (link.toLowerCase().includes('tennis')) {
      navigate('/products?category=tennis')
    } else {
      navigate('/products')
    }
  }

  const activeMenu = NAVIGATION_MENUS.find(m => m.id === activeMenuId)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5] transition-all duration-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[60px] flex items-center justify-between">
          {/* Nike Swoosh Brand Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-[#111111] hover:opacity-75 transition-opacity"
              aria-label="Nike Home Page"
            >
              <NikeSwoosh className="w-[58px] h-6 fill-current" />
            </Link>
          </div>

          {/* Center Primary Navigation (Desktop) */}
          <nav
            className="hidden md:flex items-center space-x-7 h-full"
            onMouseLeave={handleMouseLeave}
          >
            {NAVIGATION_MENUS.map(menu => (
              <div
                key={menu.id}
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(menu.id)}
              >
                <button
                  className={`text-[15px] font-medium tracking-tight hover:text-[#707072] transition-colors relative py-4 ${
                    activeMenuId === menu.id ? 'border-b-2 border-[#111111]' : ''
                  }`}
                  onClick={() => handleNavClick(menu.id)}
                >
                  {menu.label}
                </button>
              </div>
            ))}
          </nav>

          {/* Right Utility Group */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Search Bar Input (Desktop) */}
            <div
              onClick={onOpenSearch}
              className="hidden lg:flex items-center bg-[#F5F5F5] hover:bg-[#EBEBEB] text-[#707072] rounded-full px-4 py-2 cursor-pointer transition-colors w-44"
              role="button"
              tabIndex={0}
              aria-label="Open search dialog"
            >
              <Search className="w-4 h-4 mr-2 text-[#111111]" />
              <span className="text-[14px]">Search</span>
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={onOpenSearch}
              className="lg:hidden p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Heart Icon */}
            <button
              className="relative p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-full transition-colors"
              aria-label="Favourites"
              onClick={() => navigate('/favourites')}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#111111] rounded-full" />
              )}
            </button>

            {/* Shopping Bag Icon with Dynamic Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-full transition-colors"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0.5 min-w-[18px] h-[18px] px-1 bg-[#111111] text-white text-[11px] font-semibold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="md:hidden p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-full transition-colors"
              aria-label="Open Menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown Panel (Desktop) */}
        {activeMenu && (
          <div
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-b border-[#E5E5E5] shadow-2xl z-50 animate-in fade-in duration-200"
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1440px] mx-auto px-12 py-10">
              <div className="grid grid-cols-5 gap-8">
                {activeMenu.columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col space-y-3">
                    <h4 className="text-[14px] font-semibold text-[#111111] tracking-tight mb-1">
                      {col.title}
                    </h4>
                    <ul className="space-y-2">
                      {col.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <button
                            className="text-[13px] text-[#707072] hover:text-[#111111] transition-colors block py-0.5 text-left"
                            onClick={() => handleSubLinkClick(link)}
                          >
                            {link}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Semi-transparent Mega-menu Backdrop Overlay */}
      {activeMenu && (
        <div
          className="hidden md:block fixed inset-0 top-[96px] bg-black/35 z-30 transition-opacity duration-200"
          onClick={() => setActiveMenuId(null)}
        />
      )}

      {/* Mobile Slide-Over Navigation Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Dimmed backdrop */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => {
              setMobileDrawerOpen(false)
              setSelectedMobileMenu(null)
            }}
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-[340px] bg-white h-full shadow-2xl overflow-y-auto flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-250">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5]">
                {selectedMobileMenu ? (
                  <button
                    onClick={() => setSelectedMobileMenu(null)}
                    className="flex items-center text-[14px] font-medium text-[#111111] space-x-1"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>All</span>
                  </button>
                ) : (
                  <Link to="/" onClick={() => setMobileDrawerOpen(false)}>
                    <NikeSwoosh className="w-12 h-5 fill-current text-[#111111]" />
                  </Link>
                )}
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false)
                    setSelectedMobileMenu(null)
                  }}
                  className="p-1 rounded-full text-[#111111] hover:bg-[#F5F5F5]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drill-down Navigation */}
              {!selectedMobileMenu ? (
                <div className="py-6 flex flex-col space-y-5">
                  {NAVIGATION_MENUS.map(menu => (
                    <button
                      key={menu.id}
                      onClick={() => setSelectedMobileMenu(menu)}
                      className="flex items-center justify-between text-left text-[22px] font-medium text-[#111111] hover:text-[#707072] transition-colors"
                    >
                      <span>{menu.label}</span>
                      <ChevronRight className="w-5 h-5 text-[#707072]" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-6 flex flex-col space-y-6">
                  <h3 className="text-[20px] font-bold text-[#111111]">
                    {selectedMobileMenu.label}
                  </h3>
                  {selectedMobileMenu.columns.map((col, cIdx) => (
                    <div key={cIdx} className="space-y-3">
                      <p className="text-[13px] font-semibold text-[#707072] uppercase tracking-wider">
                        {col.title}
                      </p>
                      <ul className="space-y-2.5 pl-1">
                        {col.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <button
                              onClick={() => handleSubLinkClick(link)}
                              className="text-[15px] text-[#111111] hover:text-[#707072] block text-left"
                            >
                              {link}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Secondary Links on Mobile */}
            <div className="pt-8 border-t border-[#E5E5E5] space-y-4">
              <div className="flex items-center space-x-6 text-[#111111]">
                <JordanJumpman className="w-6 h-6 fill-current" />
                <ConverseChevron className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col space-y-2 text-[14px] text-[#707072]">
                <a href="#" className="hover:text-[#111111]">{TOP_UTILITY_LINKS.signIn.label}</a>
                <a href="#" className="hover:text-[#111111]">{TOP_UTILITY_LINKS.joinUs.label}</a>
                <a href="#" className="hover:text-[#111111]">{TOP_UTILITY_LINKS.findStore.label}</a>
                <a href="#" className="hover:text-[#111111]">Help & Customer Care</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
