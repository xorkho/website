import PosterCarousel from "./PosterCarousel";
import CarouselVideo from "./CarouselVideo";
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 text-[#ffffff]">
      <div className="text-center mb-12">
      </div>
      <CarouselVideo />
      <PosterCarousel />
    </section>
  );
}
