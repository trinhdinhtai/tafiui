import { PropsWithChildren } from "react"

import SiteHeader from "@/components/layout/site-header"

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  )
}
