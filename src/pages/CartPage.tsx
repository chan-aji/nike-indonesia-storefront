import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { CartItem } from '../types'
import { Heart, Trash2, ArrowRight, ShieldCheck, Truck } from 'lucide-react'

interface CartPageProps {
  items: CartItem[]
  onUpdateQuantity: (index: number, newQty: number) => void
  onRemoveItem: (index: number) => void
  onToggleWishlist: (productId: string) => void
  wishlistIds: string[]
  onCheckout: () => void
}

export const CartPage: React.FC<CartPageProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onToggleWishlist,
  wishlistIds,
  onCheckout
}) => {
  const navigate = useNavigate()

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const freeShippingThreshold = 1500000
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0
  const deliveryFee = isFreeShipping ? 0 : 150000
  const total = subtotal + deliveryFee
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-10">
      <h1 className="text-[28px] font-medium text-[#111111] mb-8">
        Bag
      </h1>

      {items.length === 0 ? (
        <div className="py-20 text-center space-y-4">
          <p className="text-[20px] font-medium text-[#111111]">
            There are no items in your bag.
          </p>
          <p className="text-[15px] text-[#707072] max-w-md mx-auto">
            Discover our latest performance shoes, gear and member exclusive collections.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3 bg-[#111111] text-white rounded-full font-medium hover:bg-[#333333] transition-colors"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Items in Bag (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Free Delivery Notification Bar */}
            <div className="bg-[#F5F5F5] p-4 rounded-sm border border-[#E5E5E5]">
              <div className="flex items-center space-x-2 text-[14px] font-medium text-[#111111] mb-2">
                <Truck className="w-5 h-5 text-[#111111]" />
                <span>
                  {isFreeShipping
                    ? '🎉 Free Standard Delivery unlocked for this order!'
                    : `Add ${formatIDR(freeShippingThreshold - subtotal)} more to unlock Free Delivery`}
                </span>
              </div>
              <div className="w-full bg-[#E0E0E0] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#111111] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Item Cards List */}
            <div className="divide-y divide-[#E5E5E5]">
              {items.map((item, index) => {
                const isFav = wishlistIds.includes(item.product.id)
                return (
                  <div key={index} className="py-6 flex flex-col sm:flex-row gap-6">
                    {/* Thumbnail */}
                    <div
                      onClick={() => navigate(`/product/${item.product.id}`)}
                      className="w-36 h-36 bg-[#F6F6F6] rounded-sm overflow-hidden flex-shrink-0 cursor-pointer"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover hover:scale-103 transition-transform"
                      />
                    </div>

                    {/* Information */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3
                            onClick={() => navigate(`/product/${item.product.id}`)}
                            className="text-[17px] font-medium text-[#111111] hover:text-[#707072] cursor-pointer"
                          >
                            {item.product.name}
                          </h3>
                          <span className="text-[16px] font-medium text-[#111111]">
                            {formatIDR(item.product.price * item.quantity)}
                          </span>
                        </div>
                        <p className="text-[14px] text-[#707072]">{item.product.subtitle}</p>
                        {item.product.colorShown && (
                          <p className="text-[13px] text-[#707072] mt-0.5">{item.product.colorShown}</p>
                        )}

                        {/* Size & Quantity Selectors */}
                        <div className="flex items-center space-x-6 mt-3 text-[14px] text-[#707072]">
                          <div>
                            <span>Size: </span>
                            <strong className="text-[#111111]">{item.size}</strong>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>Quantity:</span>
                            <select
                              value={item.quantity}
                              onChange={(e) => onUpdateQuantity(index, parseInt(e.target.value))}
                              className="bg-transparent border border-[#CCCCCC] rounded px-2 py-0.5 text-[#111111] font-medium cursor-pointer"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(q => (
                                <option key={q} value={q}>{q}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center space-x-5 pt-4 text-[#707072]">
                        <button
                          onClick={() => onToggleWishlist(item.product.id)}
                          className="hover:text-[#111111] flex items-center space-x-1.5 text-[14px]"
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-[#111111] text-[#111111]' : ''}`} />
                          <span>{isFav ? 'In Favourites' : 'Add to Favourites'}</span>
                        </button>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="hover:text-[#D3391A] flex items-center space-x-1.5 text-[14px]"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Order Summary (4 cols) */}
          <div className="lg:col-span-4 bg-[#FAFAFA] p-6 rounded-sm border border-[#E5E5E5] space-y-6">
            <h2 className="text-[20px] font-medium text-[#111111]">
              Summary
            </h2>

            <div className="space-y-3 text-[15px]">
              <div className="flex justify-between text-[#707072]">
                <span>Subtotal</span>
                <span className="text-[#111111]">{formatIDR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#707072]">
                <span>Estimated Delivery & Handling</span>
                <span className="text-[#111111]">
                  {isFreeShipping ? 'Free' : formatIDR(deliveryFee)}
                </span>
              </div>
              <div className="border-t border-[#E5E5E5] pt-3 flex justify-between text-[17px] font-bold text-[#111111]">
                <span>Total</span>
                <span>{formatIDR(total)}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={onCheckout}
                className="w-full bg-[#111111] hover:bg-[#333333] active:scale-[0.99] text-white h-14 rounded-full font-medium text-[16px] transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Member Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => alert('Redirecting to PayPal Checkout...')}
                className="w-full bg-[#FFC439] hover:bg-[#F2BA36] active:scale-[0.99] text-[#111111] h-12 rounded-full font-bold text-[15px] transition-all flex items-center justify-center shadow-xs"
              >
                PayPal
              </button>
            </div>

            <div className="border-t border-[#E5E5E5] pt-4 flex items-center space-x-2 text-[12px] text-[#707072]">
              <ShieldCheck className="w-4 h-4 text-[#111111]" />
              <span>Secure Encrypted 256-bit Payment Gateway</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
