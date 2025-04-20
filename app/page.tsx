import Hero from "@/components/sections/hero";
import Project from "@/components/ui/project";
import Image from "next/image";

export default function Page() {
  return (
    <div id="container" className="relative w-full">
      <Hero />
      {/* <section className="min-h-screen w-full p-2">
        <h2 className="font-geist text-6xl font-bold capitalize leading-none">
          Selected Works
        </h2>
        <Project
          title="Project 1"
          subtitle="React, TypeScript, Tailwind"
          index={1}
          imageSrc="/images/projects/gtext1.png"
          description="This is a description of Project 1. It showcases my skills in web development."
          link="https://example.com/project1"
        />
        <Project
          title="Project 2"
          subtitle="Next.js, GraphQL, MongoDB"
          index={2}
          imageSrc="/images/projects/gtext2.png"
          description="This is a description of Project 2. It demonstrates my expertise in full-stack development."
          link="https://example.com/project2"
        />
        <Project
          title="Project 3"
          subtitle="Vue.js, Firebase, SCSS"
          index={3}
          imageSrc="/images/projects/gtext3.png"
          description="This is a description of Project 3. It highlights my ability to work with different frameworks."
          link="https://example.com/project3"
        />
      </section> */}
      <section className="min-h-screen w-full px-8 py-6 gap-6 flex flex-col">
        <h2 className="font-medium whitespace-nowrap font-geist text-6xl leading-none tracking-tighter text-left normal-case">
          Selected works
        </h2>
        <div className="grid grid-cols-12 gap-4 w-full h-full flex-grow min-h-screen">
          <div className="col-span-6 flex flex-col gap-2">
            <div className="p-6 bg-neutral-100 aspect-square w-full h-auto grid place-items-center">
              <div className="w-full h-auto relative aspect-video bg-white"></div>
            </div>
            <span className="w-max font-geist normal-case font-medium">1</span>
          </div>
          <div className="col-span-4 col-start-7 flex flex-col gap-2">
            <div className="p-6 bg-neutral-100 aspect-square w-full h-auto grid place-items-center">
              <div className="w-full h-auto relative aspect-video bg-white"></div>
            </div>
            <span className="w-max font-geist normal-case font-medium">2</span>
          </div>
          <div className="col-span-4 col-start-7 flex flex-col gap-2">
            <div className="p-6 bg-neutral-100 aspect-square w-full h-auto grid place-items-center">
              <div className="w-full h-auto relative aspect-video bg-white"></div>
            </div>
            <span className="w-max font-geist normal-case font-medium">3</span>
          </div>
          <div className="col-span-4 col-start-3 row-start-4 flex flex-col gap-2">
            <div className="p-6 bg-neutral-100 aspect-square w-full h-auto grid place-items-center">
              <div className="w-full h-auto relative aspect-video bg-white"></div>
            </div>
            <span className="w-max font-geist normal-case font-medium">4</span>
          </div>
          <div className="col-span-5 col-start-7 flex flex-col gap-2">
            <div className="p-6 bg-neutral-100 aspect-square w-full h-auto grid place-items-center">
              <div className="w-full h-auto relative aspect-video bg-white"></div>
            </div>
            <span className="w-max font-geist normal-case font-medium">5</span>
          </div>
        </div>
      </section>
    </div>
  );
}
