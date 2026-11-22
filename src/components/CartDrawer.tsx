import React from 'react'
import type { CartItem } from '../types'
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (index: number, newQty: number) => void
  onRemoveItem: (index: number) => void
  onCheckout: () => void
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const freeShippingThreshold = 1500000
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0
  const deliveryFee = isFreeShipping ? 0 : 150000
  const total = subtotal + deliveryFee
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-[440px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between">
          <h2 className="text-[20px] font-bold text-[#111111]">
            Bag ({items.reduce((acc, cur) => acc + cur.quantity, 0)})
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#111111] hover:bg-[#F5F5F5] transition-colors"
            aria-label="Close bag drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#F5F5F5] px-6 py-3 border-b border-[#E5E5E5]">
          <div className="text-[13px] font-medium text-[#111111] mb-1.5 flex justify-between">
            <span>
              {isFreeShipping && items.length > 0
                ? '🎉 Congratulations! You have unlocked Free Delivery'
                : `Add ${formatIDR(freeShippingThreshold - subtotal)} more for Free Delivery`}
            </span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#E5E5E5] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#111111] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <p className="text-[16px] font-medium text-[#111111] mb-2">
                There are no items in your bag.
              </p>
              <p className="text-[14px] text-[#707072] mb-6">
                Explore our latest drops and performance sneakers.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#111111] text-white rounded-full text-[14px] font-medium hover:bg-[#333333] transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex gap-4 pb-6 border-b border-[#F0F0F0]">
                {/* Thumbnail */}
                <div className="w-24 h-24 bg-[#F6F6F6] rounded-sm overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-[15px] font-medium text-[#111111] leading-snug">
                        {item.product.name}
                      </h3>
                      <span className="text-[14px] font-medium text-[#111111]">
                        {formatIDR(item.product.price * item.quantity)}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#707072] mt-0.5">{item.product.subtitle}</p>
                    <p className="text-[13px] text-[#707072]">Size: <strong className="text-[#111111]">{item.size}</strong></p>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#E5E5E5] rounded-sm">
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        className="p-1 hover:bg-[#F5F5F5] text-[#111111] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-[13px] font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="p-1 hover:bg-[#F5F5F5] text-[#111111] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(index)}
                      className="text-[#707072] hover:text-[#D3391A] p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#E5E5E5] bg-white space-y-4">
            <div className="space-y-2 text-[14px]">
              <div className="flex justify-between text-[#707072]">
                <span>Subtotal</span>
                <span className="text-[#111111]">{formatIDR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#707072]">
                <span>Estimated Delivery</span>
                <span className="text-[#111111]">
                  {isFreeShipping ? 'Free' : formatIDR(deliveryFee)}
                </span>
              </div>
              <div className="flex justify-between text-[16px] font-bold text-[#111111] pt-2 border-t border-[#F0F0F0]">
                <span>Total</span>
                <span>{formatIDR(total)}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-[#111111] hover:bg-[#333333] active:scale-[0.99] text-white h-13 rounded-full font-medium text-[15px] transition-all flex items-center justify-center space-x-2"
            >
              <span>Member Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
