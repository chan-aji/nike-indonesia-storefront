import React, { useState } from 'react'
import type { Product } from '../types'

interface SpotlightGridProps {
  products: Product[]
  onSelectProduct: (productId: string) => void
}

export const SpotlightGrid: React.FC<SpotlightGridProps> = ({
  products,
  onSelectProduct
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'running' | 'lifestyle' | 'basketball' | 'kids'>('all')

  const filteredProducts = activeTab === 'all'
    ? products.slice(0, 12)
    : products.filter(p => p.category === activeTab).slice(0, 12)

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-[24px] font-medium text-[#111111] tracking-tight mb-2">
            SPOTLIGHT
          </h2>
          <p className="text-[15px] text-[#707072] max-w-xl">
            Classic silhouettes and cutting-edge innovation to build your game from the ground up.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 mt-4 md:mt-0 overflow-x-auto no-scrollbar pb-2">
          {(['all', 'running', 'lifestyle', 'basketball', 'kids'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-[14px] font-medium capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#F5F5F5] text-[#111111] hover:bg-[#E5E5E5]'
              }`}
            >
              {tab === 'all' ? 'All Silhouettes' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product.id)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[4/5] bg-[#F6F6F6] overflow-hidden mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                loading="lazy"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#111111] text-[11px] font-semibold px-2 py-0.5 rounded-sm">
                  {product.badge}
                </div>
              )}
            </div>

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
              <p className="text-[15px] font-medium text-[#111111] pt-1">
                {formatIDR(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
