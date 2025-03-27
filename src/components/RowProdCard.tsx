import Image from "next/image";

import clsx from "clsx";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RowProdCard({
  product,
  className,
  direction = "horizontal",
  ...props
}: {
  product?: {
    name: string;
    description: string;
    image: string;
    image_mobile?: string;
    url?: string;
  };
  className?: string;
  direction?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) {
  if (!product) {
    product = {
      name: "Product Cue AI Nine-Ball",
      description:
        "Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.Adipisicing est nulla cupidatat deserunt id ipsum Lorem ea eu incididunt quis.",
      image: "/images/cue-row.png",
      url: "https://www.google.com",
    };
  }

  return (
    <div {...props} className={clsx("", className)}>
      <Card
        className={clsx(
          "flex-row justify-between items-center md:   min-h-[300px] shadow-sm overflow-hidden",
          direction === "vertical" ? "flex-col" : "flex-row"
        )}
      >
        <CardContent className="flex-shrink flex-grow  flex justify-center items-center">
          <Image
            src={product.image}
            alt="Placeholder"
            width={1200}
            height={200}
            className="object-cover w-full h-full  hidden md:block"
          />

          <Image
            src={product.image_mobile || product.image}
            alt="Placeholder"
            width={200}
            height={400}
            className="object-contain w-full h-full  block md:hidden  max-h-[400px]"
          />
        </CardContent>

        <CardFooter className="flex-shrink-0 max-w-[600px] flex-col justify-start items-start gap-2">
          <div className=" mb-2 line-clamp-1 text-lg font-medium break-words md:text-xl lg:text-2xl">
            {product.name}
          </div>

          <div className="text-sm text-muted-foreground md:text-base line-clamp-3 user-select-none mb-2">
            {product.description}
          </div>

          <Button>
            <a href={product.url}>Learn More</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
