import React from "react";
import Logo from "./ui/Logo";

const FooterNew = () => (
  <footer
    style={{ background: "#3c4142", color: "#fff", padding: "3rem 2rem" }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
      className="md:flex-row md:justify-between md:items-center"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Logo size="small" type="horizontal" darkBg />
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              margin: 0,
              marginBottom: "0.25rem",
            }}
          >
            ALL TOGETHER FIT
          </h3>
          <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
            Achieving your fitness goals. Together.
          </p>
        </div>
      </div>

      <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} All Together Fit. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterNew;
