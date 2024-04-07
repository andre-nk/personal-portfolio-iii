import React from "react";

import Image from "next/image";

export default function Terminal() {
  return (
    <div className="hidden items-center lg:flex lg:space-x-6">
      <div className="flex items-center">
        <button className="bg-white px-6 py-4 transition duration-200 hover:bg-primary-gray hover:bg-opacity-[0.08]">
          <Image
            src="/images/terminal_icon.svg"
            height={14}
            width={14}
            alt="terminal"
          />
        </button>
        <div className="h-[2vh] w-[1px] bg-primary-gray"></div>
      </div>
      <h3 className="hidden pt-0.5 font-body sm:text-lg lg:block lg:text-[0.95rem] xl:text-base">
        Software Engineer based in Yogyakarta, Indonesia
      </h3>
    </div>
  );
}
