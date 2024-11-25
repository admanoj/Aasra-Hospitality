"use client";
import React from "react";
import Dashboard from "./dashboard/page";
import Destination from "./destination/page";
import Join from "./join/page";
import { ImagesSliderDemo } from "./manoj/page";

import Footer from "./footer/page";
import HotelCard from "./card/page";

const Homepage = () => {
  return (
    <div>
      <Dashboard />
      <Destination />
      <Join />
      <div className="min-h-screen flex flex-col items-center justify-center p-3 bg-black shadow-md space-y-4">
        <ImagesSliderDemo />
      </div>

      <HotelCard />
      <Footer />
    </div>
  );
};

export default Homepage;
