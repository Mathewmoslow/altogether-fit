import React from "react";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials = () => {
  const colors = {
    white: "#ffffff",
    charcoal: "#3c4142",
  };

  return (
    <section
      id="testimonials"
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
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        <SectionHeading text="SUCCESS STORIES" centered={true} />
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto",
            color: colors.charcoal,
          }}
        >
          Hear from clients who have transformed their lives with Aaron's
          guidance
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
        className="md:grid-cols-2"
      >
        <TestimonialCard
          quote="After putting on close to 30 pounds in COVID lockdown I was so depressed and didn't like the way I looked at all. It was because of Aaron's motivation, support and commitment to my fitness goals and wellbeing that I ended up actually liking exercise. I looked forward to our sessions and I couldn't be happier today. I owe it all to Aaron."
          name="Matt"
          title="Client for 1 year"
        />
        <TestimonialCard
          quote="I've tried so many trainers before, but none of them really understood my goals and limitations. Aaron listened from day one and created a program that was challenging but achievable. For the first time, I'm seeing consistent progress without burning out or getting injured."
          name="Sarah"
          title="Client for 6 months"
        />
      </div>
    </section>
  );
};

export default Testimonials;
