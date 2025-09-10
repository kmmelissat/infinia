import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Landing/Hero/Hero";
import Features from "@/components/Landing/Features/Features";
import Services from "@/components/Landing/Services/Services";
import TechStack from "@/components/Landing/TechStack/TechStack";
import Reviews from "@/components/Landing/Reviews/Reviews";

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
