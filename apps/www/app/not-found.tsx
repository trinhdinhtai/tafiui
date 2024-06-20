import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Not Found",
  description: "The route you're trying to access doesn't exist.",
}

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <h1 className="mb-4 font-mono text-6xl font-bold tracking-tight lg:text-7xl">
        404
      </h1>
      <h1 className="text-gradient text-5xl font-bold">Not Found</h1>
      <p className="mx-auto max-w-md text-muted-foreground">
        {"The page you're looking for doesn't exist"}
      </p>
      <Link href="/" className={cn(buttonVariants(), "flex gap-2")}>
        <ArrowLeft size={10} />
        <span>Back</span>
      </Link>
    </div>
  )
}
