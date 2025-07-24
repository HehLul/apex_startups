// MobileMenu.jsx
import React from "react";
import "./MobileMenu.css";
import { useNavigate } from "react-router-dom";
const MobileMenu = ({ open, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/getstarted");
  };

  return (
    <nav className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
      <a href="#portfolio" onClick={handleLinkClick}>
        Portfolio
      </a>
      <a href="#pricing" onClick={handleLinkClick}>
        Pricing
      </a>
      <a href="#faq" onClick={handleLinkClick}>
        FAQ
      </a>
      <a onClick={handleGetStarted} className="mobile-menu-cta">
        Get Started
      </a>
    </nav>
  );
};

export default MobileMenu;
