import HeroCarousel from '@/components/Homepage/HeroCarousel'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="flex flex-col gap-3">
          <HeroCarousel />
          <div className="h-[100vh] w-full bg-[#2D2D2D]"></div>
          <div className="h-[100vh] w-full bg-[#2D2D2D]"></div>
          <div className="h-[100vh] w-full bg-[#2D2D2D]"></div>
        </div>
      </div>
    </>
  )
}
