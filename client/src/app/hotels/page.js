// "use client";

// import { useState, useEffect } from "react";
// import { HotelCard } from "@/components/ui/hotel-card";
// import { hotels } from "@/lib/hotel";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import {
//   CalendarIcon,
//   MapPinIcon,
//   BedDoubleIcon,
//   UtensilsIcon,
//   WifiIcon,
//   TreePineIcon,
// } from "lucide-react";

// const oregonImages = [
//   "/th.webp",
//   "/bike.jpg",
//   "/o.jpg",
//   "/or.jpg",
//   "/lake.jpg",
//   "/ore.jpg",
//   "/oreg.webp",
// ];

// export default function HotelsPage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % oregonImages.length
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section with Image Slider */}
//       <section className="relative h-[70vh] overflow-hidden">
//         {oregonImages.map((image, index) => (
//           <div
//             key={image}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
//               index === currentImageIndex ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ backgroundImage: `url(${image})` }}
//           />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center">
//           <div className="text-center text-white max-w-4xl px-4">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
//               Discover Oregon's Hidden Gems
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl mb-10 drop-shadow-md max-w-2xl mx-auto">
//               Uncover the beauty of Oregon with our handpicked selection of
//               luxurious retreats and cozy hideaways
//             </p>
//             <Button
//               size="lg"
//               className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
//             >
//               Start Your Journey
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16">
//         <Tabs defaultValue="featured" className="mb-12">
//           <TabsList className="grid w-full grid-cols-2 mb-8">
//             <TabsTrigger value="featured">Featured Hotels</TabsTrigger>
//             <TabsTrigger value="search">Search Hotels</TabsTrigger>
//           </TabsList>
//           <TabsContent value="featured">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {hotels.map((hotel) => (
//                 <HotelCard key={hotel.id} hotel={hotel} />
//               ))}
//             </div>
//           </TabsContent>
//           <TabsContent value="search">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Find Your Perfect Stay</CardTitle>
//                 <CardDescription>
//                   Enter your preferences to find the ideal hotel for your Oregon
//                   adventure.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="check-in">Check-in</Label>
//                     <Input id="check-in" type="date" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="check-out">Check-out</Label>
//                     <Input id="check-out" type="date" />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="location">Location</Label>
//                   <Input id="location" placeholder="Enter city or region" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="guests">Number of Guests</Label>
//                   <Input
//                     id="guests"
//                     type="number"
//                     min="1"
//                     placeholder="Enter number of guests"
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full">Search Hotels</Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>

//         <Separator className="my-12" />

//         {/* Featured Amenities */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             Experience Oregon's Finest
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             <Card className="flex flex-col items-center text-center p-4">
//               <BedDoubleIcon className="w-12 h-12 text-primary mb-4" />
//               <CardTitle className="text-lg mb-2">Cozy Rooms</CardTitle>
//               <CardDescription>Relax in comfort</CardDescription>
//             </Card>
//             <Card className="flex flex-col items-center text-center p-4">
//               <WifiIcon className="w-12 h-12 text-primary mb-4" />
//               <CardTitle className="text-lg mb-2">Free Wi-Fi</CardTitle>
//               <CardDescription>Stay connected</CardDescription>
//             </Card>
//             <Card className="flex flex-col items-center text-center p-4">
//               <UtensilsIcon className="w-12 h-12 text-primary mb-4" />
//               <CardTitle className="text-lg mb-2">Fine Dining</CardTitle>
//               <CardDescription>Savor local cuisine</CardDescription>
//             </Card>
//             <Card className="flex flex-col items-center text-center p-4">
//               <MapPinIcon className="w-12 h-12 text-primary mb-4" />
//               <CardTitle className="text-lg mb-2">Prime Locations</CardTitle>
//               <CardDescription>Explore Oregon</CardDescription>
//             </Card>
//             <Card className="flex flex-col items-center text-center p-4">
//               <TreePineIcon className="w-12 h-12 text-primary mb-4" />
//               <CardTitle className="text-lg mb-2">Nature Access</CardTitle>
//               <CardDescription>Embrace the outdoors</CardDescription>
//             </Card>
//             <Card className="flex flex-col items-center text-center p-4">
//               <CalendarIcon className="w-12 h-12 text-primary mb-4" />
//               <CardTitle className="text-lg mb-2">Easy Booking</CardTitle>
//               <CardDescription>Plan with ease</CardDescription>
//             </Card>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <Card className="bg-primary text-primary-foreground">
//           <CardHeader>
//             <CardTitle className="text-3xl font-bold text-center">
//               Ready for Your Oregon Adventure?
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-center">
//             <p className="text-xl mb-8">
//               Book your stay today and create unforgettable memories in the
//               heart of Oregon's natural beauty.
//             </p>
//             <Button variant="secondary" size="lg">
//               Explore All Hotels
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { HotelCard } from "@/components/ui/hotel-card";
import { hotels } from "@/lib/hotel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  MapPinIcon,
  BedDoubleIcon,
  UtensilsIcon,
  WifiIcon,
  TreePineIcon,
} from "lucide-react";

const oregonImages = [
  "/th.webp",
  "/bike.jpg",
  "/o.jpg",
  "/or.jpg",
  "/lake.jpg",
  "/ore.jpg",
  "/oreg.webp",
];

export default function HotelsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = oregonImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % oregonImages.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        {!isLoading &&
          oregonImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Discover Oregon's Hidden Gems
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 drop-shadow-md max-w-2xl mx-auto">
              Uncover the beauty of Oregon with our handpicked selection of
              luxurious retreats and cozy hideaways
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="featured" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="featured">Featured Hotels</TabsTrigger>
            <TabsTrigger value="search">Search Hotels</TabsTrigger>
          </TabsList>
          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="search">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Perfect Stay</CardTitle>
                <CardDescription>
                  Enter your preferences to find the ideal hotel for your Oregon
                  adventure.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="check-in">Check-in</Label>
                    <Input id="check-in" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-out">Check-out</Label>
                    <Input id="check-out" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter city or region" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    placeholder="Enter number of guests"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Search Hotels</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="my-12" />

        {/* Featured Amenities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Experience Oregon's Finest
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <Card className="flex flex-col items-center text-center p-4">
              <BedDoubleIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Cozy Rooms</CardTitle>
              <CardDescription>Relax in comfort</CardDescription>
            </Card>
            <Card className="flex flex-col items-center text-center p-4">
              <WifiIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Free Wi-Fi</CardTitle>
              <CardDescription>Stay connected</CardDescription>
            </Card>
            <Card className="flex flex-col items-center text-center p-4">
              <UtensilsIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Fine Dining</CardTitle>
              <CardDescription>Savor local cuisine</CardDescription>
            </Card>
            <Card className="flex flex-col items-center text-center p-4">
              <MapPinIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Prime Locations</CardTitle>
              <CardDescription>Explore Oregon</CardDescription>
            </Card>
            <Card className="flex flex-col items-center text-center p-4">
              <TreePineIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Nature Access</CardTitle>
              <CardDescription>Embrace the outdoors</CardDescription>
            </Card>
            <Card className="flex flex-col items-center text-center p-4">
              <CalendarIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Easy Booking</CardTitle>
              <CardDescription>Plan with ease</CardDescription>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Ready for Your Oregon Adventure?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl mb-8">
              Book your stay today and create unforgettable memories in the
              heart of Oregon's natural beauty.
            </p>
            <Button variant="secondary" size="lg">
              Explore All Hotels
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
