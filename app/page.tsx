// import { Button } from "@/components/ui/button";
// import { useTranslations } from "next-intl";
// import LanguageToggle from "@/components/LanguageToggle";
// import MyBtn from "@/components/MyBtn";

// import { sanityClient } from "@/sanity/lib/client";

// import { useQuery } from "@tanstack/react-query";
// import { allQuery } from "@/sanity/lib/queries";
import Hero from "@/components/Hero";
import HeroWithIcon from "@/components/HeroWithIcon";
import Stats from "@/components/Stats";
import StoryGallery from "@/components/StoryGallery";
import GalleryProduct from "@/components/GalleryProduct";
import Testimonial from "@/components/Testimonial";
import CloudLogo from "@/components/CloudLogo";

import RowGallery from "@/components/RowGallery";
export default function Home() {
  // const t = useTranslations("HomePage");

  // const data = sanityClient.fetch(allQuery);


  return (
    <div>
      <Hero />
      <GalleryProduct />
      <HeroWithIcon heading="Ea magna cupidatat aute " />
      <RowGallery />
      <CloudLogo />
      <Stats />
      <StoryGallery />
      <Testimonial />
      
  
    </div>
  );
}
