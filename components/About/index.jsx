"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import Badge from "@/components/Badge";
import Separator from "@/components/Separator";
import { aboutData } from "@/constants/about-constants";

const About = () => {
  // Refs for scroll-triggered animation
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal scroll animation
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw", // moves full width * 2
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1000vw top",
          scrub: 0.6,
          pin: true, // pin section while scrolling
        },
      }
    );

    // Cleanup on unmount
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto">
                <div className="flex gap-[30px] relative">

                  {/* Left content: Badge + Title + Description */}
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      {/* Highlight title with accent span */}
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>

                      {/* Decorative separator */}
                      <div className="mb-8">
                        <Separator />
                      </div>

                      {/* Description text */}
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>

                      {/* CTA Button */}
                      <button className="btn">See more</button>
                    </div>
                  </div>

                  {/* Right image section (visible only on xl screens) */}
                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                      alt=""
                    />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
