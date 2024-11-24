"use client";
import React from "react";
import Dashboard from "./dashboard/page";
import Destination from "./destination/page";
import Join from "./join/page";
import { ImagesSliderDemo } from "./manoj/page";
import Card from "./card/page";

const Homepage = () => {
  return (
    <div>
      <Dashboard />
      <Destination />
      <Join />
      <ImagesSliderDemo />
      <Card />
    </div>
  );
};

export default Homepage;
