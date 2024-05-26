import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontSize: {
        "twc-xs": "0.5625rem",
        "twc-md": ["0.625rem", { letterSpacing: "-0.01188rem" }],
        "twc-lg": "0.8125rem",
        "twc-2xl": [
          "2.1875rem",
          { letterSpacing: "-0.04156rem", fontWeight: 700 },
        ],
        "twc-4xl": [
          "4.0625rem",
          { letterSpacing: "-0.07719rem", fontWeight: 700 },
        ],
      },
      colors: {
        "twc-gray": "#2F2F2F",
      },
      letterSpacing: {
        "twc-tightest": "-0.01663rem",
        "twc-tight": "-0.01188rem",
        "twc-meadium": "-0.02138rem",
        "twc-normal": "-0.02969rem",
        "twc-wide": "0.80625rem", 
        "twc-widest": "1.0625rem",
        "twc-extra-widest": "1.19756rem",
      },
      borderRadius: {
        "twc-xs": "0rem",
        "twc-sm": "0.5rem",
        "twc-md": "0.625rem",
        "twc-mid-lg": "0.9375remrem",
        "twc-lg": "3.375rem",
        "twc-xl": "4.875rem",
        "twc-3xl": "6rem",
      },
      boxShadow: {
        "twc-sm": "0px 0px 13px 0px rgba(0, 0, 0, 0.10)",
        "twc-md": "0px 0px 40px 0px rgba(0, 0, 0, 0.10)",
      },
      maxWidth: {
        "128": "32rem",
      },
      
    },
  },
  plugins: [],
};
export default config;
