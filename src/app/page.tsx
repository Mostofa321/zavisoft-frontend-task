import CategoriesSliderSection from "@/components/pages/home/CategoriesSliderSection";
import HeroSection from "@/components/pages/home/HeroSection";
import NewDropsSection from "@/components/pages/home/NewDropsSection";
import ReviewsSection from "@/components/pages/home/ReviewsSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <NewDropsSection />
        <CategoriesSliderSection />
        <ReviewsSection />
    </>
  );
}
