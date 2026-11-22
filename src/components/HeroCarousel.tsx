import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

interface SlideData {
  id: string
  title: string
  titleLine2?: string
  kicker?: string
  subtitle: string
  image: string
  buttons: {
    label: string
    actionId?: string
    isWatch?: boolean
  }[]
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 'hero-space-jam',
    title: 'GREATNESS IS NEVER OUT OF',
    titleLine2: 'REACH',
    subtitle: '30 years after MJ defeated the Monstars, the Jordan Brand x Space Jam Collection spotlights stretching beyond what you think is possible.',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1258,c_limit/64bc83d2-1220-436d-a7e5-34a7dbe96568/nike-just-do-it.jpg',
    buttons: [
      { label: 'Shop', actionId: 'jordan' }
    ]
  },
  {
    id: 'hero-fit-system',
    title: 'NEVER MISS A DAY',
    subtitle: "Conditions change. Goals don't. Nike FIT System keeps you running.",
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1258,c_limit/2347cb9a-8a56-4299-88ce-9a3d76e33db5/nike-just-do-it.png',
    buttons: [
      { label: 'Shop', actionId: 'running' },
      { label: 'Explore', actionId: 'explore' },
      { label: 'Watch ▶', actionId: 'watch', isWatch: true }
    ]
  },
  {
    id: 'hero-alphafly',
    kicker: 'Nike Racing',
    title: 'ALPHAFLY 4',
    subtitle: 'Faster times are in the Air.',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1a58a265-b406-48ef-ba0b-900a26b7170a/AIR+ZOOM+ALPHAFLY+NEXT%25+4.png',
    buttons: [
      { label: 'Shop Alphafly 4', actionId: 'alphafly-4' }
    ]
  },
  {
    id: 'hero-lebron',
    kicker: 'Performance Basketball',
    title: 'LIGHTEST. LEBRON. EVER.',
    subtitle: 'Crafted with elite court-feel and explosive multidirectional responsiveness.',
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_694,c_limit/d5668ed6-a371-4dc0-a809-5eb16e414b4a/nike-just-do-it.png',
    buttons: [
      { label: 'Shop LeBron XXIV', actionId: 'lebron-xxiv' }
    ]
  }
]

interface HeroCarouselProps {
  onSelectProduct?: (productId: string) => void
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectProduct }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 16000) // Authentic 16-second cycle matching Nike research VID-01 to VID-04
    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  return (
    <section className="w-full relative select-none overflow-hidden">
      {/* Edge-to-edge container with exact 2.06:1 geometry */}
      <div className="relative w-full bg-[#111111] aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.06/1] max-h-[612px] overflow-hidden">
        {/* Horizontal Sliding Track (Exact 700ms cubic-bezier transition) */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {HERO_SLIDES.map((s, index) => (
            <div key={s.id} className="relative w-full h-full flex-shrink-0">
              {/* Authentic Uncut Nike CDN Photography */}
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover object-top md:object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Bottom Contrast Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Content Overlaid Directly on Top of the Media */}
              <div className="absolute inset-x-0 bottom-0 pb-8 md:pb-12 px-6 z-20 flex flex-col items-center justify-end text-center pointer-events-auto">
                {s.kicker && (
                  <p className="text-[12px] md:text-[14px] font-semibold tracking-wider text-white uppercase mb-1 drop-shadow-sm">
                    {s.kicker}
                  </p>
                )}

                <h1 className="font-nike-futura text-[36px] sm:text-[52px] md:text-[68px] lg:text-[76px] leading-[0.9] font-black uppercase text-white tracking-tight drop-shadow-md text-center max-w-4xl">
                  {s.title}
                  {s.titleLine2 && (
                    <>
                      <br />
                      {s.titleLine2}
                    </>
                  )}
                </h1>

                <p className="text-[13px] md:text-[15px] leading-relaxed text-white/95 font-normal max-w-2xl mt-2 drop-shadow-sm">
                  {s.subtitle}
                </p>

                {/* White Pill Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                  {s.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (btn.actionId && onSelectProduct) {
                          onSelectProduct(btn.actionId)
                        }
                      }}
                      className="bg-white text-[#111111] hover:bg-neutral-200 px-7 py-2 rounded-full font-medium text-[15px] transition-all shadow-sm active:scale-95 flex items-center space-x-1.5"
                    >
                      <span>{btn.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Bottom Slide Indicator Dots */}
        <div className="absolute bottom-3 inset-x-0 z-30 flex items-center justify-center space-x-2 pointer-events-none">
          {HERO_SLIDES.map((_, dotIdx) => (
            <div
              key={dotIdx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === dotIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Bottom Right Circular Navigation Controls */}
        <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 z-30 flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all backdrop-blur-sm focus:outline-none"
            aria-label={isPlaying ? 'Pause carousel autoplay' : 'Play carousel autoplay'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all backdrop-blur-sm focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all backdrop-blur-sm focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
