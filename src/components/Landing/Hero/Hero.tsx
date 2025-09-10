"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import TechHub from "./components/TechHub";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const taglines = [
    "Visión infinita, innovación sin fronteras.",
    "Conectando ideas con soluciones globales.",
  ];

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial setup - hide all elements
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        ctaRef.current,
        techStackRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    // Animate entrance sequence
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3"
    )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        techStackRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Floating animation for tech stack
    gsap.to(techStackRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Particle animation
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      gsap.fromTo(
        particles,
        {
          opacity: 0,
          scale: 0,
          rotation: 0,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 360,
          duration: 2,
          stagger: 0.1,
          ease: "back.out(1.7)",
          repeat: -1,
          yoyo: true,
          repeatDelay: 1,
        }
      );
    }
  }, []);

  // Tagline rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;

      gsap.to(".parallax-element", {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".parallax-reverse", {
        x: -xPos * 0.5,
        y: -yPos * 0.5,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-main pt-24 lg:pt-32"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Interactive Particles */}
        <div ref={particlesRef} className="absolute inset-0">
          {[
            { left: 15, top: 25, delay: 0.2 },
            { left: 85, top: 15, delay: 0.8 },
            { left: 25, top: 75, delay: 1.2 },
            { left: 75, top: 85, delay: 0.5 },
            { left: 45, top: 35, delay: 1.5 },
            { left: 65, top: 55, delay: 0.3 },
            { left: 35, top: 65, delay: 1.8 },
            { left: 55, top: 25, delay: 0.7 },
            { left: 20, top: 50, delay: 1.1 },
            { left: 80, top: 70, delay: 0.4 },
            { left: 10, top: 80, delay: 1.6 },
            { left: 90, top: 40, delay: 0.9 },
            { left: 40, top: 10, delay: 1.3 },
            { left: 60, top: 90, delay: 0.6 },
            { left: 30, top: 45, delay: 1.9 },
            { left: 70, top: 20, delay: 0.1 },
            { left: 50, top: 80, delay: 1.4 },
            { left: 15, top: 60, delay: 0.8 },
            { left: 85, top: 30, delay: 1.7 },
            { left: 25, top: 15, delay: 1.0 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full parallax-element"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
        {/* Floating orbs with improved animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-primary/20 rounded-full blur-xl shadow-2xl shadow-purple-primary/30 parallax-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-secondary/30 rounded-full blur-lg shadow-xl shadow-purple-secondary/25 parallax-reverse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-light/10 rounded-full blur-2xl shadow-2xl shadow-purple-light/20 parallax-element"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-dark/25 rounded-full blur-xl shadow-xl shadow-purple-dark/30 parallax-reverse"></div>

        {/* Additional floating elements */}
        <div
          className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-magenta/15 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-soft-pink/20 rounded-full blur-xl animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Enhanced grid pattern with animation */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>

        {/* Radial gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-primary/10 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-purple-secondary/10 via-transparent to-transparent rounded-full blur-3xl"></div>

        {/* Animated particles */}
        <div
          className="absolute top-1/4 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {/* Enhanced Main Heading */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              <span className="block text-white mb-2 drop-shadow-2xl">
                Transformamos tu visión en
              </span>
              <span className="block gradient-text drop-shadow-lg relative">
                soluciones tecnológicas sin límites
                <div className="absolute inset-0 gradient-text blur-sm opacity-50 -z-10"></div>
              </span>
            </h1>

            {/* Dynamic Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            >
              Tecnología y consultoría digital para empresas que buscan competir
              a nivel global
              <br />
              <span className="gradient-text font-semibold">
                {taglines[currentTagline]}
              </span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              {/* Button */}
              <button
                className="rounded-full group relative backdrop-blur-md bg-white/5 border border-white/20 text-white px-8 py-5 font-medium hover:bg-white/10 hover:border-white/30 flex items-center space-x-3"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
                }}
              >
                <span>Comienza tu proyecto</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Animated Tech Stack */}
          <div ref={techStackRef} className="relative">
            <TechHub />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
