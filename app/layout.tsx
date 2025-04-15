import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <ReactLenis root>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${IBM.variable} font-ibm text-xs uppercase antialiased`}
        >
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
