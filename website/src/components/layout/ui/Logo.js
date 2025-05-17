import React from "react";

/**
 * Logo component that uses PNG images
 */
const Logo = ({
  type = "horizontal",
  darkBg = false,
  size = "medium",
  className = "",
}) => {
  // Size mapping in pixels
  const sizes = {
    small: {
      horizontal: { width: 120, height: 40 },
      icon: { width: 40, height: 40 },
    },
    medium: {
      horizontal: { width: 180, height: 60 },
      icon: { width: 60, height: 60 },
    },
    large: {
      horizontal: { width: 240, height: 80 },
      icon: { width: 80, height: 80 },
    },
  };

  // Get dimensions based on type and size
  const dimensions = sizes[size][type === "horizontal" ? "horizontal" : "icon"];

  // For icon-only logo
  if (type === "icon") {
    return (
      <div className={className}>
        <img
          src="/assets/logos/icon.png"
          alt="All Together Fit Icon"
          width={dimensions.width}
          height={dimensions.height}
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }

  // For horizontal logo
  return (
    <div className={className}>
      <img
        src={
          darkBg
            ? "/assets/logos/logo-dark.png"
            : "/assets/logos/logo-light.png"
        }
        alt="All Together Fit Logo"
        width={dimensions.width}
        height={dimensions.height}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Logo;
