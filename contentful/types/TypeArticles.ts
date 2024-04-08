import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeArticlesFields {
  thumbnail: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  isFeatured?: EntryFieldTypes.Boolean;
  content?: EntryFieldTypes.RichText;
  releasedDate: EntryFieldTypes.Date;
}

export type TypeArticlesSkeleton = EntrySkeletonType<
  TypeArticlesFields,
  "articles"
>;
export type TypeArticles<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeArticlesSkeleton, Modifiers, Locales>;
