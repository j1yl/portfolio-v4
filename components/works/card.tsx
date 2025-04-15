import React from "react";
import Skeleton from "../ui/skeleton";

type Props = {
  name: string;
  tags: string[];
  images?: string[];
  videos?: string[];
  description?: string;
  link?: string;
};

export default function WorkCard({
  name,
  tags,
  images,
  videos,
  description,
  link,
}: Props) {
  return (
    <div className="grid grid-cols-12 gap-3 mt-33">
      <Skeleton className="aspect-video col-span-8 w-full" />
      <Skeleton className="aspect-video col-span-8 w-full" />
      {description && <p className="opacity-80 col-span-2">{description}</p>}
    </div>
  );
}
