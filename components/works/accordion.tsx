"use client";

import React, { useRef, useEffect } from "react";
import WorkCard from "./card";
import gsap from "gsap";

type WorkCardProps = {
  entry: string;
  name: string;
  tags: string[];
  images?: string[];
  videos?: string[];
  description?: string;
  link?: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function WorkAccordion(props: WorkCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const idx = parseInt(props.entry);

  useEffect(() => {
    if (contentRef.current) {
      if (props.isOpen) {
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
  }, [props.isOpen]);

  return (
    <div className="h-max">
      <div className="relative group w-full">
        <div
          className="flex justify-between w-full z-20 items-center cursor-pointer"
          onClick={props.onToggle}
        >
          <div
            className="grid grid-cols-3 w-full gap-3 group-hover:text-white transition-colors ease-in-out duration-300"
            style={{
              color: props.isOpen ? "white" : "",
            }}
          >
            <h2>
              [{idx}] {props.name}
            </h2>
            <p
              className="group-hover:text-white text-black/50"
              style={{
                color: props.isOpen ? "white" : "",
              }}
            >
              {props.tags.join(", ")}
            </p>
          </div>
        </div>
        <span
          className="bg-foreground pointer-events-none -z-10 w-0 h-full group-hover:w-full transition-all ease-in-out duration-300 absolute top-0 left-0"
          style={{
            width: props.isOpen ? "100%" : "",
          }}
        />
        <span className="bg-black/5 pointer-events-none -z-10 w-full h-full group-hover:w-0 transition-all ease-in-out duration-300 absolute top-0 left-0" />
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)", height: "0px" }}
      >
        <div className="pb-4">
          <WorkCard {...props} />
        </div>
      </div>
    </div>
  );
}
