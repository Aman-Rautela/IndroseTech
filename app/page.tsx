import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SolutionsSection } from '@/components/solutions-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ContactSection />
    </main>
  );
}