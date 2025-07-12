import heroimg1 from "../../assets/hero_img_1.png";
import heroimg2 from "../../assets/hero_img_2.png";
import heroimg3 from "../../assets/hero_img_3.png";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-text">Premium Startup Development</span>
          </div>

          <h1 className="hero-title">
            We Bring Your Startup Idea Into Reality
          </h1>
          {/* <h1 className="hero-title">We Help Founders with the Technical</h1> */}

          <p className="hero-subtitle">
            Complete software solutions for ambitious founders. Built fast,
            built right.. No technical headaches.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">⚡</span>
              <span className="hero-feature-text">Launch-ready in weeks</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">🚀</span>
              <span className="hero-feature-text">
                Built to scale from day one
              </span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">⏰</span>
              <span className="hero-feature-text">
                Updates every 24-78 hours
              </span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="hero-cta-primary">
              Get Your MVP Built
            </a>
            <a href="#pricing" className="hero-cta-secondary">
              View Pricing
            </a>
          </div>

          <div className="hero-social-proof">
            <p className="hero-social-proof-text">
              Trusted by founders to build their first working prototypes
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-container">
            <div className="hero-visual-grid">
              <div className="hero-visual-card hero-visual-card-1">
                <img
                  src={heroimg1}
                  alt="MVP Dashboard"
                  className="hero-visual-card-image"
                />
              </div>
              <div className="hero-visual-card hero-visual-card-2">
                <img
                  src={heroimg2}
                  alt="MVP Dashboard"
                  className="hero-visual-card-image"
                />
              </div>
              <div className="hero-visual-card hero-visual-card-3">
                <img
                  src={heroimg3}
                  alt="MVP Dashboard"
                  className="hero-visual-card-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
