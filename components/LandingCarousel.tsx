"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { LANDING_CAROUSEL } from "@/data";
import { cn } from "@/lib/utils";
import CldImage from "./CldImage";

export function LandingCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setSnapCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          containScroll: false,
          slidesToScroll: 1,
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6 ">
          {LANDING_CAROUSEL.map((item, index) => (
            <CarouselItem key={index} className="basis-auto pl-6 ">
              <div className="relative h-121.5 w-93 overflow-hidden ">
                <CldImage
                  src={item.src}
                  alt={""}
                  fill
                  sizes="372px"
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="right-auto left-96 z-10 size-12 -translate-x-1/2 rounded-full" />
      </Carousel>

      {/* Dots */}
      <div className="mt-6 flex gap-x-2" role="tablist" aria-label="Slides">
        {Array.from({ length: snapCount }).map((_, index) => (
          <div
            key={index}
            className={`border-[0.5px] rounded-full size-6 flex items-center justify-center ${index === selected ? "border-primary" : "border-transparent"}`}
            onClick={() => api?.scrollTo(index)}
          >
            <button
              type="button"
              role="tab"
              aria-selected={index === selected}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "size-3 rounded-full transition-colors duration-300",
                index === selected
                  ? "bg-primary"
                  : "bg-[#d9d9d9] hover:bg-[#b0b0b0]",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
