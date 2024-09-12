import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css'; // Import your CSS file

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
      <h2 className="section-title text-4xl font-semibold mb-8 text-center">Projects</h2>
      <div className="projects-container">
          {/* Tea Urban: Tea Booking Website */}
          <div className="project-card">
            <img
              src="./logo11.png"
              alt="Tea Urban: A Tea Booking Website built with ReactJs, NodeJs, Express, MongoDB, and CSS"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Tea Urban: Tea Booking Website</h3>
              <p><strong>April 2024</strong></p>
              <ul className="project-description list-disc list-inside mb-4">
                <li>ReactJs, NodeJs, Express, MongoDB, CSS</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/your-repo" aria-label="GitHub Repository for Tea Urban" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                  <FaGithub size={24} />
                </a>
                <a href="https://example.com/your-project" aria-label="Live Demo for Tea Urban" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Daily-Deals: A Shopping Platform */}
          <div className="project-card">
            <img
              src="./figma.png"
              alt="Daily-Deals: A Shopping Platform with Figma UI/UX Designs"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Daily-Deals: A Shopping Platform</h3>
              <p><strong>September 2023</strong></p>
              <ul className="project-description list-disc list-inside mb-4">
                <li>Figma, UI, UX</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/your-repo" aria-label="GitHub Repository for Daily-Deals" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                  <FaGithub size={24} />
                </a>
                <a href="https://example.com/your-project" aria-label="Live Demo for Daily-Deals" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Grid Battle */}
          <div className="project-card">
            <img
              src="./tic.png"
              alt="Grid Battle: A Game Developed with Java and OOPS Concepts"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Grid Battle</h3>
              <p><strong>March 2023</strong></p>
              <ul className="project-description list-disc list-inside mb-4">
                <li>Java, OOPS</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/your-repo" aria-label="GitHub Repository for Grid Battle" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                  <FaGithub size={24} />
                </a>
                <a href="https://example.com/your-project" aria-label="Live Demo for Grid Battle" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
