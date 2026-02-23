"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/typography/typography";

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  isThumbnail: boolean;
}

const productImages: ProductImage[] = [
  {
    id: "main-view",
    src: "/hero.png", 
    alt: "Nike Air Max Brown Corduroy - Main View",
    isThumbnail: false,
  },
  {
    id: "pair-view",
    src: "/hero.png", 
    alt: "Nike Air Max pair view",
    isThumbnail: true,
  },
  {
    id: "back-view",
    src: "/hero.png",
    alt: "Nike Air Max back heel view",
    isThumbnail: true,
  },
];

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const thumbnails = productImages.filter((img) => img.isThumbnail);


  const handleThumbnailClick = (clickedImageId: string) => {
    // Find the index in the main array based on the clicked ID
    const newIndex = productImages.findIndex(
      (img) => img.id === clickedImageId,
    );

    // Prevent action if clicking the currently active image or if already animating
    if (
      newIndex === activeImageIndex ||
      newIndex === -1 ||
      fadeState === "out"
    ) {
      return;
    }

    // 1. Start Fade Out
    setFadeState("out");

    // 2. Wait for transition duration (300ms matches the CSS duration below)
    setTimeout(() => {
      // 3. Swap the image while it's invisible
      setActiveImageIndex(newIndex);
      // 4. Start Fade In
      setFadeState("in");
    }, 100);
  };

  const activeImage = productImages[activeImageIndex];

  return (
    <section className="section-container mb-6 lg:mb-[90px]">
      <Typography variant="hero" className="mb-4">
        Do it <span className="text-blue">right</span>
      </Typography>

      {/* big image section start  ********************************************* */}
      <div className="relative h-[382px] lg:h-[750px] rounded-[16px] lg:rounded-[64px] overflow-hidden group">
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out z-0 ${fadeState === "out" ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>

        {/* --- Left Content Section --- */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start pl-24 pb-16 select-none">
          {/* Vertical Banner Text */}
          <div className="absolute left-0 top-4 lg:top-20 bg-dark-gray p-2 lg:p-6 rounded-r-lg">
            <Typography
              variant="rubik-base"
              className="text-white [writing-mode:vertical-rl] rotate-180"
            >
              Nike product of the year
            </Typography>
          </div>

          <div className="max-w-[224px] lg:max-w-[490px] absolute left-4 bottom-4 lg:left-[48px] lg:bottom-[48px]">
            <Typography variant="h2" className="text-white mb-1 lg:mb-[14px]">
              NIKE AIR MAX
            </Typography>

            <Typography
              variant="body-xl"
              className="text-white text-[14px] leading-[138%]"
            >
              Nike introducing the new air max for everyone&apos;s comfort
            </Typography>

            <Button
              className=" mt-2 lg:mt-6 text-white"
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* --- Right Thumbnails Section --- */}
        <div className="absolute right-4 lg:right-8 bottom-4 lg:bottom-8 z-20 flex flex-col gap-4">
          {thumbnails.map((thumb) => {
            const isActive = thumb.id === activeImage.id;
            return (
              <button
                key={thumb.id}
                onClick={() => handleThumbnailClick(thumb.id)}
                className={`relative w-[64px] h-[64px] lg:w-[160px] lg:h-[160px] rounded-[8px] lg:rounded-[32px] overflow-hidden border-[3px] transition-all duration-300 ease-in-out 
                ${isActive ? "border-white scale-105 ring-2 ring-black/20" : "border-white/70 hover:border-white hover:scale-105"}
            `}
                aria-label={`View ${thumb.alt}`}
                disabled={fadeState === "out"}
              >
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100px, 112px"
                  unoptimized
                />
              </button>
            );
          })}
        </div>
      </div>
      {/* big image section end  ********************************************* */}
    </section>
  );
};

export default HeroSection;
