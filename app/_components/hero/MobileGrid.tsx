import React from "react";

export default function MobileGrid() {
  return (
    <div className="absolute left-1/2 top-1/2 -z-10 grid h-[80vh] w-full -translate-x-1/2 -translate-y-1/2 transform grid-cols-4 gap-[0px] lg:hidden">
      {Array(32)
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
