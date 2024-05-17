import { docs as allDocs } from "#site/content"

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
}

export default async function DocsPage({ params }: DocsPageProps) {
  const doc = await getDocFromParams(params)
  return <div>DocsPage</div>
}