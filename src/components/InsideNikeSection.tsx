import React from 'react'

interface EditorialStory {
  title: string
  subtitle: string
  image: string
  linkText: string
}

const STORIES: EditorialStory[] = [
  {
    title: 'The Blueprint of Speed',
    subtitle: 'Inside the Nike Sport Research Lab where the Alphafly 4 was born to break world records.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1a58a265-b406-48ef-ba0b-900a26b7170a/AIR+ZOOM+ALPHAFLY+NEXT%25+4.png',
    linkText: 'Read the Story'
  },
  {
    title: 'Move to Zero Journey',
    subtitle: 'How recycled circular design transformed the LeBron XXIV into the lightest performance shoe in history.',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_694,c_limit/d5668ed6-a371-4dc0-a809-5eb16e414b4a/nike-just-do-it.png',
    linkText: 'Explore Sustainability'
  },
  {
    title: 'Air Innovation at 40',
    subtitle: 'From the Air Force 1 to modern full-length ZoomX plates: four decades of cushioning heritage.',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_518,c_limit/6ff4d5d4-c331-4236-990e-45293fd48491/image.png',
    linkText: 'Discover Air'
  }
]

export const InsideNikeSection: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12">
      <div className="mb-8">
        <h2 className="text-[24px] font-medium text-[#111111] tracking-tight mb-1">
          Inside Nike
        </h2>
        <p className="text-[15px] text-[#707072]">
          Get to know the people, technologies and ideas behind the brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STORIES.map((story, idx) => (
          <div key={idx} className="group cursor-pointer flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F6F6F6] rounded-sm mb-4">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h3 className="text-[18px] font-bold text-[#111111] mb-2 group-hover:text-[#707072] transition-colors">
              {story.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-[#707072] mb-4">
              {story.subtitle}
            </p>
            <span className="text-[14px] font-semibold underline text-[#111111] group-hover:text-[#707072] mt-auto">
              {story.linkText}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
