import { contentfulClient } from "./contentful";
import {
  TypeAboutSection,
  TypeArticles,
  TypeProject,
  TypeProjectSection,
} from "./types";

export const getAboutContent = async () => {
  const about = await contentfulClient.getEntry("2f18WpxKpEsSDmWshZHRVr");
  return about as TypeAboutSection<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
};

export const getProjectContent = async () => {
  const project = await contentfulClient.getEntry("3JFQQp2KFmUJSHggORsdHL");
  return project as TypeProjectSection<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
};

export const getFeaturedProjects = async () => {
  const projects = await contentfulClient.getEntries({
    content_type: "project",
  });
  return projects.items as TypeProject<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[];
};

export const getFeaturedArticles = async () => {
  const articles = await contentfulClient.getEntries({
    content_type: "articles",
    limit: 2,
  });
  return articles.items as TypeArticles<
    "WITHOUT_UNRESOLVABLE_LINKS",
    "en-US"
  >[];
};

export const getProjectBySlug = async (slug: string) => {
  const project = await contentfulClient.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  return project.items[0] as TypeProject<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
};

export const getArticleBySlug = async (slug: string) => {
  const article = await contentfulClient.getEntries({
    content_type: "articles",
    "fields.slug": slug,
  });

  return article.items[0] as TypeArticles<
    "WITHOUT_UNRESOLVABLE_LINKS",
    "en-US"
  >;
};
