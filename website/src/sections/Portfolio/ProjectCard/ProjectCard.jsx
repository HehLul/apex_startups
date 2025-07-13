// ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <span className="view-case-study">View Case Study</span>
        </div>
      </div>

      <div className="project-content">
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        {/* 
        <div className="project-metrics">
          <span className="metrics-label">Key Result:</span>
          <span className="metrics-value">{project.metrics}</span>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
