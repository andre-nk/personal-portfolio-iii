"use client";

import { TerminalContext } from "@/contexts/TerminalContext";
import React, { useContext } from "react";

export default function TerminalOutput() {
  const { output } = useContext(TerminalContext);

  return (
    <div
      className={`absolute left-0 right-0 -z-10 flex rounded-bl-xl rounded-br-xl border border-gray-400 bg-black px-4 pb-2.5 pt-8 font-mono text-xs text-white transition-all duration-300 ease-in-out ${
        output ? "translate-y-9 opacity-100" : "translate-y-0 opacity-0"
      }`}
    >
      {output}
    </div>
  );
}
