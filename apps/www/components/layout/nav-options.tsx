"use client"

import Link from "next/link"
import { useCommandMenuProvider } from "@/context/command-menu-provider"
import { CommandIcon, SearchIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import ThemeToggle from "@/components/theme-toggle"

export default function NavOptions() {
  const { setShowCommandMenu } = useCommandMenuProvider()

  return (
    <div className="flex items-center justify-end gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowCommandMenu(true)}
        className="gap-2"
      >
        <span className="flex items-center gap-2">
          <SearchIcon size={12} />
          Search documentation...
        </span>
        <span className="flex items-center gap-0.5 rounded-md border border-border px-1.5 text-[10px]">
          <CommandIcon size={10} />K
        </span>
      </Button>

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
