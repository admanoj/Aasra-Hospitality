"use client";

import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@heroicons/react/20/solid"; // Import the PhoneIcon
import React from "react";

const Join = () => {
  return (
    <div className="bg-black text-3xl font-serif h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="text-center text-white space-y-4 flex-grow flex flex-col items-center justify-center px-4">
        <h2 className="text-lg md:text-2xl lg:text-3xl">
          Join AASRA Hospitality
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl">&</h1>
        <h2 className="text-sm md:text-lg lg:text-xl">
          Get up To 2500+ bonus Points On Your Next Two Stays
        </h2>
        <button className="text-white bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 text-sm md:text-base">
          Join Today
        </button>
      </div>

      {/* Div with Button and Text at Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-4 space-y-4 md:space-y-0">
        <button className="bg-white text-black px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-200 text-sm md:text-base">
          <PhoneIcon className="w-5 h-5" />
          <span>Request a Call</span>
        </button>
        <h2 className="text-white text-sm md:text-base text-center md:text-right">
          2000+ guest rooms across multiple locations!
        </h2>
      </div>
    </div>
  );
};

export default Join;
