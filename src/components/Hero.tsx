"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

interface Integration {
  id: string;
  icon: React.ReactNode;
}

interface Hero32Props {
  heading?: string[];
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  integrations?: Integration[][];
}

const Hero = ({
  heading = ["Little", "Monster", "Studio"],
  description = "We are a team of experienced developers and designers who are passionate about creating beautiful and functional websites and applications.",
  button = {
    //查看更多产品  英文
    text: "Discover all products",
    url: "/",
  },
}: // integrations = [
//   [
//     {
//       id: "integration-1",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-1.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-2",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-2.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-3",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-3.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-4",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-4.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-5",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-5.svg"
//         />
//       ),
//     },
//   ],
//   [
//     {
//       id: "integration-6",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-6.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-7",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-1.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-8",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-2.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-9",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-3.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-10",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-4.svg"
//         />
//       ),
//     },
//   ],
//   [
//     {
//       id: "integration-11",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-5.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-12",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-6.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-13",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-1.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-14",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-2.svg"
//         />
//       ),
//     },
//     {
//       id: "integration-15",
//       icon: (
//         <img
//           alt="Integration"
//           src="https://www.shadcnblocks.com/images/block/block-3.svg"
//         />
//       ),
//     },
//   ],
// ],
Hero32Props) => {
  return (
    <section className="relative overflow-hidden">
      {/* <div
        className="hero-bg   absolute w-full flex justify-start items-start blur-[64px] z-10"
        aria-hidden="true"
      >
        <div
          className="relative transform-gpu   aspect-[5/1]    bg-gradient-to-tr from-[#F96E1A] to-[#8a9601] opacity-30 w-full "
          style={{
            clipPath:
              "polygon(30% 0%, 18% 72%, 57% 0, 52% 40%, 13% 7%, 9% 76%, 0 17%, 0 61%)",
          }}
        />
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.1 }}
        className="absolute inset-0 overflow-hidden -z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className="min-h-full min-w-full"
        >
          <defs>
            <pattern
              id="grid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="var(--bg-grid)"
                strokeWidth="1"
                strokeOpacity={0.5}
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </motion.div>
      <div className="relative">
        {/* <div className="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,var(--color-background)_85%,transparent_100%)] md:block"></div> */}
        <div className="relative container flex flex-col items-start md:flex-row md:items-center md:-space-x-80 lg:-space-x-120">
          {/* <div className="-mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] px-[calc(theme(container.padding))] z-20 shrink-0  pt-32 md:w-1/2 md:bg-transparent pb-64 md:pb-32 lg:pb-64  lg:pt-64">
            
             */}
          <div className=" md:pl-12 lg:pl-20 z-20 shrink-0  pt-32 w-full md:w-1/2 md:bg-transparent pb-64 md:pb-32 lg:pb-64  lg:pt-64">
            <div className="flex flex-col items-center  md:items-start text-left">
              <div className="max-w-sm relative">
                <motion.div
                  className="absolute  opacity-20 -z-10 blur-[20px] top-0 left-[-12%] w-full h-full scale-200 user-select-none pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#F1C21B"
                      d="M31.7,-44.8C42.3,-36,52.8,-28.3,54.4,-18.8C56,-9.2,48.7,2.1,47.1,17.9C45.6,33.8,49.8,54.1,42.9,58.4C36,62.7,18,50.9,0.3,50.5C-17.5,50.2,-34.9,61.1,-45.7,58.1C-56.5,55.1,-60.6,38.1,-57.1,24.3C-53.6,10.6,-42.4,0.2,-35.9,-9.1C-29.4,-18.5,-27.5,-26.8,-22.3,-37.4C-17,-47.9,-8.5,-60.6,1,-62C10.6,-63.4,21.2,-53.6,31.7,-44.8Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </motion.div>
                <div
                  // initial={{ opacity: 0, y: 10 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.3, delay: 0.1 }}
                  className="my-6 text-center md:text-left text-6xl  font-bold text-pretty lg:text-7xl   "
                >
                  {heading.map((item, index) => (
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.1 }}
                      key={index}
                      className=""
                    >
                      {/* <span key={index} className="gradient-text "> */}
                      {item}
                      {index === heading.length - 2 && <br />}
                    </motion.p>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.1 }}
                  className="font-semibold text-center md:text-left"
                >
                  {description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.1 }}
                  className="text-center md:text-left"
                >
                  <Button asChild size="lg" className="mt-10">
                    <a href={button.url}>{button.text}</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="hero-image w-full h-full   absolute   md:relative  -z-10 md:z-0 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="box"
            >
              <Image
                className="object-cover object-bottom h-[700px] hidden md:block"
                src="/images/hero.png"
                alt="Hero"
                width={1920}
                height={1080}
              />

              <Image
                className="object-cover object-bottom h-[700px] block md:hidden"
                src="/images/hero-col.png"
                alt="Hero"
                width={1920}
                height={1080}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
