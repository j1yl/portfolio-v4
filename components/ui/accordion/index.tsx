"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

type AccordionProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  index?: number;
  className?: string;
};

export default function Accordion({
  children,
  title,
  subtitle,
  index,
  className = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          height: "auto",
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(contentRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          height: "0px",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className={`h-max ${className}`}>
      <div className="relative group w-full">
        <div
          className="flex justify-between w-full z-20 items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="grid grid-cols-3 w-full gap-3 group-hover:text-white transition-colors ease-in-out duration-300"
            style={{
              color: isOpen ? "white" : "",
            }}
          >
            <h2>
              {index !== undefined && `[${index}] `}
              {title}
            </h2>
            {subtitle && (
              <p
                className="group-hover:text-white text-black/50"
                style={{
                  color: isOpen ? "white" : "",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <span
          className="bg-foreground pointer-events-none -z-10 w-0 h-full group-hover:w-full transition-all ease-in-out duration-300 absolute top-0 left-0"
          style={{
            width: isOpen ? "100%" : "",
          }}
        />
        <span className="bg-black/5 pointer-events-none -z-10 w-full h-full group-hover:w-0 transition-all ease-in-out duration-300 absolute top-0 left-0" />
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)", height: "0px" }}
      >
        <div className="pb-4">{children}</div>
      </div>
    </div>
  );
}
