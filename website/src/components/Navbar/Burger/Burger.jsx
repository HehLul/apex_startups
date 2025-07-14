// Burger.jsx
import React from "react";
import "./Burger.css";

const Burger = ({ open, setOpen }) => {
  return (
    <button
      className={`burger ${open ? "burger-open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
    >
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </button>
  );
};

export default Burger;
