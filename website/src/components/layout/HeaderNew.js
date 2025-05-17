import React, { useState, useEffect } from "react";
import Navigation from "./NavigationNew";
import Logo from "./ui/Logo";

const HeaderNew = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        backgroundColor: isScrolled ? "#ffffff" : "transparent",
        padding: "1rem 2rem",
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 1000,
        transition: "background-color 0.3s ease",
        boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo size="small" type="horizontal" />
        <Navigation
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  );
};

export default HeaderNew;
