import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Import the CSS file
import './style.css';

function About() {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-16 bg-gradient-overlay relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold mb-12 text-center text-mask"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl relative overflow-hidden flex-1 text-content"
            >
              <p className="relative z-10 mb-6">
                I am a passionate developer with a love for creating intuitive and dynamic user experiences. My journey in tech has equipped me with a range of skills, including React, JavaScript, and UI/UX design. I strive to blend creativity with functionality to deliver exceptional web applications.
              </p>
              <div className="background-effect"></div>
              <div className="text-reveal"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg relative overflow-hidden flex items-center justify-center photo-container"
            >
              <img
                src="/ppp.jpg" // Replace with your photo path
                alt="Your Photo"
                className="w-full h-auto max-w-lg md:max-w-xl rounded-full border-6 border-gray-300 shadow-lg"
              />
              <div className="photo-overlay"></div>
              <div className="photo-effect"></div>
              <div className="photo-neon-glow"></div>
            </motion.div>
          </div>
        </div>
        <div className="particles"></div>
      </section>

      {/* What I Know Section */}
      <section id="what-i-know" className="py-16 bg-radial-animation relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold mb-12 text-center text-mask"
          >
            What I Know
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Front End</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Back End</h3>
              <p>Node.js, Express, Php</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Database</h3>
              <p>MySQL, MongoDB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Platform</h3>
              <p>Linux, Cisco, Figma</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <p>C, SQL, Java, C++</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">CS Fundamentals</h3>
              <p>Data Structures, Algorithms, Operating Systems, Computer Networks</p>
            </div>
          </div>
        </div>
        <div className="particles"></div>
      </section>
    </>
  );
}

export default About;
