import React from "react";
import "./ProgressIndicator.css";

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-text">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="progress-percentage">
          {Math.round(progressPercentage)}%
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="progress-steps">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${
              index + 1 <= currentStep ? "completed" : ""
            } ${index + 1 === currentStep ? "current" : ""}`}
          >
            <div className="step-circle">
              {index + 1 <= currentStep ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="step-label">
              {index === 0 && "About You"}
              {index === 1 && "Your Project"}
              {index === 2 && "Schedule Call"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
