import React, { PropsWithChildren } from "react"

import Sidebar from "@/components/layout/sidebar"

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background relative flex min-h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
