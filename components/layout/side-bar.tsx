"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollArea } from "@radix-ui/react-scroll-area"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-[49px] z-50 hidden h-[calc(100dvh-98px)] w-full gap-10 py-8 md:block">
      <ScrollArea className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <span className="scroll-m-20 font-medium tracking-tight">
            Getting Started
          </span>

          <div className="flex flex-col gap-2">
            {siteConfig.docs.map((doc) => (
              <Link
                key={doc.path}
                href={doc.path}
                className="flex items-center gap-3"
              >
                <Button
                  variant="link"
                  size="sm"
                  className={cn(
                    "px-0 text-muted-foreground hover:text-foreground hover:no-underline",
                    pathname === `${doc.path}` && "text-foreground"
                  )}
                >
                  {doc.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="scroll-m-20 font-medium tracking-tight">
            Components
          </span>

          <div className="flex flex-col gap-2">
            {siteConfig.components.map((component) => (
              <Link
                key={component.path}
                href={component.path}
                className="flex items-center gap-3"
              >
                <Button
                  variant="link"
                  size="sm"
                  className={cn(
                    "px-0 text-muted-foreground hover:text-foreground hover:no-underline",
                    pathname === `${component.path}` && "text-foreground"
                  )}
                >
                  {component.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
