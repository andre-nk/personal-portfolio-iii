import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectFields {
  thumbnail: EntryFieldTypes.AssetLink;
  shortTitle: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  longTitle: EntryFieldTypes.Symbol;
  isFeatured?: EntryFieldTypes.Boolean;
  caption: EntryFieldTypes.RichText;
  article: EntryFieldTypes.RichText;
  startDate: EntryFieldTypes.Date;
  endDate: EntryFieldTypes.Date;
  category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  techstack: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  client: EntryFieldTypes.Symbol;
  designLink?: EntryFieldTypes.Symbol;
  sourceCodeLink?: EntryFieldTypes.Symbol;
  demoLink?: EntryFieldTypes.Symbol;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "project"
>;
export type TypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
