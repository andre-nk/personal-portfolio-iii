import React from "react";

export default function DesktopGradient({
  isVariant,
}: {
  isVariant?: boolean;
}) {
  return (
    <div
      id="desktop-gradient-bar"
      className={`${isVariant ? "h-1.5" : "hidden h-3"} w-full lg:block`}
    />
  );
}
