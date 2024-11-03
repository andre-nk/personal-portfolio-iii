"use client";

import { TerminalContext } from "@/contexts/TerminalContext";
import React, { useContext } from "react";

export default function Headline() {
  const { command } = useContext(TerminalContext);

  return command?.includes("lang cn") ? (
    <div className="leading-0 flex flex-col -space-y-5 text-[4rem] font-bold sm:-space-y-7 sm:text-[3.75rem] md:text-[6rem] lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0 lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.25rem]">
      <h1>过晓龙</h1>
      <h1 className="opacity-10">软件工程师</h1>
    </div>
  ) : (
    <div className="flex flex-col -space-y-6 text-[4rem] font-bold sm:-space-y-7 sm:text-[3.75rem] md:text-[6rem] lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0 lg:text-[6.75rem] xl:text-[7rem] 2xl:text-[7.25rem]">
      <h1>ANDREAS</h1>
      <h1>NK.</h1>
    </div>
  );
}
