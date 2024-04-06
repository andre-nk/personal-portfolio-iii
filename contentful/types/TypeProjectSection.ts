import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectSectionFields {
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
