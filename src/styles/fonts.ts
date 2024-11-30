import { Work_Sans, Playfair_Display } from "next/font/google";

const fontWorkSans = Work_Sans({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const fontPlayfairDisplay = Playfair_Display({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
});

export { fontWorkSans, fontPlayfairDisplay };
