import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import LoadScreen from "../../components/LoadScreen/LoadScreen";
const SuccessPage = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handle window resize for confetti
    window.scrollTo(0, 0);
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <LoadScreen delay={3000} text="Finalizing your details..." />
      <div className="success-page-container">
        {/* Custom Confetti Animation */}
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          tweenDuration={3000}
        />
        <div className="success-content">
          {/* Hero Section */}
          <div className="success-hero">
            <div className="celebration-icon">🎉</div>
            <h1 className="success-title">Welcome to ApexStartups!</h1>
          </div>

          {/* Timeline Section */}
          <div className="timeline-section">
            <h2 className="timeline-title">What happens next 🤔</h2>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-content">
                  <h3>You'll receive an email from us</h3>
                  <p>within 30-60 minutes</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-content">
                  <h3>Discuss and Refine</h3>
                  <p>scheduled call or email back-and-forth</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-content">
                  <h3>We start building your project</h3>
                  <p>once the contract is finalized</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="/">Back to Homepage</a>

        <style jsx>{`
          .success-page-container {
            min-height: 100vh;
            background: #fafafa;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              sans-serif;
            position: relative;
            overflow: hidden;
          }

          .success-page-container a {
            margin-top: 20px;
            color: black;
            text-decoration: underline;
          }
          .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
          }

          .confetti-piece {
            position: absolute;
            width: 10px;
            height: 10px;
            background: var(--color);
            animation: confetti-fall var(--duration, 3s) ease-in
              var(--delay, 0s) forwards;
            opacity: 0;
          }

          @keyframes confetti-fall {
            0% {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }

          .success-content {
            max-width: 600px;
            width: 100%;
            background: white;
            border: 1px solid #e5e5e5;
            border-radius: 20px;
            padding: 3rem 2.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .success-hero {
            margin-bottom: 3rem;
          }

          .celebration-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: bounce 1s ease-in-out infinite alternate;
          }

          @keyframes bounce {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(-10px);
            }
          }

          .success-title {
            color: #1a1a1a;
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0;
            line-height: 1.2;
          }

          .timeline-section {
            text-align: left;
          }

          .timeline-title {
            color: #1a1a1a;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0 0 2rem 0;
            text-align: center;
          }

          .timeline {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .timeline-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1.5rem;
            background: #f8f8f8;
            border: 1px solid #e5e5e5;
            border-radius: 16px;
            transition: all 0.3s ease;
          }

          .timeline-item:hover {
            border-color: #d4d4d4;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          }

          .timeline-number {
            background: #1a1a1a;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1.1rem;
            flex-shrink: 0;
          }

          .timeline-content h3 {
            color: #1a1a1a;
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0 0 0.5rem 0;
            line-height: 1.3;
          }

          .timeline-content p {
            color: #666666;
            font-size: 0.95rem;
            margin: 0;
            font-style: italic;
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .success-page-container {
              padding: 2.2rem;
            }

            .success-content {
              padding: 2rem 1.5rem;
            }

            .success-title {
              font-size: 2rem;
            }

            .celebration-icon {
              font-size: 3rem;
            }

            .timeline-item {
              padding: 1rem;
              gap: 1rem;
            }

            .timeline-number {
              width: 35px;
              height: 35px;
              font-size: 1rem;
            }

            .timeline-content h3 {
              font-size: 1rem;
            }

            .timeline-content p {
              font-size: 0.875rem;
            }
          }

          @media (max-width: 480px) {
            .success-title {
              font-size: 1.75rem;
            }

            .timeline-title {
              font-size: 1.25rem;
            }

            .timeline {
              gap: 1.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default SuccessPage;
