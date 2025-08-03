import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 text-white bg-transparent">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center uppercase text-[#f4b018]">
          Let's Work Together
        </h2>

        <form className="space-y-5 flex flex-col items-center w-full">
          {["Full Name", "Email", "Phone Number"].map((placeholder, idx) => (
            <div key={idx} className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2">
              <input
                type={placeholder === "Email" ? "email" : placeholder === "Phone Number" ? "tel" : "text"}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          ))}

          <div className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2">
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <div className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2">
            <button
              type="submit"
              className="w-full bg-yellow-400 text-[#0c0c48] font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
