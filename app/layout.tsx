import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";

import Navbar from "@/components/ui/navbar";
import { GridView } from "@/components/ui/grid-view";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const IBM = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joe Lee",
  description:
    "Joe Lee is a software engineer who builds interactive and performant web applications. He is currently pursuing an undergraduate degree in Computer Science at the University of California, Santa Barbara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ReactLenis
    //   root
    //   options={{
    //     duration: 0.5,
    //   }}
    // >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${IBM.variable} font-ibm text-xs uppercase antialiased`}
      >
        <Navbar />
        <GridView />
        {children}
      </body>
    </html>
    // </ReactLenis>
  );
}
