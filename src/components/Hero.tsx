"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-main pt-24 lg:pt-32">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center space-x-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 transition-all duration-1000 shadow-lg shadow-purple-primary/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-light">
                Software Development Solutions 🚀
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-white mb-2">
                Build Software Solutions
              </span>
              <span className="block gradient-text">Faster And Better</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Custom web applications, mobile apps, and enterprise solutions
              <br />
              <span className="gradient-text font-semibold">
                built with modern technologies and best practices.
              </span>
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group bg-gradient-to-r from-purple-primary to-purple-secondary hover:from-purple-secondary hover:to-purple-dark text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-primary/30 hover:shadow-purple-primary/50 flex items-center space-x-3 border border-purple-primary/20">
                <span>Start Your Project</span>
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
            </div>
          </div>

          {/* Right Side - Animated Tech Stack */}
          <div
            className={`relative transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative h-96 overflow-hidden">
              {/* Floating Tech Icons */}
              <div className="absolute inset-0">
                {/* React Icon */}
                <div className="absolute top-16 left-16 w-16 h-16 backdrop-blur-md bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-blue-500/20">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
                  </svg>
                </div>

                {/* Node.js Icon */}
                <div className="absolute top-8 right-20 w-14 h-14 backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-green-500/20">
                  <svg
                    className="w-7 h-7 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.85 0 1.31-.52 1.31-1.42V9.47c0-.13-.11-.24-.24-.24H7.52c-.13 0-.24.11-.24.24v8.04c0 .44-.46.64-.85.37L4.51 16.76c-.07-.04-.11-.11-.11-.19V7.99c0-.08.04-.15.11-.19l7.44-4.29c.14-.08.32-.08.46 0l7.44 4.29c.07.04.11.11.11.19v8.58c0 .08-.04.15-.11.19l-7.44 4.29c-.14.08-.32.08-.46 0L9.4 19.94c-.09-.05-.2-.05-.29 0-.2.12-.24.16-.81.46-.14.07-.35.17-.35.17-.07.04-.07.04-.14.04 0 0-.07 0-.07-.04l-1.95-1.12c-.48-.28-.78-.8-.78-1.36V7.51c0-.56.3-1.08.78-1.36l7.44-4.3c.23-.13.51-.2.78-.2z" />
                  </svg>
                </div>

                {/* Database Icon */}
                <div
                  className="absolute bottom-20 left-24 w-12 h-12 backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-purple-500/20"
                  style={{ animationDelay: "0.5s" }}
                >
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4M4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>

                {/* Mobile Icon */}
                <div
                  className="absolute bottom-16 right-16 w-14 h-14 backdrop-blur-md bg-pink-500/20 border border-pink-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-pink-500/20"
                  style={{ animationDelay: "1s" }}
                >
                  <svg
                    className="w-7 h-7 text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 19H7V5h10v14M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>

                {/* Cloud Icon */}
                <div
                  className="absolute top-32 right-32 w-16 h-16 backdrop-blur-md bg-cyan-500/20 border border-cyan-400/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/20"
                  style={{ animationDelay: "1.5s" }}
                >
                  <svg
                    className="w-8 h-8 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                </div>

                {/* API Icon */}
                <div
                  className="absolute top-24 left-1/2 transform -translate-x-1/2 w-12 h-12 backdrop-blur-md bg-orange-500/20 border border-orange-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-orange-500/20"
                  style={{ animationDelay: "2s" }}
                >
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18C19.1,20 20,19.11 20,18Z" />
                  </svg>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#a855f7"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 100 80 Q 200 120 300 100 T 500 120"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M 150 300 Q 250 250 350 280 T 450 260"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </svg>

                {/* Floating Particles */}
                <div className="absolute top-12 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                <div
                  className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 backdrop-blur-xl bg-gradient-to-br from-purple-primary/30 to-purple-secondary/30 border-2 border-purple-primary/50 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-primary/30 animate-pulse">
                  <svg
                    className="w-12 h-12 text-purple-light"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
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
