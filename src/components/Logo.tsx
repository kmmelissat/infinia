"use client";

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
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          className="w-full h-full"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glass material gradients */}
            <linearGradient id="glassMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="30%" stopColor="rgba(139,92,246,0.3)" />
              <stop offset="70%" stopColor="rgba(168,85,247,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
            </linearGradient>

            <linearGradient
              id="glassShadow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
              <stop offset="50%" stopColor="rgba(139,92,246,0.2)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
            </linearGradient>

            <linearGradient
              id="glassHighlight"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>

            {/* Filters for glass effects */}
            <filter id="glassBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            </filter>

            <filter
              id="innerShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite operator="over" />
            </filter>
          </defs>

          {/* Bottom shadow layer */}
          <g transform="translate(2,2)" opacity="0.3">
            {/* Left loop shadow */}
            <path
              d="M15 60 C15 35, 35 15, 60 40 C60 50, 50 60, 40 60 C25 60, 15 75, 15 60 Z"
              fill="url(#glassShadow)"
              filter="url(#glassBlur)"
            />
            {/* Right loop shadow */}
            <path
              d="M105 60 C105 35, 85 15, 60 40 C60 50, 70 60, 80 60 C95 60, 105 75, 105 60 Z"
              fill="url(#glassShadow)"
              filter="url(#glassBlur)"
            />
            {/* Top loop shadow */}
            <path
              d="M60 15 C85 15, 105 35, 80 60 C70 60, 60 50, 60 40 C60 25, 45 15, 60 15 Z"
              fill="url(#glassShadow)"
              filter="url(#glassBlur)"
            />
            {/* Bottom loop shadow */}
            <path
              d="M60 105 C85 105, 105 85, 80 60 C70 60, 60 70, 60 80 C60 95, 45 105, 60 105 Z"
              fill="url(#glassShadow)"
              filter="url(#glassBlur)"
            />
          </g>

          {/* Main glass structure */}
          <g>
            {/* Left loop */}
            <path
              d="M12 60 C12 32, 32 12, 60 40 C60 52, 48 60, 38 60 C22 60, 12 78, 12 60 Z"
              fill="url(#glassMain)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.5"
            />

            {/* Right loop */}
            <path
              d="M108 60 C108 32, 88 12, 60 40 C60 52, 72 60, 82 60 C98 60, 108 78, 108 60 Z"
              fill="url(#glassMain)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.5"
            />

            {/* Top loop */}
            <path
              d="M60 12 C88 12, 108 32, 80 60 C68 60, 60 48, 60 38 C60 22, 42 12, 60 12 Z"
              fill="url(#glassMain)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.5"
            />

            {/* Bottom loop */}
            <path
              d="M60 108 C88 108, 108 88, 80 60 C68 60, 60 72, 60 82 C60 98, 42 108, 60 108 Z"
              fill="url(#glassMain)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.5"
            />
          </g>

          {/* Glass highlights */}
          <g opacity="0.7">
            {/* Left highlight */}
            <path
              d="M18 45 C18 38, 25 32, 35 38 C40 42, 38 48, 32 50 C25 52, 18 50, 18 45 Z"
              fill="url(#glassHighlight)"
            />

            {/* Right highlight */}
            <path
              d="M102 45 C102 38, 95 32, 85 38 C80 42, 82 48, 88 50 C95 52, 102 50, 102 45 Z"
              fill="url(#glassHighlight)"
            />

            {/* Top highlight */}
            <path
              d="M75 18 C82 18, 88 25, 82 35 C78 40, 72 38, 70 32 C68 25, 70 18, 75 18 Z"
              fill="url(#glassHighlight)"
            />

            {/* Bottom highlight */}
            <path
              d="M75 102 C82 102, 88 95, 82 85 C78 80, 72 82, 70 88 C68 95, 70 102, 75 102 Z"
              fill="url(#glassHighlight)"
            />
          </g>

          {/* Center intersection glow */}
          <circle
            cx="60"
            cy="60"
            r="8"
            fill="rgba(139,92,246,0.4)"
            filter="url(#glassBlur)"
          />

          {/* Center highlight */}
          <circle cx="58" cy="58" r="4" fill="rgba(255,255,255,0.6)" />
        </svg>

        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary/20 to-purple-secondary/20 blur-md animate-pulse"></div>
      </div>

      {showText && (
        <span className={`font-bold gradient-text ${textSizeClasses[size]}`}>
          Infinia
        </span>
      )}
    </div>
  );
};

export default Logo;
