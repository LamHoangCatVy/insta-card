import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: theme => ({
        'border-gradient': 'linear-gradient(to right, #3b82f6, #7c3aed)',
      }),
      backgroundSize: {
        '100%': '100%',
        '200%': '200%',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} as Config;