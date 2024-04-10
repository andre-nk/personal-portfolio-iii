import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function DesktopNavBar({ isVariant }: { isVariant?: boolean }) {
  return (
    <div
      className={`font-primary-gray z-20 hidden items-center ${isVariant ? "justify-between" : "justify-end"} font-mono text-lg lg:flex`}
    >
      {isVariant && (
        <Link href="/" className="relative">
          <Image
            src={"/images/logo_width_variant.svg"}
            alt="logo"
            width={160}
            height={36}
          />
        </Link>
      )}
      <div
        className={`flex justify-end space-x-16 ${isVariant && "text-base"}`}
      >
        <Link href="/" className="transition duration-300 hover:underline">
          Home
        </Link>
        <Link
          href="/#about"
          scroll={true}
          className="transition duration-300 hover:underline"
        >
          About
        </Link>
        <Link
          href="/project"
          className="transition duration-300 hover:underline"
        >
          Projects
        </Link>
        <Link
          href="/articles"
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
    </div>
  );
}
