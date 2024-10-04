import React from "react";

import Image from "next/image";
import { TypeArticles } from "@/contentful/types";
import Link from "next/link";

export default function HomeArticleCard({
  article,
}: {
  article: TypeArticles<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
}) {
  return (
    <Link
      href={`/articles/${article.fields.slug}`}
      key={article.sys.id}
      className="flex w-[47.5%] flex-col"
    >
      <Image
        src={`https:${article.fields.thumbnail?.fields.file?.url}`}
        alt={article.fields.thumbnail?.fields.title!}
        width={article.fields.thumbnail?.fields.file?.details.image?.width}
        height={article.fields.thumbnail?.fields.file?.details.image?.height}
        className="aspect-video w-full lg:h-[24vh]"
      />
      <div className="flex flex-col space-y-2 pt-4">
        <h3 className="text-lg font-semibold leading-snug">
          {article.fields.title}
        </h3>
        <p className="font-light text-primary-gray text-opacity-[0.8]">
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(article.fields.releasedDate))}
        </p>
      </div>
    </Link>
  );
}
