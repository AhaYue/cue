import Image from "next/image";

const cloudLogoArray = [
  {
    name: "Cloud Logo",
    image: "/images/cloud-logo/Astro.svg",
  },
  {
    name: "Cloud Logo",
    image: "/images/cloud-logo/Notion.svg",
  },
  { 
    name: "Cloud Logo",
    image: "/images/cloud-logo/Spotify.svg",
  },
  {
    name: "Cloud Logo",
    image: "/images/cloud-logo/React.svg",
  },
  {
    name: "Cloud Logo",
    image: "/images/cloud-logo/Vs Code.svg",
  },
  {
    name: "Cloud Logo",
    image: "/images/cloud-logo/Vue.js.svg",
  },

 

];

export default function CloudLogo() {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="text-3xl font-semibold lg:text-5xl">
            {`Powering the world's best product teams`}
          </h4>
          <p className="text-xl text-muted-foreground lg:-mt-1">
            From next-gen startups to established enterprises
          </p>
        </div>
        <div className="relative my-20 overflow-hidden">
          <div className="flex w-full">
            <div className="flex w-full justify-around  shrink-0 animate-marquee items-center gap-4">
              {cloudLogoArray.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image src={item.image} alt={item.name} width={100} height={100} />
                </div>
              ))}
            </div>

            <div className="flex w-full justify-around  shrink-0 animate-marquee items-center gap-4">
              {cloudLogoArray.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                    <Image src={item.image} alt={item.name} width={100} height={100} />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 w-24 lg:w-36 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 lg:w-36 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>  
  );
}
