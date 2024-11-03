import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import ContactDialog from "../contact/ContactDialog";

export default function CTASection() {
  return (
    <div className="flex w-full flex-col">
      <div className="h-[1px] w-full bg-black" />
      <div className="flex h-[80vh] w-full items-center justify-center md:h-[60vh] lg:h-[80vh]">
        <div className="flex flex-col space-y-12 lg:space-y-4">
          <h2 className="text-center font-body text-[4.75rem] font-light leading-[5rem] lg:text-start lg:text-[5rem]">
            Start a project?
          </h2>
          <Dialog>
            <ContactDialog />
            <DialogTrigger className="text-lg font-light text-primary-gray underline">
              CONTACT ME →
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
