import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeAboutSectionFields {
  title?: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
}

export type TypeAboutSectionSkeleton = EntrySkeletonType<
  TypeAboutSectionFields,
  "aboutSection"
>;
export type TypeAboutSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeAboutSectionSkeleton, Modifiers, Locales>;
