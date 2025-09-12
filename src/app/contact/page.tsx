import Navbar from "@/components/Navbar/Navbar";
import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
    </div>
  );
}
