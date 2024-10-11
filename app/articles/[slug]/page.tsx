import React from "react";

import Image from "next/image";

import CTASection from "@/app/_components/cta/CTASection";
import Footer from "@/app/_components/footer/Footer";
import MobileSidebar from "@/app/_components/navigation/MobileSidebar";
import { getArticleBySlug } from "@/contentful/lib";
import { getHttpsUrl } from "@/lib/utils";
import DesktopNavBar from "@/app/_components/navigation/DesktopNavBar";
import ArticleRenderer from "@/app/_components/articles/ArticleRenderer";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  return (
    <div>
      <div className="m-default py-6">
        <MobileSidebar isVariant />
        <DesktopNavBar isVariant />
      </div>
      <div className="m-default flex flex-col space-y-12 py-24 lg:space-y-36">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2 lg:space-y-6">
              <h1 className="leading-1 font-body text-6xl font-light">
                {article.fields.title}
              </h1>
              <p className="text-primary-gray lg:text-xl">
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(article.fields.releasedDate))}
              </p>
            </div>
            <div className="h-[1px] w-full bg-primary-gray bg-opacity-50" />
          </div>
          <div className="relative aspect-video w-full">
            <Image
              src={getHttpsUrl(article.fields.thumbnail?.fields.file?.url!)}
              alt={article.fields.thumbnail?.fields.title!}
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <ArticleRenderer document={article.fields.content} />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
