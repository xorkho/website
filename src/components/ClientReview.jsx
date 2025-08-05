import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
 {
  name: "Chicken Zilla",
  review:
    "Exceptional work across branding, video, marketing, & web. Our brand and engagement have improved significantly. A true one-stop creative partner!",
},
{
  name: "Arshad Associate",
  review:
    "Handled our full digital branding, videos, marketing, & website with precision and professionalism. Delivered everything on time.",
},

  {
    name: "Classic Shoes",
    review:
      "We trusted them with our entire digital journey & they delivered. From a fresh brand image to impactful videos and a user-friendly website, every piece aligned perfectly. Highly recommended!",
  },
  {
    name: "Discover Realtor",
    review:
      "They brought our vision to life through consistent branding, polished videos, smart marketing strategies,& a fully responsive website. Their comprehensive approach made all the difference for us.",
  },
  {
    name: "TreeMate",
    review:
      "The team managed our branding, web development, content creation, and digital campaigns seamlessly. Their holistic service approach gave our business the boost it needed in a competitive space.",
  },
];

const ClientReviews = () => {
  return (
    <section className="py-16 sm:py-20 px-4" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl capitalize font-bold text-center text-white mb-8">
          What our customers say
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          speed={800}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <div className="bg-white rounded-xl px-4 py-5 shadow-md h-[260px] flex flex-col justify-between">
                <div>
                  <div className="text-yellow-500 mb-3 text-base sm:text-lg md:text-xl">
                    ★★★★★
                  </div>
                  <p className="text-gray-800 text-base sm:text-lg md:text-xl line-clamp-5">
                    {t.review}
                  </p>
                </div>
                <div className="text-gray-700 font-semibold text-base sm:text-lg md:text-xl">
                  {t.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientReviews;
