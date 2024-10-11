"use client";

import React from "react";
import Image from "next/image";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { atomOneDark, CopyBlock } from "react-code-blocks";
import { getHttpsUrl } from "@/lib/utils";

export default function ArticleRenderer({ document }: { document: any }) {
  const options: Options = {
    renderMark: {
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <div className="flex flex-col justify-center space-y-2">
          <div className="relative aspect-video w-full">
            <Image
              src={getHttpsUrl(node.data.target.fields.file.url)}
              alt={node.data.target.fields.title}
              fill
              objectFit="cover"
            />
          </div>
          <p className="text-sm italic">
            {node.data.target.fields.description}
          </p>
        </div>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        const codeContent = node.content.find(
          (item: any) =>
            Array.isArray(item.marks) &&
            item.marks.some((mark: any) => mark.type === "code"),
        );

        if (
          codeContent &&
          typeof codeContent.value === "string" &&
          codeContent.value.includes("\n")
        ) {
          return (
            <div className="my-4 overflow-hidden rounded-md font-mono font-light">
              <CopyBlock
                text={codeContent.value}
                language="dart"
                showLineNumbers={true}
                wrapLongLines
                theme={atomOneDark}
                codeBlock
                customStyle={{
                  fontSize: "14px",
                  borderRadius: "0.375rem",
                }}
              />
            </div>
          );
        }

        return <p>{children}</p>;
      },
    },
  };

  return (
    <div className="prose text-lg font-light lg:w-[60%] lg:self-center">
      {documentToReactComponents(document, options)}
    </div>
  );
}
