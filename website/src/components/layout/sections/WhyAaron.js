import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Feature from "../ui/Feature";
import Button from "../ui/Button";

const WhyAaron = () => {
  const colors = {
    lightGreen: "#e5ebe5",
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="why-aaron"
      style={{
        padding: "6rem 2rem",
        backgroundColor: colors.lightGreen,
      }}
      className="md:py-32 md:px-16"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <SectionHeading text="WHY CHOOSE AARON" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
          className="md:flex-row"
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.6,
                marginBottom: "2rem",
                fontWeight: 500,
              }}
            >
              Aaron doesn't just count reps—he makes every moment count. His
              clients succeed because he invests fully in their journey,
              combining technical expertise with genuine care for your
              wellbeing.
            </p>
            <Button
              label="Start Your Journey"
              primary={true}
              onClick={() => scrollToSection("contact")}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Feature
              title="Personalized Approach"
              description="Every program is built specifically for your body, goals, and lifestyle."
            />
            <Feature
              title="Evidence-Based Training"
              description="Methods grounded in science and proven through years of practical experience."
            />
            <Feature
              title="Supportive Environment"
              description="Training in a judgment-free space where your comfort is the priority."
            />
            <Feature
              title="Sustainable Results"
              description="Focus on habits and approaches that deliver long-term success, not quick fixes."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAaron;
