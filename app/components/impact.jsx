"use client";

import image2 from "../assets/i2.jpg";
import image7 from "../assets/i7.jpg";
import image8 from "../assets/i8.jpg";
import image9 from "../assets/i9.jpg";
import image10 from "../assets/i10.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Arima } from "next/font/google";

import f1 from "../assets/f1.webp";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpeg";
import f4 from "../assets/f4.jpg";

const arimaFont = Arima({
  subsets: ["latin"],
});

const image_data = [
  {
    path: f1,
    title: "Organic Ashwagandha Fields",
    desc: "Sustainable cultivation in the pristine valleys of Shimla, where traditional farming practices meet modern organic standards to produce premium-quality Ashwagandha roots.",
  },
  {
    path: f2,
    title: "Assam Tea Gardens",
    desc: "Our network of family-owned tea gardens in Assam implements biodiversity preservation techniques while growing medicinal herbs alongside traditional tea plants.",
  },
  {
    path: f3,
    title: "Himalayan Herb Collection",
    desc: "Local communities in the Himalayan foothills responsibly harvest rare medicinal herbs using sustainable methods that preserve these precious botanical resources.",
  },
  {
    path: f4,
    title: "Community Farming Initiative",
    desc: "Empowering farmers in Guwahati through education on sustainable Ayurvedic herb cultivation, creating economic opportunities while preserving ancient agricultural wisdom.",
  },
];

export default function Impact() {
  const [c, setC] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setC((c) => (c + 1) % image_data.length);
    }, 3000);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="font-sans" id="impact">
      <div className="grid grid-cols-1 lg:grid-cols-8 min-h-[100vh] shadow-2xl overflow-hidden">
        <div className="lg:col-span-2 bg-gradient-to-br from-green-950 via-emerald-900 to-green-950 h-full relative p-6 lg:p-0">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500/30 via-emerald-400 to-green-500/30"></div>
          <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-emerald-600/20 blur-3xl"></div>

          <h1
            className={`${arimaFont.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text text-center mt-6 lg:mt-10 mb-6 relative z-10`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #4ade80, #10b981, #047857)",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
          >
            Our Impact
            <span className="block h-1 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mt-3"></span>
          </h1>

          <div className="py-6 px-8 flex flex-col gap-5 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-green-950">
            {image_data.map((image, index) => (
              <div
                key={index}
                onClick={() => setC(index)}
                className={`flex w-full gap-3 transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                  c === index ? "scale-[1.02]" : "opacity-75"
                }`}
              >
                <div className="relative w-20 h-20 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.path}
                    className={`object-cover w-full h-full transition-transform duration-500 ${
                      c === index ? "scale-110" : "hover:scale-105"
                    }`}
                    alt={image.title}
                  />
                  {c === index && (
                    <div className="absolute inset-0 border-2 border-emerald-400 rounded-lg"></div>
                  )}
                </div>

                <div
                  className={`flex-1 px-4 py-3 rounded-xl flex flex-col justify-center transition-all duration-300 ${
                    c === index
                      ? "bg-gradient-to-r from-green-800/80 to-emerald-700/70 border border-emerald-500/50 shadow-lg shadow-emerald-900/30"
                      : "bg-green-900/40 border border-green-800/30 hover:bg-green-800/50"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold ${
                      c === index
                        ? "bg-gradient-to-r from-green-300 to-emerald-200 text-transparent bg-clip-text"
                        : "text-emerald-300"
                    }`}
                  >
                    {image.title}
                  </h3>
                  <p className="text-xs text-emerald-200/80 mt-1">
                    {image.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {image_data.map((_, index) => (
              <button
                key={index}
                onClick={() => setC(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  c === index
                    ? "w-8 bg-emerald-400"
                    : "w-2 bg-emerald-700 hover:bg-emerald-600"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="col-span-6 h-full relative group">
          <div className="absolute inset-0 transition-opacity duration-1000">
            <Image
              src={image_data[c].path}
              alt={image_data[c].title}
              className="w-full h-full object-cover transition-transform duration-7000"
              style={{ objectPosition: "center" }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h2
                className={`${arimaFont.className} text-4xl font-bold text-white mb-3`}
              >
                {image_data[c].title}
              </h2>
              <p className="text-emerald-200 text-xl max-w-2xl">
                {image_data[c].desc}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setC((c - 1 + image_data.length) % image_data.length)
            }
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-emerald-900/60 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setC((c + 1) % image_data.length)}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-emerald-900/60 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
