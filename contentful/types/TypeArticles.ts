import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeArticlesFields {
  title: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.RichText;
  releasedDate: EntryFieldTypes.Date;
  thumbnail: EntryFieldTypes.AssetLink;
  isFeatured?: EntryFieldTypes.Boolean;
}

export type TypeArticlesSkeleton = EntrySkeletonType<
  TypeArticlesFields,
  "articles"
>;
export type TypeArticles<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeArticlesSkeleton, Modifiers, Locales>;
