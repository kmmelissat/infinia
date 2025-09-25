"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import TechHub from "./components/TechHub";
import ChatAssistant from "@/components/ChatAssistant/ChatAssistant";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
// Custom React Bits-inspired components
const GradientText = ({
  children,
  colors,
  className = "",
}: {
  children: React.ReactNode;
  colors: string[];
  className?: string;
}) => {
  const gradientStyle = {
    background: `linear-gradient(45deg, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <span className={className} style={gradientStyle}>
      {children}
    </span>
  );
};

const TypewriterText = ({
  words,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    speed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const ShimmerButton = ({
  children,
  className = "",
  shimmerColor = "#8b5cf6",
  background = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  background?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`relative overflow-hidden ${className}`}
      style={{ background }}
      onClick={onClick}
    >
      <div className="absolute inset-0 -top-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer"></div>
      {children}
    </button>
  );
};

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const dynamicWords = [
    "ideas",
    "conceptos",
    "visiones",
    "proyectos",
    "sueños",
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

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-main pt-20 lg:pt-32"
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

      {/* Interactive Cursor Effect */}
      <div
        className="fixed w-4 h-4 bg-purple-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Chat Assistant */}
      <ChatAssistant />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[700px]">
          {/* Left Side - Text Content */}
          <div className="text-left max-w-2xl">
            {/* Enhanced Main Heading */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8"
            >
              <span className="block text-white mb-4 drop-shadow-2xl">
                Software que transforma
              </span>
              <span className="block drop-shadow-lg relative leading-[1.1]">
                <GradientText
                  colors={["#8b5cf6", "#e879f9", "#c084fc"]}
                  className="inline-block min-w-[200px] text-left"
                >
                  <TypewriterText
                    words={dynamicWords}
                    speed={50}
                    deleteSpeed={30}
                    delayBetweenWords={800}
                  />
                </GradientText>
                <br />
                <GradientText
                  colors={["#8b5cf6", "#e879f9"]}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium"
                >
                  en realidad
                </GradientText>
                <div className="absolute inset-0 gradient-text blur-sm opacity-30 -z-10"></div>
              </span>
            </h1>

            {/* Enhanced CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
            >
              {/* Primary Button */}
              <ShimmerButton
                className="px-8 py-4 rounded-full font-medium text-white"
                shimmerColor="#8b5cf6"
                background="linear-gradient(45deg, #8b5cf6, #e879f9)"
                onClick={() => console.log("Empezar clicked")}
              >
                <span className="flex items-center space-x-3">
                  <span>Empezar</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </span>
              </ShimmerButton>

              {/* Secondary Button */}
              <Link
                href="/dashboard"
                className="group relative backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-3"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.02, duration: 0.3 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
                }}
              >
                <span>Ver proyectos</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex justify-center">
              <div className="animate-bounce">
                <ChevronDownIcon className="w-6 h-6 text-white/60" />
              </div>
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
