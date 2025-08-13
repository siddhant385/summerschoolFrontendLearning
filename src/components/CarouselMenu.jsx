import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CarouselMenu = ({ items, title = "Upcoming Workshops" }) => {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <Carousel className="relative">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                {item}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>

      <CardFooter className="justify-center">
        <Button variant="outline">View More</Button>
      </CardFooter>
    </Card>
  );
};