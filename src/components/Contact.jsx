import React, { useRef, useState ,useEffect} from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
    const [status, setStatus] = useState(""); // success / error / empty

  // ✅ Hide after 3 sec automatically
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);



  const sendEmail = (e) => {
    e.preventDefault();

    // Client Confirmation
    emailjs
      .sendForm(
        "service_i89a2mq",
        "template_etb7rge",
        form.current,
        "vM14qq7vHlfiGeat8"
      )
      .catch((error) => console.log("Client email error:", error));

    // Owner Notification
    emailjs
      .sendForm(
        "service_i89a2mq",
        "template_1hobgec",
        form.current,
        "vM14qq7vHlfiGeat8"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 text-white relative overflow-hidden"
    >
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

      {/* ✅ Beautiful Popup for Success/Error */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#001a24] border border-[#003d52] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[2000]"
          >
            {status === "success" ? (
              <>
                <FaCheckCircle className="text-[#f4b018] text-2xl" />
                <p className="font-semibold">Message sent successfully! 🚀</p>
              </>
            ) : (
              <>
                <FaTimesCircle className="text-red-500 text-2xl" />
                <p className="font-semibold">
                  Something went wrong. Try again.
                </p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
