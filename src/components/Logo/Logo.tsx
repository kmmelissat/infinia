"use client";

import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10 lg:w-12 lg:h-12",
    lg: "w-16 h-16 lg:w-20 lg:h-20",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl lg:text-2xl",
    lg: "text-2xl lg:text-4xl",
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/infinia.png"
          alt="Infinia Logo"
          width={120}
          height={120}
          className="w-full h-full object-contain"
          priority
        />

        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary/20 to-purple-secondary/20 blur-md animate-pulse"></div>
      </div>

      {showText && (
        <span
          className={`font-bold ${textSizeClasses[size]} text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/70 drop-shadow-lg`}
        >
          infinia
        </span>
      )}
    </div>
  );
};

export default Logo;
