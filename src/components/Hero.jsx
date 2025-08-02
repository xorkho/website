import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-white px-4"
    >
      {/* Headline Text */}
      <div className="text-center mt-10 relative">
        <h2 className="text-4xl md:text-6=4xl font-semibold tracking-wide text-white leading-tight inline-block Capitalize">
          Where Creativity{" "}
          <span className="relative inline-block text-[#f4b018]">
            Meets Results
            <span className="absolute -bottom-2 left-0 w-full h-3">
              <svg
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M0,10 C50,30 150,-5 200,10"
                  stroke="#f4b018"
                  strokeWidth="5"
                  fill="none"
                />
              </svg>
            </span>
          </span>
        </h2>
      </div>

      {/* Video */}
      <video
        className="w-[95%] md:w-[1100px] rounded-3xl shadow-lg mb-12 mt-10"
        src="/intro.mp4"
        controls
      />

      {/* Stats Section */}
      {/* Stats Section */}
      <div className="bg-white text-[#002c3f] backdrop-blur-sm p-4 rounded-full shadow-md hover:scale-[1.02] transition-transform w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">100+</h3>
            <p className="text-sm md:text-base font-extrabold">
              Completed Projects
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">50+</h3>
            <p className="text-sm md:text-base font-extrabold">
              Active Clients
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">100%</h3>
            <p className="text-sm md:text-base font-extrabold">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
