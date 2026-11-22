import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnnouncementBar } from '../components/AnnouncementBar'
import { PRODUCTS } from '../data/products'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface WomenPageProps {
  onOpenQuickView?: (productId: string) => void
}

export const WomenPage: React.FC<WomenPageProps> = () => {
  const navigate = useNavigate()
  const arrivalsScrollRef = useRef<HTMLDivElement>(null)
  const colourScrollRef = useRef<HTMLDivElement>(null)
  const sportScrollRef = useRef<HTMLDivElement>(null)

  // 1. Hero Slides (Slide 1 matches user screenshot!)
  const heroSlides = [
    {
      kicker: 'Iconic Heritage',
      title: 'MOON SHOE',
      subtitle: 'The historic waffle silhouette that sparked a revolution in sport and street culture.',
      primaryBtn: 'Shop',
      primaryLink: '/products?category=lifestyle',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/24dc17f0-a14f-4d19-8176-65e9f37171f8/nike-just-do-it.png'
    },
    {
      kicker: 'Nike Women',
      title: 'NEVER MISS A DAY',
      subtitle: 'Keep showing up for yourself. Find strength and rhythm in every movement.',
      primaryBtn: 'Shop',
      primaryLink: '/products?category=running',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/92dffc65-1adb-4e8c-946b-77a0338332ff/women-s-shoes-clothing-accessories.png'
    },
    {
      kicker: 'Nike Training',
      title: 'TRAIN EVERYTHING',
      subtitle: 'From studio flow to high-intensity reps, discover gear built to move with you.',
      primaryBtn: 'Shop',
      primaryLink: '/products?category=training',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/6bc23723-9964-4328-9d8d-7b1e39f2fa77/women-s-shoes-clothing-accessories.jpg'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  // 2. Featured 2x2 Grid
  const featuredCards = [
    {
      kicker: 'Give Nike',
      title: 'Unwrap a Winning Look',
      button: 'Shop Gifts',
      link: '/products?category=lifestyle',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/477c7582-a073-4d93-b416-45e67d0e0532/women-s-shoes-clothing-accessories.png'
    },
    {
      kicker: 'Alphafly 4',
      title: 'Faster times are in the Air.',
      button: 'Shop',
      link: '/products?category=running',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/2b27830b-97b4-491a-819a-f67f909a295b/women-s-shoes-clothing-accessories.png'
    }
  ]

  // 3. Shop by Colour
  const colours = [
    {
      title: 'Hyper Pink',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/85c9547c-f605-4527-949d-91b50e7d0c55/women-s-shoes-clothing-accessories.png',
      link: '/products?color=pink'
    },
    {
      title: 'Bold Berry & Brown',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/089a4762-ebb7-45d3-bfde-34906660d400/image.png',
      link: '/products?color=brown'
    },
    {
      title: 'Deep Red',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/8ef95e81-8397-403f-91a1-3f9686b55617/image.png',
      link: '/products?color=red'
    }
  ]

  // 4. Shop Essentials
  const essentials = [
    {
      title: 'Shop Apparel',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/e2b3fa00-97ef-40c1-9fe1-ee135a92457a/image.png',
      link: '/products?category=clothing'
    },
    {
      title: 'Shop Footwear',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/796aee35-6ea1-4e6e-9c01-dee268075649/women-s-shoes-clothing-accessories.jpg',
      link: '/products?category=running'
    },
    {
      title: 'Shop Accessories',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/90d0564f-c7f9-41c3-a8cd-08e443495384/women-s-shoes-clothing-accessories.png',
      link: '/products?category=accessories'
    }
  ]

  // 5. Shop by Sport
  const sports = [
    {
      title: 'Running',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/116e3f18-2b57-47fe-b012-930d7837e2c0/women-s-shoes-clothing-accessories.png',
      link: '/products?category=running'
    },
    {
      title: 'Gym & Training',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/fff34c93-d84d-4cb2-bb81-844e0d40f38d/women-s-shoes-clothing-accessories.png',
      link: '/products?category=training'
    },
    {
      title: 'Yoga & Pilates',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/9ce10213-a405-4375-95ed-5dfec2372c51/women-s-shoes-clothing-accessories.png',
      link: '/products?category=training'
    },
    {
      title: 'Basketball',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/47e6a35d-0649-466e-a3ac-f9df2bf81adb/women-s-shoes-clothing-accessories.png',
      link: '/products?category=basketball'
    },
    {
      title: 'Football',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/e26ef17b-6ef3-4a48-9357-4b3637387efa/women-s-shoes-clothing-accessories.png',
      link: '/products?category=football'
    }
  ]

  // Authentic Women's Products for Arrivals Carousel
  const womenProducts = PRODUCTS.filter(p => 
    p.subtitle.toLowerCase().includes('women') || 
    p.name.includes('Pegasus Premium') || 
    p.name.includes('Vomero Plus') ||
    p.name.includes('Vomero 18') ||
    p.name.includes('Dunk Low')
  ).slice(0, 12)

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (!ref.current) return
    const scrollAmount = 380
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  const categoryPills = [
    { label: 'Shoes', path: '/products?category=running' },
    { label: 'Clothing', path: '/products?category=clothing' },
    { label: 'Accessories', path: '/products?category=accessories' },
    { label: 'Bras & Leggings', path: '/products?category=clothing' },
    { label: 'Best Sellers', path: '/products' }
  ]

  const activeHero = heroSlides[currentSlide]

  return (
    <div className="w-full bg-white pb-20">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Secondary Local Header / Category Pills */}
      <div className="border-b border-[#E5E5E5] bg-white sticky top-[60px] z-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
          <h1 className="text-[20px] font-bold tracking-tight text-[#111111]">Women</h1>
          <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-1">
            {categoryPills.map((pill, idx) => (
              <button
                key={idx}
                onClick={() => navigate(pill.path)}
                className="whitespace-nowrap px-4 py-1.5 rounded-full text-[13px] font-medium bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] transition-colors"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Hero Carousel Banner */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 pt-4 relative group">
        <div className="w-full aspect-[16/9] md:aspect-[2.06/1] max-h-[720px] rounded-2xl relative overflow-hidden bg-[#111111]">
          <img
            src={activeHero.image}
            alt={activeHero.title}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
            loading="eager"
          />

          {/* Slide Navigation Dots */}
          <div className="absolute bottom-6 right-8 z-10 flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Left / Right Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#111111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % heroSlides.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#111111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Editorial Copy */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8 pb-12 text-center">
          <p className="text-[14px] md:text-[15px] font-bold uppercase tracking-wider text-[#111111] mb-2">
            {activeHero.kicker}
          </p>
          <h2 className="text-[38px] md:text-[56px] font-black uppercase tracking-tighter leading-none mb-3 text-[#111111]">
            {activeHero.title}
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#707072] max-w-[620px] mx-auto mb-6">
            {activeHero.subtitle}
          </p>
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => navigate(activeHero.primaryLink)}
              className="bg-[#111111] text-white hover:bg-[#707072] px-6 py-2.5 rounded-full text-[14px] font-medium transition-colors"
            >
              {activeHero.primaryBtn}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Featured 2-Card Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <h3 className="text-[24px] font-bold text-[#111111] mb-6 tracking-tight">
          Featured
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredCards.map((card, idx) => (
            <div key={idx} className="relative aspect-[0.95/1] overflow-hidden group bg-[#F5F5F5]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent flex flex-col justify-end p-8 text-white">
                <p className="text-[13px] font-semibold uppercase tracking-wider mb-1 text-white/90">
                  {card.kicker}
                </p>
                <h4 className="text-[24px] md:text-[28px] font-bold leading-tight mb-4">
                  {card.title}
                </h4>
                <div>
                  <button
                    onClick={() => navigate(card.link)}
                    className="bg-white text-[#111111] hover:bg-white/80 px-5 py-2 rounded-full text-[13px] font-medium transition-colors"
                  >
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Colour */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[24px] font-bold text-[#111111] tracking-tight">
            Shop by Colour
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll(colourScrollRef, 'left')}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[#111111]" />
            </button>
            <button
              onClick={() => handleScroll(colourScrollRef, 'right')}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[#111111]" />
            </button>
          </div>
        </div>

        <div
          ref={colourScrollRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {colours.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(item.link)}
              className="flex-none w-[320px] md:w-[420px] group cursor-pointer"
            >
              <div className="aspect-[1/1] overflow-hidden bg-[#F5F5F5] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <h4 className="text-[17px] font-semibold text-[#111111] tracking-tight">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6. New Arrivals (Curated Women's Packshots) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[24px] font-bold text-[#111111] tracking-tight">
            New Arrivals
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll(arrivalsScrollRef, 'left')}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[#111111]" />
            </button>
            <button
              onClick={() => handleScroll(arrivalsScrollRef, 'right')}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[#111111]" />
            </button>
          </div>
        </div>

        <div
          ref={arrivalsScrollRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {womenProducts.map(product => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex-none w-[280px] md:w-[340px] group cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[4/5] bg-[#F5F5F5] overflow-hidden mb-3 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-white text-[#111111] text-[12px] font-semibold px-2.5 py-1 uppercase tracking-tight">
                    {product.badge}
                  </span>
                )}
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#111111] group-hover:text-[#707072] transition-colors line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-[14px] text-[#707072]">{product.subtitle}</p>
                <p className="text-[14px] font-medium text-[#111111] mt-1">
                  {formatIDR(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Shop Essentials (3-Column Grid) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <h3 className="text-[24px] font-bold text-[#111111] mb-6 tracking-tight">
          Shop Essentials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {essentials.map((item, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden group bg-[#F5F5F5]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <button
                  onClick={() => navigate(item.link)}
                  className="bg-white text-[#111111] hover:bg-white/90 px-6 py-2.5 rounded-full text-[14px] font-medium transition-colors shadow-md"
                >
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Shop by Sport */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[24px] font-bold text-[#111111] tracking-tight">
            Shop by Sport
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll(sportScrollRef, 'left')}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[#111111]" />
            </button>
            <button
              onClick={() => handleScroll(sportScrollRef, 'right')}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[#111111]" />
            </button>
          </div>
        </div>

        <div
          ref={sportScrollRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {sports.map((sport, idx) => (
            <div
              key={idx}
              onClick={() => navigate(sport.link)}
              className="flex-none w-[260px] md:w-[300px] group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#F5F5F5] mb-3">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <h4 className="text-[16px] font-semibold text-[#111111] tracking-tight">
                {sport.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 9. SPOTLIGHT Silhouettes */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 border-t border-[#E5E5E5]">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <h3 className="text-[26px] font-black uppercase tracking-tight text-[#111111] mb-2">
            SPOTLIGHT
          </h3>
          <p className="text-[15px] text-[#707072]">
            Classic silhouettes and cutting-edge innovation to build your game from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <button
            onClick={() => navigate('/products?silhouette=air-force-1')}
            className="p-6 bg-[#FAFAFA] hover:bg-[#F0F0F0] rounded-xl transition-all group"
          >
            <p className="text-[18px] font-bold text-[#111111] group-hover:text-[#D3391A] transition-colors">
              Air Force 1
            </p>
            <p className="text-[13px] text-[#707072] mt-1">The Everyday Classic</p>
          </button>
          <button
            onClick={() => navigate('/products?silhouette=dunk')}
            className="p-6 bg-[#FAFAFA] hover:bg-[#F0F0F0] rounded-xl transition-all group"
          >
            <p className="text-[18px] font-bold text-[#111111] group-hover:text-[#D3391A] transition-colors">
              Dunk Low
            </p>
            <p className="text-[13px] text-[#707072] mt-1">Iconic Colorways</p>
          </button>
          <button
            onClick={() => navigate('/products?silhouette=pegasus')}
            className="p-6 bg-[#FAFAFA] hover:bg-[#F0F0F0] rounded-xl transition-all group"
          >
            <p className="text-[18px] font-bold text-[#111111] group-hover:text-[#D3391A] transition-colors">
              Pegasus Premium
            </p>
            <p className="text-[13px] text-[#707072] mt-1">Sculpted Visible Air</p>
          </button>
          <button
            onClick={() => navigate('/products?silhouette=vomero')}
            className="p-6 bg-[#FAFAFA] hover:bg-[#F0F0F0] rounded-xl transition-all group"
          >
            <p className="text-[18px] font-bold text-[#111111] group-hover:text-[#D3391A] transition-colors">
              Vomero 18
            </p>
            <p className="text-[13px] text-[#707072] mt-1">Maximum Cushioning</p>
          </button>
        </div>
      </section>
    </div>
  )
}
