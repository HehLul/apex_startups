// Updated Navbar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_main.png";
import Burger from "./Burger/Burger";
import MobileMenu from "./MobileMenu/MobileMenu";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/getstarted");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="ApexStartups Logo" />
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
            </ul>
          </nav>

          <div className="navbar-cta">
            <a onClick={handleGetStarted} className="navbar-cta-button">
              Get Started
            </a>
          </div>

          <Burger open={open} setOpen={setOpen} />
        </div>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />

      {/* Overlay */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
