import React from 'react'

interface SportItem {
  id: string
  name: string
  image: string
}

const SPORTS: SportItem[] = [
  {
    id: 'running',
    name: 'Running',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/8b1b705e-797a-4a3e-9ccd-437d5d1e5516/image.png'
  },
  {
    id: 'football',
    name: 'Football',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/66425b90-bc8f-480b-afd7-8bafe249e086/nike-just-do-it.png'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/56427d00-c069-4a7c-abf4-f3de56f5b1a6/image.png'
  },
  {
    id: 'training',
    name: 'Gym & Training',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/a3e4c4ed-727a-4392-a9fc-2ba137dca02d/nike-just-do-it.png'
  },
  {
    id: 'tennis',
    name: 'Tennis',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/5d4a93d5-e45d-471d-91a2-0c5253b96e50/image.png'
  },
  {
    id: 'skateboarding',
    name: 'Skateboarding',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/80cdf6d1-641e-442c-bd09-01102fddc2d7/image.png'
  }
]

export const ShopBySport: React.FC<{ onSelectSport?: (sport: string) => void }> = ({ onSelectSport }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
      <h2 className="text-[24px] font-medium text-[#111111] mb-6 tracking-tight">
        Shop by Sport
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {SPORTS.map(sport => (
          <div
            key={sport.id}
            onClick={() => onSelectSport && onSelectSport(sport.id)}
            className="group cursor-pointer relative overflow-hidden rounded-sm aspect-[3/4] bg-[#F5F5F5]"
          >
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Gradient and Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-[16px] font-semibold group-hover:underline">
                {sport.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
