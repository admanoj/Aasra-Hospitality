"use client";
import BasicDateRangePicker from "@/components/dateRangePicker/page";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"; // Import search icon from Heroicons
import React from "react";

const Destination = () => {
  return (
    <div className="h-24 bg-gray-100 sticky top-0 z-50 flex justify-center shadow-md">
      <div className="flex flex-row justify-between items-center w-full max-w-6xl px-4 space-x-6">
        <div className="relative">
          <input
            placeholder="Search for Destination"
            className="focus:outline-none bg-gray-200 hover:bg-gray-300 pl-10 pr-4 py-2 w-full rounded-md h-14 "
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" />
        </div>

        <BasicDateRangePicker />
        <Button className="bg-blue-500 rounded-none hover:bg-gray-700">
          Find a Hotel
        </Button>
      </div>
    </div>
  );
};

export default Destination;
