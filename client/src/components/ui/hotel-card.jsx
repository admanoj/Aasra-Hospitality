import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HotelCard({ hotel }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={hotel.image}
        alt={hotel.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {hotel.name}
          <span className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">4.5</span>
          </span>
        </CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {hotel.address}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{hotel.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={hotel.website} target="_blank" rel="noopener noreferrer">
            Visit Official Website
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
