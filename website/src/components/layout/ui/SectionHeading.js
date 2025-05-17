import React from "react";

const SectionHeading = ({ text, centered = false }) => {
  const colors = {
    pink: "#f4a693",
  };

  return (
    <div
      style={{
        marginBottom: "1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: centered ? "center" : "flex-start",
      }}
    >
      <h2
        style={{
          fontSize: "0.875rem",
          fontWeight: 700,
          color: colors.pink,
          marginBottom: "0.5rem",
          letterSpacing: "0.1em",
        }}
      >
        {text}
      </h2>
      <div
        style={{
          width: "3rem",
          height: "3px",
          backgroundColor: colors.pink,
          borderRadius: "1.5px",
        }}
      ></div>
    </div>
  );
};

export default SectionHeading;
