// Portfolio.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectModal from "./ProjectModal/ProjectModal";
import "./Portfolio.css";

import image1 from "../../assets/hero_img_2.png";
import image2 from "../../assets/hero_img_1.png";
import image3 from "../../assets/hero_img_3.png";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      id: 1,
      title: "AI Chatbot Builder",
      subtitle: "Intelligent Customer Service Platform",
      image: image1,
      tags: ["OpenAI", "NextJS", "React", "Supabase"],
      metrics: "60% reduction in support tickets",
      overview:
        "Built an intelligent customer service bot that automated responses and reduced support workload.",
      challenge:
        "Customer service teams were overwhelmed with repetitive queries, leading to slow response times and customer frustration.",
      solution:
        "Developed an AI-powered chatbot that could handle 80% of common queries, with seamless handoff to human agents for complex issues.",
      results: [
        "60% reduction in support tickets",
        "Response time improved from 4 hours to under 1 minute",
        "Customer satisfaction increased by 35%",
      ],
      techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      timeline: "4 weeks",
      features: [
        "Natural language processing",
        "Conversation history tracking",
        "Admin dashboard for monitoring",
        "Multi-language support",
      ],
    },
    {
      id: 2,
      title: "Business Analytics Dashboard",
      subtitle: "Data Visualization Platform",
      image: "/api/placeholder/400/300",
      tags: ["Analytics", "Vue.js", "Python"],
      metrics: "25% revenue increase for SMBs",
      overview:
        "Created a comprehensive analytics platform that helped small businesses make data-driven decisions.",
      challenge:
        "Small businesses lacked access to enterprise-level analytics tools and struggled to understand their data.",
      solution:
        "Built an intuitive dashboard that transforms complex business data into actionable insights with beautiful visualizations.",
      results: [
        "25% average revenue increase for clients",
        "Reduced decision-making time by 50%",
        "Used by 500+ small businesses",
      ],
      techStack: ["Vue.js", "Python", "D3.js", "PostgreSQL", "AWS"],
      timeline: "6 weeks",
      features: [
        "Real-time data visualization",
        "Custom report generation",
        "Predictive analytics",
        "Multi-source data integration",
      ],
    },
    {
      id: 3,
      title: "Video Content Platform",
      subtitle: "Curated Creator Streaming Service",
      image: image2,
      tags: ["Video", "React", "AWS"],
      metrics: "1M+ hours streamed",
      overview:
        "Developed a specialized streaming platform for niche content creators and their dedicated audiences.",
      challenge:
        "Content creators were losing their audience in the noise of large platforms and needed a dedicated space.",
      solution:
        "Created a curated video platform that connects creators directly with their most engaged followers.",
      results: [
        "1M+ hours of content streamed",
        "90% creator retention rate",
        "Average session time: 45 minutes",
      ],
      techStack: ["React", "Node.js", "AWS S3", "CloudFront", "Stripe"],
      timeline: "8 weeks",
      features: [
        "Video streaming and processing",
        "Creator monetization tools",
        "Audience engagement features",
        "Content recommendation engine",
      ],
    },
    {
      id: 4,
      title: "Community Resource Hub",
      subtitle: "Knowledge Sharing Platform",
      image: image3,
      tags: ["Community", "Next.js", "Firebase"],
      metrics: "1,000+ active users",
      overview:
        "Built a centralized platform for community members to share and discover valuable resources.",
      challenge:
        "Community resources were scattered across different platforms, making discovery and sharing difficult.",
      solution:
        "Developed a unified hub where community members could easily upload, categorize, and discover resources.",
      results: [
        "1,000+ active monthly users",
        "5,000+ resources shared",
        "95% user satisfaction rate",
      ],
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "Algolia Search"],
      timeline: "5 weeks",
      features: [
        "Advanced search and filtering",
        "User-generated content management",
        "Community moderation tools",
        "Mobile-first design",
      ],
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const projectsToShow = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Case Studies</h2>
          <p>The proof is in the pudding ;)</p>
        </div>

        <div className="projects-grid">
          {projectsToShow.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openProject(project)}
            />
          ))}
        </div>

        {projects.length > 4 && !showAll && (
          <div className="show-more-container">
            <button className="show-more-btn" onClick={() => setShowAll(true)}>
              Show More
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeProject}
      />
    </section>
  );
};

export default Portfolio;
