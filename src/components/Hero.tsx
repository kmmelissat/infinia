"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-main">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-secondary/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-light/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-dark/25 rounded-full blur-xl animate-bounce"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center space-x-2 glass-effect-light rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-purple-light">
            Design To Code Copilot ⚡
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-white mb-2">
            Deliver Interfaces Faster And
          </span>
          <span className="block gradient-text">Seamless With AI</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Production Ready Frontend Pages in minutes
          <br />
          <span className="gradient-text font-semibold">
            using Figma Designs or Screenshots.
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-primary/30 hover:shadow-purple-primary/50 flex items-center space-x-2">
            <span>Get Started</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          <button className="glass-effect-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Feature Preview */}
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Mock Interface Preview */}
          <div className="glass-effect rounded-2xl p-8 shadow-2xl shadow-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-400">infinia.dev</div>
            </div>

            {/* Code Preview */}
            <div className="bg-black/30 rounded-lg p-6 text-left">
              <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-primary rounded"></div>
                    <span className="text-sm text-purple-light">
                    Generate your design to code ...
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">✓ Scanning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">✓ Layouting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">✓ Elements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-primary rounded-full animate-pulse"></div>
                  <span className="text-purple-light">✓ Responsive</span>
                </div>
              </div>

                <div className="mt-4 p-3 bg-purple-primary/10 rounded border border-purple-primary/20">
                <div className="flex items-center justify-between">
                  <span className="text-purple-light font-medium">
                    Your site is now live! 🚀
                  </span>
                  <div className="w-2 h-2 bg-purple-primary rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
