"use client";

import React from "react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex leading-none justify-between items-center w-full fixed top-0 left-0 z-50 p-3 mix-blend-difference">
      <div className="flex items-start justify-between gap-4 font-ibm w-full invert">
        <div className="grid grid-cols-3 md:place-items-start w-full md:gap-x-8 md:gap-y-1">
          <div className="space-y-1 w-full grid place-items-start">
            <Link href="/">Joe Lee</Link>
            <div>
              {"<"}Los Angeles{">"} <Clock />
            </div>
          </div>
          <nav className="flex w-full h-full gap-3 md:col-span-2 items-start justify-end">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                target={link.newtab ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                [{link.name}]
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export function Clock() {
  const [time, setTime] = React.useState<string>("");
  const TIMEZONE = "America/Los_Angeles";

  React.useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: TIMEZONE,
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setTime(date.toLocaleTimeString("en-US", options));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{time}</span>;
}
