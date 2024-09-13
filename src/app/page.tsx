import HeroCarousel from '@/components/Homepage/HeroCarousel'
import OurFavourites from '@/components/Homepage/OurFavourites/OurFavourites'
import { ValuesBanner } from '@/components/Homepage/ValuesBanner/ValuesBanner'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-soft-ivory">
        <div className="flex flex-col">
          <HeroCarousel />
          <ValuesBanner />
          <OurFavourites />
        </div>
      </div>
    </>
  )
}
