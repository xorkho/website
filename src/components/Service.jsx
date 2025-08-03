import React from "react";

const services = [
  {
    title: "Branding",
    description:
      "We create strong brand identities that build trust & resonate with your audience.",
  },
  {
    title: "Video Editing",
    description:
      "We craft professional and engaging video content to tell your story effectively.",
  },
  {
    title: "Digital Marketing",
    description:
      "We help boost your online visibility through SEO, social media, & smart strategies.",
  },
  {
    title: "Web Development",
    description:
      "We build responsive, scalable, & high-performance websites tailored to your business needs.",
  },
];

const Services = () => {
  return (
    <section className="py-20 mb-20" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#f4b018]">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="transition-colors p-6 rounded-lg shadow-md border border-gray-700 "
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-right">
                <span className="text-2xl text-[#f4b018]">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
