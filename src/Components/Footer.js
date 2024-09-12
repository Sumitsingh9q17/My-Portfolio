import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file
import './style.css';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#header" className="text-white hover:text-gray-200 transition-colors" aria-label="Home">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-200 transition-colors" aria-label="About Me">
            About Me
          </a>
          <a href="#what-i-know" className="text-white hover:text-gray-200 transition-colors" aria-label="Skills Info">
            Skills
          </a>
          <a href="#projects" className="text-white hover:text-gray-200 transition-colors" aria-label="Projects">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-gray-200 transition-colors" aria-label="Contact Info">
            Contact
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://github.com/SumitSingh9q17" className="text-white hover:text-gray-200 transition-colors" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-white hover:text-gray-200 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" className="text-white hover:text-gray-200 transition-colors" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
