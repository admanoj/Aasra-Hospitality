"use client";
import React from "react";
import Dashboard from "./dashboard/page";
import Destination from "./destination/page";
import Join from "./join/page";

const Homepage = () => {
  return (
    <div>
      <Dashboard />
      <Destination />
      <Join />
    </div>
  );
};

export default Homepage;
