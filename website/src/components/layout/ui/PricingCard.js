import React from "react";
import { colors } from "../../utils/colors";

const PricingCard = ({ title, description, items, featured = false, note }) => {
  return (
    <div
      className={`rounded-2xl p-8 h-full flex flex-col relative transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
        featured ? "bg-lightGreen z-10" : "bg-white"
      }`}
      style={{
        transform: featured
          ? "perspective(1000px) translateY(-10px) translateZ(10px)"
          : "perspective(1000px) translateZ(0)",
        boxShadow: featured
          ? "0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(139, 168, 136, 0.1)"
          : "0 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {featured && (
        <div
          className="absolute top-4 right-4 bg-pink text-white py-1 px-3 rounded-full text-xs font-semibold"
          style={{
            transform: "rotate(5deg)",
          }}
        >
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-charcoal">{title}</h3>
      <p className="text-base leading-relaxed text-charcoal mb-6">
        {description}
      </p>
      <div className="flex-1 flex flex-col gap-4 mb-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-3 ${
              index < items.length - 1 ? "border-b" : ""
            }`}
            style={{
              borderColor: featured ? colors.cream : colors.lightGreen,
            }}
          >
            <span className="font-medium">{item.name}</span>
            <span
              className="font-bold"
              style={{
                color: featured ? colors.green : colors.charcoal,
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
      {note && (
        <p className="text-xs italic text-charcoal opacity-80 mt-auto">
          {note}
        </p>
      )}
    </div>
  );
};

export default PricingCard;
