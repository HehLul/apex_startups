import React, { useState, useEffect } from "react";

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle escape key press and prevent body scroll
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

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message?.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call - replace with your actual email service
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Auto close after 2 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1000);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-overlay" onClick={handleBackdropClick}>
      <div className="contact-modal">
        {/* Header */}
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>Can't find the answer you're looking for? We're here to help.</p>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Content */}
        <div className="contact-content">
          {!isSubmitted ? (
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us how we can help you..."
                  rows="4"
                  className={errors.message ? "error" : ""}
                />
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-send"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          ) : (
            <div className="success-state">
              {/* <div className="success-icon">✅</div> */}
              <h3>Message Sent!</h3>
              <p>
                Thanks for reaching out. We'll get back to you within as soon as
                possible.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .contact-overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .contact-modal {
          background: white;
          border-radius: 20px;
          width: 100%;
          max-width: 500px;
          max-height: 90vh;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .contact-header {
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid #e5e5e5;
          position: relative;
        }

        .contact-header h2 {
          color: #1a1a1a;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .contact-header p {
          color: #666666;
          font-size: 1rem;
          margin: 0;
          line-height: 1.5;
        }

        .close-button {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #999999;
          cursor: pointer;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .close-button:hover {
          background: #f5f5f5;
          color: #666666;
        }

        .contact-content {
          padding: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: #1a1a1a;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          background: #f8f8f8;
          border: 1px solid #d4d4d4;
          border-radius: 12px;
          padding: 0.875rem 1rem;
          color: #1a1a1a;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
          font-family: inherit;
          resize: vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999999;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #1a1a1a;
          background: white;
          box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1);
        }

        .form-group input.error,
        .form-group textarea.error {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .error-message {
          color: #dc2626;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .btn-cancel {
          background: transparent;
          color: #666666;
          border: 1px solid #d4d4d4;
          border-radius: 12px;
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-cancel:hover {
          background: #f5f5f5;
          border-color: #999999;
          color: #1a1a1a;
        }

        .btn-send {
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-send:hover {
          background: #333333;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-send:disabled {
          background: #999999;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .success-state {
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .success-state h3 {
          color: #1a1a1a;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
        }

        .success-state p {
          color: #666666;
          line-height: 1.5;
          margin: 0;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .contact-overlay {
            padding: 0rem;
            width: 100%;
          }
          .contact-modal {
            margin: 1rem;
          }

          .contact-header {
            padding: 1.5rem 1.5rem 1rem;
          }

          .contact-content {
            padding: 1.5rem;
          }

          .contact-header h2 {
            font-size: 1.25rem;
          }

          .form-actions {
            flex-direction: column;
          }

          .btn-cancel,
          .btn-send {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
