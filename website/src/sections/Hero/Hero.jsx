import heroimg1 from "../../assets/hero_img_1.png";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-text">Premium MVP Development</span>
          </div>

          <h1 className="hero-title">
            We Bring Your Startup Idea Into Reality
          </h1>

          <p className="hero-subtitle">
            Professional MVP development that gets you to market fast. No
            technical co-founder required.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">⚡</span>
              <span className="hero-feature-text">Launch-ready in weeks</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">🔒</span>
              <span className="hero-feature-text">
                Full source code ownership
              </span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">💼</span>
              <span className="hero-feature-text">No equity required</span>
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
                {/* <div className="hero-visual-card-header"></div>
                <div className="hero-visual-card-content">
                  <div className="hero-visual-card-line"></div>
                  <div className="hero-visual-card-line"></div>
                  <div className="hero-visual-card-line hero-visual-card-line-short"></div>
                </div> */}
              </div>
              <div className="hero-visual-card hero-visual-card-2">
                <div className="hero-visual-card-header"></div>
                <div className="hero-visual-card-content">
                  <div className="hero-visual-card-line"></div>
                  <div className="hero-visual-card-line hero-visual-card-line-short"></div>
                  <div className="hero-visual-card-line"></div>
                </div>
              </div>
              <div className="hero-visual-card hero-visual-card-3">
                <div className="hero-visual-card-header"></div>
                <div className="hero-visual-card-content">
                  <div className="hero-visual-card-line hero-visual-card-line-short"></div>
                  <div className="hero-visual-card-line"></div>
                  <div className="hero-visual-card-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
