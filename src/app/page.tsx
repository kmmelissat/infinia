import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-dark-indigo via-gradient-dark-violet to-gradient-dark-indigo">
      <Navbar />
      <Hero />
    </div>
  );
}
