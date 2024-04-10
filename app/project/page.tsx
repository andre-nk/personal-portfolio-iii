import React from "react";

import DesktopNavBar from "../_components/navigation/DesktopNavBar";
import MobileSidebar from "../_components/navigation/MobileSidebar";
import ProjectTile from "../_components/projects/ProjectTile";
import Footer from "../_components/footer/Footer";

import { getFeaturedProjects } from "@/contentful/lib";

export default async function ProjectPage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div>
      <div className="m-default py-6">
        <MobileSidebar isVariant />
        <DesktopNavBar isVariant />
      </div>
      <div className="m-default flex flex-col space-y-0 pb-48 md:space-y-12">
        <h2 className="font-body text-[3.5rem]">Projects</h2>
        <div className="flex flex-col space-y-12 md:space-y-6">
          {featuredProjects.map((project) => {
            return <ProjectTile project={project} key={project.sys.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
