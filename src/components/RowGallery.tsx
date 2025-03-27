"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";

import RowProdCard from "@/components/RowProdCard";

const products = [
  {
    name: "Product Cue AI Nine-Ball",
    description:
      "Adipisicing est nulla cupidatat deserunt id ipsum Lorsicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.",
    image: "/images/cue-row.png",
    image_mobile: "/images/cue-col.png",
  },
  {
    name: " Nine-Ball",
    description:
      "Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.",
    image: "/images/cue-row.png",
    image_mobile: "/images/cue-col.png",
  },
  {
    name: "Product Cue AI Nine-Ball cupidatat",
    description:
      "Adipisicing est nulla cupidatat deserun cupidatat deserunt id ipsum Lorsicupidatat deserunt id ipsum Lorsicupidatat deserunt id ipsum Lorsit id ipsum Lorem ea eu incididunt quis.Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.",
    image: "/images/cue-row.png",
    image_mobile: "/images/cue-col.png",
  },
];

export default function RowGallery() {
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
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="mb-20 flex flex-col items-center gap-6 text-center">
            <h2 className="text-4xl font-semibold lg:text-5xl">Best Seller</h2>
          </div>

          <div className="">
            <div className="block lg:hidden">
              <Carousel setApi={setCarouselApi}>
                <CarouselContent>
                  {products.map((product, index) => (
                    <CarouselItem key={product.name + index}>
                      <RowProdCard product={product} direction="vertical" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

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
            </div>
            {/* 电脑端使用 flex */}
            <div className="hidden lg:flex flex-col gap-4">
              {products.map((product, index) => (
                <RowProdCard key={product.name + index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
