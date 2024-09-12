import React from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Header.css';
import './style.css';

function Header() {
  
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <header className="relative h-screen text-white overflow-hidden bg-gradient-animation">
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            shape: {
              type: ["circle", "square", "triangle"],
              options: {
                triangle: {
                  sides: 3
                },
                polygon: {
                  sides: 6
                }
              }
            },
            color: {
              value: "#ffffff"
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.4
              },
              push: {
                particles_nb: 6
              }
            }
          },
          detectRetina: true
        }}
        className="absolute inset-0"
      />

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

      <div className="container mx-auto h-full flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl font-bold mb-6 leading-tight text-mask"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
          >
            <Typewriter
              options={{
                strings: ['Welcome to My Portfolio', 'Designing with Passion'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </motion.h1>
          <motion.p
            className="text-lg mb-10 opacity-80 transition-opacity duration-500 hover:opacity-100 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Exploring creativity and innovation in design
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-full shadow-lg button-ripple"
            whileHover={{ scale: 1.1, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
