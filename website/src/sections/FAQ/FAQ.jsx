// FAQ.jsx
import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your onboarding process like?",
      answer:
        "We start with a discovery call to understand your vision and goals. Within 24 hours, you'll receive a detailed project timeline and scope breakdown. Then we schedule a follow-up call to finalize details, explain pricing, and discuss the payment process. After that call, you'll receive a contract and can send your deposit to kick off development.",
    },
    {
      question: "What is your development process like?",
      answer:
        "Our development follows a proven 4-phase approach: Discovery & Planning (requirements gathering and technical architecture), Design & Prototyping (UI/UX design and user flow mapping), Development & Testing (agile development with regular updates), and Launch & Handover (deployment, testing, and documentation). You'll receive progress updates every 24-48 hours.",
    },

    {
      question: "Any work you don't cover?",
      answer:
        "We specialize in MVPs, SaaS platforms, Web applications and React Native mobile apps. We don't handle native iOS/Android development, blockchain/crypto projects, or adult content and gambling platforms. For projects outside our scope, we'll let you know upfront so you can find the right specialist.",
    },
    {
      question: "How do the payments work?",
      answer:
        "For our Landing Page package, we require 30% upfront and 70% upon completion. For the MVP package, payment is split into three installments: 30% deposit to start, 30% at the midpoint of development, and 40% upon final delivery. For custom projects, we work with milestone-based payments. We accept bank transfers, credit cards, and PayPal. All pricing is transparent with no hidden fees. We'll clearly outline any additional costs like hosting or third-party services upfront.",
    },
    {
      question:
        "What if I don't have a clear idea or need help with technical strategy?",
      answer:
        "We're adaptable and willing to come up with founder-driven solutions for your startup. Whether you have a rough concept or need guidance on technical architecture and feature prioritization, we work closely with founders to refine ideas and build solutions that align with your business goals.",
    },
    {
      question: "What if I need changes during/after the service?",
      answer:
        "Minor adjustments and reasonable revisions are included in all packages. For significant scope changes during development, we'll provide a transparent quote for additional work. After project completion, we offer maintenance packages starting at $500/month, or you can request one-off changes on an hourly basis.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
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
