import { docs as allDocs } from "#site/content"

import { MDXContent } from "@/components/mdx"

export default function DocsPage() {
  const introduction = allDocs.find(
    (doc) => doc.slugAsParams === "introduction"
  )

  if (!introduction?.published) return null

  return <MDXContent code={introduction.body} />
}
