import { getFeaturedArticles } from "@/contentful/lib";

import React from "react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

export default async function ArticleSection() {
  const articles = await getFeaturedArticles();

  return (
    <div className="flex flex-col space-y-16 md:space-y-12">
      <div className="flex flex-col space-y-[2rem]">
        <h2 className="font-body text-[3.5rem]">Articles</h2>
        <div className="h-[1px] w-full bg-black md:w-full" />
      </div>
      <div className="flex flex-col space-y-12 md:items-end md:space-y-20">
        <div className="flex flex-col space-y-12 md:w-[75%] md:flex-row md:items-end md:space-x-12">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.sys.id} />
          ))}
        </div>
        <div className="flex flex-col space-y-6 md:w-[75%]">
          <div className="h-[1px] w-full bg-black md:block" />
          <Link href="/" className="font-light text-primary-gray underline">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
