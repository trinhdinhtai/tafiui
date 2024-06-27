import { notFound } from "next/navigation"
import { allDocs } from "@/.contentlayer/generated"

async function getDocFromParams(params: DocsPageProps["params"]) {
  const slug = params.slug?.join("/") || ""

  const doc = allDocs.find((doc) => {
    return doc.slugAsParams === slug
  })

  if (!doc) return null

  return doc
}

interface DocsPageProps {
  params: {
    slug: string[]
  }
}

export default async function DocPage({ params }: DocsPageProps) {
  const doc = await getDocFromParams(params)

  if (!doc) return notFound()

  return <div>page</div>
}
