import Hero from "@/components/hero/hero";

export default function Page() {
  return (
    <div id="container" className="flex flex-col w-full">
      <Hero />
      <section className="h-screen w-full bg-black"></section>
    </div>
  );
}
