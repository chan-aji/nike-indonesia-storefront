import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnnouncementBar } from '../components/AnnouncementBar'
import { PRODUCTS } from '../data/products'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface KidsPageProps {
  onOpenQuickView?: (productId: string) => void
}

export const KidsPage: React.FC<KidsPageProps> = () => {
  const navigate = useNavigate()
  const newInScrollRef = useRef<HTMLDivElement>(null)
  const bestReadsScrollRef = useRef<HTMLDivElement>(null)

  // Prioritize authentic new kids items
  const prioritizedKidsIds = [
    'af1-lv8-lego',
    'caitlin-1-kids',
    'hoodie-lego',
    'dunk-low-lego',
    'cargo-lego',
    'air-max-dn-lego',
    'shorts-lego',
    'free-ride-kids',
    'air-max-90-yk',
    'nsw-club-cargo',
    'jr-mercurial-vapor',
    'flex-runner-3',
    'nsw-tee-kids',
    'nsw-girls-tee',
    'court-borough-low-recraft',
    'star-runner-5-baby'
  ]

  const kidsProducts = prioritizedKidsIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean) as typeof PRODUCTS

  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (!ref.current) return
    const scrollAmount = 380
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  // Shop By Age: Exact 2.68:1 widescreen photography
  const shopByAge = [
    {
      title: 'Babies & Toddlers',
      age: '0 - 4 years',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/bd061f59-acf5-42e7-9305-7953d98bef8a/nike-kids.png'
    },
    {
      title: 'Little Kids',
      age: '4 - 7 years',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/193559b0-d541-4b0f-af34-bf5a21eb2f70/nike-kids.png'
    },
    {
      title: 'Big Kids',
      age: '7 - 14 years',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/029be56d-03ea-4b25-adea-1642e49c7edb/nike-kids.png'
    },
    {
      title: 'Teens',
      age: '14+ years',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/08858d40-669d-4bea-81c1-af8ad3646790/nike-kids.png'
    }
  ]

  // Featured 2x2 cards (0.95:1 ratio)
  const featuredCards = [
    {
      kicker: 'Give Nike',
      title: 'Winning Looks on and off the Playground',
      button: 'Shop Gifts',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/56fd1eac-eee0-427e-ab73-852402c1fb14/nike-kids.png'
    },
    {
      kicker: 'Performance Basketball',
      title: 'Introducing the Caitlin 1',
      button: 'Shop',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/fb7e7f3e-93d9-4dc8-b002-afa654449e73/nike-kids.png'
    },
    {
      kicker: 'Jordan Brand x Space Jam Collection',
      title: 'Greatness is Never Out of Reach',
      button: 'Shop',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/1ac319ca-e59f-4beb-95ef-88d5247b8710/nike-kids.png'
    },
    {
      kicker: 'Nike Free Ride',
      title: 'Run Free, Play Forever',
      button: 'Shop',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/e6680a41-a0db-4a0f-84fa-0365f459a3c9/nike-kids.png'
    }
  ]

  // Fit Guides (3:2 ratio)
  const fitGuides = [
    {
      title: "Kids' Football Boot Fit Guide",
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/ecf14bea-081c-44b7-81ab-2d67e47d503c/nike-kids.jpg'
    },
    {
      title: "Kids' Running Shoe Fit Guide",
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/01f045d5-dfc4-440d-beb6-ad7654747168/nike-kids.jpg'
    },
    {
      title: "Kids' Lifestyle Shoe Fit Guide",
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/d82779b4-f894-4050-871f-443c86fc5c33/nike-kids.jpg'
    }
  ]

  // Gear Up by Sport (4:5 ratio)
  const sports = [
    {
      title: 'Basketball',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/ecb4a81d-f9c9-4f42-bce5-8e3fbd02f1a4/nike-kids.png'
    },
    {
      title: 'Football',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/a1b8c567-2598-41a1-85af-cc0f6d595e9f/nike-kids.png'
    },
    {
      title: 'Running',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/12775fd8-73f5-407b-a0a9-35cd274c4039/nike-kids.png'
    },
    {
      title: 'Lifestyle',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/e95ff80e-92cd-4dbd-b45c-2e6e710abad8/nike-kids.png'
    }
  ]

  // Best Reads Editorial (3:2 ratio)
  const bestReads = [
    {
      tag: 'Buying Guide',
      title: 'Best Nike Football Boots for Kids: Jr Mercurial, Phantom and Tiempo',
      desc: 'Match boots to your child’s playing style and surface.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/8d03f147-0fed-401b-9a09-2e823423495c/best-nike-football-boots-for-kids-jr-mercurial-phantom%E2%80%8B-and-tiempo.jpg'
    },
    {
      tag: 'Product News',
      title: 'The Power of Play: Introducing the Nike Air Max 95 x LEGO® Collection',
      desc: 'A unique pairing of iconic Nike footwear and brick building to inspire boundless imagination.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/1552692c-9cc3-4ff4-88c6-60ca568e9dab/the-power-of-play-introducing-the-nike-air-max-95-x-lego%C2%AE-collection.jpg'
    },
    {
      tag: 'Buying Guide',
      title: 'The Best Nike Gifts for Teenage Boys',
      desc: 'From sleek sneakers to Tech Fleece hoodies, comfortable gift ideas ready to wear anywhere.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/a00caf94-4326-4d4d-a676-183a570d243d/the-best-nike-gifts-for-teen-boys.jpg'
    },
    {
      tag: 'Buying Guide',
      title: 'The Best Nike Gifts for Teen Girls',
      desc: 'Shop comfy, cool and creative gift ideas for the teens and preteens in your life.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/46d4e72b-eb72-4ca2-9d5d-049e717b2308/the-best-nike-gifts-for-teen-girls.jpg'
    },
    {
      tag: 'Product News',
      title: 'Drawn to stand out: Nike Dunk Low x LEGO® Collection plays by its own rules',
      desc: 'Reimagining the Dunk Low with a fresh spin available exclusively in older and younger kids sizing.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/59d7d916-063e-4a04-88c4-8daac3225d8f/drawn-to-stand-out-nike-dunk-low-x-lego%C2%AE-collection-plays-by-its-own-rules.jpg'
    },
    {
      tag: 'Buying Guide',
      title: "The Best Nike Kids' Backpacks for Back to School",
      desc: 'Built for comfort, style and everyday adventure so kids can head into the school year organised.',
      image: 'https://static.nike.com/a/images/w_960,c_limit/81080874-de28-4fab-907a-9e74b723024a/the-best-nike-kids-backpacks-for-back-to-school.jpg'
    },
    {
      tag: 'Product News',
      title: 'From bricks to kicks—introducing the Nike Air Max Dn x LEGO® Collection',
      desc: 'Unlock your play mode with the latest collaboration between Nike and The LEGO Group.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/e0e6a411-0ca1-4ffa-9b03-b7d5c361ed55/from-bricks-to-kicks%E2%80%94introducing-the-nike-air-max-dn-x-lego%C2%AE-collection.png'
    },
    {
      tag: 'Buying Guide',
      title: 'The best running shoes for kids by Nike',
      desc: 'Footwear plays an important role in healthy foot development during running and sports.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/58cd2e3e-f71c-4c6c-980b-7078a0eda7d6/the-best-running-shoes-for-kids-by-nike.jpg'
    }
  ]

  const spotlightTags = [
    'Dunk', 'Jordan 1', 'Flex Runner', 'Air Max', 'Vomero', 'Retro Running',
    'Court Borough', 'Free Ride', 'Pegasus', 'Air Force 1', 'Star Runner',
    'LEGO', 'Bags & Backpack', 'Football Boots'
  ]

  return (
    <main className="flex-1 bg-white text-[#111111]">
      {/* 1. Promotional Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Hero Banner: NIKE BASKETBALL × LEGO® COLLECTION */}
      <section className="w-full relative select-none">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.06/1] max-h-[612px] bg-[#111111] overflow-hidden">
          <img
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/ffb04394-e246-4895-badb-1ceefb7df5f6/nike-kids.png"
            alt="Nike Basketball x LEGO Collection"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Hero Typography & CTAs */}
          <div className="absolute inset-x-0 bottom-0 pb-8 md:pb-12 px-6 z-20 flex flex-col items-center justify-end text-center pointer-events-auto">
            <h1 className="font-nike-futura text-[34px] sm:text-[50px] md:text-[68px] lg:text-[76px] leading-[0.92] font-black uppercase text-white tracking-tight drop-shadow-md max-w-4xl">
              NIKE BASKETBALL × LEGO® COLLECTION
            </h1>
            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/95 font-normal max-w-2xl mt-2 drop-shadow-sm">
              Blast off and ball out in galactic gear crafted for any court in the cosmos.
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <button
                onClick={() => navigate('/products?category=kids')}
                className="bg-white text-[#111111] hover:bg-neutral-200 px-7 py-2.5 rounded-full font-medium text-[15px] transition-all shadow-sm active:scale-95"
              >
                Shop
              </button>
              <button
                onClick={() => navigate('/products?category=kids')}
                className="bg-white text-[#111111] hover:bg-neutral-200 px-7 py-2.5 rounded-full font-medium text-[15px] transition-all shadow-sm active:scale-95"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Shop By Age Section (2.68:1 Exact Banner Ratio) */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12">
        <h2 className="text-[24px] font-medium text-[#111111] mb-6 tracking-tight">
          Shop By Age
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {shopByAge.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/products?category=kids')}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[2.68/1] bg-[#F6F6F6] rounded-xs overflow-hidden mb-3 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#111111] group-hover:text-[#707072] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#707072]">{item.age}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. New In (Kids Product Carousel) */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-[24px] font-medium text-[#111111] tracking-tight">
              New In
            </h2>
            <button
              onClick={() => navigate('/products?category=kids')}
              className="text-[15px] font-medium underline hover:text-[#707072] transition-colors"
            >
              Shop
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll(newInScrollRef, 'left')}
              className="p-3 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] rounded-full transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll(newInScrollRef, 'right')}
              className="p-3 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] rounded-full transition-colors"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Snap Scrollable Carousel */}
        <div
          ref={newInScrollRef}
          className="flex space-x-4 md:space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {kidsProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
              className="min-w-[260px] md:min-w-[310px] flex-shrink-0 group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#F6F6F6] rounded-xs overflow-hidden mb-3 relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#111111] text-[11px] font-semibold px-2.5 py-1 rounded-xs shadow-xs">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <h3 className="text-[15px] font-bold text-[#111111] group-hover:text-[#707072] transition-colors truncate">
                  {p.name}
                </h3>
                <p className="text-[13px] text-[#707072] truncate">{p.subtitle}</p>
                <p className="text-[14px] font-medium text-[#111111] pt-1">
                  {formatIDR(p.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Section (2x2 Cards) */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
        <h2 className="text-[24px] font-medium text-[#111111] mb-6 tracking-tight">
          Featured
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featuredCards.map((c, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/products?category=kids')}
              className="relative aspect-[0.95/1] overflow-hidden group cursor-pointer rounded-xs bg-[#111111]"
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 pointer-events-none">
                {c.kicker && (
                  <p className="text-[13px] font-semibold tracking-wide text-white/90">
                    {c.kicker}
                  </p>
                )}
                <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                  {c.title}
                </h3>
                <div className="pt-2 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate('/products?category=kids')
                    }}
                    className="bg-white text-[#111111] hover:bg-neutral-200 px-6 py-2 rounded-full font-medium text-[14px] transition-all shadow-sm active:scale-95"
                  >
                    {c.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Fit Guides */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
        <h2 className="text-[24px] font-medium text-[#111111] mb-6 tracking-tight">
          Fit Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fitGuides.map((g, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/help')}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[3/2] bg-[#F6F6F6] rounded-xs overflow-hidden mb-3">
                <img
                  src={g.image}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#111111] mb-1 group-hover:text-[#707072] transition-colors">
                {g.title}
              </h3>
              <span className="text-[14px] font-semibold underline text-[#111111] group-hover:text-[#707072]">
                Learn More
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Gear Up by Sport */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
        <h2 className="text-[24px] font-medium text-[#111111] mb-6 tracking-tight">
          Gear Up by Sport
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sports.map((sp, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/products?category=kids')}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/5] bg-[#F6F6F6] rounded-xs overflow-hidden mb-3">
                <img
                  src={sp.image}
                  alt={sp.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#111111] group-hover:text-[#707072] transition-colors">
                {sp.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SPOTLIGHT */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-14 border-t border-[#F0F0F0]">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-nike-futura text-[38px] md:text-[48px] font-black uppercase tracking-tight text-[#111111]">
            SPOTLIGHT
          </h2>
          <p className="text-[15px] text-[#707072] mt-1">
            Classic silhouettes and cutting-edge innovation to build your game from the ground up.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
          {spotlightTags.map((tag) => (
            <button
              key={tag}
              onClick={() => navigate('/products?category=kids')}
              className="px-5 py-2 rounded-full border border-[#E5E5E5] text-[13px] md:text-[14px] font-medium hover:border-[#111111] hover:bg-[#F5F5F5] transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* 9. Best Reads (Editorial Articles) */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-medium text-[#111111] tracking-tight">
            Best Reads
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll(bestReadsScrollRef, 'left')}
              className="p-3 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] rounded-full transition-colors"
              aria-label="Previous articles"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll(bestReadsScrollRef, 'right')}
              className="p-3 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] rounded-full transition-colors"
              aria-label="Next articles"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={bestReadsScrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {bestReads.map((read, idx) => (
            <div
              key={idx}
              className="min-w-[300px] md:min-w-[360px] flex-shrink-0 group cursor-pointer flex flex-col"
            >
              <div className="aspect-[3/2] bg-[#F6F6F6] rounded-xs overflow-hidden mb-3">
                <img
                  src={read.image}
                  alt={read.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <p className="text-[12px] font-semibold text-[#707072] uppercase tracking-wider mb-1">
                {read.tag}
              </p>
              <h3 className="text-[16px] font-bold text-[#111111] group-hover:text-[#707072] transition-colors leading-snug mb-2 line-clamp-2">
                {read.title}
              </h3>
              <p className="text-[13px] text-[#707072] line-clamp-2 leading-relaxed">
                {read.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Nike Teens Banner */}
      <section className="w-full select-none pb-12">
        <div className="relative w-full aspect-[2/1] sm:aspect-[2.4/1] md:aspect-[3/1] bg-[#111111] overflow-hidden">
          <img
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/dd300061-baeb-40b1-81a9-5be2598d8688/nike-teens-be-a-force-of-nature.png"
            alt="Nike Teens"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 inset-x-0 text-center text-white px-6">
            <h2 className="font-nike-futura text-[32px] md:text-[54px] font-black uppercase tracking-tight drop-shadow-md">
              Nike Teens
            </h2>
            <p className="text-[15px] md:text-[18px] font-medium text-white/90 mt-1">
              Be a force of nature
            </p>
            <button
              onClick={() => navigate('/products?category=kids')}
              className="mt-3 bg-white text-[#111111] hover:bg-neutral-200 px-6 py-2 rounded-full font-medium text-[14px] transition-all shadow-sm active:scale-95"
            >
              Shop Teens
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
