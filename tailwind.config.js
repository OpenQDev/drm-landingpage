/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px", // for example, to add a 480px breakpoint
        xxs: "300px", // for example, to add a 480px breakpoint
      },
      width: {
        "1/7": "14.2857143%",
        "1/8": "12.5%",
        "1/9": "11.1111111%",
        "1/10": "10%",
      },
      fontFamily: {
        custom: ["Gilroy", "sans-serif"], // Use your font name here
        whyte: ["Whyte", "sans-serif"], // Added Whyte font family
        "ui-monospace": [
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "5.5xl": "3.2rem", // Custom font size between 5xl and 6xl
      },
      colors: {
        "title-color": "#1D1E20", // Custom color defined
        "bg-primary-color": "#FBFBFB",
        "q-purple": "#322EE9",
      },
      variants: {
        extend: {
          backgroundColor: ["before"],
          content: ["before"],
          position: ["before"],
          inset: ["before"],
          width: ["before"],
          height: ["before"],
        },
      },
    },
  },
  plugins: [],
};
