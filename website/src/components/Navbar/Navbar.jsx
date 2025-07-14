import logo from "../../assets/logo_main.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <span className="navbar-logo-text">ApexStartups</span>
        </div>
        <nav className="navbar-nav">
          <ul className="navbar-links">
            <li className="navbar-link-item">
              <a href="#portfolio" className="navbar-link">
                Portfolio
              </a>
            </li>
            <li className="navbar-link-item">
              <a href="#pricing" className="navbar-link">
                Pricing
              </a>
            </li>
            <li className="navbar-link-item">
              <a href="#faq" className="navbar-link">
                FAQ
              </a>
            </li>
            <li className="navbar-link-item">
              <a href="#contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar-cta">
          <a href="#contact" className="navbar-cta-button">
            Get Started
          </a>
        </div>

        <div className="navbar-mobile-toggle">
          <span className="navbar-mobile-toggle-bar"></span>
          <span className="navbar-mobile-toggle-bar"></span>
          <span className="navbar-mobile-toggle-bar"></span>
        </div>
      </div>
    </div>
  );
}
