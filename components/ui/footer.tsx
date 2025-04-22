import React from "react";
import Copyright from "@/components/ui/copyright";
import Link from "next/link";
import { footerLinks } from "@/lib/constants";
export default function Footer() {
  return (
    <div className="min-h-[75vh] font-geist font-medium normal-case mx-auto flex-col w-[calc(100%-3rem)] p-6 relative flex justify-end">
      <div className="flex-grow h-full"></div>
      <div className="grid grid-cols-4 h-max py-6 gap-6 border-t border-black/50 w-full">
        <h2>Joe Lee</h2>
        <div>
          <Link href="mailto:joe@webverry.com">joe@webverry.com</Link>
        </div>
        <div className="flex flex-col">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.newtab ? "_blank" : "_self"}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/">Cookie policy</Link>
        </div>
      </div>
      <Copyright className="w-full" />
    </div>
  );
}
