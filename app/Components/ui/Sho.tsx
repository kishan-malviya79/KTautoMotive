"use client";
import React from "react";
import { BackgroundGradient } from "../ui/Background-gradient";

import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div className="w-full sm:items-center  flex sm:h-screen justify-center sm:flex-row flex-col py-4  md:py-0 gap-4 gap-x-24"
    style={{
      backgroundImage: `url(${`bg-charging.jpeg`})`, // Replace BgOverview with your actual variable name for the background image
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
  }}
    >
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/Tushar1.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain  rounded-[16px]"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Tushar Paliwal
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         Owner
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold gap-2 dark:bg-zinc-800">
          <span>CALL </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          +91-8209273105
          </span>
        </button>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="  h-[310px] overflow-hidden  rounded-[16px]   " >

        <Image 
          src={`/Kalpesh.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain   "
        />
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Kalpesh Paliwal
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         Owner
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold gap-2  dark:bg-zinc-800">
          <span>CALL </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          +91-8209273105
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
