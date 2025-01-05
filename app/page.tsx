import Hero from "./components/hero/Hero";
import HeroSm from "./components/hero/HeroSm";

export default function Home() {
  return (
    <div className="text-neutral-900">
      <div className="hidden md:block ">
        <Hero />
      </div>
      <div className="md:hidden">
        <HeroSm />
      </div>
    </div>
  );
}
