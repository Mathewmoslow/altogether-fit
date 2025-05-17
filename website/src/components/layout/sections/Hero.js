import React from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

const Hero = () => {
  const colors = {
    green: "#88a68a",
    lightGreen: "#e5ebe5",
    lightPink: "#f9e4df",
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
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(139, 168, 136, 0.05), rgba(139, 168, 136, 0.1))`,
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "6rem 2rem",
      }}
      className="md:px-16"
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
            order: 2,
          }}
          className="md:order-1"
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
            className="md:text-5xl"
          >
            Transform Your Life With{" "}
            <span style={{ color: colors.green }}>Personalized Fitness</span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            At All Together Fit, your goals become our mission. Aaron delivers
            more than workouts—he provides a complete fitness partnership built
            on expertise, accountability, and unwavering support.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button
              label="Get Started"
              primary={true}
              onClick={() => scrollToSection("contact")}
            />
            <Button
              label="Learn More"
              primary={false}
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            order: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="md:order-2"
        >
          <div style={{ position: "relative" }}>
            <Logo type="icon" size="large" />
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "200px",
                height: "200px",
                backgroundColor: colors.lightPink,
                borderRadius: "50%",
                zIndex: -1,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "150px",
                height: "150px",
                backgroundColor: colors.lightGreen,
                borderRadius: "50%",
                zIndex: -1,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
