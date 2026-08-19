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
        background: "#090D16",
        surface: "#0F172A",
        surfaceHover: "#1E293B",
        borderSubtle: "rgba(255, 255, 255, 0.08)",
        primary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          dark: "#4F46E5",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
        },
        emerald: {
          DEFAULT: "#10B981",
          light: "#34D399",
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glow: '0 0 30px rgba(99, 102, 241, 0.25)',
      },
    },
  },
  plugins: [],
};
