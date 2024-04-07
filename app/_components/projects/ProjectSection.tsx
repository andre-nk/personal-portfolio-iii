import { getFeaturedProjects, getProjectContent } from "@/contentful/lib";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import React from "react";
import Link from "next/link";
import ProjectTile from "./ProjectTile";

export default async function ProjectSection() {
  const projectContent = await getProjectContent();
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="flex flex-col space-y-16 md:space-y-36">
      <div className="flex flex-col space-y-[2rem]">
        <div className="flex flex-col space-y-[2rem]">
          <h2 className="font-body text-[3.5rem]">Works</h2>
          <div className="h-[1px] w-full bg-black md:w-[75%]" />
        </div>
        <div className="w-full md:flex md:w-full md:justify-center md:text-base lg:text-xl">
          <div className="font-extralight md:w-[50%]">
            {documentToReactComponents(projectContent.fields.content)}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-12 md:space-y-6">
        <div className="flex flex-col space-y-12 md:space-y-6">
          {featuredProjects.map((project) => {
            return <ProjectTile project={project} key={project.sys.id} />;
          })}
        </div>
        <div className="flex flex-col space-y-6">
          <div className="h-[1px] w-full bg-black md:block" />
          <Link href="/" className="font-light text-primary-gray underline">
            DISCOVER MORE PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}
