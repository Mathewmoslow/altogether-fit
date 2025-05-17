import React from "react";

const Feature = ({ title, description }) => {
  const palette = { white: "#ffffff", charcoal: "#3c4142" };

  return (
    <div
      className="card-3d"
      style={{
        background: palette.white,
        borderRadius: "0.75rem",
        padding: "1.5rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.125rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          color: palette.charcoal,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.975rem",
          lineHeight: 1.6,
          color: palette.charcoal,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Feature;
