import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TrendingSliderProps {
  onSelectProduct?: (productId: string) => void
}

interface TrendingCard {
  id: string
  kicker?: string
  title: string
  buttonLabel: string
  image: string
  actionId: string
}

const TRENDING_CARDS: TrendingCard[] = [
  {
    id: 'trend-1',
    kicker: 'Nike By You x Paulina',
    title: 'In Full Bloom',
    buttonLabel: 'Shop',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/6ff4d5d4-c331-4236-990e-45293fd48491/image.png',
    actionId: 'lifestyle'
  },
  {
    id: 'trend-2',
    kicker: 'Vini Jr. Mercurial Vapor',
    title: 'Your Rhythm, Your Rules.',
    buttonLabel: 'Shop',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/c5cfb3ec-c04f-4231-86c0-28f47067850c/nike-just-do-it.png',
    actionId: 'football'
  },
  {
    id: 'trend-3',
    kicker: 'Coming Soon',
    title: "Air Jordan 4 Retro 'Bred'",
    buttonLabel: 'Preview on SNKRS',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/1d065241-186b-4497-bd08-55db8b43e71a/image.png',
    actionId: 'snkrs'
  }
]

export const TrendingSlider: React.FC<TrendingSliderProps> = ({ onSelectProduct }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 390
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[24px] font-medium text-[#111111] tracking-tight">
          Trending
        </h2>
        {/* Arrow Navigation */}
        <div className="hidden sm:flex items-center space-x-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-3 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] rounded-full transition-colors"
            aria-label="Previous trending items"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-3 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] rounded-full transition-colors"
            aria-label="Next trending items"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3-Column Trending Cards Track */}
      <div
        ref={scrollContainerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
      >
        {TRENDING_CARDS.map((card) => (
          <div
            key={card.id}
            className="relative aspect-[0.81/1] overflow-hidden group cursor-pointer rounded-xs bg-[#111111]"
            onClick={() => onSelectProduct && onSelectProduct(card.actionId)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Overlay Text & CTA */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 pointer-events-none">
              {card.kicker && (
                <p className="text-[13px] md:text-[14px] font-medium text-white/90">
                  {card.kicker}
                </p>
              )}
              <h3 className="text-[20px] md:text-[22px] font-bold leading-tight">
                {card.title}
              </h3>
              <div className="pt-2 pointer-events-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (onSelectProduct) onSelectProduct(card.actionId)
                  }}
                  className="bg-white text-[#111111] hover:bg-neutral-200 px-5 py-2 rounded-full font-medium text-[14px] transition-all shadow-sm active:scale-95"
                >
                  {card.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
