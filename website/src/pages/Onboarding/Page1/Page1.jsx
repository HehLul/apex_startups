import React, { useState } from "react";
import "./Page1.css";
import ProgressIndicator from "../../../components/ProgressIndicator/ProgressIndicator";

const Page1 = ({ onNext, formData, setFormData }) => {
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

    if (!formData.companyName?.trim()) {
      newErrors.companyName = "Company/Project name is required";
    }

    if (!formData.role) {
      newErrors.role = "Please select your role";
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

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="onboarding-container">
      <ProgressIndicator currentStep={1} totalSteps={4} />

      <div className="onboarding-content">
        <div className="onboarding-header">
          <h1>Let's get to know you</h1>
          <p>Help us understand your background and project needs</p>
        </div>

        <form className="onboarding-form">
          <div className="form-group">
            <label htmlFor="companyName">Company/Project name *</label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName || ""}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Enter your company or project name"
              className={errors.companyName ? "error" : ""}
            />
            {errors.companyName && (
              <span className="error-message">{errors.companyName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="role">Your role *</label>
            <select
              id="role"
              value={formData.role || ""}
              onChange={(e) => handleInputChange("role", e.target.value)}
              className={errors.role ? "error" : ""}
            >
              <option value="">Select your role</option>
              <option value="founder">Founder</option>
              <option value="cto">CTO</option>
              <option value="product-manager">Product Manager</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="business-owner">Business Owner</option>
              <option value="other">Other</option>
            </select>
            {errors.role && (
              <span className="error-message">{errors.role}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="industry">Industry/Market *</label>
            <input
              type="text"
              id="industry"
              value={formData.industry || ""}
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
              value={formData.stage || ""}
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
              value={formData.referralSource || ""}
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
