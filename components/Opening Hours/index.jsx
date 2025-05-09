import Image from "next/image";

import Badge from "@/components/Badge";
import Separator from "@/components/Separator";

import {
  OPENING_HOURS_IMAGE,
  PROGRAM_BADGE_IMAGE,
  OPENING_HOURS_TITLE,
} from "@/constants/opening-hours-constants";

const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 top-0 bg-black/60"></div>
        <Image
          src={OPENING_HOURS_IMAGE}
          fill
          alt=""
          quality={100}
          priority
          className="object-cover"
        />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>
      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-full h-full absolute z-10 top-0 bg-black/[0.85]"></div>
        <div className="z-20 flex flex-col items-center justify-center">
          <h2 className="h2 text-white mb-4">{OPENING_HOURS_TITLE}</h2>
          <Separator bg="accent" />
          <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src={PROGRAM_BADGE_IMAGE}
              fill
              className="object-contain"
              quality={100}
              priority
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
