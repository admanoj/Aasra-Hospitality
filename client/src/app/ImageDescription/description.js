"use client";

import HotelImageSlider from "@/components/hotel-image-slider";


export default function Images() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-black">
         
        <img src="/bed-bedroom.png"  className="w-full h-full object-cover">
         </img>
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[10rem] w-9/10 bg-red-950 p-4 rounded shadow-lg text-white">
         <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold">
            Aasara Hospitality
            </h1>
            <p className="mt-4">
            Aasra Hospitality is a privately owned, innovative hotel development and hospitality management company.
            We manage a portfolio of hotels across the United States and provide investor opportunities, hotel development services, hotel management services, and hospitality career opportunities to our partners and associates.
            </p>
         </div>
            
        </div>






    </div>
  );
}
