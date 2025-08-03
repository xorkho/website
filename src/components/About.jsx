import React from "react";

const About = () => {
  return (
    <section id="about" className="text-white px-6  md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#f4b018]">
          ABOUT CREATIVARROW
        </h2>

        <div className="mx-auto max-w-3xl">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide md:tracking-normal mb-6">
            At <span className="font-medium text-white">Creativarrow</span>, we don’t just create  we connect. 
            Blending design, storytelling, and smart strategy, we craft digital experiences 
            that leave a lasting impression. Our work is driven by purpose and built on passion 
            whether it’s a bold brand identity or a seamless digital interface. 
            We believe every brand has a story, and we’re here to make sure yours is 
            <span className="text-[#f4b018] font-semibold"> seen, heard, and remembered</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

