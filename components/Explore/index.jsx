import Image from "next/image";

import { exploreItems } from "@/constants/explore-constants";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">

          {/* Left column with right-aligned cards */}
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {exploreItems.slice(0, 2).map((item, index) => (
              <div key={index} className="relative flex items-start">
                <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                  {/* Coffee icon */}
                  <div className="mb-6 flex justify-center items-center">
                    <Image src={item.icon} width={56} height={56} alt="" />
                  </div>
                  {/* Coffee title */}
                  <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                    {item.title}
                  </h3>
                  {/* Coffee description */}
                  <p className="max-w-[400px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image of coffee cup */}
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>

          {/* Right column with left-aligned cards */}
          <div className="flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {exploreItems.slice(2).map((item, index) => (
              <div key={index} className="relative flex items-start">
                <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                  {/* Coffee icon */}
                  <div className="mb-6 flex justify-center items-center">
                    <Image src={item.icon} width={56} height={56} alt="" />
                  </div>
                  {/* Coffee title */}
                  <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                    {item.title}
                  </h3>
                  {/* Coffee description */}
                  <p className="max-w-[400px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explore;
