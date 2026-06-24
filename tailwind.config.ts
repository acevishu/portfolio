import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#030606",
        graphite: "#091010",
        panel: "rgba(7, 19, 19, 0.74)",
        cyan: "#38f8ff",
        neon: "#7cff6b",
        acid: "#ccff00",
        muted: "#8aa4a5"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 28px rgba(56, 248, 255, 0.18)",
        green: "0 0 26px rgba(124, 255, 107, 0.16)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 50% 0%, rgba(56,248,255,0.16), transparent 34%), linear-gradient(rgba(56,248,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,255,107,0.07) 1px, transparent 1px)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        blink: {
          "0%, 46%": { opacity: "1" },
          "47%, 100%": { opacity: "0" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.36" },
          "50%": { opacity: "0.92" }
        }
      },
      animation: {
        scan: "scan 7s linear infinite",
        blink: "blink 1s steps(1) infinite",
        pulseLine: "pulseLine 2.7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
