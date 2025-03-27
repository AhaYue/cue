"use client";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef, useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";


import ImageHoverComponent from "./ImageHoverChange";


const CardProduct = [
  {
    title: "Card Title",
    description: "Card Description",
    image: [
      "/images/P 790 Studio Hero Image.jpg",
      "/images/P 790 Studio Hero Image2.jpg",
    ],
    color: "#1E0505",
    textColor: "#FFFFFF",
  },
  {
    title: "Card Title",
    description: "Card Description",
    image: ["/images/gloves0.jpg", "/images/gloves1.jpg"],
  },

  {
    title: "Card Title",
    description: "Card Description",
    image: ["/images/gloves1.jpg", "/images/gloves0.jpg"],
    price: 100,
    rating: 4.5,
  },
  {
    title: "Card Title",
    description: "Card Description",
    image: ["/images/Xnip2025-03-27_08-40-59.jpg"],
  },

  {
    title: "Card Title",
    description: "Card Description",
    image: ["/images/gloves0.jpg"],
    price: 100,
    rating: 4.5,
  },
];

export default function GalleryProduct() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <section className=" py-16 md:py-32">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Gallery Product
          </h2>
          <div className="mt-4 max-w-xl text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
            sit phasellus mollis sit aliquam sit.
          </div>
        </div>

        <div>
          <Carousel
            setApi={setCarouselApi}
            plugins={[plugin.current]}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
            // plugins={[plugin.current]}
          >
            <CarouselContent>
              {CardProduct.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                >
                  <div className=" flex  flex-col justify-start rounded-xl border bg-muted  overflow-clip">
                    <div className=" size-full aspect-square user-select-none ">
                      <ImageHoverComponent
                        image={item.image}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div
                      className=" py-8 px-8 bg-muted"
                      style={{ backgroundColor: item.color }}
                    >
                      <div
                        className="mb-2 line-clamp-1 text-lg font-medium break-words md:text-xl lg:text-2xl"
                        style={{ color: item.textColor }}
                      >
                        Smart AI Assistant
                      </div>
                      <div
                        className="text-sm text-muted-foreground md:text-base line-clamp-3 user-select-none"
                        
                      >

                        Powered by advanced language models to handle
                        complexPowered by advanced language models to handle
                        complex
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex shrink-0 items-center justify-end  gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
