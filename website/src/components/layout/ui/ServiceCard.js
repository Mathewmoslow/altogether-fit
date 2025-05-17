import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  const palette = {
    white: "#ffffff",
    green: "#88a68a",
    charcoal: "#3c4142",
  };

  return (
    <div
      className="card-3d"
      style={{
        background: palette.white,
        borderRadius: "1rem",
        padding: "2rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "1.25rem", color: palette.green }}>
        {icon}
      </div>

      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "1rem",
          color: palette.charcoal,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.6,
          color: palette.charcoal,
          flex: 1,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
