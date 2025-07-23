import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";
const Page3 = () => {
  const [emailData, setEmailData] = useState({
    email: "",
    name: "",
  });
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Load user data from previous steps if available
    try {
      const savedPage1Data = window.localStorage?.getItem("onboardingPage1");
      if (savedPage1Data) {
        const page1Data = JSON.parse(savedPage1Data);
        setEmailData((prev) => ({
          ...prev,
          name: page1Data.name || "",
          email: page1Data.email || "",
        }));
      }
    } catch (error) {
      console.log("No previous data found");
    }

    return () => {
      // Cleanup script when component unmounts
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with your actual email service
    setTimeout(() => {
      setEmailSubmitted(true);
      setIsSubmitting(false);

      // Here you would typically send the data to your backend
      console.log("Email submitted:", emailData);

      // Save email submission
      try {
        window.localStorage?.setItem("emailSubmitted", "true");
      } catch (error) {
        console.log("Could not save to localStorage");
      }
    }, 1000);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    // Navigate back to page 2
    navigate("/onboarding2");
  };

  return (
    <div className="onboarding-container">
      <ProgressIndicator currentStep={3} totalSteps={3} />

      <div className="onboarding-content booking-page">
        <div className="onboarding-header">
          <h1>Let's discuss your project</h1>
          <p>Choose how you'd like to get started with your project details</p>
        </div>

        {/* Call Booking Section */}
        <div className="booking-section">
          <div className="booking-option">
            <div className="option-header">
              <h3>📞 Schedule a Strategy Call</h3>
              <p>
                Book a 15-minute call to discuss your requirements and get
                immediate feedback
              </p>
              <div className="benefits">
                <span className="benefit">✓ Immediate project feedback</span>
                <span className="benefit">
                  ✓ Technical feasibility discussion
                </span>
                <span className="benefit">✓ Proposal within 24 hours</span>
              </div>
            </div>

            <div className="calendly-container">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/amdsalman04/30min"
                style={{ minWidth: "100%", height: "500px" }}
              ></div>
            </div>
          </div>

          {/* Divider */}
          <div className="option-divider">
            <span>OR</span>
          </div>

          {/* Email Option Section */}
          <div className="booking-option">
            <div className="option-header">
              <h3>📧 Get Details via Email</h3>
              <p>
                Prefer to review everything at your own pace? We'll send you a
                detailed breakdown.
              </p>
              <div className="benefits">
                <span className="benefit">✓ Detailed written estimate</span>
                <span className="benefit">✓ Timeline breakdown</span>
                <span className="benefit">✓ Similar project examples</span>
              </div>
            </div>

            {!emailSubmitted ? (
              <div className="email-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={emailData.name}
                      onChange={(e) =>
                        setEmailData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={emailData.email}
                      onChange={(e) =>
                        setEmailData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <button
                  onClick={handleEmailSubmit}
                  className="btn-email-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send My Project Details"}
                </button>
                <p className="email-disclaimer">
                  We'll send your custom estimate within 24 hours
                </p>
              </div>
            ) : (
              <div className="email-success">
                <div className="success-icon">✅</div>
                <h4>Email Sent Successfully!</h4>
                <p>
                  We've received your information and will send you a detailed
                  project estimate within 24 hours.
                </p>
                <p className="next-steps">
                  <strong>What's next?</strong>
                  <br />
                  Check your email for our initial project breakdown and feel
                  free to schedule a call anytime if you have questions.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <p>🚀 Join 50+ founders who've launched with ApexStartups</p>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span>Average call rating: 4.9/5 stars</span>
          </div>
        </div>

        {/* Back Button */}
        <div className="form-actions">
          <button onClick={handleBack} className="btn-back">
            ← Back to Project Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
