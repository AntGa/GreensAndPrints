import { IndexCarousel } from '@/components/IndexCarousel'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="font-poppins h-dvh w-dvw bg-[#B3FBA3] px-16 py-12">
      <div className="h-full w-full rounded-xl bg-[#FFFDFD] p-12">
        <Navbar />
        <IndexCarousel />
      </div>
    </div>
  )
}
