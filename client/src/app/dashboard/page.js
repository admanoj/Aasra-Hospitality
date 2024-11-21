"use client";

import Link from "next/link";
import { TfiAlignJustify } from "react-icons/tfi";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  return (
    <div>
      <nav className="bg-black flex items-center justify-between p-4">
        {/* Left Section: AlignJustify Icon with Dropdown */}
        <div className="flex items-center text-white">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <TfiAlignJustify style={{ width: "25px", height: "25px" }} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black text-white border border-gray-700">
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">
                <Link href="/overview" className="w-full">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">
                <Link href="/earn-points" className="w-full">
                  Earn Points
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">
                <Link href="/redeem-points" className="w-full">
                  Redeem Points
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">
                <Link href="/tiers-and-benefits" className="w-full">
                  Tiers & Benefits
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/aasra.png"
            alt="Aasra Organization Logo"
            className="h-16"
          />
        </div>

        {/* Right Section: Sign-In Button */}
        <div className="flex items-center">
          <Link href="/register">
            <Button className="bg-white text-black rounded-md hover:bg-gray-200 transition-colors w-20 text-base">
              Sign in
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
