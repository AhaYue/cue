import { Target, Recycle, Zap } from "lucide-react";
import React from "react";

import { Separator } from "@/components/ui/separator";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Hero45Props {

  heading: string;

  features?: Feature[];
}

const HeroWithIcon = ({

  heading = "Blocks built with Shadcn & Tailwind",

  features = [
    {
      icon: <Recycle className="h-auto w-12 text-current" />,
      title: "Flexible Support",
      description:
        "Benefit from around-the-clock assistance to keep your business running smoothly.",
    },
    {
      icon: <Target className="h-auto w-12 text-current" />,
      title: "Collaborative Tools",
      description:
        "Enhance teamwork with tools designed to simplify project management and communication.",
    },
    {
      icon: <Zap className="h-auto w-12 text-current" />,
      title: "Lightning Fast Speed",
      description:
        "Experience the fastest load times with our high performance servers.",
    },
  ],
}: Hero45Props) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          {/* <Badge variant="outline">{badge}</Badge> */}
          <h1 className="text-4xl font-semibold lg:text-5xl">{heading}</h1>
        </div>
        <div className="relative mx-auto aspect-video w-full rounded-xl  overflow-hidden ">
          {/* <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video max-h-[600px] w-full rounded-xl object-cover"
          /> */}
          <video src="/videos/Qi35LP_AtAGlance_MaximumAdjustability_1.mp4" autoPlay muted loop className="absolute aspect-video inset-0 w-full object-cover"></video>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent via-[20%] to-transparent"></div> */}
          <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 [background-size:12px_12px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 [background-size:12px_12px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex  flex-col md:flex-row">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                key={index} // 这里的 key 其实应该加在 Fragment 上
                className="flex grow basis-0 flex-col rounded-md bg-background p-4"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-[var(--radius)] bg-background  text-[#3B5A3F]   ">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroWithIcon;
