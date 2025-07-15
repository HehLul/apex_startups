import React, { useState } from "react";
import "./OnboardingStyles.css";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";

const Page3 = () => {
  const [formData, setFormData] = useState({
    hasDesigns: "",
    hasCodebase: "",
    mustHaveFeatures: "",
    niceToHaveFeatures: "",
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

    if (!formData.hasDesigns) {
      newErrors.hasDesigns = "Please let us know about your existing designs";
    }

    if (!formData.hasCodebase?.trim()) {
      newErrors.hasCodebase =
        "Please let us know about any existing technical assets";
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

  const handleNext = () => {
    if (validateForm()) {
      // Store form data in localStorage
      localStorage.setItem("onboardingPage3", JSON.stringify(formData));

      // Navigate to next page (you'll implement this routing)
      console.log("Page 3 form data saved:", formData);
      alert("Form submitted! (Add routing to next page here)");
    }
  };

  const handleBack = () => {
    // Save current data and go back
    localStorage.setItem("onboardingPage3", JSON.stringify(formData));
    console.log("Going back to page 2");
    // Add routing back to page 2
  };

  return (
    <div className="onboarding-container">
      <ProgressIndicator currentStep={3} totalSteps={4} />

      <div className="onboarding-content">
        <div className="onboarding-header">
          <h1>Let's talk technical requirements</h1>
          <p>Help us understand your existing assets and feature needs</p>
        </div>

        <form className="onboarding-form">
          <div className="form-section">
            <h3 className="section-title">Existing Assets</h3>

            <div className="form-group">
              <label htmlFor="hasDesigns">
                Do you have existing designs/wireframes/docs with ideas? *
              </label>
              <select
                id="hasDesigns"
                value={formData.hasDesigns}
                onChange={(e) =>
                  handleInputChange("hasDesigns", e.target.value)
                }
                className={errors.hasDesigns ? "error" : ""}
              >
                <option value="">Select option</option>
                <option value="yes">Yes, I have designs/wireframes</option>
                <option value="no">No, I don't have any</option>
                <option value="need-help">Need help with this</option>
              </select>
              {errors.hasDesigns && (
                <span className="error-message">{errors.hasDesigns}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="hasCodebase">
                Any existing codebase or technical assets? *
              </label>
              <textarea
                id="hasCodebase"
                value={formData.hasCodebase}
                onChange={(e) =>
                  handleInputChange("hasCodebase", e.target.value)
                }
                placeholder="Describe any existing code, APIs, databases, or technical work you already have. If none, just write 'None'."
                rows="3"
                className={errors.hasCodebase ? "error" : ""}
              />
              {errors.hasCodebase && (
                <span className="error-message">{errors.hasCodebase}</span>
              )}
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">Must-Have Features</h3>

            <div className="form-group">
              <label htmlFor="mustHaveFeatures">
                List the core features you absolutely need for launch *
              </label>
              <textarea
                id="mustHaveFeatures"
                value={formData.mustHaveFeatures}
                onChange={(e) =>
                  handleInputChange("mustHaveFeatures", e.target.value)
                }
                placeholder="List the essential features your product needs to function. Be specific about what users should be able to do. Example: user registration, create profiles, search functionality, payment processing, etc."
                rows="6"
                className={errors.mustHaveFeatures ? "error" : ""}
              />
              <div className="character-count">
                {formData.mustHaveFeatures.length} characters (minimum 20)
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
                value={formData.niceToHaveFeatures}
                onChange={(e) =>
                  handleInputChange("niceToHaveFeatures", e.target.value)
                }
                placeholder="List features that would be great to have but aren't essential for the initial launch. These can be added in future iterations."
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

export default Page3;
