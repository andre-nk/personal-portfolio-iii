import React from "react";

import Image from "next/image";
import { getAboutContent } from "@/contentful/lib";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function AboutSection() {
  const aboutContent = await getAboutContent();

  return (
    <div id="about">
      <div className="flex flex-col space-y-[2rem]">
        <h2 className="font-body text-[3.5rem]">About</h2>
        <div className="h-[1px] w-full bg-black" />
      </div>
      <div className="mt-[3rem] flex w-full flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
        <div className="prose w-full font-light leading-relaxed prose-strong:font-bold md:w-[50%] md:text-base lg:w-[55%] lg:text-xl">
          {documentToReactComponents(aboutContent.fields.content)}
        </div>
        <div className="flex w-full flex-col md:w-[40%] lg:w-[32.5%]">
          <div className="lg:hidden">
            <Image
              src="/images/profile.png"
              height={100}
              width={300}
              alt="profile"
              className="aspect-auto w-full"
            />
          </div>
          <div className="hidden flex-col space-y-4 lg:flex">
            <Image
              src="/images/profile_long.jpg"
              height={1200}
              width={300}
              alt="profile_long"
              className="aspect-auto w-full grayscale"
            />
            <div className="h-full min-w-2 bg-variant-gradient md:min-w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
