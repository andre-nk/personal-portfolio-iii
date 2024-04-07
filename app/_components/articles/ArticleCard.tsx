import React from "react";

import Image from "next/image";
import { TypeArticles } from "@/contentful/types";
import Link from "next/link";

export default function ArticleCard({
  article,
}: {
  article: TypeArticles<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
}) {
  return (
    <div key={article.sys.id} className="flex flex-col space-y-4">
      <Image
        src={`https:${article.fields.thumbnail?.fields.file?.url}`}
        alt={article.fields.thumbnail?.fields.title!}
        width={article.fields.thumbnail?.fields.file?.details.image?.width}
        height={article.fields.thumbnail?.fields.file?.details.image?.height}
        className="aspect-video w-full lg:h-[24vh]"
      />
      <Link href="/" className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold leading-snug">
          {article.fields.title}
        </h3>
        <p className="font-light text-primary-gray text-opacity-[0.8]">
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(article.sys.createdAt))}
        </p>
      </Link>
    </div>
  );
}
