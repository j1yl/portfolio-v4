import Link from "next/link";
import { ArrowUpRightFromSquare, Link2OffIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] font-medium max-w-[75ch] mx-auto text-sm px-4">
      <article className="flex flex-col space-y-8 my-16 md:my-32">
        <h1 className="font-bold text-4xl">Joe Lee</h1>
        <p className="text-white/50">
          <span className="text-white">Joe Lee</span> is a software engineer who
          builds <span className="text-white">interactive</span> and{" "}
          <span className="text-white">performant</span> web applications. He is
          currently pursuing an undergraduate degree in Computer Science at the{" "}
          <Link href="https://ucsb.edu" target="_blank" className="text-white">
            University of California, Santa Barbara
          </Link>
          .
        </p>
        <div className="space-y-4">
          <h2 className="text-purple-500 font-bold">Socials</h2>
          <ul className="flex items-center gap-4 w-full flex-wrap">
            <Link
              href="https://github.com/j1yl"
              target="_blank"
              className="w-max group"
            >
              <span className="text-white group-hover:underline">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/j1yl"
              target="_blank"
              className="w-max group"
            >
              <span className="text-white group-hover:underline">LinkedIn</span>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-purple-500 font-bold">Work</h2>
          <Link
            href="https://webverry.com"
            target="_blank"
            className="mt-4 transition-all ease-in-out duration-300 flex flex-col gap-1 group"
          >
            <div className="flex item-center w-full">
              <h2>Webverry</h2>
              <p className="text-white/50">, CEO</p>
              <ArrowUpRightFromSquare
                className={`my-auto w-3 h-3 ml-2 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all ease-in-out duration-300 text-white`}
              />
            </div>
            <p className="text-white/50 text-left">
              A web development business Joe Lee founded in 2023.
              Webverry&apos;s headless approach to e-commerce allows businesses
              to focus on their products. Webverry&apos;s data-backed strategies
              on average has boosted conversion rates by 23% across 9
              businesses.
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/company/nexq-us/"
            target="_blank"
            className="mt-4 transition-all ease-in-out duration-300 flex flex-col gap-1 group"
          >
            <div className="flex item-center w-full">
              <h2>NEXQ</h2>
              <p className="text-white/50">, QML Engineer</p>
              <ArrowUpRightFromSquare
                className={`my-auto w-3 h-3 ml-2 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all ease-in-out duration-300 text-white`}
              />
            </div>
            <p className="text-white/50 text-left">
              NEXQ is a quantum-powered platform that enables advanced
              applications across industries by leveraging quantum computing and
              artificial intelligence, uniquely supporting secure data
              processing and accelerated insights through quantum algorithms and
              unbreakable encryption protocols.
            </p>
          </Link>
          <button
            disabled={true}
            className="mt-4 transition-all ease-in-out duration-300 flex flex-col gap-1 group"
          >
            <div className="flex items-center w-max place-items-center">
              <h2 className="leading-none h-max">odor.dev</h2>
              <div className="px-2 py-1 rounded-full flex items-center w-max">
                <span className="animate-pulse w-1 h-1 block mx-1 rounded-full bg-orange-400" />
                <span className="text-xs text-white/50">In Development</span>
              </div>
              <Link2OffIcon className="w-3 h-3 ml-2" />
            </div>
            <p className="text-white/50 text-left">
              Odor is a collection of web development/design resources curated
              by Joe Lee @ Webverry. Level up your web design skills with Odor.
              Explore a curated gallery of inspiring website designs. Learn the
              latest web design techniques with our in-depth tutorials.
            </p>
          </button>
        </div>
        {/* <div className="flex flex-col gap-4">
          <h2 className="text-purple-500 font-bold">
            Personal projects (coming soon)
          </h2>
          <div className="grid gap-2 grid-cols-2">
            <div className="bg-white/5 aspect-square rounded-xl" />
            <div className="bg-white/5 aspect-square rounded-xl" />
          </div>
        </div> */}
      </article>
    </div>
  );
}
