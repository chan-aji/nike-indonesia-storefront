import React from 'react'

interface FeaturedSectionProps {
  onSelectProduct?: (productId: string) => void
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onSelectProduct }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
      <h2 className="text-[24px] font-medium text-[#111111] mb-6 tracking-tight">
        Featured
      </h2>

      {/* 2-Column Balanced Grid (0.95:1 aspect ratio) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Card 1: LeBron XXIV */}
        <div className="relative group overflow-hidden bg-[#F6F6F6] rounded-sm flex flex-col justify-end aspect-[0.95/1]">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_694,c_limit/d5668ed6-a371-4dc0-a809-5eb16e414b4a/nike-just-do-it.png"
            alt="LeBron XXIV"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          {/* Bottom Card Content */}
          <div className="relative z-10 p-8 md:p-10 text-white bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <p className="text-[15px] font-medium tracking-wide mb-1 opacity-90">
              LeBron XXIV
            </p>
            <h3 className="text-[26px] md:text-[32px] font-bold leading-tight mb-4">
              Lightest. Lebron. Ever.
            </h3>
            <button
              onClick={() => onSelectProduct && onSelectProduct('lebron-xxiv')}
              className="bg-white text-[#111111] hover:bg-neutral-200 px-6 py-2 rounded-full text-[15px] font-medium transition-colors"
            >
              Shop
            </button>
          </div>
        </div>

        {/* Card 2: Tennis Gifts */}
        <div className="relative group overflow-hidden bg-[#F6F6F6] rounded-sm flex flex-col justify-end aspect-[0.95/1]">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_694,c_limit/e1eaf902-7608-4aa9-94cd-fc589c15a39a/nike-just-do-it.png"
            alt="Tennis Gifts"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          {/* Bottom Card Content */}
          <div className="relative z-10 p-8 md:p-10 text-white bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <p className="text-[15px] font-medium tracking-wide mb-1 opacity-90">
              Tennis Gifts
            </p>
            <h3 className="text-[26px] md:text-[32px] font-bold leading-tight mb-4">
              Serve Up Winning Style
            </h3>
            <button
              onClick={() => onSelectProduct && onSelectProduct('tennis-court-air-zoom')}
              className="bg-white text-[#111111] hover:bg-neutral-200 px-6 py-2 rounded-full text-[15px] font-medium transition-colors"
            >
              Shop Gifts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
