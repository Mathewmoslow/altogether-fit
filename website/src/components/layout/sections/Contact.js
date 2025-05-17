import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log({ name, email, phone, message });
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    alert("Message sent! We will get back to you soon.");
  };

  const colors = {
    lightPink: "#f9e4df",
    lightGreen: "#e5ebe5",
    white: "#ffffff",
    green: "#88a68a",
  };

  const ContactInfo = ({ label, value, link }) => {
    return (
      <div>
        <h4
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            margin: 0,
            marginBottom: "0.25rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#3c4142",
            opacity: 0.8,
          }}
        >
          {label}
        </h4>
        {link ? (
          <a
            href={link}
            style={{
              fontSize: "1.125rem",
              color: colors.green,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {value}
          </a>
        ) : (
          <p
            style={{
              fontSize: "1.125rem",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {value}
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        backgroundImage: `linear-gradient(to right, ${colors.lightPink}, ${colors.lightGreen})`,
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
        className="md:flex-row"
      >
        <div style={{ flex: 1 }}>
          <SectionHeading text="CONTACT" />
          <h3
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Ready to transform your fitness journey?
          </h3>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Aaron is currently accepting new clients who are serious about
            sustainable change.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <ContactInfo
              label="Email"
              value="aaron@alltogetherfit.com"
              link="mailto:aaron@alltogetherfit.com"
            />
            <ContactInfo
              label="Location"
              value="1152 Harmon Avenue, Winter Park, FL 32789"
            />

            <div style={{ marginTop: "1rem" }}>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  color: colors.green,
                }}
              >
                Located alongside these other great establishments:
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2rem",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <img
                  src="/public/assets/logos/OtherLogos.png"
                  alt="Partner establishment logo"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src="/public/assets/logos/OtherLogos1.png"
                  alt="Partner establishment logo"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src="/public/assets/logos/OtherLogos2.png"
                  alt="Partner establishment logo"
                  style={{
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <ContactInfo
              label="Instagram"
              value="@alltogetherfit"
              link="https://instagram.com/alltogetherfit"
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              backgroundColor: colors.white,
              borderRadius: "1rem",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `1px solid ${colors.lightGreen}`,
                    fontSize: "1rem",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `1px solid ${colors.lightGreen}`,
                    fontSize: "1rem",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `1px solid ${colors.lightGreen}`,
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `1px solid ${colors.lightGreen}`,
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "0.875rem 1.5rem",
                  backgroundColor: colors.green,
                  color: colors.white,
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
