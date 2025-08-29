// FAQ.jsx
import React, { useState } from "react";
import "./FAQ.css";
import Contact from "../../components/Contact/Contact";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const faqs = [
    {
      question: "What is your onboarding process like?",
      answer:
        "We start with a discovery call to understand your vision and goals. Within 24 hours, you'll receive a detailed project timeline and scope breakdown. Then we schedule a follow-up call to finalize details, explain pricing, and discuss the payment process. After that call, you'll receive a contract and can send your deposit to kick off development.",
    },

    {
      question: "Any work you don't cover?",
      answer:
        "We specialize in MVPs, SaaS platforms, Web applications and React Native mobile apps. We don't handle native iOS/Android development, blockchain/crypto projects, or adult content and gambling platforms. For projects outside our scope, we'll let you know upfront so you can find the right specialist.",
    },
    {
      question: "How do the payments work?",
      answer:
        "For our Landing Page package, we require $250 upfront and $250 upon completion. For the MVP package, we require $500 upfront and $1000 upon completion. For custom projects, we work with milestone-based payments. We accept bank transfers, credit cards, and PayPal. All pricing is transparent with no hidden fees. We'll clearly outline any additional costs like hosting or third-party services upfront.",
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
        "Minor adjustments and reasonable revisions are included in all packages. For significant scope changes during development, we'll provide a transparent quote for additional work.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
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
            <button
              className="contact-button"
              onClick={() => setShowContact(true)}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
      <Contact isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default FAQ;
