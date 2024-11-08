import React from "react";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog } from "@/components/ui/dialog";
import ContactDialog from "../contact/ContactDialog";

export default function MobileSidebar({ isVariant }: { isVariant?: boolean }) {
  return (
    <Sheet>
      <div
        className={`lg:hidden ${isVariant && "flex w-full items-center justify-between"}`}
      >
        {isVariant && (
          <Link href="/" className="relative h-8 w-[40%] md:w-[20%]">
            <Image
              src={"/images/logo_width_variant.svg"}
              fill
              alt="logo"
              className="h-full object-cover"
            />
          </Link>
        )}
        <SheetTrigger className="rounded-lg border bg-white p-3 transition duration-300 hover:bg-primary-gray hover:bg-opacity-[0.075]">
          <MenuIcon />
        </SheetTrigger>
      </div>
      <SheetContent className="flex h-full flex-col items-center justify-between px-8 pb-12">
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
            href="/#about"
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
            href="/articles"
            className="transition duration-300 hover:underline"
          >
            Articles
          </Link>
          <Dialog>
            <ContactDialog />
            <DialogTrigger className="text-start transition duration-300 hover:underline">
              Contacts
            </DialogTrigger>
          </Dialog>
        </div>
        <p>Made with ❤️ from Indonesia</p>
      </SheetContent>
    </Sheet>
  );
}
