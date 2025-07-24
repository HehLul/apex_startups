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
    window.scrollTo(0, 0);
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
  const handleDone = () => {
    navigate("/success");
  };

  return (
    <div className="onboarding-container">
      <ProgressIndicator currentStep={3} totalSteps={3} />

      <div className="onboarding-content booking-page">
        <div className="onboarding-header">
          <h1>Let's Get You Onboard!</h1>
          <p>
            Book a 30-minute call to discuss your requirements and begin the
            onboarding process
          </p>
        </div>

        {/* Call Booking Section */}
        <div className="booking-section">
          <div className="booking-option">
            <div className="option-header">
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
        </div>

        {/* Back Button */}
        <div className="form-actions">
          <button onClick={handleBack} className="btn-back">
            ← Back to Project Details
          </button>
          <button onClick={handleDone} className="btn-next">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
