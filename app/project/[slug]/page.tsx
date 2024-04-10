import React from "react";

import Link from "next/link";
import Image from "next/image";

import { getHttpsUrl } from "@/lib/utils";
import { getProjectBySlug } from "@/contentful/lib";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Footer from "@/app/_components/footer/Footer";
import MobileSidebar from "@/app/_components/navigation/MobileSidebar";
import CTASection from "@/app/_components/cta/CTASection";
import DesktopNavBar from "@/app/_components/navigation/DesktopNavBar";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  return (
    <div>
      <div className="m-default py-6">
        <MobileSidebar isVariant />
        <DesktopNavBar isVariant />
      </div>
      <div className="m-default flex flex-col space-y-12 py-24 lg:space-y-36">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-6">
            <h1 className="font-body text-5xl font-light">
              {project.fields.longTitle}
            </h1>
            <div className="h-[1px] w-full bg-primary-gray bg-opacity-50" />
          </div>
          <div className="relative aspect-video w-full">
            <Image
              src={getHttpsUrl(project.fields.thumbnail?.fields.file?.url!)}
              alt={project.fields.thumbnail?.fields.title!}
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="prose font-light lg:w-[60%] lg:self-center">
          {documentToReactComponents(project.fields.article)}
        </div>
        <div className="flex flex-col space-y-6 pb-24 lg:w-[60%]">
          <h2 className="font-body text-4xl font-light">Info</h2>
          <div className="flex flex-col space-y-3.5">
            <div className="flex flex-col space-y-3">
              <div className="h-[1px] w-full bg-primary-gray bg-opacity-50" />
              <div className="flex">
                <h3 className="w-[50%] font-body font-bold">Category</h3>
                <p className="w-full font-light">
                  {project.fields.category.join(", ")}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="h-[1px] w-full bg-primary-gray bg-opacity-50" />
              <div className="flex">
                <h3 className="w-[50%] font-body font-bold">Timeline</h3>
                <p className="w-full font-light">
                  {new Date(project.fields.startDate).toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(project.fields.endDate).toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="h-[1px] w-full bg-primary-gray bg-opacity-50" />
              <div className="flex">
                <h3 className="w-[50%] font-body font-bold">Client</h3>
                <p className="w-full font-light">{project.fields.client}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="h-[1px] w-full bg-primary-gray bg-opacity-50" />
              <div className="flex">
                <h3 className="w-[50%] font-body font-bold">Techstack</h3>
                <p className="w-full font-light">
                  {project.fields.techstack.join(", ")}
                </p>
              </div>
              <div className="h-[1px] w-full bg-primary-gray bg-opacity-50" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            {project.fields.sourceCodeLink && (
              <Link
                href={project.fields.sourceCodeLink ?? "/"}
                target="_blank"
                className="font-light text-primary-gray underline"
              >
                VIEW SOURCE CODE
              </Link>
            )}
            {project.fields.designLink && (
              <Link
                href={project.fields.designLink ?? "/"}
                target="_blank"
                className="font-light text-primary-gray underline"
              >
                VIEW DESIGN
              </Link>
            )}
            {project.fields.demoLink && (
              <Link
                href={project.fields.demoLink ?? "/"}
                target="_blank"
                className="font-light text-primary-gray underline"
              >
                VIEW DEMO APP
              </Link>
            )}
          </div>
        </div>
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
