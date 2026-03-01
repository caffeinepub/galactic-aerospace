import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                exo: ['"Exo 2"', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                // Space theme custom colors
                space: {
                    deep: '#050a1a',
                    navy: '#0a0e2a',
                    blue: '#0d1540',
                    purple: '#6b21a8',
                    'purple-light': '#9333ea',
                    cyan: '#00f5ff',
                    'cyan-dim': '#00c8d4',
                    star: '#e8f4ff',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'cyan-sm': '0 0 10px rgba(0, 245, 255, 0.3)',
                'cyan-md': '0 0 20px rgba(0, 245, 255, 0.5)',
                'cyan-lg': '0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(0, 245, 255, 0.2)',
                'purple-md': '0 0 20px rgba(107, 33, 168, 0.5)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(0, 245, 255, 0.08)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(0, 245, 255, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(0, 245, 255, 0.8), 0 0 60px rgba(0, 245, 255, 0.4)' },
                },
                'twinkle': {
                    '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
                    '50%': { opacity: '1', transform: 'scale(1.2)' },
                },
                'nebula-drift': {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(20px, -15px) scale(1.05)' },
                    '66%': { transform: 'translate(-10px, 10px) scale(0.98)' },
                    '100%': { transform: 'translate(0, 0) scale(1)' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                'spin-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                'fade-in-up': {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 4s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
                'twinkle': 'twinkle 3s ease-in-out infinite',
                'nebula-drift': 'nebula-drift 20s ease-in-out infinite',
                'spin-slow': 'spin-slow 20s linear infinite',
                'fade-in-up': 'fade-in-up 0.7s ease forwards',
                'shimmer': 'shimmer 3s linear infinite',
            },
        }
    },
    plugins: [typography, containerQueries, animate]
};
