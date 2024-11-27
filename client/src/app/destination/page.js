"use client";
import { DatePickerWithRange } from "@/components/datePicker/page";
import Dropnav from "@/components/dropnav";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"; // Import search icon from Heroicons
import Link from "next/link";
import React from "react";

const Destination = () => {
  return (
    <div className="h-24 bg-gray-100 sticky top-0 z-50 flex justify-center shadow-md">
      <div className="flex flex-row justify-between items-center w-full max-w-1xl px-4 space-x-6">
        <div className="relative w-1/3">
          <input
            placeholder="Search for Destination"
            className="focus:outline-none bg-gray-300 hover:bg-gray-300 pl-10 pr-4 py-2 w-full rounded-md placeholder-gray-600
            border border-black border-opacity-10 shadow-offset-black p-4  "
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700" />
        </div>
        <div className="flex">
          <DatePickerWithRange className="flex-1" />
        </div>
        <div className="bg-yellow-300  mr-0 text-black-500 hover:bg-blue-500 hover:text-white hover:scale-105 !rounded">
          <Dropnav />
        </div>
        <div>
          <Link href="/hotels">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-2.5 px-8 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:from-blue-700 active:to-blue-900">
              Find a Hotel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Destination;
