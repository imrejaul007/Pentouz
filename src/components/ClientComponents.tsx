"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("./SmoothScroll"), {
  ssr: false,
  loading: () => null,
});

const PageTransition = dynamic(() => import("./PageTransition"), {
  ssr: false,
  loading: () => null,
});

export { SmoothScroll, PageTransition };
