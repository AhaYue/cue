"use client";
import React, { useState } from "react";
import Image from "next/image";


const ImageHoverComponent = ({
  image,
  link,
  width = 400,
  height = 400,
}: {
  image: string[];
  link?: string;
  width: number;
  height: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="image-container relative overflow-hidden w-full h-full"
    >
      {image.length > 1 ? (
        <>
         
          <Image
            src={image[1]}
            alt="second"
            className={`fade ${isHovered ? "fade-in" : "fade-out"} object-cover  size-full absolute inset-0`}
            width={width}
            height={height}
          />
           <Image
            src={image[0]}
            alt="first"
            className={`fade ${isHovered ? "fade-out" : "fade-in"} object-cover  size-full  absolute inset-0`}
            width={width}
            height={height}
          />
        </>
      ) : (
        <Image
          src={image[0]}
          alt="single"
          className=" object-cover"
          width={width}
          height={height}
        />
      )}
      {link && <a href={link} className="image-link absolute inset-0 z-10"></a>}
    </div>
  );
};

export default ImageHoverComponent;
