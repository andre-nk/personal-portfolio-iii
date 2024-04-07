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
