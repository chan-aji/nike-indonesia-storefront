import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import type { Product } from '../types'
import { Heart, ChevronDown, ChevronUp, Truck, RotateCcw, ArrowRight } from 'lucide-react'

interface ProductDetailPageProps {
  onAddToCart: (product: Product, size: string) => void
  wishlistIds: string[]
  onToggleWishlist: (productId: string) => void
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onAddToCart,
  wishlistIds,
  onToggleWishlist
}) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0]

  const [selectedImage, setSelectedImage] = useState<string>(product.image)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sizeError, setSizeError] = useState(false)
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    details: true,
    delivery: false,
    reviews: false
  })

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]
  const isWishlisted = wishlistIds.includes(product.id)

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

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8">
      {/* Breadcrumb */}
      <nav className="text-[12px] text-[#707072] mb-6 flex items-center space-x-1.5">
        <a href="/" className="hover:text-[#111111]">Home</a>
        <span>/</span>
        <a href="/products" className="hover:text-[#111111]">Shoes</a>
        <span>/</span>
        <a href={`/products?category=${product.category}`} className="hover:text-[#111111] capitalize">{product.category}</a>
        <span>/</span>
        <span className="text-[#111111] font-medium">{product.name}</span>
      </nav>

      {/* Main 2-Column PDP Grid (60% Gallery / 40% Sticky Buy Box) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Left Column: Stacked High-Res Gallery (~60% width) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Hero Shot */}
          <div className="w-full aspect-[4/5] bg-[#F6F6F6] rounded-sm overflow-hidden relative shadow-xs">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#111111] text-[12px] font-semibold px-3 py-1 rounded-sm shadow-sm">
                {product.badge}
              </div>
            )}
          </div>

          {/* 2-Column Grid of Remaining Multi-Angle Detail Shots */}
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`aspect-[4/5] bg-[#F6F6F6] rounded-sm overflow-hidden cursor-pointer border-2 transition-all ${
                  selectedImage === img ? 'border-[#111111]' : 'border-transparent hover:border-[#CCCCCC]'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} angle ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Purchasing Interface Buy Box (~40% width) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div>
            <h1 className="text-[28px] md:text-[32px] font-medium text-[#111111] leading-tight mb-1">
              {product.name}
            </h1>
            <p className="text-[16px] text-[#707072] mb-3">
              {product.subtitle}
            </p>
            <div className="flex items-baseline space-x-3">
              <p className="text-[22px] font-medium text-[#111111]">
                {formatIDR(product.price)}
              </p>
              {product.originalPrice && (
                <p className="text-[16px] text-[#707072] line-through font-normal">
                  {formatIDR(product.originalPrice)}
                </p>
              )}
            </div>
            <p className="text-[12px] text-[#707072] mt-0.5">
              incl. of all taxes
            </p>
          </div>

          {/* Colorway Thumbnails */}
          <div>
            <p className="text-[13px] font-semibold text-[#111111] mb-2">
              Available Colourways
            </p>
            <div className="flex gap-2">
              <button className="w-16 h-16 rounded-sm border-2 border-[#111111] overflow-hidden bg-[#F6F6F6]">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Size Selector Grid */}
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

            {/* Size Grid with Slashed Out of Stock */}
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
                  {s.disabled && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[120%] h-[1px] bg-[#CCCCCC] rotate-[-25deg]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action CTA Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleAdd}
              className="w-full bg-[#111111] hover:bg-[#333333] active:scale-[0.99] text-white h-14 rounded-full font-medium text-[16px] transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Add to Bag</span>
            </button>

            <button
              onClick={() => onToggleWishlist(product.id)}
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

          {/* Delivery & Guarantees */}
          <div className="border-t border-[#E5E5E5] pt-5 space-y-3">
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
                <span className="font-semibold">30-day Free Return Window. </span>
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
                  <p><strong className="text-[#111111]">Country/Region of Origin:</strong> China</p>
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
                    <p className="font-semibold text-[#111111] text-[13px]">Exceptional marathon speed & energy return</p>
                    <p className="text-[12px] text-[#707072]">"Ran my half-marathon PB right out of the box. The bounce from ZoomX and carbon plate is unmatched." — Andi S.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations: "You Might Also Like" */}
      <section className="mt-20 pt-12 border-t border-[#E5E5E5]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-medium text-[#111111] tracking-tight">
            You Might Also Like
          </h2>
          <button
            onClick={() => navigate('/products')}
            className="text-[14px] font-medium text-[#111111] hover:text-[#707072] flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(rel => (
            <div
              key={rel.id}
              onClick={() => {
                navigate(`/product/${rel.id}`)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-[#F6F6F6] overflow-hidden mb-3">
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[15px] font-medium text-[#111111] group-hover:text-[#707072] transition-colors leading-snug">
                {rel.name}
              </h3>
              <p className="text-[13px] text-[#707072]">{rel.subtitle}</p>
              <p className="text-[14px] font-medium text-[#111111] pt-1">
                {formatIDR(rel.price)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
