import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import Image from "next/image";
import DesktopGradient from "../hero/DesktopGradient";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactDialog() {
  return (
    <DialogContent>
      <div className="grid h-7 w-full grid-cols-12 gap-[0px]">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="w-full border-[0.2px] border-primary-gray border-opacity-30 bg-transparent"
            ></div>
          ))}
      </div>
      <div className="grid gap-3 px-6 pb-2 pt-4">
        <DialogHeader>
          <DialogTitle>Hi there!</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Thank you for visiting this site! 🤗
          <br />
          If you would like to get in touch, feel free to send me a message.
        </DialogDescription>
        <div className="flex w-full space-x-4 pt-3">
          <Link href="mailto:contact@andrenk.me">
            <Mail className=" h-6 w-6 text-black" />
          </Link>
          <Link href="https://github.com/andre-nk">
            <Image
              src="/icons/github.svg"
              alt="github"
              width={22}
              height={22}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/andreasnk/">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={22}
              height={22}
            />
          </Link>
        </div>
      </div>
      <DesktopGradient isVariant />
    </DialogContent>
  );
}
