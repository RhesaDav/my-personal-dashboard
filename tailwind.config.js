/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["aqua", "dracula"],
    themes: [
      {
        dracula: {
          primary: "#ff7ac6",

          secondary: "#bf95f9",

          accent: "#ffb86b",

          neutral: "#414558",

          "base-100": "#272935",

          info: "#8be8fd",

          success: "#52fa7c",

          warning: "#f1fa89",

          error: "#ff5757",
        },
        aqua: {
          
          "primary": "#037a44",
                   
          "secondary": "#b888ef",
                   
          "accent": "#5d96d3",
                   
          "neutral": "#211a23",
                   
          "base-100": "#eae4ec",
                   
          "info": "#5aa7d3",
                   
          "success": "#21d492",
                   
          "warning": "#d59e07",
                   
          "error": "#fa836b",
                   },
      },
    ],
  },
};

// aqua = aqua ; dracula = dark ; garden = light
