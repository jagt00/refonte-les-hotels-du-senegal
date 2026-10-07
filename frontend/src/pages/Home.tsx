import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Accommodations from "../components/Accommodations";
import ParallaxBanner from "../components/ParallaxBanner";
import CTAGrid from "../components/CTAGrid";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

export default function Home({ onBook }: { onBook: () => void }) {
  return (
    <>
      <Hero onSearch={onBook} />
      <Welcome />
      <Gallery />
      <VideoSection />
      <Accommodations />
      <ParallaxBanner />
      <CTAGrid />
      <Testimonials />
      <Newsletter />
    </>
  );
}
