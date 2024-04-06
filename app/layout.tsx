import React from "react";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

import "./globals.css";
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper";

export const metadata: Metadata = {
  title: {
    template: "Andreas Nk. | %s",
    default: "Andreas Nk.",
  },
  description:
    "Software Engineer and CS Student based in Yogyakarta, Indonesia",
  metadataBase: new URL("http://localhost:3000/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "other-icon",
      url: "/favicon.ico",
    },
  },
  openGraph: {
    title: "Andreas Notokusumo",
    description:
      "Software Engineer and CS Student based in Yogyakarta, Indonesia",
    url: "https://andrenk.dev",
    siteName: "Andreas Notokusumo",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreas Notokusumo",
    description:
      "Software Engineer and CS Student based in Yogyakarta, Indonesia",
    siteId: "1467726470533754880",
    creator: "Andreas Notokusumo",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
  generator: "Next.js",
  applicationName: "Andreas Notokusumo Personal Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Andreas",
    "Notokusumo",
    "Andreas Notokusumo",
    "Portfolio",
    "Computer Science",
    "Software Engineer",
  ],
  authors: [{ name: "Andreas Notokusumo" }],
  creator: "Andreas Notokusumo",
  publisher: "Andreas Notokusumo",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "portfolio",
};

const fivoSans = localFont({
  src: [
    {
      path: "../public/fonts/FivoSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FivoSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FivoSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-fivo-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${fivoSans.variable} font-sans`}
      >
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
