import React, { useState, useEffect } from "react";
import logo from "../../assets/logo_main.png";
const LoadScreen = ({ delay = 1000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress animation immediately
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / (delay / 50); // Update every 50ms
      });
    }, 50);

    // Hide load screen after delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div className="load-screen">
      <div className="load-screen-overlay">
        <div className="load-screen-content">
          {/* Logo */}
          <img src={logo} alt="" className="logo" />

          {/* Progress Bar */}
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .load-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          background: rgba(250, 250, 250, 0.8);
        }

        .load-screen .load-screen-overlay {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .load-screen .load-screen-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .load-screen .logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .load-screen .logo-triangle {
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 43px solid #1a1a1a;
          animation: load-screen-pulse 2s ease-in-out infinite;
        }

        @keyframes load-screen-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .load-screen .progress-container {
          width: 200px;
          height: 4px;
          background: rgba(26, 26, 26, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .load-screen .progress-bar {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #1a1a1a 0%, #333333 100%);
          border-radius: 2px;
          transition: width 0.1s ease-out;
          position: absolute;
          left: 0;
          top: 0;
        }

        .load-screen .progress-bar::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          animation: load-screen-shimmer 1s ease-in-out infinite;
        }

        @keyframes load-screen-shimmer {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(20px);
            opacity: 0;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .load-screen .logo-triangle {
            border-left-width: 20px;
            border-right-width: 20px;
            border-bottom-width: 35px;
          }

          .load-screen .progress-container {
            width: 150px;
            height: 3px;
          }

          .load-screen .load-screen-content {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadScreen;
