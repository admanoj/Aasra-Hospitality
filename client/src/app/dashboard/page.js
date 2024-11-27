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
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Compass, Hotel, Building, Calendar, Users, Star } from "lucide-react";

const UserFriendlyNavbar = () => {
  return (
    <div>
      <nav className="bg-black flex items-center justify-between p-4">
        {/* Left Section: AlignJustify Icon with Dropdown */}
        <div className="flex items-center text-white">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                <TfiAlignJustify className="w-6 h-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-black text-white border border-gray-700"
              align="start"
              sideOffset={5}
            >
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                <Link
                  href="/overview"
                  className="w-full py-2 px-4 flex items-center"
                >
                  <Compass className="mr-2 h-4 w-4" />
                  <span>Explore</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                <Link
                  href="/hotels"
                  className="w-full py-2 px-4 flex items-center"
                >
                  <Hotel className="mr-2 h-4 w-4" />
                  <span>Our hotels</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                <Link
                  href="/our-brands"
                  className="w-full py-2 px-4 flex items-center"
                >
                  <Building className="mr-2 h-4 w-4" />
                  <span>Our Brands</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="focus:bg-gray-800 focus:text-white hover:bg-gray-800 py-2 px-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Meetings and events</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="bg-black text-white border border-gray-700">
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                    <Link href="/plan-your-event" className="w-full py-2 px-4">
                      Plan your event
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                    <Link
                      href="/meetings-and-conventions"
                      className="w-full py-2 px-4"
                    >
                      Meetings and conventions
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                    <Link
                      href="/wedding-event-offers"
                      className="w-full py-2 px-4"
                    >
                      Wedding event offers
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="focus:bg-gray-800 focus:text-white hover:bg-gray-800 py-2 px-4">
                  <Star className="mr-2 h-4 w-4" />
                  <span>Loyalty Programs</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="bg-black text-white border border-gray-700">
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                    <Link href="/loyalty-overview" className="w-full py-2 px-4">
                      Overview
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                    <Link href="/earn-points" className="w-full py-2 px-4">
                      Earn points
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                    <Link href="/redeem-points" className="w-full py-2 px-4">
                      Redeem points
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-800 focus:text-white hover:bg-gray-800">
                    <Link
                      href="/tiers-and-benefits"
                      className="w-full py-2 px-4"
                    >
                      Tiers & benefits
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
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
          <Link href="../register">
            <Button className="bg-white text-black rounded-md hover:bg-gray-200 transition-colors w-20 text-base focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              Sign in
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default UserFriendlyNavbar;
