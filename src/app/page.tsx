import HeroCarousel from '@/components/Homepage/HeroCarousel'
import { OurFavourites } from '@/components/Homepage/OurFavourites/OurFavourites'
import { ValuesBanner } from '@/components/Homepage/ValuesBanner'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="flex flex-col gap-3">
          <HeroCarousel />
          <ValuesBanner />
          <OurFavourites />
          <div className="h-[100vh] w-full bg-[#E4E8E0]"></div>
        </div>
      </div>
    </>
  )
}
