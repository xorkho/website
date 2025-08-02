import React from "react";
import contactImage from "../assets/FORM.png"; // ✅ UPDATE this path according to your project

const Contact = () => {
  return (
    <section id="contact" className=" PY-5 px-4 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center ">
        {/* Left Image */}
        <div className="w-full lg:w-[65%] flex justify-center">
  <img
    src={contactImage}
    alt="Contact Person"
    className="max-w-2xl w-full h-[700px] object-cover object-left"
  />
</div>


        {/* Right Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together.</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-[#0c0c48] font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
