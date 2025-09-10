"use client";

import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Características", href: "#features" },
    { name: "Servicios", href: "#services" },
    { name: "Tecnologías", href: "#tech-stack" },
    { name: "Testimonios", href: "#reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? "backdrop-blur-xl bg-white/5 border border-white/10 rounded-full shadow-2xl shadow-purple-primary/20"
            : "backdrop-blur-md bg-white/[0.02] border border-white/5 rounded-full"
        }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo size="md" showText={true} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group px-4 py-2 rounded-full hover:bg-white/5"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-purple-primary to-purple-secondary transition-all duration-300 group-hover:w-[calc(100%-32px)] rounded-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white transition-all duration-300 px-5 py-2.5 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20">
                Contacto
              </button>
              <button className="bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-primary/30 hover:shadow-purple-primary/50 border border-purple-primary/20">
                Comenzar Proyecto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-full mt-4 p-6 space-y-4 shadow-xl shadow-purple-primary/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/20 space-y-3">
                <button className="w-full text-gray-300 hover:text-white transition-all duration-300 py-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10">
                  Contacto
                </button>
                <button className="w-full bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-purple-primary/30 border border-purple-primary/20">
                  Comenzar Proyecto
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
