/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: "#191919",
          card: "#222222",
          cardHover: "#2A2A2A",
          border: "rgba(255, 255, 255, 0.08)",
        },
        coral: {
          DEFAULT: "#FF6B50",
          light: "#FF856E",
          dark: "#E8553A",
          muted: "rgba(255, 107, 80, 0.15)",
        },
        aqua: {
          DEFAULT: "#1DE9B6",
          light: "#64FFDA",
        },
        textMuted: "#7A7A7A",
        textSecondary: "#B8B8B8",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
        'coral-glow': '0 0 25px rgba(255, 107, 80, 0.35)',
        'aqua-glow': '0 0 20px rgba(29, 233, 182, 0.5)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatDelay: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-delay': 'floatDelay 7s ease-in-out 1.5s infinite',
      }
    },
  },
  plugins: [],
};
