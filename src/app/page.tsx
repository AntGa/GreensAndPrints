import HeroCarousel from '@/components/Homepage/HeroCarousel'
import OurFavourites from '@/components/Homepage/OurFavourites/OurFavourites'
import { ValuesBanner } from '@/components/Homepage/ValuesBanner/ValuesBanner'

export default function Home() {
  return (
    <>
      <div className="bg-soft-ivory min-h-screen">
        <div className="flex flex-col gap-3">
          <HeroCarousel />
          <ValuesBanner />
          <OurFavourites />
        </div>
      </div>
    </>
  )
}
