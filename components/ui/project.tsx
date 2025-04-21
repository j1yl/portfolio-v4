import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  className?: string;
  bg?: string;
};

export default function Project({ title, src, className, bg }: Props) {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <div
        className={cn(
          "p-6 aspect-square bg-neutral-100 flex items-center justify-center",
          bg
        )}
      >
        <div className="relative aspect-video w-full">
          <Image src={src} alt="Project" fill />
        </div>
      </div>
      <p className="font-geist font-medium normal-case">{title}</p>
    </div>
  );
}
