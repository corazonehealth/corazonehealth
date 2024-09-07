import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px"
    },

    fontFamily: {
      oswald: "var(--font-oswald)",
      roboto: "var(--font-roboto)"
    },
    backgroundImage: {
      hero: 'url(/assets/photos/scadrun.jpg)',
      membership: "url(/assets/photos/treadmill_training.jpg)"
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#333',
          100: '#484848',
          200: '#000000',
          300: '#111'
        },
        accent: "#d4000d",
      },
    },
  },
  plugins: [],
};
export default config;
