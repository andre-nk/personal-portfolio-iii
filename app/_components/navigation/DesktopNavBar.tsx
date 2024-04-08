import Link from "next/link";
import React from "react";

export default function DesktopNavBar() {
  return (
    <div className="font-primary-gray z-20 hidden justify-end space-x-16 font-mono text-lg lg:flex">
      <Link href="/" className="transition duration-300 hover:underline">
        Home
      </Link>
      <Link href="/about" className="transition duration-300 hover:underline">
        About
      </Link>
      <Link
        href="/projects"
        className="transition duration-300 hover:underline"
      >
        Projects
      </Link>
      <Link href="/blog" className="transition duration-300 hover:underline">
        Articles
      </Link>
      <Link href="/contact" className="transition duration-300 hover:underline">
        Contacts
      </Link>
    </div>
  );
}
