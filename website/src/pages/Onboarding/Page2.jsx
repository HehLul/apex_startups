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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const sendEmailNotification = async (page1Data, page2Data) => {
    try {
      const formData = new FormData();

      // Your Web3Forms access key
      formData.append("access_key", "80dd089a-fff2-4b19-a503-37493730eb98");

      // Email details
      formData.append(
        "subject",
        `New ApexStartups Lead: ${page1Data.companyName || "Unknown Project"}`
      );
      formData.append("from_name", "ApexStartups Onboarding");
      formData.append("to_email", "your-email@example.com"); // Your email

      // Compile all the data into a readable message
      const emailMessage = `
NEW LEAD SUBMISSION
====================

PERSONAL INFO:
• Name: ${page1Data.name || "Not provided"}
• Email: ${page1Data.email || "Not provided"}
• Company/Project: ${page1Data.companyName || "Not provided"}
• Industry: ${page1Data.industry || "Not provided"}
• Referral Source: ${page1Data.referralSource || "Not provided"}

PROJECT DETAILS:
• Project Type: ${page2Data.projectType || "Not provided"}
• Timeline: ${page2Data.timeline || "Not provided"}
• Budget: ${page2Data.budget || "Not provided"}

DESCRIPTION:
${page2Data.description || "Not provided"}

MUST-HAVE FEATURES:
${page2Data.mustHaveFeatures || "Not provided"}

NICE-TO-HAVE FEATURES:
${page2Data.niceToHaveFeatures || "None specified"}

====================
Lead submitted at: ${new Date().toLocaleString()}
      `;

      formData.append("message", emailMessage);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        console.error("Email sending failed:", data);
        throw new Error(data.message || "Failed to send notification email");
      }

      return true;
    } catch (error) {
      console.error("Error sending email notification:", error);
      return false;
    }
  };

  const navigate = useNavigate();
  const handleNext = async () => {
    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Store current page data
        localStorage.setItem("onboardingPage2", JSON.stringify(formData));

        // Get all stored data
        const page1Data = JSON.parse(
          localStorage.getItem("onboardingPage1") || "{}"
        );
        const page2Data = formData;

        // Send email notification
        const emailSent = await sendEmailNotification(page1Data, page2Data);

        if (emailSent) {
          console.log("Email notification sent successfully");
        } else {
          console.warn("Email notification failed, but continuing...");
          // You might want to store this failure and retry later
        }

        // Continue to next page regardless of email success/failure
        navigate("/onboard");
      } catch (error) {
        console.error("Error in form submission:", error);
        // Still navigate even if email fails
        navigate("/onboard");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    // Save current page 2 data
    localStorage.setItem("onboardingPage2", JSON.stringify(formData));
    navigate("/getstarted");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedPage1Data = localStorage.getItem("onboardingPage1");
    const savedPage2Data = localStorage.getItem("onboardingPage2");

    if (savedPage2Data) {
      const parsedData = JSON.parse(savedPage2Data);
      setFormData(parsedData);
    }

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
          <button
            type="button"
            className="btn-next"
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Continue"}
            {!isSubmitting && <span className="arrow">→</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
