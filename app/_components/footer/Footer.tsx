import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full flex-col space-y-16 bg-black px-6 py-[4vh] md:px-9 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-[10vw] lg:pb-[12vh] lg:pt-[6vh]">
      <Image
        src={"/images/logo_width.svg"}
        width={250}
        height={100}
        alt="logo"
        className="w-[60%] md:w-[40%] lg:w-[25%]"
      />
      <div className="flex flex-col space-y-16 lg:w-[50%] lg:flex-row lg:justify-between lg:space-y-0 lg:pt-2">
        <div className="flex flex-col space-y-6 uppercase text-white">
          <Link href="/" className="transition duration-300 hover:underline">
            Home
          </Link>
          <Link
            href="/about"
            className="transition duration-300 hover:underline"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="transition duration-300 hover:underline"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="transition duration-300 hover:underline"
          >
            Articles
          </Link>
          <Link
            href="/contact"
            className="transition duration-300 hover:underline"
          >
            Contacts
          </Link>
        </div>
        <div className="flex flex-col space-y-6 text-white">
          <Link href="/" className="transition duration-300 hover:underline">
            GITHUB
          </Link>
          <Link
            href="/about"
            className="transition duration-300 hover:underline"
          >
            LINKEDIN
          </Link>
        </div>
        <Link
          href="/about"
          className="text-white transition duration-300 hover:underline"
        >
          CONTACT@ANDRENK.DEV
        </Link>
      </div>
    </div>
  );
}
