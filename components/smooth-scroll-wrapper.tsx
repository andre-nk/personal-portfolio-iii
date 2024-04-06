"use client";

import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};
export default SmoothScrollWrapper;
