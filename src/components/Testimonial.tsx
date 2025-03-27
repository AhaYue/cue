
import { Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,

  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonialArray = [
  [
    {
      name: "John Doe",
      image: "https://library.shadcnblocks.com/images/block/avatar-1.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 5,
    },
    {
      name: "Jane Doe",
      image: "https://library.shadcnblocks.com/images/block/avatar-2.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 4,
    },
    {
      name: "John Doe",
      image: "https://library.shadcnblocks.com/images/block/avatar-1.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 5,
    },
  ],
  [
    {
      name: "John Doe",
      image: "https://library.shadcnblocks.com/images/block/avatar-1.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 5,
    },
    {
      name: "John Doe",
      image: "https://library.shadcnblocks.com/images/block/avatar-1.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 5,
    },
    {
      name: "Jane Doe",
      image: "https://library.shadcnblocks.com/images/block/avatar-2.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 4,
    },
  
  ],
  [
    {
      name: "Chris Lee",
      image: "https://library.shadcnblocks.com/images/block/avatar-1.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 5,
    },
    {
      name: "Maria Garci",
      image: "https://library.shadcnblocks.com/images/block/avatar-2.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 4,
    },
    {
    
      name: "John Doe",
      image: "https://library.shadcnblocks.com/images/block/avatar-1.webp",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      stars: 5,
    },
  ],
];

export default function Testimonial() {
  return (
    <>
      <section className="py-16 md:py-32">
        <div className="container">
          <div className="flex flex-col items-center gap-6 px-4 sm:px-8">
            <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Why  Players Swear Us
            </h2>

            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex flex-col gap-2 rounded-xl bg-muted p-2 px-4 shadow-sm">
                <div className="flex flex-row items-center gap-2">
                  <div className="rounded-full bg-white p-4">
                    {/* <Image alt="Best for Design" width="40" height="40" className="rounded-full" ></Image> */}
                    <Trophy className="size-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Best for Design</span>
                    <span className="text-sm text-muted-foreground">
                      2023 Recognition
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 rounded-xl bg-muted p-2 px-4 shadow-sm">
                <div className="flex flex-row items-center gap-2">
                  <div className="rounded-full bg-white p-4">
                    {/* <Image alt="Best for Design" width="40" height="40" className="rounded-full" ></Image> */}
                    <Trophy className="size-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Best for Cue</span>
                    <span className="text-sm text-muted-foreground">
                      2024 Recognition
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-14 w-full px-4 after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-gradient-to-t after:from-background sm:px-8 md:px-16 lg:px-32">
          <div>

            <div className="flex flex-col  md:flex-row   place-content-stretch center box-sizing-border-box width-full gap-[10px] h-[600px] overflow-hidden md:h-auto">
            {testimonialArray.map((ary, index1) => (
              <div key={index1} className="flex flex-col place-content-stretch flex-start  w-full   md:w-0  md:flex-shrink-1 md:flex-grow-1 md:flex-basis-0 gap-[10px] " style={{marginTop:`${index1 == 1 ? "0px" : "10px"}`}}>
                {ary.map((item, index) => (
                  <div key={index} className="flex justify-stretch">
                    <Card className="flex-grow-1 flex-shrink-1 flex-basis-0">
            
                        <CardContent>
                          <div className="mb-4 flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-star h-4 w-4 fill-primary"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            ))}
                          </div>
                          <div className="mt-4 text-sm text-foreground">
                            <q>
                              This tool has completely transformed my workflow.
                              The features are intuitive, and it’s made
                              collaboration with my team so much easier.
                            </q>
                          </div>
                        </CardContent>
                        <CardFooter className="mt-4 flex items-center gap-2">
                          <Avatar className="relative flex shrink-0 overflow-hidden size-9 rounded-full ring-1 ring-muted">
                            <AvatarImage
                              src={item.image}
                              alt={item.name}
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <p className="font-medium">{item.name}</p>
                          </div>
                        </CardFooter>
                   
                    </Card>
                  </div>
                ))}
              </div>
            ))}
            </div>
          </div>
        </div>
        </div>

    
      </section>
    </>
  );
}

{
  /* <>
<div className="display: flex; flex-direction: column; place-content: stretch flex-start; flex: 1 1 0%; width: 0px; gap: 10px;">
<div className="display: flex; justify-content: stretch;">
<Card>
  <CardHeader>
    <CardTitle>
      <div className="mb-4 flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-star h-4 w-4 fill-primary"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
      </div>
    </CardTitle>

    <CardContent>
      <div className="mt-4 text-sm text-foreground">
        <q>
          This tool has completely transformed my workflow. The
          features are intuitive, and it’s made collaboration with
          my team so much easier.
        </q>
      </div>
    </CardContent>
    <CardFooter className="mt-4 flex items-center gap-2">
      <Avatar className="relative flex shrink-0 overflow-hidden size-9 rounded-full ring-1 ring-muted">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-sm">
        <p className="font-medium">Alex Johnson</p>
      </div>
    </CardFooter>
  </CardHeader>
</Card>
</div>
</div>

</> */
}
