import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilitar dark mode con la clase "dark"
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        backgroundPrimary: 'var(--background-primary)',
        backgroundSecondary: 'var(--background-2)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    }
    
  },
  plugins: [],
} satisfies Config;
