import type { MDX } from "contentlayer/core"
import type { RawDocumentData } from "contentlayer/source-files"

export interface MetaPageBase {
  _id: string
  _raw: RawDocumentData
  type: "Meta"
  title?: string | undefined
  pages?: string[]
  icon?: string
  root?: boolean
}

export interface DocsPageBase {
  _id: string
  _raw: RawDocumentData
  type: "Docs"
  title: string
  description?: string | undefined
  icon?: string
  body: MDX
}

export interface VirtualFile {
  /**
   * Relative path
   *
   * @example `docs/page.mdx`
   */
  path: string
  type: "page" | "meta"
  data: unknown
}

export interface PageData {
  icon?: string
  title: string
}

export interface MetaData {
  icon?: string
  title?: string
  root?: boolean
  pages?: string[]
  defaultOpen?: boolean
}

export interface SourceConfig {
  pageData: PageData
  metaData: MetaData
}

export interface Source<Config extends SourceConfig> {
  /**
   * @internal
   */
  _config?: Config
  files: VirtualFile[] | ((rootDir: string) => VirtualFile[])
}
