import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import type { Product } from '../types'
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

interface FavouritesPageProps {
  wishlistIds: string[]
  onToggleWishlist: (productId: string) => void
  onAddToCart: (product: Product, size: string) => void
}

export const FavouritesPage: React.FC<FavouritesPageProps> = ({
  wishlistIds,
  onToggleWishlist,
  onAddToCart
}) => {
  const navigate = useNavigate()
  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const favouritedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id))

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E5E5E5] gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-medium text-[#111111]">
            Favourites ({favouritedProducts.length})
          </h1>
          <p className="text-[14px] text-[#707072] mt-1">
            Items saved to your personal Nike wishlist are saved here for easy access.
          </p>
        </div>
        {favouritedProducts.length > 0 && (
          <button
            onClick={() => navigate('/products')}
            className="text-[14px] font-medium text-[#111111] hover:text-[#707072] flex items-center space-x-1"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {favouritedProducts.length === 0 ? (
        <div className="py-24 text-center space-y-4">
          <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto text-[#707072]">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-[22px] font-medium text-[#111111]">
            Your Favourites list is empty.
          </h2>
          <p className="text-[15px] text-[#707072] max-w-md mx-auto">
            Explore our collections and click the heart icon on any shoe or apparel to save your favourite picks.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 px-8 py-3 bg-[#111111] text-white rounded-full font-medium hover:bg-[#333333] transition-colors"
          >
            Explore Catalog
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favouritedProducts.map(product => (
            <div
              key={product.id}
              className="group flex flex-col justify-between bg-white border border-[#F0F0F0] rounded-sm p-3 hover:shadow-md transition-shadow"
            >
              <div>
                {/* Packshot Image */}
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="relative aspect-[4/5] bg-[#F6F6F6] rounded-sm overflow-hidden mb-3 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[#111111] text-[11px] font-semibold px-2 py-0.5 rounded-sm">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="space-y-1">
                  <h3
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-[15px] font-medium text-[#111111] hover:text-[#707072] cursor-pointer leading-snug line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-[#707072]">{product.subtitle}</p>
                  <p className="text-[15px] font-medium text-[#111111] pt-1">
                    {formatIDR(product.price)}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#F0F0F0] mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    const defaultSize = product.sizes.find(s => !s.disabled)?.label || 'EU 42'
                    onAddToCart(product, defaultSize)
                  }}
                  className="flex-1 bg-[#111111] hover:bg-[#333333] text-white py-2 rounded-full text-[13px] font-medium transition-colors flex items-center justify-center space-x-1.5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="p-2 text-[#707072] hover:text-[#D3391A] hover:bg-[#F5F5F5] rounded-full transition-colors"
                  aria-label="Remove from Favourites"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
