import Hero from '@/components/reusables/hero'
import { ServiceOverview } from '@/components/sections/service-overview'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceOverview />
      {/* Add other sections of your home page here */}
    </main>
  )
}
