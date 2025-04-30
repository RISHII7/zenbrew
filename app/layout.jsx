import { Cormorant_Upright, Open_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "ZENBREW",
  description: "ZenBrew is your ultimate destination for premium coffee experiences. Discover a variety of expertly crafted brews, rich flavors, and artisanal blends — all designed to awaken your senses and elevate your coffee moments.",
  icons: {
    icon: "/assets/logo.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant_upright.variable} ${open_sans.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
