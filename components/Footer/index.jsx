import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { FOOTER_LINKS, SOCIAL_LINKS, FOOTER_COPYRIGHT, FOOTER_LOGO } from "@/constants/footer-constants";


const iconMap = {
  youtube: <FaYoutube />,
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
};

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src={FOOTER_LOGO}
              fill
              alt="logo"
              className="object-contain"
            />
          </Link>
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {FOOTER_LINKS.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <ul className="flex text-white text-xl gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                {iconMap[social.icon]}
              </Link>
            ))}
          </ul>
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>{FOOTER_COPYRIGHT}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
