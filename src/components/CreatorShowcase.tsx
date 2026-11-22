import React from 'react'

interface CreatorShowcaseProps {
  onSelectProduct?: (productId: string) => void
}

export const CreatorShowcase: React.FC<CreatorShowcaseProps> = ({ onSelectProduct }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
      <h2 className="text-[24px] font-medium text-[#111111] mb-6 tracking-tight">
        Creator Styled. Archive Inspired.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Creator 1: @annethong */}
        <div className="flex flex-col group cursor-pointer" onClick={() => onSelectProduct && onSelectProduct('lifestyle')}>
          <div className="relative aspect-[1.5/1] overflow-hidden bg-[#F6F6F6] rounded-xs mb-4">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_575,c_limit/24dc17f0-a14f-4d19-8176-65e9f37171f8/nike-just-do-it.png"
              alt="Nike Moon Shoe styled by @annethong"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-[#707072]">@annethong</p>
            <h3 className="text-[20px] font-bold text-[#111111]">Nike Moon Shoe</h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                if (onSelectProduct) onSelectProduct('lifestyle')
              }}
              className="mt-2 inline-flex items-center text-[15px] font-semibold underline hover:text-[#707072] transition-colors"
            >
              Shop
            </button>
          </div>
        </div>

        {/* Creator 2: @ilykyleaux */}
        <div className="flex flex-col group cursor-pointer" onClick={() => onSelectProduct && onSelectProduct('running')}>
          <div className="relative aspect-[1.5/1] overflow-hidden bg-[#F6F6F6] rounded-xs mb-4">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_575,c_limit/621c5af1-4f4a-44ae-9175-7e805ebb6b1f/nike-just-do-it.png"
              alt="Nike Zoom Skylon 11 styled by @ilykyleaux"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="space-y-1">
            <p className="text-[13px] font-semibold text-[#707072]">@ilykyleaux</p>
            <h3 className="text-[20px] font-bold text-[#111111]">Nike Zoom Skylon 11</h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                if (onSelectProduct) onSelectProduct('running')
              }}
              className="mt-2 inline-flex items-center text-[15px] font-semibold underline hover:text-[#707072] transition-colors"
            >
              Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
