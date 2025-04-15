import Hero from "@/components/sections/hero";

export default function Page() {
  return (
    <div id="container" className="relative w-full">
      <div className="relative z-10">
        <Hero />
      </div>
      <div className="w-full h-screen bg-black"></div>
    </div>
  );
}
