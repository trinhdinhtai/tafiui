import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import ThemeToggle from "@/components/theme-toggle"

export default function NavOptions() {
  return (
    <div className="flex items-center justify-end gap-3">
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Give a star on GitHub"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "gap-2"
        )}
      >
        <span className="hidden md:block">Star on GitHub</span>
        <Icons.Github />
      </Link>
      <ThemeToggle />
    </div>
  )
}
