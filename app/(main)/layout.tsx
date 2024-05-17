import { PropsWithChildren } from "react"

import Sidebar from "@/components/layout/side-bar"

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="container flex w-full flex-1 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10">
      <Sidebar />

      <article className="prose dark:prose-invert mdx min-w-0 max-w-3xl items-start justify-start py-8">
        {children}
      </article>
    </div>
  )
}
