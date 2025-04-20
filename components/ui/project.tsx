import React from "react";
import Image from "next/image";
import Accordion from "./accordion";

type ProjectProps = {
  title: string;
  subtitle?: string;
  index?: number;
  imageSrc?: string;
  description?: string;
  link?: string;
};

export default function Project({
  title,
  subtitle,
  index,
  imageSrc,
  description,
  link,
}: ProjectProps) {
  return (
    <Accordion title={title} subtitle={subtitle} index={index}>
      <div className="w-full h-full bg-neutral-50 p-4">
        {imageSrc && (
          <div className="w-full h-auto aspect-video relative mb-4">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </div>
        )}

        {description && <p className="mb-4">{description}</p>}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    </Accordion>
  );
}
