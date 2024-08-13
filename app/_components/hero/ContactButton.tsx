import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import ContactDialog from "../contact/ContactDialog";

export default function ContactButton() {
  return (
    <Dialog>
      <ContactDialog />
      <DialogTrigger className="flex h-full w-full items-center justify-center rounded-xl border-[1px] bg-black px-4 py-3 pt-3.5 sm:px-6 lg:w-fit lg:px-16">
        <h3 className="font-body font-medium text-white sm:text-lg md:text-xl">
          Contacts
        </h3>
      </DialogTrigger>
    </Dialog>
  );
}
