import type { Metadata } from "next";
import { fontWorkSans, fontPlayfairDisplay } from "@/styles/fonts";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Decoration: Organize Your Home with Style",
  description: "Discover the perfect blend of style and functionality with our decoration solutions. Find everything you need to organize your home, enhance its beauty, and create a welcoming, clutter-free space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontWorkSans.variable} ${fontPlayfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
