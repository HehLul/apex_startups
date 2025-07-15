// Portfolio.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectModal from "./ProjectModal/ProjectModal";
import "./Portfolio.css";

import image1 from "../../assets/hero_img_2.png";
import image2 from "../../assets/hero_img_1.png";
import image3 from "../../assets/hero_img_3.png";
import image4 from "../../assets/img4.png";
import image5 from "../../assets/img5.png";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      id: 1,
      title: "AI Chatbot Builder",
      subtitle:
        "No-code platform for entrepreneurs to build and monetize AI chatbots",
      image: image1,
      tags: ["SaaS", "MVP", "AI"],
      metrics: "60+ chatbots created",
      overview:
        "Built a user-friendly platform where non-technical entrepreneurs can train, customize, and launch their own AI chatbots in under 3 minutes.",
      challenge:
        "Entrepreneurs wanted to build and monetize AI chatbots but lacked the technical skills to implement OpenAI API, handle deployment, or create custom interfaces.",
      solution:
        "Developed a simple 3-step process: train your chatbot with custom rules and behaviors, customize the frontend website, and launch to a live subdomain - all without writing code.",
      results: [
        "60+ chatbots successfully created and deployed",
        "3-minute average time from setup to live deployment",
        "Zero technical knowledge required for users",
      ],
      techStack: ["React", "NextJS", "OpenAI API", "Supabase"],
      timeline: "3 weeks",
      features: [
        "Custom AI training with natural language instructions",
        "Visual website customization tools",
        "One-click subdomain deployment",
        "Launch-ready chatbot hosting",
      ],
    },
    {
      id: 2,
      title: "Time Optimization Platform",
      subtitle: "Premium landing page for productivity SaaS validation",
      image: image3,
      tags: ["Landing Page", "SaaS", "Validation", "React"],
      metrics: "High-conversion landing page",
      overview:
        "Designed and built a premium landing page to validate demand for a time optimization platform targeting high-performing professionals.",
      challenge:
        "Entrepreneurs and executives struggle with time wastage and lack visibility into where their productive hours actually go, hindering their ability to optimize performance.",
      solution:
        "Created a compelling pre-launch page showcasing a platform that would help users 'meticulously track and optimize every hour' through daily pattern analysis and personalized protocols.",
      results: [
        "Premium design aesthetic that resonated with target audience",
        "Successful email capture system implementation",
        "Refined design process through multiple iterations",
      ],
      techStack: ["React", "Supabase", "Resend API", "CSS"],
      timeline: "4 weeks",
      features: [
        "Mobile app mockups (phone and tablet)",
        "Problem-solution narrative flow",
        "Email capture with Resend API integration",
        "Dark, premium visual design",
      ],
    },
    {
      id: 3,
      title: "FocusFeed",
      subtitle:
        "Curated YouTube experience to eliminate algorithmic distractions",
      image: image2,
      tags: ["SaaS", "Media Platform", "Productivity", "In progress"],
      metrics: "Work in progress",
      overview:
        "Building a platform that lets users curate their own YouTube feed by selecting specific creators and content types, eliminating algorithmic distractions and doomscrolling.",
      challenge:
        "Users go to YouTube with specific intentions (documentaries, self-improvement) but get sidetracked by irrelevant algorithmic recommendations, leading to wasted time and lost focus.",
      solution:
        "Created FocusFeed - a curated YouTube experience where users choose exactly which creators and content types they want to see, maintaining focus on content that actually matters to them.",
      results: [
        "Core feed curation functionality implemented",
        "YouTube API integration for content delivery",
        "User-controlled content filtering system",
      ],
      techStack: ["Next.js", "Supabase", "YouTube API", "Google OAuth"],
      timeline: "Ongoing development",
      features: [
        "Custom creator selection and subscription",
        "Content type filtering and categorization",
        "Distraction-free viewing interface",
        "User-controlled feed curation",
      ],
    },
    {
      id: 5,
      title: "Contractor Analytics Platform",
      subtitle:
        "Landing page for AI-powered contractor performance benchmarking SaaS",
      image: image5,
      tags: ["Client Work", "Landing Page", "SaaS", "NextJS"],
      metrics: "Client prototype delivery",
      overview:
        "Built a high-converting landing page for a SaaS founder's contractor analytics platform that would help contractors benchmark their performance against industry leaders using AI insights.",
      challenge:
        "Contractors lack visibility into how their business performance compares to industry benchmarks, leading to missed opportunities for profit optimization and growth.",
      solution:
        "Created a compelling landing page showcasing an AI-powered platform that would analyze contractor data to identify profit leaks, optimize marketing spend, and provide scaling recommendations.",
      results: [
        "Complete landing page delivered in one week",
        "Professional copy and design created from scratch",
        "Prototype successfully demonstrated service capabilities",
      ],
      techStack: ["Next.js", "CSS", "Supabase"],
      timeline: "1 week",
      features: [
        "AI-powered performance benchmarking messaging",
        "Free analysis lead magnet with 2-minute setup",
        "Modern, professional design aesthetic",
        "Industry-specific value propositions",
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
          <p>Problem-solving in action</p>
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
