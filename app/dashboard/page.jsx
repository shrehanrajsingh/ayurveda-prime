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
          <div className="col-span-1 h-full py-8 px-8">
            {/* manage */}
            <div>
              <h1 className="text-white/80 text-sm">Manage</h1>

              <div className="mt-3 flex flex-col gap-2">
                {[
                  {
                    name: "Usage",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    ),
                  },
                  {
                    name: "API Keys",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                      </svg>
                    ),
                  },
                  {
                    name: "Logs",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                        <line x1="9" y1="9" x2="10" y2="9" />
                        <line x1="9" y1="13" x2="15" y2="13" />
                        <line x1="9" y1="17" x2="15" y2="17" />
                      </svg>
                    ),
                  },
                  {
                    name: "Storage",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 12H2" />
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Batches",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    ),
                  },
                ].map((item, key) => (
                  <div
                    key={key}
                    className={`px-3 py-1 rounded-md cursor-pointer translate-all duration-100 ${
                      item.name == "Usage"
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/15"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-white/80 text-sm">Optimize</h1>

              <div className="mt-3 flex flex-col gap-2">
                {[
                  {
                    name: "Evaluations",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    ),
                  },
                  {
                    name: "Reports",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    ),
                  },
                ].map((item, key) => (
                  <div
                    key={key}
                    className={`px-3 py-1 rounded-md cursor-pointer translate-all duration-100 ${"text-white/80 hover:bg-white/15"}`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-white/80 text-sm">Blockchain</h1>

              <div className="mt-3 flex flex-col gap-2">
                {[
                  {
                    name: "Usage",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    ),
                  },
                  {
                    name: "Contracts",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    ),
                  },
                  {
                    name: "Ledger",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="8" x2="16" y2="16" />
                        <line x1="8" y1="8" x2="8" y2="16" />
                        <line x1="12" y1="3" x2="12" y2="21" />
                      </svg>
                    ),
                  },
                  {
                    name: "Export",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    ),
                  },
                ].map((item, key) => (
                  <div
                    key={key}
                    className={`px-3 py-1 rounded-md cursor-pointer translate-all duration-100 ${"text-white/80 hover:bg-white/15"}`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-white/80 text-sm">Settings</h1>

              <div className="mt-3 flex flex-col gap-2">
                {[
                  {
                    name: "Account",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    ),
                  },
                  {
                    name: "Preferences",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    ),
                  },
                ].map((item, key) => (
                  <div
                    key={key}
                    className={`px-3 py-1 rounded-md cursor-pointer translate-all duration-100 ${"text-white/80 hover:bg-white/15"}`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-7 px-4 py-4">
            <div className="w-full h-full bg-neutral-800 rounded-xl">
              <div className="py-4 px-8 text-gray-100">
                <h1 className={`text-xl font-bold  tracking-wide`}>Usage</h1>
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
