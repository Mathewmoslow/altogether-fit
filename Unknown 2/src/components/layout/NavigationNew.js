import React from "react";

const palette = {
  charcoal: "#3c4142",
};

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Why Aaron", "why-aaron"],
  ["Success Stories", "testimonials"],
  ["Contact", "contact"],
];

const NavigationNew = ({ isMenuOpen, toggleMenu }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offsetY = 80; // header height
    const target =
      el.getBoundingClientRect().top + window.pageYOffset - offsetY;
    window.scrollTo({ top: target, behavior: "smooth" });
    if (isMenuOpen) toggleMenu();
  };

  const NavBtn = ({ label, id, mobile }) => (
    <li>
      <button
        onClick={() => scrollTo(id)}
        style={{
          background: "none",
          border: "none",
          width: mobile ? "100%" : "auto",
          textAlign: mobile ? "left" : "center",
          padding: mobile ? "0.75rem 0" : "0.5rem 0",
          borderBottom: mobile ? "1px solid #e5ebe5" : "none",
          color: palette.charcoal,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    </li>
  );

  return (
    <>
      {/* desktop */}
      <nav className="hidden md:flex" style={{ display: "none" }}>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          {links.map(([label, id]) => (
            <NavBtn key={id} label={label} id={id} />
          ))}
        </ul>
      </nav>

      {/* burger */}
      <button
        aria-label="Toggle menu"
        onClick={toggleMenu}
        className="md:hidden"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {["45", "0", "-45"].map((deg, i) => (
          <div
            key={i}
            style={{
              width: 24,
              height: 2,
              background: palette.charcoal,
              margin: "5px 0",
              transition: "all 0.3s ease",
              transform:
                i === 0
                  ? isMenuOpen && `rotate(${deg}deg) translate(5px, 5px)`
                  : i === 2
                  ? isMenuOpen && `rotate(${deg}deg) translate(5px, -5px)`
                  : "none",
              opacity: i === 1 && isMenuOpen ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* mobile drawer */}
      <div
        className="md:hidden"
        style={{
          display: isMenuOpen ? "block" : "none",
          background: "#fff",
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          padding: "1rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {links.map(([label, id]) => (
            <NavBtn key={id} label={label} id={id} mobile />
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavigationNew;
