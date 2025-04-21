import Hero from "@/components/sections/hero";
import Project from "@/components/ui/project";

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
      <section className="min-h-screen w-full px-8 py-6 flex gap-6">
        <div className="flex flex-col items-end w-full gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-medium whitespace-nowrap font-geist text-6xl leading-none tracking-tighter text-right normal-case">
              Selected works
            </h2>
            <p className="text-right max-w-prose">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              illum iure. Minus nihil temporibus sequi cupiditate labore. Id
              odio nostrum, recusandae animi unde a odit.
            </p>
          </div>
          <Project
            title="Project 1"
            src="/images/projects/gtext1.png"
            className="w-2/3"
            bg="bg-red-500"
          />
        </div>
        <div className="flex flex-col items-start w-full gap-6">
          <Project
            title="Project 2"
            src="/images/projects/path1.png"
            className="w-full"
            bg="bg-green-500"
          />
        </div>
      </section>
    </div>
  );
}
