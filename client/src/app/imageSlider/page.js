"use client";

import HotelImageSlider from "@/components/hotel-image-slider";

export default function Images() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Our Luxury Hotel
      </h1>
      <HotelImageSlider />
      <p className="mt-8 text-center max-w-2xl">
        Experience the epitome of comfort and elegance at our hotel. Browse
        through our image gallery to get a glimpse of what awaits you during
        your stay.
      </p>
    </main>
  );
}
