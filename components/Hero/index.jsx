"use client"

import Badge from "@/components/Badge";
import Separator from "@/components/Separator";

import {HERO_HEADING_PART_1,HERO_HEADING_PART_2,HERO_PARAGRAPH,HERO_BUTTON_TEXT} from "@/constants/hero-constants";

const Hero = () => {
  return (
    // Hero Section with background video and overlay
    <section className="h-[80vh] xl:h-screen relative text-white">

      {/* Semi-transparent overlay for darkening the background video */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]" />

      {/* Fullscreen looping video background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>

      {/* Content container with flex layout */}
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">

        {/* Text section with scroll animation */}
        <div 
          data-scroll 
          data-scroll-speed="0.4" 
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          {/* Badge and Heading */}
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white">
              <span className="text-accent">{HERO_HEADING_PART_1}</span> {HERO_HEADING_PART_2}
            </h1>
          </div>

          {/* Decorative separator */}
          <Separator />

          {/* Lead paragraph */}
          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            {HERO_PARAGRAPH}
          </p>

          {/* CTA button */}
          <button className="btn">{HERO_BUTTON_TEXT}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
