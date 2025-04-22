"use client";

import { useEffect, useState } from "react";

export function GridView() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "G") {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 gap-6 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-black/50 border-dashed h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
