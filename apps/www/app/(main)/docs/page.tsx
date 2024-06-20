import { docs as allDocs } from "#site/content"

import { MDXContent } from "@/components/mdx"
import { MdxPageHeader } from "@/components/mdx/mdx-page-header"

export default function DocsPage() {
  const introduction = allDocs.find(
    (doc) => doc.slugAsParams === "introduction"
  )

  if (!introduction?.published) return null

  return (
    <>
      <MdxPageHeader
        heading={introduction.title}
        text={introduction.description}
      />
      <MDXContent code={introduction.body} />
    </>
  )
}
