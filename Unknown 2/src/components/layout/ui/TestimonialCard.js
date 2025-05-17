import React from "react";

const TestimonialCard = ({ quote, name, title }) => {
  const palette = {
    cream: "#f9e9cf",
    pink: "#f4a693",
    charcoal: "#3c4142",
  };

  return (
    <div
      className="card-3d"
      style={{
        background: palette.cream,
        borderRadius: "1rem",
        padding: "2rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{ color: palette.pink, marginBottom: "1rem", fontSize: "2rem" }}
      >
        “
      </div>

      <p
        style={{
          fontSize: "1.125rem",
          lineHeight: 1.7,
          marginBottom: "2rem",
          flex: 1,
          fontStyle: "italic",
        }}
      >
        {quote}
      </p>

      <div>
        <h4
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            margin: 0,
            marginBottom: "0.25rem",
          }}
        >
          {name}
        </h4>
        <p
          style={{
            fontSize: "0.875rem",
            color: palette.charcoal,
            margin: 0,
            opacity: 0.8,
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
