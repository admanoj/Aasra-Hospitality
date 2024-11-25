"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Bell, Utensils, MapPin } from "lucide-react";
import Image from "next/image";

const HotelCard = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hot.jpg"
        alt="Luxury Hotel Interior"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
        <Card className="w-full max-w-4xl bg-white/70 backdrop-blur-sm shadow-xl">
          <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Luxury"
              content="Experience unparalleled comfort"
              icon="crown"
            />
            <FeatureCard
              title="Service"
              content="Personalized attention to detail"
              icon="bell"
            />
            <FeatureCard
              title="Cuisine"
              content="Exquisite dining experiences"
              icon="utensils"
            />
            <FeatureCard
              title="Locations"
              content="Prime spots across America"
              icon="map-pin"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, content, icon }) => (
  <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
    <div className="text-yellow-800 mb-2">
      {icon === "crown" && <Crown className="w-8 h-8" />}
      {icon === "bell" && <Bell className="w-8 h-8" />}
      {icon === "utensils" && <Utensils className="w-8 h-8" />}
      {icon === "map-pin" && <MapPin className="w-8 h-8" />}
    </div>
    <h2 className="text-lg font-bold mb-2 text-yellow-900">{title}</h2>
    <p className="text-sm leading-tight text-yellow-800">{content}</p>
  </div>
);

export default HotelCard;
