import { notFound } from "next/navigation"
import { components as allComponents } from "#site/content"

import { MDXContent } from "@/components/mdx"

interface ComponentsProps {
  params: {
    slug: string[]
  }
}

async function getComponentFromParams(params: ComponentsProps["params"]) {
  const slug = params.slug?.join("/") || ""

  const doc = allComponents.find((doc) => {
    return doc.slugAsParams === slug
  })

  if (!doc) return null

  return doc
}

export default async function ComponentsPage({ params }: ComponentsProps) {
  const doc = await getComponentFromParams(params)

  if (!doc?.published) return notFound()

  return <MDXContent code={doc.body} />
}
