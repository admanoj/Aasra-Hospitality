"use client";
import React from "react";

const Card = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover"
        src="/hot.jpg"
        alt="Luxury Hotel Interior"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-2xl sm:grid-cols-4">
          <CardContent
            title="Luxury"
            content="Experience unparalleled comfort"
          />
          <CardContent
            title="Service"
            content="Personalized attention to detail"
          />
          <CardContent title="Cuisine" content="Exquisite dining experiences" />
          <CardContent title="Locations" content="Prime spots across America" />
        </div>
      </div>
    </div>
  );
};

const CardContent = ({ title, content }) => (
  <div className="bg-yellow-200 bg-opacity-90 text-gray-800 p-3 rounded-lg shadow-md backdrop-blur-sm aspect-square flex flex-col items-center justify-center text-center">
    <h2 className="text-sm font-bold mb-2 text-primary">{title}</h2>
    <p className="text-xs leading-tight">{content}</p>
  </div>
);

export default Card;
