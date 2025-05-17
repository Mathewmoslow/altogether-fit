import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const Pricing = () => {
  /* smooth-scroll helper */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: "smooth",
    });
  };

  /* data model exactly as client wrote it */
  const tiers = [
    {
      name: "60-Minute Sessions",
      subtitle: "One-on-one personalized training",
      prices: [
        ["$80", "single session"],
        ["$68", "monthly 4+"],
        ["$65", "monthly 8+ ea"],
      ],
      benefits: [
        "Full fitness assessment",
        "Customized workout plans",
        "Nutrition guidance",
        "Flexible scheduling",
      ],
    },
    {
      name: "30-Minute Sessions",
      subtitle: "Quick, focused workout sessions",
      prices: [
        ["$50", "single session ea"],
        ["$45", "30-min 5-pack flexible-use*"],
      ],
      benefits: [
        "High-intensity workouts",
        "Efficient time management",
        "Form correction",
        "Great for busy schedules",
      ],
      note: "* Flexible-use packages expire only if unused for more than 60 days",
    },
    {
      /* separate card so “Session Packages” stands out */
      name: "Session Packages",
      subtitle: "Best value for committed clients",
      prices: [
        ["$80", "60-min 5-pack ea"],
        ["$68", "60-min 10-pack ea"],
      ],
      benefits: [
        "Greatest savings",
        "Priority scheduling",
        "Regular progress assessments",
        "Extended program planning",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="md:py-32 md:px-16"
      style={{ padding: "6rem 2rem", background: "#ffffff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <SectionHeading text="PRICING" centered />
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: 700,
            margin: "0 auto 3rem",
            color: "#3c4142",
          }}
        >
          Flexible training options that fit your schedule and budget
        </p>

        <div className="pricing-table">
          {tiers.map((tier) => (
            <div key={tier.name} className="card-3d pricing-option">
              {/* title & subtitle */}
              <div className="pricing-option-header">
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  {tier.name}
                </h3>
                <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
                  {tier.subtitle}
                </p>
              </div>

              {/* price rows */}
              {tier.prices.map(([amount, label]) => (
                <React.Fragment key={label}>
                  <div className="pricing-amount">{amount}</div>
                  <div className="pricing-period">{label}</div>
                </React.Fragment>
              ))}

              {/* benefits list */}
              <ul className="pricing-benefits">
                {tier.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <Button
                label="Get Started"
                primary
                onClick={() => scrollTo("contact")}
                className="w-full"
              />

              {/* optional footnote */}
              {tier.note && <p className="pricing-note">{tier.note}</p>}
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.9rem",
            opacity: 0.7,
            fontStyle: "italic",
            maxWidth: 700,
            margin: "2rem auto",
          }}
        >
          All sessions take place at our private fitness studio in Winter Park.
          Contact Aaron for special rates on partner training and group
          sessions.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
