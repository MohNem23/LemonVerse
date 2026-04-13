import localFont from "next/font/local";

export const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    { path: "../assets/fonts/manrope/Manrope-400.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/manrope/Manrope-500.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/manrope/Manrope-600.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/manrope/Manrope-700.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/manrope/Manrope-800.ttf", weight: "800", style: "normal" },
  ],
});

export const newsreader = localFont({
  variable: "--font-newsreader",
  display: "swap",
  src: [
    { path: "../assets/fonts/newsreader/Newsreader-400.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/newsreader/Newsreader-700.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/newsreader/Newsreader-800.ttf", weight: "800", style: "normal" },
    { path: "../assets/fonts/newsreader/Newsreader-400Italic.ttf", weight: "400", style: "italic" },
    { path: "../assets/fonts/newsreader/Newsreader-700Italic.ttf", weight: "700", style: "italic" },
  ],
});

export const fredoka = localFont({
  variable: "--font-fredoka",
  display: "swap",
  src: [
    { path: "../assets/fonts/fredoka/Fredoka-400.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/fredoka/Fredoka-600.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/fredoka/Fredoka-700.ttf", weight: "700", style: "normal" },
  ],
});

export const fontVariables = `${manrope.variable} ${newsreader.variable} ${fredoka.variable}`;
