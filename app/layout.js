// app/layout.js
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseBubble from "../components/MouseBubble";

export const metadata = {
  title: "Web & App Creation Company",
  description: "We create modern and beautiful websites and apps.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Add Google Fonts link here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <MouseBubble /> {/* This enables the bubble effect */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
