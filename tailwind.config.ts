import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize:{
        large: "40px",
        medium: "24px",
        small: "16px",
        xsmall:"12px"
      },
      fontFamily:{
        robFont: "var(--roboto)"
      },     
       backgroundImage: {
        gradiente: "conic-gradient(at 70% -10%, white, black,#101010,#303030, #303030,#101010, black, white)"
      },
      boxShadow:{
        b:"var(--bShadow)"
      }
    },
  },
  plugins: [],
};
export default config;
