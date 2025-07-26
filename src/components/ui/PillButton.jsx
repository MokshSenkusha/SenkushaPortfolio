import React from "react";
import "./PillButton.css";

export default function PillButton({ children, className = "", ...props }) {
  return (
    <button className={`pill-btn ${className}`} {...props}>
      <span className="overlay" />
      <span className="pill-btn-text">{children}</span>
    </button>
  );
} 