import type { MDXOptions } from "contentlayer/core"
import { defineDocumentType } from "contentlayer/source-files"

export interface Config {
  contentDirPath: string
  Meta: DocumentType
  Docs: DocumentType
  mdx: MDXOptions
}

export type Options = Partial<{
  /**
   * Where the docs files located
   * @defaultValue "docs"
   */
  docsPattern: string

  /**
   * @defaultValue "content"
   */
  contentDirPath: string

  /**
   * The directory path for images
   * @defaultValue "./public"
   */
  imgDirPath: string

  mdx: MDXOptions
  codeOptions: RehypeCodeOptions
  docFields: Record<string, FieldDef>
  docsComputedFields: ComputedFields<"Docs">
  metaFields: Record<string, FieldDef>
  metaComputedFields: ComputedFields<"Meta">
}>

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))
