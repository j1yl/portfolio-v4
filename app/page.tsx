import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";
import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <div id="container" className="relative w-full">
      <Hero />
      <Work />
      <Footer />
    </div>
  );
}
