"use client";

import { Roboto } from "next/font/google";
import Navbar from "./navbar";

const robotoFont = Roboto({
  subsets: ["latin"],
});

export default function Dashboard() {
  return (
    <div
      className={`bg-black ${robotoFont.className} w-full h-screen flex flex-col`}
    >
      <Navbar />

      <div
        className="flex flex-col grow overflow-y-scroll text-white"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="grid grid-cols-8 h-full">
          <div className="col-span-1 h-full">
            <h1>hi</h1>
          </div>

          <div className="col-span-7 px-4 py-4">
            <div className="w-full h-full bg-neutral-800 rounded-xl">
              <div className="py-4 px-8 text-gray-100">
                <h1 className={`text-2xl  tracking-wide`}>Title</h1>
              </div>
              <div className="h-[0.05px] w-full bg-white/30"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
