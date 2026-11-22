import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnnouncementBar } from '../components/AnnouncementBar'
import { PRODUCTS } from '../data/products'
import { SlidersHorizontal } from 'lucide-react'

interface SalePageProps {
  onOpenQuickView?: (productId: string) => void
}

export const SalePage: React.FC<SalePageProps> = () => {
  const navigate = useNavigate()
  const [filterGender, setFilterGender] = useState<'all' | 'men' | 'women' | 'kids'>('all')
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured')

  // Products with original price (or markdowns)
  const saleProducts = PRODUCTS.map(p => {
    // If doesn't have originalPrice, compute a markdown of ~20-30% for demo
    const orig = p.originalPrice || Math.round((p.price * 1.25) / 10000) * 10000
    return {
      ...p,
      originalPrice: orig
    }
  }).filter(p => {
    if (filterGender === 'all') return true
    if (filterGender === 'men') return p.subtitle.toLowerCase().includes('men')
    if (filterGender === 'women') return p.subtitle.toLowerCase().includes('women')
    if (filterGender === 'kids') return p.subtitle.toLowerCase().includes('kids')
    return true
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  return (
    <div className="w-full bg-white pb-20">
      <AnnouncementBar />

      {/* Sale Banner Header */}
      <div className="bg-[#111111] text-white py-12 px-6 md:px-12 text-center">
        <p className="text-[#D3391A] font-bold text-[14px] uppercase tracking-widest mb-2">
          End of Season Sale
        </p>
        <h1 className="text-[36px] md:text-[54px] font-black uppercase tracking-tighter leading-none mb-4">
          Save Up to 40% Off
        </h1>
        <p className="text-[#8D8D8D] text-[15px] max-w-[580px] mx-auto mb-6">
          Refresh your rotation with limited-time price drops across running shoes, lifestyle essentials, and athlete-approved training apparel.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilterGender('all')}
            className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
              filterGender === 'all' ? 'bg-white text-[#111111]' : 'bg-[#222222] text-white hover:bg-[#333333]'
            }`}
          >
            All Sale ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilterGender('men')}
            className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
              filterGender === 'men' ? 'bg-white text-[#111111]' : 'bg-[#222222] text-white hover:bg-[#333333]'
            }`}
          >
            Men's Sale
          </button>
          <button
            onClick={() => setFilterGender('women')}
            className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
              filterGender === 'women' ? 'bg-white text-[#111111]' : 'bg-[#222222] text-white hover:bg-[#333333]'
            }`}
          >
            Women's Sale
          </button>
          <button
            onClick={() => setFilterGender('kids')}
            className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
              filterGender === 'kids' ? 'bg-white text-[#111111]' : 'bg-[#222222] text-white hover:bg-[#333333]'
            }`}
          >
            Kids' Sale
          </button>
        </div>
      </div>

      {/* Filter / Sort Utility Bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between border-b border-[#E5E5E5]">
        <div className="text-[15px] font-medium text-[#707072]">
          Showing <span className="font-bold text-[#111111]">{saleProducts.length}</span> items
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-[14px] text-[#111111]">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="bg-transparent font-medium border-none focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sale Product Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {saleProducts.map(product => {
            const discountPct = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            return (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[4/5] bg-[#F5F5F5] overflow-hidden mb-3 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <span className="absolute top-3 left-3 bg-[#D3391A] text-white text-[11px] font-bold px-2 py-0.5 uppercase tracking-tight rounded-sm">
                    {discountPct > 0 ? `${discountPct}% OFF` : 'SALE'}
                  </span>
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#111111] group-hover:text-[#707072] transition-colors line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-[14px] text-[#707072]">{product.subtitle}</p>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="text-[14px] font-bold text-[#D3391A]">
                      {formatIDR(product.price)}
                    </span>
                    <span className="text-[13px] text-[#707072] line-through">
                      {formatIDR(product.originalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
