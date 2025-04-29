import Link from "next/link";

import { links } from "@/constants/navigation-list-links";
import { AnimateLetters } from "@/components/Animate Letters";

const NavigationList = () => {
  return (
    // Styled list of navigation links
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => {
        return (
          // Link with animated letters on hover
          <Link
            href={link.href}
            key={index}
            className="flex overflow-hidden hover:text-white transition-all"
          >
            {AnimateLetters(link.name)}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavigationList;
