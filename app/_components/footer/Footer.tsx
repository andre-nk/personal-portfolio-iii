import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactDialog from "../contact/ContactDialog";

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
            href="/articles"
            className="transition duration-300 hover:underline"
          >
            Articles
          </Link>
          <Dialog>
            <ContactDialog />
            <DialogTrigger className="transition duration-300 hover:underline">
              CONTACTS
            </DialogTrigger>
          </Dialog>
        </div>
        <div className="flex flex-col space-y-6 text-white">
          <Link
            href="https://github.com/andre-nk"
            className="transition duration-300 hover:underline"
          >
            GITHUB
          </Link>
          <Link
            href="https://www.linkedin.com/in/andreasnk/"
            className="transition duration-300 hover:underline"
          >
            LINKEDIN
          </Link>
        </div>
        <Link
          href="mailto:contact@andrenk.me"
          className="text-white transition duration-300 hover:underline"
        >
          CONTACT@ANDRENK.ME
        </Link>
      </div>
    </div>
  );
}
