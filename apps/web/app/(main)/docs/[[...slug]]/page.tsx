import { notFound } from "next/navigation"
import { allDocs } from "@/.contentlayer/generated"

import { MDXContent } from "@/components/mdx"
import { MdxPageHeader } from "@/components/mdx-page-header"

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

  return (
    <div className="md:px-46 pd:pt-12 mx-auto flex w-full max-w-[840px] flex-1 flex-col gap-6 px-4 pt-10">
      <MdxPageHeader heading={doc.title} text={doc.description} />

      <div className="prose">
        <MDXContent code={doc.body.code} />
      </div>
    </div>
  )
}
