import { MDXOptions } from "contentlayer/core"
import {
  Args,
  ComputedFields,
  defineDocumentType,
  FieldDef,
} from "contentlayer/source-files"

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
  docFields: Record<string, FieldDef>
  docsComputedFields: ComputedFields<"Docs">
  metaFields: Record<string, FieldDef>
  metaComputedFields: ComputedFields<"Meta">
}>

export function create(options: Options = {}) {
  const {
    docsPattern = "docs",
    contentDirPath = "content",
    imgDirPath = "./public",
    docFields,
    metaFields,
    docsComputedFields,
    metaComputedFields,
    mdx = {},
  } = options

  const Doc = defineDocumentType(() => ({
    name: "Doc",
    filePathPattern: `${docsPattern}/**/*.mdx`,
    fields: {
      title: {
        type: "string",
        required: true,
        description: "The title of the document",
      },
      description: {
        type: "string",
        required: true,
        description: "The description of the document",
      },
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
      ...docsComputedFields,
    },
  }))

  return {
    contentDirPath,
    Doc,
  }
}

export function createConfig(options?: Options): Args {
  const config = create()

  return {
    contentDirPath: config.contentDirPath,
    documentTypes: [config.Doc],
  }
}

export const defaultConfig: Args = createConfig()
