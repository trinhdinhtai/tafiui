import type { DocsPageBase, MetaPageBase, Source, VirtualFile } from "./types"

export function createContentlayerSource<
  Meta extends MetaPageBase,
  Docs extends DocsPageBase,
>(metas: Meta[], pages: Docs[]): Source<{ metaData: Meta; pageData: Docs }> {
  return {
    files: [
      ...metas.map<VirtualFile>((meta) => ({
        type: "meta",
        path: meta._raw.sourceFilePath,
        data: meta,
      })),
      ...pages.map<VirtualFile>((page) => ({
        type: "page",
        path: page._raw.sourceFilePath,
        data: page,
      })),
    ],
  }
}
