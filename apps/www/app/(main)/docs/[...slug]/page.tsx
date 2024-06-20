import { notFound } from "next/navigation"
import { docs as allDocs } from "#site/content"

import { MDXContent } from "@/components/mdx"
import { MdxPageHeader } from "@/components/mdx/mdx-page-header"

interface DocsPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(params: DocsPageProps["params"]) {
  const slug = params.slug?.join("/") || ""

  const doc = allDocs.find((doc) => {
    return doc.slugAsParams === slug
  })

  if (!doc) return null

  return doc
}

export default async function DocsPage({ params }: DocsPageProps) {
  const doc = await getDocFromParams(params)

  if (!doc?.published) return notFound()

  return (
    <>
      <MdxPageHeader heading={doc.title} text={doc.description} />
      <MDXContent code={doc.body} />
    </>
  )
}
