// ProjectModal.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectModal.css";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const navigate = useNavigate();
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;
  const handleGetStarted = () => {
    navigate("/getstarted");
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="modal-content">
          <div className="modal-hero">
            <div className="modal-hero-content">
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="modal-title">{project.title}</h1>
              <p className="modal-subtitle">{project.subtitle}</p>
              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">Timeline:</span>
                  <span className="meta-value">{project.timeline}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Key Result:</span>
                  <span className="meta-value">{project.metrics}</span>
                </div>
              </div>
            </div>
            <div className="modal-hero-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>

          <div className="modal-body">
            <section className="case-study-section">
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
            </section>

            <section className="case-study-section">
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>
            </section>

            <section className="case-study-section">
              <h2>Our Solution</h2>
              <p>{project.solution}</p>
            </section>

            <section className="case-study-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="case-study-section">
              <h2>Technology Stack</h2>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="case-study-section">
              <h2>Results</h2>
              <ul className="results-list">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>

            <section className="case-study-cta">
              <h2>Ready to Build Your Vision?</h2>
              <p>Let's create something amazing together.</p>
              <button className="cta-button" onClick={handleGetStarted}>
                Get Started
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
