import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <TechStack />
      <Reviews />
    </div>
  );
}
