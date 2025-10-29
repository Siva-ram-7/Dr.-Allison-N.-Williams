"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Dr. Williams and her staff present a warm and welcoming atmosphere. … my visit was not rushed.",
    name: "Patient Review",
    avatar: "https://placehold.co/48x48.png",
    hint: "person avatar",
  },
  {
    quote: "I am a concierge patient of hers through MDVIP … this has changed my life.",
    name: "Patient Review",
    avatar: "https://placehold.co/48x48.png",
    hint: "person avatar",
  },
  {
    quote: "The peace of mind that comes with having 24/7 access to my doctor is invaluable. Crofton Family Practice truly puts patients first.",
    name: "D. B.",
    avatar: "https://placehold.co/48x48.png",
    hint: "person avatar",
  },
   {
    quote: "The annual wellness screening is incredibly thorough and helped catch an issue early. I am so grateful for Dr. Williams's proactive approach.",
    name: "L. K.",
    avatar: "https://placehold.co/48x48.png",
    hint: "person avatar",
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm md:max-w-xl lg:max-w-4xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full bg-secondary/20 border-border">
                <CardContent className="flex flex-col items-start justify-between h-full gap-4 p-6">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 pt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
