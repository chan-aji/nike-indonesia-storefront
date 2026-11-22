import React, { useState } from 'react'
import type { Product } from '../types'
import { X, Heart, ChevronDown, ChevronUp, Truck, RotateCcw } from 'lucide-react'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
  onAddToCart: (product: Product, size: string) => void
  isWishlisted?: boolean
  onToggleWishlist?: (productId: string) => void
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!product) return null

  const [selectedImage, setSelectedImage] = useState<string>(product.image)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sizeError, setSizeError] = useState(false)
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    details: true,
    delivery: false,
    reviews: false
  })

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const handleAdd = () => {
    if (!selectedSize) {
      setSizeError(true)
      return
    }
    setSizeError(false)
    onAddToCart(product, selectedSize)
  }

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-full transition-colors"
          aria-label="Close product view"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Scroll Container */}
        <div className="overflow-y-auto p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left Column: Gallery (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnail Strip */}
              {gallery.length > 1 && (
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 flex-shrink-0 max-h-[460px]">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-[#F6F6F6] rounded-sm overflow-hidden border-2 transition-all ${
                        selectedImage === img ? 'border-[#111111]' : 'border-transparent hover:border-[#CCCCCC]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Angle ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Feature Image Container */}
              <div className="flex-1 aspect-[4/5] bg-[#F6F6F6] rounded-sm overflow-hidden relative">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111111] text-[12px] font-semibold px-3 py-1 rounded-sm shadow-sm">
                    {product.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sticky Buy Box & Info (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
              <div>
                <h1 className="text-[26px] md:text-[28px] font-medium text-[#111111] leading-tight mb-1">
                  {product.name}
                </h1>
                <p className="text-[16px] text-[#707072] mb-3">
                  {product.subtitle}
                </p>
                <p className="text-[20px] font-medium text-[#111111]">
                  {formatIDR(product.price)}
                </p>
                <p className="text-[12px] text-[#707072] mt-0.5">
                  incl. of all taxes
                </p>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[15px] font-medium text-[#111111]">
                    Select Size
                  </span>
                  <button className="text-[13px] text-[#707072] hover:text-[#111111] underline font-medium">
                    Size Guide
                  </button>
                </div>

                {sizeError && (
                  <p className="text-[#D3391A] text-[13px] font-medium mb-2">
                    Please select a size before adding to bag.
                  </p>
                )}

                {/* Size Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((s, idx) => (
                    <button
                      key={idx}
                      disabled={s.disabled}
                      onClick={() => {
                        setSelectedSize(s.label)
                        setSizeError(false)
                      }}
                      className={`h-12 rounded-sm text-[14px] font-medium border relative transition-all flex items-center justify-center ${
                        s.disabled
                          ? 'bg-[#F5F5F5] text-[#CCCCCC] border-[#E5E5E5] cursor-not-allowed overflow-hidden'
                          : selectedSize === s.label
                          ? 'border-[#111111] bg-[#111111] text-white shadow-sm'
                          : 'border-[#E5E5E5] hover:border-[#111111] text-[#111111] bg-white'
                      }`}
                    >
                      <span>{s.label}</span>
                      {/* Slashed line for out of stock */}
                      {s.disabled && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[120%] h-[1px] bg-[#CCCCCC] rotate-[-25deg]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleAdd}
                  className="w-full bg-[#111111] hover:bg-[#333333] active:scale-[0.99] text-white h-14 rounded-full font-medium text-[16px] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={() => onToggleWishlist && onToggleWishlist(product.id)}
                  className={`w-full h-14 rounded-full font-medium text-[16px] border transition-all flex items-center justify-center space-x-2 ${
                    isWishlisted
                      ? 'border-[#111111] bg-[#F5F5F5] text-[#111111]'
                      : 'border-[#CCCCCC] hover:border-[#111111] text-[#111111]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#111111]' : ''}`} />
                  <span>{isWishlisted ? 'Favourited' : 'Favourite'}</span>
                </button>
              </div>

              {/* Highlights & Delivery Perks */}
              <div className="border-t border-[#E5E5E5] pt-4 space-y-3">
                <div className="flex items-start space-x-3 text-[13px] text-[#111111]">
                  <Truck className="w-5 h-5 text-[#707072] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Free Delivery & Returns </span>
                    <span className="text-[#707072]">for Nike Members on orders over Rp 1.500.000.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-[13px] text-[#111111]">
                  <RotateCcw className="w-5 h-5 text-[#707072] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">30-day Free Return Policy. </span>
                    <span className="text-[#707072]">Standard dispatch within 2-4 business days.</span>
                  </div>
                </div>
              </div>

              {/* Accordions */}
              <div className="border-t border-[#E5E5E5] divide-y divide-[#E5E5E5]">
                {/* Product Details */}
                <div>
                  <button
                    onClick={() => toggleAccordion('details')}
                    className="w-full py-4 flex justify-between items-center text-left text-[16px] font-medium text-[#111111]"
                  >
                    <span>Product Details</span>
                    {openAccordions.details ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordions.details && (
                    <div className="pb-4 text-[14px] leading-relaxed text-[#707072] space-y-2">
                      <p>{product.description}</p>
                      {product.colorShown && (
                        <p><strong className="text-[#111111]">Colour Shown:</strong> {product.colorShown}</p>
                      )}
                      {product.styleCode && (
                        <p><strong className="text-[#111111]">Style:</strong> {product.styleCode}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Free Delivery and Returns */}
                <div>
                  <button
                    onClick={() => toggleAccordion('delivery')}
                    className="w-full py-4 flex justify-between items-center text-left text-[16px] font-medium text-[#111111]"
                  >
                    <span>Free Delivery and Returns</span>
                    {openAccordions.delivery ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordions.delivery && (
                    <div className="pb-4 text-[14px] leading-relaxed text-[#707072] space-y-2">
                      <p>Your order of Rp 1.500.000 or more gets free standard delivery.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Standard deliveries arrive in 2-4 business days.</li>
                        <li>Next-day deliveries are available across major metro regions.</li>
                        <li>Returns are always free and accepted within 30 days.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Reviews */}
                <div>
                  <button
                    onClick={() => toggleAccordion('reviews')}
                    className="w-full py-4 flex justify-between items-center text-left text-[16px] font-medium text-[#111111]"
                  >
                    <span>Reviews (18)</span>
                    {openAccordions.reviews ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordions.reviews && (
                    <div className="pb-4 text-[14px] leading-relaxed text-[#707072] space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-[18px] font-bold text-[#111111]">4.9</span>
                        <div className="flex text-amber-500">★★★★★</div>
                        <span className="text-[12px] text-[#707072]">(98% recommend this product)</span>
                      </div>
                      <div className="border-t border-[#F0F0F0] pt-2">
                        <p className="font-semibold text-[#111111] text-[13px]">Incredible cushioning and speed</p>
                        <p className="text-[12px] text-[#707072]">"Ran my half-marathon PB right out of the box. The bounce from ZoomX is unmatched." — Andi S.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
