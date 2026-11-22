import React, { useState } from 'react'
import type { Product } from '../types'
import { Search, X } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
  onSelectProduct: (productId: string) => void
}

const POPULAR_SEARCHES = [
  'Air Force 1',
  'Jordan',
  'Alphafly 4',
  'Dunk',
  'Pegasus',
  'Running Shoes',
  'LeBron',
  'Vomero'
]

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  if (!isOpen) return null

  const [query, setQuery] = useState('')

  const filtered = query.trim() === ''
    ? []
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex flex-col animate-in fade-in duration-200">
      {/* Top Search Header */}
      <div className="bg-white border-b border-[#E5E5E5] px-6 md:px-12 py-5 shadow-lg">
        <div className="max-w-[1440px] mx-auto flex items-center gap-4">
          <Search className="w-6 h-6 text-[#111111] flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search footwear, gear and collections..."
            autoFocus
            className="flex-1 text-[18px] md:text-[22px] font-medium text-[#111111] placeholder:text-[#707072] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#707072] hover:text-[#111111]"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[15px] font-semibold text-[#111111] hover:text-[#707072] ml-2"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Search Content Body */}
      <div className="flex-1 bg-white overflow-y-auto px-6 md:px-12 py-8">
        <div className="max-w-[1440px] mx-auto">
          {query.trim() === '' ? (
            <div>
              <h3 className="text-[14px] font-semibold text-[#707072] uppercase tracking-wider mb-4">
                Popular Search Terms
              </h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] rounded-full text-[14px] font-medium transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[14px] text-[#707072] mb-6">
                Found {filtered.length} result{filtered.length === 1 ? '' : 's'} for "{query}"
              </p>

              {filtered.length === 0 ? (
                <div className="py-12 text-center text-[#707072]">
                  <p className="text-[16px] font-medium text-[#111111] mb-1">
                    No results found for "{query}"
                  </p>
                  <p className="text-[14px]">
                    Try checking your spelling or use more general keywords.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filtered.map(product => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product.id)
                        onClose()
                      }}
                      className="group cursor-pointer flex flex-col"
                    >
                      <div className="relative aspect-[4/5] bg-[#F6F6F6] overflow-hidden mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-[15px] font-medium text-[#111111] group-hover:text-[#707072] transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-[13px] text-[#707072]">{product.subtitle}</p>
                      <p className="text-[14px] font-medium text-[#111111] mt-1">
                        {formatIDR(product.price)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
