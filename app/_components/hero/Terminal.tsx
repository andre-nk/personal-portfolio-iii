"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import TerminalInput from "./TerminalInput";
import { TerminalContext } from "@/contexts/TerminalContext";

export default function Terminal() {
  const [isActive, setIsActive] = useState(false);
  const { setCommand } = useContext(TerminalContext);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (!isActive) {
      timeoutId = setTimeout(() => {
        setCommand((prevCommand) => {
          if (prevCommand && prevCommand[prevCommand.length - 1] !== "clear") {
            return [...prevCommand, "clear"];
          }
          return prevCommand;
        });
      }, 0);
    }
    return () => {
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [isActive, setCommand]);

  const toggleActive = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <div
      className={`flex w-full items-center ${isActive ? "lg:space-x-2" : "lg:space-x-4"}`}
    >
      <div
        className={`m-2 flex items-center space-x-2 ${isActive ? "lg:w-[22.5%] xl:w-[20%] 2xl:w-[20%]" : "w-auto"}`}
      >
        <button
          onClick={toggleActive}
          className="group rounded-md bg-white px-2.5 py-3 transition duration-100 hover:bg-primary-gray hover:bg-opacity-[0.05]"
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 22 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5014 0.636876C17.6971 0.750346 17.8486 0.926839 17.9311 1.13752C18.0135 1.34821 18.0221 1.58062 17.9554 1.79681L14.3536 13.5001H20.9992C21.1945 13.5001 21.3856 13.5572 21.5488 13.6644C21.712 13.7717 21.8402 13.9244 21.9176 14.1037C21.995 14.283 22.0183 14.481 21.9844 14.6734C21.9506 14.8657 21.8611 15.0439 21.7272 15.186L5.72807 32.1851C5.57327 32.3497 5.36727 32.457 5.14365 32.4896C4.92004 32.5221 4.69199 32.478 4.49668 32.3643C4.30138 32.2506 4.15032 32.0742 4.06815 31.8637C3.98597 31.6532 3.97752 31.4211 4.04417 31.2051L7.64596 19.4998H1.00034C0.805043 19.4999 0.613996 19.4428 0.450785 19.3355C0.287574 19.2283 0.159344 19.0756 0.0819244 18.8963C0.00450491 18.717 -0.0187148 18.5189 0.0151315 18.3266C0.0489777 18.1342 0.138408 17.956 0.272383 17.8139L16.2715 0.814866C16.4261 0.650473 16.6318 0.543218 16.8551 0.51054C17.0784 0.477862 17.3062 0.521682 17.5014 0.634876V0.636876Z"
              className={`fill-black transition duration-100 group-hover:fill-cyan-500 ${isActive ? "fill-cyan-500" : "fill-black"}`}
            />
          </svg>
        </button>
        {isActive ? (
          <p className="font-mono">~ %</p>
        ) : (
          <div className="h-[2vh] w-[1px] bg-primary-gray"></div>
        )}
      </div>
      {isActive ? (
        <div className="w-full">
          <TerminalInput />
        </div>
      ) : (
        <h3 className="hidden pt-0.5 font-body sm:text-lg lg:block lg:text-[0.95rem] xl:text-base">
          CS Student and SWE based in Yogyakarta, Indonesia
        </h3>
      )}
    </div>
  );
}
