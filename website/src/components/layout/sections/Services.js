import React from "react";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
// Import the icon images directly
import personalIcon from "/src/assets/icons/personalicon.png";
import nutritionIcon from "/src/assets/icons/nutritionicon.png";
import accountIcon from "/src/assets/icons/accounticon.png";

const Services = () => {
  const colors = {
    cream: "#f9e9cf",
    charcoal: "#3c4142",
  };

  // Service Icons (SVG components)
  const CustomWorkoutIcon = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={personalIcon}
        alt="Personalized Training Plans"
        width="48"
        height="48"
      />
    </div>
  );

  const NutritionIcon = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={nutritionIcon}
        alt="Nutrition Guidance"
        width="48"
        height="48"
      />
    </div>
  );

  const AccountabilityIcon = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={accountIcon}
        alt="Accountability Coaching"
        width="48"
        height="48"
      />
    </div>
  );

  return (
    <section
      id="services"
      style={{
        padding: "6rem 2rem",
        backgroundColor: colors.cream,
      }}
      className="md:py-32 md:px-16"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        <SectionHeading text="SERVICES" centered={true} />
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto",
            color: colors.charcoal,
          }}
        >
          Comprehensive fitness solutions tailored to your individual needs and
          goals
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
        className="md:grid-cols-3"
      >
        <ServiceCard
          title="Personalized Training Plans"
          description="Custom workouts designed specifically for your body, goals, and lifestyle. No cookie-cutter routines—just targeted programming that evolves as you progress."
          icon={<CustomWorkoutIcon />}
        />
        <ServiceCard
          title="Nutrition Guidance"
          description="Sustainable eating strategies that complement your training and fit your life, not the other way around."
          icon={<NutritionIcon />}
        />
        <ServiceCard
          title="Accountability Coaching"
          description="Regular check-ins, adjustments, and unwavering support keep you progressing even when motivation wavers."
          icon={<AccountabilityIcon />}
        />
      </div>
    </section>
  );
};

export default Services;
