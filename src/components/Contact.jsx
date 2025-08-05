import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send confirmation to client
    emailjs
      .sendForm("service_i89a2mq", "template_etb7rge", form.current, "vM14qq7vHlfiGeat8")
      .then((result) => {
        console.log("Client confirmation sent:", result.text);
      })
      .catch((error) => {
        console.log("Client email error:", error);
      });

    // Send details to owner
    emailjs
      .sendForm("service_i89a2mq", "template_1hobgec", form.current, "vM14qq7vHlfiGeat8")
      .then((result) => {
        console.log("Owner notification sent:", result.text);
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("Owner email error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 px-4 text-white relative overflow-hidden">
      {/* Background Animation Elements */}

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center">
          Let's Work Together
        </h2>

        <div className="max-w-2xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#001a24]/60 backdrop-blur-sm border border-[#003d52] rounded-3xl p-8 md:p-12 shadow-2xl space-y-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-6 py-4 rounded-2xl bg-[#000f15] text-white border-2 border-[#003d52] focus:outline-none focus:border-[#f4b018] focus:ring-4 focus:ring-[#f4b018]/20 text-lg placeholder-gray-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-6 py-4 rounded-2xl bg-[#000f15] text-white border-2 border-[#003d52] focus:outline-none focus:border-[#f4b018] focus:ring-4 focus:ring-[#f4b018]/20 text-lg placeholder-gray-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-6 py-4 rounded-2xl bg-[#000f15] text-white border-2 border-[#003d52] focus:outline-none focus:border-[#f4b018] focus:ring-4 focus:ring-[#f4b018]/20 text-lg placeholder-gray-500"
            />

            <textarea
              name="title"
              rows="6"
              placeholder="Message"
              required
              className="w-full px-6 py-4 rounded-2xl bg-[#000f15] text-white border-2 border-[#003d52] focus:outline-none focus:border-[#f4b018] focus:ring-4 focus:ring-[#f4b018]/20 text-lg placeholder-gray-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#f4b018] to-[#ffcc33] text-[#001a24] font-black text-xl px-8 py-5 rounded-2xl hover:from-[#ffcc33] hover:to-[#f4b018] transition-all duration-300 transform hover:scale-105 uppercase tracking-wide shadow-lg hover:shadow-[#f4b018]/30"
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
