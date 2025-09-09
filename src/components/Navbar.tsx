"use client";

import { useState, useEffect } from "react";

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
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Community", href: "#community" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-purple-primary to-purple-secondary flex items-center justify-center">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl lg:text-2xl font-bold gradient-text">
              Infinia
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-primary to-purple-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/5">
              Contact
            </button>
            <button className="bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-primary/25">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
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
          <div className="lg:hidden glass-effect-light rounded-lg mt-2 p-4 space-y-4">
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
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button className="w-full text-gray-300 hover:text-white transition-colors duration-200 py-2 rounded-lg hover:bg-white/5">
                Contact
              </button>
              <button className="w-full bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white py-2 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-purple-primary/25">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
