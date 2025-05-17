import React from "react";

const Button = ({ label, primary = true, onClick, className = "" }) => {
  const colors = { green: "#88a68a", white: "#ffffff" };

  return (
    <button
      onClick={onClick}
      className={`button-3d ${className}`}
      style={{
        padding: "0.875rem 1.5rem",
        backgroundColor: primary ? colors.green : "transparent",
        color: primary ? colors.white : colors.green,
        border: primary ? "none" : `2px solid ${colors.green}`,
        borderRadius: "0.5rem",
        fontWeight: 600,
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
