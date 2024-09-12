import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './Contact.css'; // Make sure to import your CSS file

function Contact() {
  useEffect(() => {
    gsap.to('.contact-bg', {
      backgroundPosition: '200% 0%',
      repeat: -1,
      yoyo: true,
      duration: 10,
      ease: 'linear',
    });
  }, []);

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 contact-bg opacity-30"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center text-white relative z-10">Contact</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-2xl relative"
        >
          <form>
            <div className="mb-6 relative">
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 placeholder-transparent"
                placeholder=" "
              />
              <label htmlFor="name" className="absolute top-0 left-0 p-3 text-gray-700 text-lg transition-transform transform -translate-y-1/2 scale-75 origin-left">Name</label>
            </div>
            <div className="mb-6 relative">
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 placeholder-transparent"
                placeholder=" "
              />
              <label htmlFor="email" className="absolute top-0 left-0 p-3 text-gray-700 text-lg transition-transform transform -translate-y-1/2 scale-75 origin-left">Email</label>
            </div>
            <div className="mb-6 relative">
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 placeholder-transparent"
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className="absolute top-0 left-0 p-3 text-gray-700 text-lg transition-transform transform -translate-y-1/2 scale-75 origin-left">Message</label>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-transform duration-300 transform hover:translate-y-1 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <div className="mt-12 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <p className="text-lg mb-2">Get in Touch:</p>
          <p className="text-lg mb-2">Email: <a href="mailto:your-email@example.com" className="underline">ss5603273@gmail.com</a></p>
          <p className="text-lg">Phone: <a href="tel:+1234567890" className="underline">+917461896207</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
