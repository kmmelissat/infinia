/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#8b5cf6",
        "purple-secondary": "#a855f7",
        "purple-dark": "#6d28d9",
        "purple-light": "#c4b5fd",
        "gradient-dark-indigo": "#1a0b2e",
        "gradient-dark-violet": "#2d1b69",
        "gradient-light-purple": "#c084fc",
        "gradient-magenta": "#e879f9",
        "gradient-soft-pink": "#f0abfc",
        "gradient-purple-indigo": "#7c3aed",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
