import React from "react";

export default function DesktopGrid() {
  return (
    <div className="-z-10 grid h-full w-full grid-cols-12 gap-[0px]">
      {Array(72)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="h-full w-full border-[0.8px] border-primary-gray border-opacity-30 bg-transparent"
          ></div>
        ))}
    </div>
  );
}
