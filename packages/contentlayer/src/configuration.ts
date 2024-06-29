import { defineDocumentType, type Args } from "contentlayer/source-files"

export type Options = Partial<{}>

export function create() {
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

  return {
    Doc,
  }
}

export function createConfig(options?: Options): Args {
  const config = create()

  return {
    contentDirPath: "content",
    documentTypes: [config.Doc],
  }
}

export const defaultConfig: Args = createConfig()
