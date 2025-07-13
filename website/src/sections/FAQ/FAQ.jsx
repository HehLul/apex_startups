// FAQ.jsx
import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your onboarding process like?",
      answer:
        "We start with a detailed discovery call to understand your vision, target audience, and business goals. Within 24 hours, you'll receive a project roadmap with timelines, milestones, and clear deliverables. We'll also set up communication channels and introduce you to your dedicated project team. The entire onboarding process takes 2-3 days, ensuring we're aligned before any development begins.",
    },
    {
      question: "What is your development process like?",
      answer:
        "Our development follows a proven 4-phase approach: Discovery & Planning (requirements gathering and technical architecture), Design & Prototyping (UI/UX design and user flow mapping), Development & Testing (agile development with regular updates), and Launch & Handover (deployment, testing, and documentation). You'll receive progress updates every 24-48 hours and can review work at each milestone.",
    },
    {
      question: "Any work you don't cover?",
      answer:
        "We focus exclusively on web applications, MVPs, and SaaS platforms. We don't handle mobile app development, blockchain/crypto projects, adult content, gambling platforms, or projects requiring specialized compliance (like healthcare or financial services). If your project falls outside our expertise, we'll recommend trusted partners who specialize in those areas.",
    },
    {
      question: "How do the payments work?",
      answer:
        "For fixed-price packages, we require 50% upfront to begin work and 50% upon completion. For custom projects, we work with milestone-based payments (typically 3-4 milestones). We accept bank transfers, credit cards, and PayPal. All pricing is transparent with no hidden fees—we'll clearly outline any additional costs like hosting or third-party services upfront.",
    },
    {
      question: "What if I need changes during/after the service?",
      answer:
        "Minor adjustments and reasonable revisions are included in all packages. For significant scope changes during development, we'll provide a transparent quote for additional work. After project completion, we offer maintenance packages starting at $500/month, or you can request one-off changes on an hourly basis. All projects include 30 days of bug fixes and minor tweaks at no additional cost.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about working with ApexStartups</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                openIndex === index ? "faq-item-open" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? We're here to help.</p>
          <button className="contact-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
