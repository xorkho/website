import React, { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}+</>;
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-white px-4"
    >
      {/* Headline Text */}
      <div className="text-center mt-10 relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-white leading-tight">
          Where Creativity{" "}
          <span className="relative inline-block text-[#f4b018]">
            Meets Results{" "}
          
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
        </h1>
      </div>

      {/* Video */}
      <figure className="w-full max-w-[1100px] mb-12 mt-10">
        <video
          className="rounded-3xl shadow-lg"
          src="/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          aria-label="Introduction video showcasing Creativarrow's creative work"
        />
        <figcaption className="sr-only">
          Introduction video of Creativarrow’s creative portfolio
        </figcaption>
      </figure>

      {/* Stats Section */}
      <section
        className="bg-white text-[#002c3f] backdrop-blur-sm p-4 rounded-full shadow-md hover:scale-[1.02] transition-transform w-full max-w-4xl mx-auto"
        aria-label="Company Statistics"
      >
        <div className="grid grid-cols-3 gap-2 text-center">
          {/* Completed Projects */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">
              <span aria-label="100 Completed Projects">
                <Counter end={100} />+
              </span>
            </h3>
            <p className="text-sm md:text-base font-semibold">
              Completed Projects
            </p>
          </div>

          {/* Active Clients */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">
              <span aria-label="50 Active Clients">
                <Counter end={50} />+
              </span>
            </h3>
            <p className="text-sm md:text-base font-semibold">Active Clients</p>
          </div>

          {/* Satisfaction Rate */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-1">
              <span aria-label="100 Percent Satisfaction Rate">
                <Counter end={100} />%
              </span>
            </h3>
            <p className="text-sm md:text-base font-semibold">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
