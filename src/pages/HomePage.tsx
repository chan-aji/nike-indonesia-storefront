import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnnouncementBar } from '../components/AnnouncementBar'
import { GiveSportBanner } from '../components/GiveSportBanner'
import { HeroCarousel } from '../components/HeroCarousel'
import { FeaturedSection } from '../components/FeaturedSection'
import { TrendingSlider } from '../components/TrendingSlider'
import { CreatorShowcase } from '../components/CreatorShowcase'
import { SpotlightGrid } from '../components/SpotlightGrid'
import { ShopBySport } from '../components/ShopBySport'
import { InsideNikeSection } from '../components/InsideNikeSection'
import { PRODUCTS } from '../data/products'

interface HomePageProps {
  onOpenQuickView?: (productId: string) => void
}

export const HomePage: React.FC<HomePageProps> = () => {
  const navigate = useNavigate()

  const handleProductSelect = (productId: string) => {
    // Navigate to dedicated PDP or open quickview
    if (productId === 'running' || productId === 'explore') {
      navigate('/products?category=running')
    } else if (productId === 'jordan') {
      navigate('/products?category=lifestyle')
    } else {
      navigate(`/product/${productId}`)
    }
  }

  return (
    <main className="flex-1">
      {/* 1. Promotional Announcement Bar (44px) */}
      <AnnouncementBar />

      {/* 2. GIVE SPORT Holiday 2026 Collection Ribbon Banner */}
      <GiveSportBanner />

      {/* 3. Main Hero Carousel */}
      <HeroCarousel onSelectProduct={handleProductSelect} />

      {/* 4. Featured 2-Column Collection Cards */}
      <FeaturedSection onSelectProduct={handleProductSelect} />

      {/* 5. Trending Sneakers Horizontal Snap Slider */}
      <TrendingSlider
        onSelectProduct={handleProductSelect}
      />

      {/* 6. Creator Styled. Archive Inspired. */}
      <CreatorShowcase onSelectProduct={handleProductSelect} />

      {/* 7. SPOTLIGHT Iconic Silhouettes Grid with Category Tabs */}
      <SpotlightGrid
        products={PRODUCTS}
        onSelectProduct={handleProductSelect}
      />

      {/* 8. Shop By Sport Navigation Hub */}
      <ShopBySport onSelectSport={(sport) => navigate(`/products?sport=${sport}`)} />

      {/* 9. Inside Nike Editorial Storytelling */}
      <InsideNikeSection />
    </main>
  )
}
