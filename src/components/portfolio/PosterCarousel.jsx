import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Posters
import Arshad from "../../assets/posters/ARSHAD.png";
import ChkZilla from "../../assets/posters/Chk zilla.png";
import Clinic from "../../assets/posters/CLINIC.png";
import Discover from "../../assets/posters/Discover.png";
import Nazminaz from "../../assets/posters/Nazminaz.gif";
import RoyalEstate from "../../assets/posters/ROYAL ESTATE.png";

const posters = [
  { id: 1, src: Arshad },
  { id: 2, src: ChkZilla },
  { id: 3, src: Clinic },
  { id: 4, src: Discover },
  { id: 5, src: Nazminaz },
  { id: 6, src: RoyalEstate },
];

export default function PosterCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto mt-24 py-16 px-4 relative overflow-visible">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-bold text-center mb-12 text-[#ffffff]">
        Creative Design
      </h2>

      <Swiper
        spaceBetween={70}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          480: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.3 },
          1024: { slidesPerView: 3 },
        }}
        className="px-10"
        centeredSlides={true} // IMPORTANT: Ensures the center slide is actually in the center
      >
        {posters.map((poster, index) => {
          const isCenterSlide = index === activeIndex;

          return (
            <SwiperSlide key={poster.id}>
              <div
                className={`rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex justify-center ${
                  isCenterSlide
                    ? "scale-125 opacity-100 shadow-[0_8px_40px_rgba(255,255,255,0.3)]"
                    : "opacity-50 hover:scale-105"
                }`}
              >
                <div className="w-full aspect-[5/4] max-h-[400px]">
                  <img
                    src={poster.src}
                    alt={`Poster ${poster.id}`}
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* Custom Navigation Arrows */}
        <div className="custom-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-[#f4b018] p-4 rounded-full text-white text-2xl cursor-pointer shadow-xl hover:scale-110 transition">
          <FaChevronLeft />
        </div>
        <div className="custom-swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-[#f4b018] p-4 rounded-full text-white text-2xl cursor-pointer shadow-xl hover:scale-110 transition">
          <FaChevronRight />
        </div>
      </Swiper>
    </div>
  );
}
