import React from "react";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="rounded-lg border bg-white p-3 transition duration-300 hover:bg-primary-gray hover:bg-opacity-[0.075] lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col items-center justify-between px-8">
        <Image
          src={"/images/logo_width_variant.svg"}
          width={250}
          height={100}
          alt="logo"
          className="w-full"
        />
        <div className="flex w-full flex-col space-y-6 font-mono text-lg">
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
        <p>Made with ❤️ from Indonesia</p>
      </SheetContent>
    </Sheet>
  );
}
