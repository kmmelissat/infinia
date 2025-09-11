/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'purple-primary': '#8b5cf6',
  			'purple-secondary': '#a855f7',
  			'purple-dark': '#6d28d9',
  			'purple-light': '#c4b5fd',
  			'gradient-dark-indigo': '#1a0b2e',
  			'gradient-dark-violet': '#2d1b69',
  			'gradient-light-purple': '#c084fc',
  			'gradient-magenta': '#e879f9',
  			'gradient-soft-pink': '#f0abfc',
  			'gradient-purple-indigo': '#7c3aed',
  			'dashboard-bg': '#f8fafc',
  			'dashboard-card': '#ffffff',
  			'dashboard-sidebar': '#1e293b',
  			'dashboard-text-primary': '#1e293b',
  			'dashboard-text-secondary': '#64748b',
  			'dashboard-border': '#e2e8f0',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-lexend-deca)',
  				'system-ui',
  				'sans-serif'
  			],
  			lexend: [
  				'var(--font-lexend-deca)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		animation: {
  			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			bounce: 'bounce 1s infinite',
  			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
