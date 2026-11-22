import React, { useState, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { SlidersHorizontal, ChevronDown, ChevronUp, Check } from 'lucide-react'

export const ProductListingPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'
  const sportParam = searchParams.get('sport')

  const [showFilters, setShowFilters] = useState(true)
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-low' | 'price-high'>('featured')
  const [selectedCategory, setSelectedCategory] = useState<string>(sportParam || categoryParam)
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const [openFilterSections, setOpenFilterSections] = useState<{ [key: string]: boolean }>({
    category: true,
    price: true,
    color: true,
    tech: true
  })

  const toggleSection = (key: string) => {
    setOpenFilterSections(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS]

    // Category / Sport filter
    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Price filter
    if (selectedPriceRanges.length > 0) {
      list = list.filter(p => {
        return selectedPriceRanges.some(range => {
          if (range === 'under-1500') return p.price < 1500000
          if (range === '1500-2500') return p.price >= 1500000 && p.price <= 2500000
          if (range === 'over-2500') return p.price > 2500000
          return true
        })
      })
    }

    // Color filter
    if (selectedColors.length > 0) {
      list = list.filter(p => {
        return selectedColors.some(color =>
          (p.colorShown && p.colorShown.toLowerCase().includes(color.toLowerCase())) ||
          p.name.toLowerCase().includes(color.toLowerCase())
        )
      })
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      list.reverse()
    }

    return list
  }, [selectedCategory, selectedPriceRanges, selectedColors, sortBy])

  const colorSwatches = [
    { name: 'Black', hex: '#111111' },
    { name: 'White', hex: '#FFFFFF', border: true },
    { name: 'Orange', hex: '#FF5A00' },
    { name: 'Red', hex: '#D3391A' },
    { name: 'Blue', hex: '#1E40AF' },
    { name: 'Grey', hex: '#9CA3AF' },
    { name: 'Green', hex: '#15803D' }
  ]

  const categoryPills = ['All', 'Running', 'Lifestyle', 'Basketball', 'Tennis', 'Kids', 'Clothing']

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-6">
      {/* Breadcrumb */}
      <nav className="text-[12px] text-[#707072] mb-3 flex items-center space-x-1.5">
        <a href="/" className="hover:text-[#111111]">Home</a>
        <span>/</span>
        <a href="/products" className="hover:text-[#111111]">Shoes</a>
        <span>/</span>
        <span className="text-[#111111] capitalize">{selectedCategory === 'all' ? 'All Shoes' : selectedCategory}</span>
      </nav>

      {/* PLP Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E5] gap-4">
        <div>
          <h1 className="text-[24px] font-medium text-[#111111] capitalize">
            {selectedCategory === 'all' ? 'All Shoes' : `${selectedCategory} Shoes`} ({filteredProducts.length})
          </h1>
        </div>

        {/* Controls: Filter Toggle & Sort Dropdown */}
        <div className="flex items-center space-x-4 self-end md:self-auto">
          {/* Hide/Show Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-[15px] font-medium text-[#111111] hover:text-[#707072] transition-colors"
          >
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center space-x-1.5 text-[15px] font-medium text-[#111111]">
            <span className="text-[#707072]">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent font-medium cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Horizontal Category Sub-Pills */}
      <div className="flex items-center space-x-2 py-4 overflow-x-auto no-scrollbar border-b border-[#F0F0F0]">
        {categoryPills.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat.toLowerCase())}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all whitespace-nowrap ${
              selectedCategory.toLowerCase() === cat.toLowerCase()
                ? 'bg-[#111111] text-white'
                : 'bg-[#F5F5F5] text-[#111111] hover:bg-[#E5E5E5]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Layout Area: Filter Sidebar + Product Grid */}
      <div className="flex gap-8 pt-6">
        {/* Left Filter Sidebar (260px desktop) */}
        {showFilters && (
          <aside className="w-[260px] flex-shrink-0 hidden md:block space-y-6">
            {/* Category Filter */}
            <div className="border-b border-[#E5E5E5] pb-5">
              <button
                onClick={() => toggleSection('category')}
                className="w-full flex justify-between items-center text-[15px] font-semibold text-[#111111] mb-3"
              >
                <span>Category</span>
                {openFilterSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openFilterSections.category && (
                <div className="space-y-2 text-[14px]">
                  {['all', 'running', 'lifestyle', 'basketball', 'tennis', 'kids', 'clothing'].map(cat => (
                    <label key={cat} className="flex items-center space-x-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="cat"
                        checked={selectedCategory.toLowerCase() === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="rounded accent-[#111111] w-4 h-4"
                      />
                      <span className="capitalize">{cat === 'all' ? 'All Products' : cat}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="border-b border-[#E5E5E5] pb-5">
              <button
                onClick={() => toggleSection('price')}
                className="w-full flex justify-between items-center text-[15px] font-semibold text-[#111111] mb-3"
              >
                <span>Shop By Price</span>
                {openFilterSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openFilterSections.price && (
                <div className="space-y-2 text-[14px]">
                  {[
                    { id: 'under-1500', label: 'Under Rp 1.500.000' },
                    { id: '1500-2500', label: 'Rp 1.500.000 - Rp 2.500.000' },
                    { id: 'over-2500', label: 'Over Rp 2.500.000' }
                  ].map(price => (
                    <label key={price.id} className="flex items-center space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.includes(price.id)}
                        onChange={() => {
                          setSelectedPriceRanges(prev =>
                            prev.includes(price.id)
                              ? prev.filter(p => p !== price.id)
                              : [...prev, price.id]
                          )
                        }}
                        className="rounded accent-[#111111] w-4 h-4"
                      />
                      <span>{price.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Colour Swatches */}
            <div className="border-b border-[#E5E5E5] pb-5">
              <button
                onClick={() => toggleSection('color')}
                className="w-full flex justify-between items-center text-[15px] font-semibold text-[#111111] mb-3"
              >
                <span>Colour</span>
                {openFilterSections.color ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openFilterSections.color && (
                <div className="grid grid-cols-3 gap-2">
                  {colorSwatches.map(color => {
                    const isSelected = selectedColors.includes(color.name)
                    return (
                      <button
                        key={color.name}
                        onClick={() => {
                          setSelectedColors(prev =>
                            isSelected ? prev.filter(c => c !== color.name) : [...prev, color.name]
                          )
                        }}
                        className="flex flex-col items-center space-y-1 p-1 hover:bg-[#F5F5F5] rounded transition-colors"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            color.border ? 'border border-[#CCCCCC]' : ''
                          } ${isSelected ? 'ring-2 ring-offset-1 ring-[#111111]' : ''}`}
                          style={{ backgroundColor: color.hex }}
                        >
                          {isSelected && (
                            <Check className={`w-3.5 h-3.5 ${color.name === 'White' ? 'text-[#111111]' : 'text-white'}`} />
                          )}
                        </div>
                        <span className="text-[11px] text-[#707072]">{color.name}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Reset Filters */}
            {(selectedPriceRanges.length > 0 || selectedColors.length > 0 || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedPriceRanges([])
                  setSelectedColors([])
                }}
                className="text-[13px] font-semibold underline text-[#111111] hover:text-[#707072]"
              >
                Clear All Filters
              </button>
            )}
          </aside>
        )}

        {/* Product Cards Grid: 3 cols when sidebar is open, 4 cols when sidebar is hidden */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[18px] font-medium text-[#111111] mb-2">
                No products match your selected filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedPriceRanges([])
                  setSelectedColors([])
                }}
                className="mt-4 px-6 py-2.5 bg-[#111111] text-white rounded-full text-[14px] font-medium"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-4 md:gap-6 ${
                showFilters
                  ? 'grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              }`}
            >
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Studio Image Container (Aspect 4:5 on #F6F6F6) */}
                  <div className="relative aspect-[4/5] bg-[#F6F6F6] overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#111111] text-[11px] font-semibold px-2 py-0.5 rounded-sm">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1">
                    <h3 className="text-[15px] font-medium text-[#111111] group-hover:text-[#707072] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-[13px] text-[#707072]">{product.subtitle}</p>
                    {product.colorwaysCount && (
                      <p className="text-[12px] text-[#707072]">
                        {product.colorwaysCount} Colour{product.colorwaysCount > 1 ? 's' : ''}
                      </p>
                    )}
                    <div className="flex items-center space-x-2 pt-1">
                      <p className="text-[15px] font-medium text-[#111111]">
                        {formatIDR(product.price)}
                      </p>
                      {product.originalPrice && (
                        <p className="text-[13px] text-[#707072] line-through">
                          {formatIDR(product.originalPrice)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
