import React from "react";

import DesktopNavBar from "../_components/navigation/DesktopNavBar";
import MobileSidebar from "../_components/navigation/MobileSidebar";
import Footer from "../_components/footer/Footer";

import { getFeaturedArticles } from "@/contentful/lib";
import ArticleCard from "../_components/articles/ArticleCard";

export default async function ArticlesPage() {
  const articles = await getFeaturedArticles();

  return (
    <div>
      <div className="m-default py-6">
        <MobileSidebar isVariant />
        <DesktopNavBar isVariant />
      </div>
      <div className="m-default flex flex-col space-y-0 pb-48 pt-24 md:space-y-12">
        <div className="flex flex-col space-y-[2rem]">
          <h2 className="font-body text-[3.5rem]">Articles</h2>
          <div className="h-[1px] w-full bg-black md:w-full" />
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.sys.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
