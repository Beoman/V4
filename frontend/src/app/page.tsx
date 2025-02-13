import Hero from "@/components/Hero"
import FeaturedItems from "@/components/FeaturedItems"
import PopularCategories from "@/components/PopularCategories"
import HowItWorks from "@/components/HowItWorks"
import AIChatbox from "@/components/AIChatbox"
import ParticleBackground from "@/components/ParticleBackground"
import CategorySidebar from "@/components/CategorySidebar"

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <CategorySidebar />
      <Hero />
      <FeaturedItems />
      <PopularCategories />
      <HowItWorks />
      <AIChatbox />
    </main>
  )
} 