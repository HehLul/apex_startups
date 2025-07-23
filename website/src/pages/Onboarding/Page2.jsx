import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./OnboardingStyles.css";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";
const Page2 = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    description: "",
    timeline: "",
    budget: "",
    mustHaveFeatures: "",
    niceToHaveFeatures: "",
    files: [],
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

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.description?.trim()) {
      newErrors.description = "Project description is required";
    } else if (formData.description.trim().length < 50) {
      newErrors.description =
        "Please provide a more detailed description (minimum 50 characters)";
    }

    if (!formData.mustHaveFeatures?.trim()) {
      newErrors.mustHaveFeatures = "Please list your core features";
    } else if (formData.mustHaveFeatures.trim().length < 20) {
      newErrors.mustHaveFeatures =
        "Please provide more detail about your core features (minimum 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();
  const handleNext = () => {
    if (validateForm()) {
      // Store form data in localStorage
      localStorage.setItem("onboardingPage2", JSON.stringify(formData));

      // Navigate to next page (you'll implement this routing)
      console.log("Page 2 form data saved:", formData);
      alert("Form submitted! (Add routing to next page here)");
    }
  };

  const handleBack = () => {
    // Save current page 2 data
    localStorage.setItem("onboardingPage2", JSON.stringify(formData));
    navigate("/onboarding");
  };

  // In Page 1 component
  useEffect(() => {
    const savedPage1Data = localStorage.getItem("onboardingPage1");
    const savedPage2Data = localStorage.getItem("onboardingPage2");

    if (savedPage2Data) {
      const parsedData = JSON.parse(savedPage2Data);
      setFormData(parsedData);
    }

    // Optional: If you want to preserve page 2 data when going back
    if (savedPage1Data) {
      console.log("Page 1 data available:", JSON.parse(savedPage1Data));
    }
  }, []);

  return (
    <div className="onboarding-container">
      <ProgressIndicator currentStep={2} totalSteps={3} />

      <div className="onboarding-content">
        <div className="onboarding-header">
          <h1>Tell us about your vision</h1>
          <p>Help us understand what you want to build and your goals</p>
        </div>

        <form className="onboarding-form">
          <div className="form-group">
            <label htmlFor="projectType">What type of project? *</label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => handleInputChange("projectType", e.target.value)}
              className={errors.projectType ? "error" : ""}
            >
              <option value="">Select project type</option>
              <option value="landing-page">Landing Page</option>
              <option value="mvp">MVP</option>
              <option value="full-saas">Full SaaS</option>
              <option value="not-sure">Not sure yet</option>
            </select>
            {errors.projectType && (
              <span className="error-message">{errors.projectType}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description of your startup idea *
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Clearly describe what problem you're trying to solve and your solution. Be specific about your target audience and how your product will help them."
              rows="6"
              className={errors.description ? "error" : ""}
            />
            <div className="character-count">
              {formData.description.length} characters (minimum 50)
            </div>
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          {/* <div className="form-group">
            <label htmlFor="timeline">Timeline expectations *</label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              className={errors.timeline ? "error" : ""}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-2-months">1-2 months</option>
              <option value="3-plus-months">3+ months</option>
              <option value="flexible">Flexible</option>
            </select>
            {errors.timeline && (
              <span className="error-message">{errors.timeline}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget range *</label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              className={errors.budget ? "error" : ""}
            >
              <option value="">Select budget range</option>
              <option value="1500">$1,500 (Landing Page)</option>
              <option value="4000">$4,000 (MVP Development)</option>
              <option value="custom">Custom Quote (Full-Service)</option>
              <option value="not-sure">Not sure yet</option>
            </select>
            {errors.budget && (
              <span className="error-message">{errors.budget}</span>
            )}
          </div> */}

          <div className="form-section">
            <h3 className="section-title">Features</h3>

            <div className="form-group">
              <label htmlFor="mustHaveFeatures">
                List the core features you absolutely need for launch *
              </label>
              <textarea
                id="mustHaveFeatures"
                value={formData.mustHaveFeatures || ""}
                onChange={(e) =>
                  handleInputChange("mustHaveFeatures", e.target.value)
                }
                placeholder="List the essential features your product needs to function."
                rows="5"
                className={errors.mustHaveFeatures ? "error" : ""}
              />
              <div className="character-count">
                {(formData.mustHaveFeatures || "").length} characters (minimum
                20)
              </div>
              {errors.mustHaveFeatures && (
                <span className="error-message">{errors.mustHaveFeatures}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="niceToHaveFeatures">
                Nice-to-have features (Optional)
              </label>
              <textarea
                id="niceToHaveFeatures"
                value={formData.niceToHaveFeatures || ""}
                onChange={(e) =>
                  handleInputChange("niceToHaveFeatures", e.target.value)
                }
                placeholder="List features that would be great to have but aren't essential for the initial launch."
                rows="4"
              />
              <div className="helper-text">
                These features can be prioritized for future development phases
              </div>
            </div>
          </div>
        </form>

        <div className="form-actions">
          <button type="button" className="btn-back" onClick={handleBack}>
            ← Back
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

export default Page2;
