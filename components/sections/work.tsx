import React from "react";
import Project from "@/components/ui/project";

export default function Work() {
  return (
    <section className="min-h-screen w-full px-8 py-6 flex gap-6">
      <div className="flex flex-col items-end w-full gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="font-medium whitespace-nowrap font-geist text-6xl leading-none tracking-tighter text-right normal-case">
            Selected works
          </h2>
          <p className="text-right max-w-prose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            illum iure. Minus nihil temporibus sequi cupiditate labore. Id odio
            nostrum, recusandae animi unde a odit.
          </p>
        </div>
        <Project
          title="Project 1"
          src="/images/projects/gtext1.png"
          className="w-2/3"
        />
        <Project
          title="Project 1"
          src="/images/projects/gtext1.png"
          className="w-full"
        />
        <Project
          title="Project 1"
          src="/images/projects/gtext1.png"
          className="w-2/3"
        />
      </div>
      <div className="flex flex-col items-start w-full gap-6">
        <Project
          title="Project 2"
          src="/images/projects/path1.png"
          className="w-full"
        />
        <div className="flex gap-6 w-full">
          <Project
            title="Project 2"
            src="/images/projects/path1.png"
            className="w-1/3"
          />
          <Project
            title="Project 2"
            src="/images/projects/path1.png"
            className="w-1/3"
          />
        </div>
        <Project
          title="Project 2"
          src="/images/projects/path1.png"
          className="w-2/3"
        />
        <div className="grid grid-cols-3 w-full gap-6">
          <Project
            title="Project 2"
            src="/images/projects/path1.png"
            className="w-full"
          />
          <Project
            title="Project 2"
            src="/images/projects/path1.png"
            className="w-full"
          />
          <Project
            title="Project 2"
            src="/images/projects/path1.png"
            className="w-full row-start-2"
          />
          <Project
            title="Project 2"
            src="/images/projects/path1.png"
            className="w-full row-start-2"
          />
        </div>
      </div>
    </section>
  );
}
