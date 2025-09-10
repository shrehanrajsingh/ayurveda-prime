"use client";

import { useState } from "react";

export default function Dashboard() {
  const [projectDropdownClick, setProjectDropDownClick] = useState(false);

  return (
    <div className="text-gray-200 w-full py-4 px-4">
      <div className="flex items-center align-middle">
        <div className="w-6 h-6 text-black bg-gray-100 text-center rounded-full text-sm flex justify-center items-center mr-2">
          S
        </div>
        <h1 className="text-sm">Shrehan&apos;s Workspace</h1>
        <h1 className="font-extralight mx-3 relative bottom-[0.8px] text-white/60">
          /
        </h1>
        <div className="relative">
          <button
            onClick={(e) => {
              e.preventDefault();
              setProjectDropDownClick((o) => !o);
            }}
            className="text-sm py-2 px-2 rounded-md border border-transparent hover:border-emerald-500 hover:bg-emerald-800 transition-all duration-75 cursor-pointer flex justify-center items-center outline-none"
          >
            Assam
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ease-in-out ${
                projectDropdownClick ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`absolute w-[300%] mt-2 py-2 bg-neutral-800 rounded-xl border border-white/30 ${
              !projectDropdownClick ? "hidden" : ""
            }`}
          >
            <h1 className="text-xs px-4 font-thin text-white tracking-wider">
              PROJECTS
            </h1>

            <div className="mt-2 px-8 flex flex-col gap-2 cursor-default text-white/80">
              <h1 className="flex items-center">
                Assam
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-1 h-4 w-4 text-white float-end"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </h1>
              <h1>Guwahati</h1>
              <h1>Shimla</h1>
            </div>

            <div className="h-[0.04px] w-full bg-white/30 mt-3"></div>

            <div className="mt-3 px-8 flex flex-col gap-2 cursor-default text-white/80">
              <div className="flex items-center cursor-pointer">
                <div className="w-8 h-8 mr-3 rounded-md bg-white/20 flex justify-center items-center">
                  <span className="text-lg">+</span>
                </div>
                <span className="text-sm font-medium">Create Project</span>
              </div>
              <div className="flex items-center cursor-pointer">
                <div className="w-8 h-8 mr-3 rounded-md bg-white/20 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Manage Projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto text-sm flex gap-6">
          <h1 className="font-bold cursor-pointer">Dashboard</h1>
          <h1 className="cursor-pointer">Report</h1>
          <h1 className="cursor-pointer">Documentation</h1>
        </div>
      </div>
    </div>
  );
}
