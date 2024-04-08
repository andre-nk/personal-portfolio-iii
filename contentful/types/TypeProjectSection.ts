import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectSectionFields {
  title: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
}

export type TypeProjectSectionSkeleton = EntrySkeletonType<
  TypeProjectSectionFields,
  "projectSection"
>;
export type TypeProjectSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeProjectSectionSkeleton, Modifiers, Locales>;
