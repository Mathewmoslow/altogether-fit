import React from "react";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  const colors = {
    white: "#ffffff",
    lightGreen: "#e5ebe5",
    green: "#88a68a",
    pink: "#f4a693",
  };

  const Credential = ({ label }) => (
    <div
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: colors.lightGreen,
        color: colors.green,
        fontWeight: 600,
        borderRadius: "0.25rem",
        fontSize: "0.875rem",
      }}
    >
      {label}
    </div>
  );

  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        backgroundColor: colors.white,
      }}
      className="md:py-32 md:px-16"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
        className="md:flex-row md:items-center md:gap-16"
      >
        <div
          style={{
            flex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              paddingBottom: "120%",
              backgroundColor: colors.lightGreen,
              borderRadius: "1rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/logos/AaronPhoto.png"
              alt="Aaron Moslow, personal trainer"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                top: 0,
                left: 0,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              width: "100px",
              height: "100px",
              backgroundColor: colors.pink,
              borderRadius: "1rem",
              zIndex: -1,
            }}
          ></div>
        </div>
        <div style={{ flex: 1 }}>
          <SectionHeading text="ABOUT AARON" />
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            Aaron brings years of elite fitness experience and specialized
            certifications to every session. What truly sets him apart? His
            ability to connect with clients on a personal level, understanding
            your unique needs and adapting his approach accordingly.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            His journey from fitness enthusiast to respected personal trainer is
            fueled by a simple belief: everyone deserves personalized attention
            and evidence-based training that delivers results.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Credential label="NPTI Certified" />
            <Credential label="CrossFit Level 1" />
            <Credential label="Fitness Nutrition" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
