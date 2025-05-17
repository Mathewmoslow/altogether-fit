/**
 * Common utility functions
 */

/**
 * Smooth scroll to element ID with offset
 * @param {string} id - Element ID to scroll to
 * @param {number} offset - Offset from the top (for fixed headers)
 */
export const scrollToElement = (id, offset = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Format phone number to standard format (XXX) XXX-XXXX
 * @param {string} phone - Phone number to format
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = ("" + phone).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return phone;
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Brand colors for easy reference
 */
export const colors = {
  green: "#88a68a",
  pink: "#f4a693",
  cream: "#f9e9cf",
  charcoal: "#3c4142",
  lightGreen: "#e5ebe5",
  lightPink: "#f9e4df",
  white: "#ffffff",
};
