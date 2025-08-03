import React, { useState } from "react";

const faqs = [
  {
    question: "How can Creativarrow help my Business Grow?",
    answer:
      "We design intelligent, customized digital strategies that work towards your objectives. Do you need to create brand visibility, acquire new clients, or increase online exposure? We assist you in growing with transparent, data-based outcomes.",
  },
  {
    question: "What Type of Results Can I Expect with Your Service?",
    answer:
      "We provide quantifiable results such as more leads, engagement, and sales. The outcomes differ by strategy, but we have accurate reporting to let you know what is working for your company.",
  },
  {
    question: "Do you Offer Lead Generation Services?",
    answer:
      "Yes, we do. We employ focused content, ads, and landing pages to attract potential clients actively searching for your goods or services. We focus on giving you high-quality leads and not just traffic.",
  },
  {
    question: "Why do I need digital marketing services?",
    answer:
      "Back in the day, you needed a huge sales team to interact with your target audience through cold-calling — and still the results weren’t satisfactory compared to the cost. After the digital marketing revolution, it's now much more affordable and effective to reach the masses using online platforms.",
  },
  {
    question: "What industries does your marketing agency have experience working with?",
    answer:
      "We have experience working across diverse industries, including e-commerce, technology, healthcare, construction, and more. Our adaptable strategies cater to the unique needs of each business sector.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 text-white px-6 md:px-12 ">
      <h2 className="text-6xl md:text-5xl font-bold text-center mb-12 text-[#f4b018]">
        FAQ
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl overflow-hidden "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-800 transition-colors duration-300"
            >
              <span className="text-lg md:text-xl font-semibold">{faq.question}</span>
              <span className="text-2xl text-yellow-400">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-6 text-gray-300 text-base md:text-lg leading-relaxed transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
