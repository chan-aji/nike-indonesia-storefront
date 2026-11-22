import React from 'react'

export const GiveSportBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFAFA] border-y border-dashed border-[#CCCCCC] select-none py-1.5 overflow-hidden">
      <div className="w-full flex items-center justify-center">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1258,c_limit/fa59b0ef-e6f2-4aa3-abdf-f88e345582dc/nike-just-do-it.png"
          alt="Give Sport Holiday Gifting Collection 2026"
          className="w-full max-h-[76px] md:max-h-[87px] object-cover md:object-contain"
          loading="eager"
        />
      </div>
    </div>
  )
}
