import Hero from '@/components/reusables/hero'
import { ServiceOverview } from '@/components/sections/service-overview'
import { WhyChooseUs } from '@/components/sections/why-choose-us';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceOverview />
      <WhyChooseUs />
      {/* Add other sections of your home page here */}
    </main>
  )
}
