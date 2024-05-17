import { docs as allDocs } from "#site/content"

export default function DocsPage() {
  const introduction = allDocs.find(
    (doc) => doc.slugAsParams === "introduction"
  )

  if (!introduction?.published) return null

  return <div>DocsPage</div>
}
