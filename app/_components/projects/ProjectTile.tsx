import React from "react";

import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

import { TypeProject } from "@/contentful/types";

export default function ProjectTile({
  project,
}: {
  project: TypeProject<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
}) {
  return (
    <div
      key={project.sys.id}
      className="flex flex-col space-y-10 md:space-y-6 lg:space-y-6"
    >
      <div className="hidden h-[1px] w-full bg-black md:block" />
      <div className="flex flex-col space-y-5 md:flex-row-reverse md:items-start md:justify-between md:space-y-0">
        <Link
          href={`/project/${project.fields.slug}`}
          className="flex flex-col space-y-4 md:w-[40%] md:space-y-0 lg:pl-24"
        >
          <div className="h-[1px] w-full bg-black md:hidden" />
          <Image
            src={`https:${project.fields.thumbnail?.fields.file?.url}`}
            alt={project.fields.thumbnail?.fields.title!}
            width={project.fields.thumbnail?.fields.file?.details.image?.width}
            height={
              project.fields.thumbnail?.fields.file?.details.image?.height
            }
          />
        </Link>
        <div className="flex flex-col space-y-3 md:w-[55%] lg:w-[75%] lg:flex-row lg:justify-between lg:space-y-0">
          <div className="flex flex-col space-y-0 lg:w-[37.5%]">
            <h3 className="font-body text-2xl font-semibold md:text-xl">
              {project.fields.shortTitle}
            </h3>
            <p className="font-light text-primary-gray text-opacity-[0.8]">
              {new Date(project.fields.startDate).getFullYear()}
            </p>
          </div>
          <div className="flex flex-col lg:h-[30vh] lg:w-[61%] lg:justify-between">
            <div className="w-full font-light text-primary-gray md:text-base lg:w-full lg:text-xl">
              {documentToReactComponents(project.fields.caption)}
            </div>
            <Link
              href={`/project/${project.fields.slug}`}
              className="hidden font-light text-primary-gray underline hover:text-blue-700 lg:block"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
      <Link
        href={`/project/${project.fields.slug}`}
        className="font-light text-primary-gray underline lg:hidden"
      >
        LEARN MORE
      </Link>
    </div>
  );
}
