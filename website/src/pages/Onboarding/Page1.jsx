import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingStyles.css";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";

const Page1 = () => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    role: "",
    industry: "",
    stage: "",
    referralSource: "",
  });
  const [errors, setErrors] = useState({});

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

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.companyName?.trim()) {
      newErrors.companyName = "Company/Project name is required";
    }

    if (!formData.industry?.trim()) {
      newErrors.industry = "Industry/Market is required";
    }

    if (!formData.stage) {
      newErrors.stage = "Please select your company stage";
    }

    if (!formData.referralSource) {
      newErrors.referralSource = "Please tell us how you heard about us";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();
  const handleNext = () => {
    if (validateForm()) {
      // Store form data in localStorage or send to API
      localStorage.setItem("onboardingPage1", JSON.stringify(formData));

      // Navigate to next page (you'll implement this routing)
      console.log("Form data saved:", formData);
      navigate("/onboarding2");
    }
  };
  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load saved data from localStorage when component mounts
    const savedPage1Data = localStorage.getItem("onboardingPage1");
    const savedPage2Data = localStorage.getItem("onboardingPage2");
    if (savedPage1Data) {
      const parsedData = JSON.parse(savedPage1Data);
      setFormData(parsedData); // This will populate your Page 1 form fields
    }
    // Optional: If you want to preserve page 2 data when going back
    if (savedPage2Data) {
      console.log("Page 2 data available:", JSON.parse(savedPage2Data));
    }
  }, []);

  return (
    <div className="onboarding-container">
      <ProgressIndicator currentStep={1} totalSteps={3} />

      <div className="onboarding-content">
        <div className="onboarding-header">
          <h1>Let's bring your startup to life!</h1>
          <p>
            We'll need a few details to get started and provide you with the
            best solution
          </p>
        </div>

        <form className="onboarding-form">
          <div className="form-group priority-field">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
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
            <label htmlFor="companyName">Company/Project name *</label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Enter your company or project name"
              className={errors.companyName ? "error" : ""}
            />
            {errors.companyName && (
              <span className="error-message">{errors.companyName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="industry">Industry/Market *</label>
            <input
              type="text"
              id="industry"
              value={formData.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              placeholder="e.g., FinTech, E-commerce, SaaS, Healthcare"
              className={errors.industry ? "error" : ""}
            />
            {errors.industry && (
              <span className="error-message">{errors.industry}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="stage">Company stage *</label>
            <select
              id="stage"
              value={formData.stage}
              onChange={(e) => handleInputChange("stage", e.target.value)}
              className={errors.stage ? "error" : ""}
            >
              <option value="">Select your stage</option>
              <option value="idea">Idea</option>
              <option value="pre-launch">Pre-launch</option>
              <option value="early-stage">Early stage</option>
              <option value="growing">Growing</option>
            </select>
            {errors.stage && (
              <span className="error-message">{errors.stage}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="referralSource">How did you hear about us? *</label>
            <select
              id="referralSource"
              value={formData.referralSource}
              onChange={(e) =>
                handleInputChange("referralSource", e.target.value)
              }
              className={errors.referralSource ? "error" : ""}
            >
              <option value="">Select source</option>
              <option value="google">Google search</option>
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter/X</option>
              <option value="reddit">Reddit</option>
              <option value="referral">Referral from a friend</option>
              <option value="portfolio">Portfolio/case study</option>
              <option value="other">Other</option>
            </select>
            {errors.referralSource && (
              <span className="error-message">{errors.referralSource}</span>
            )}
          </div>
        </form>

        <div className="form-actions">
          <button className="btn-back" onClick={handleBack}>
            Back to Home
          </button>
          <button type="button" className="btn-next" onClick={handleNext}>
            Continue
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
