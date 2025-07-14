// MobileMenu.jsx
import React from "react";
import "./MobileMenu.css";
const MobileMenu = ({ open, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(false);
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
      <a href="#contact" onClick={handleLinkClick} className="mobile-menu-cta">
        Get Started
      </a>
    </nav>
  );
};

export default MobileMenu;
