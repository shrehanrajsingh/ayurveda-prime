import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import logo from "./assets/AyurCare Logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AyurCare - Trace The Journey of Ayurveda",
  description: "Experience the essence of Ayurveda with AyurCare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo.src}></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
