import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  const [selectedPoster, setSelectedPoster] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto mt-24 mb-15 py-16 px-4 relative">
      <h2 className="text-5xl md:text-5xl font-bold mb-10 text-center text-[#f4b018]">
        CREATIVE POSTER DESIGN
      </h2>

      <Swiper
        spaceBetween={15}
        slidesPerView={2.3}
        navigation
        modules={[Navigation]}
        className="rounded-3xl"
      >
        {posters.map((poster) => (
          <SwiperSlide key={poster.id}>
            <div
              onClick={() => setSelectedPoster(poster.src)}
              className={`rounded-xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer flex justify-center ${
                selectedPoster
                  ? selectedPoster === poster.src
                    ? "scale-100 blur-0 z-10"
                    : "scale-90 blur-sm opacity-40"
                  : "hover:scale-110 hover:shadow-yellow-500"

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
        ))}
      </Swiper>

      {/* Fullscreen Modal */}
      {selectedPoster && (
        <div
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-[9999] cursor-zoom-out"
        >
          <div className="max-h-[90%] overflow-y-auto p-4">
            <img
              src={selectedPoster}
              alt="Expanded Poster"
              className="max-w-[90vw] max-h-full object-contain rounded-xl mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

