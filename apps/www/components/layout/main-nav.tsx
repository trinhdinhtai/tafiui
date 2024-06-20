"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function MainNav() {
  const pathname = usePathname()

  const newComponent =
    siteConfig.components.find((component) => component.new) ||
    siteConfig.components[0]

  return (
    <nav className="flex w-full items-center gap-10 max-md:hidden">
      <Link href="/" className="flex items-center gap-2">
        <h1 className="flex items-center gap-1 text-lg font-medium tracking-tighter">
          {siteConfig.name}
        </h1>
      </Link>

      <div className="flex items-center gap-10">
        <Link
          href="/docs"
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "text-muted-foreground hover:text-foreground hover:no-underline",
            pathname.includes("docs") && "text-foreground"
          )}
        >
          Docs
        </Link>

        <Link
          href={newComponent.path}
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "text-muted-foreground hover:text-foreground hover:no-underline",
            pathname.includes("components") && "text-foreground"
          )}
        >
          Components
        </Link>
      </div>
    </nav>
  )
}
