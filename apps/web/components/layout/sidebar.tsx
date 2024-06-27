"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollArea, ScrollViewport, ThemeToggle } from "@tafi/ui"
import { cn } from "@tafi/utils"

import { SIDEBAR_LINKS } from "@/config/sidebar"
import Logo from "@/components/logo"

export default function Sidebar() {
  const pathname = usePathname()
  const isActive = (href: string) => href === pathname

  return (
    <aside className="bg-card fixed z-30 flex flex-col md:sticky md:top-0 md:h-dvh md:w-[240px] md:border-e xl:w-[260px]">
      <div className="flex flex-col gap-2 px-4 pt-2 md:px-3 md:pt-4">
        <div className="flex items-center justify-between border-b pb-2 max-md:hidden">
          <Logo />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <ScrollViewport
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 2px, white 24px, white calc(100% - 24px), transparent calc(100% - 2px))",
          }}
        >
          <div className="flex flex-col gap-8 px-4 py-6 md:px-3">
            {SIDEBAR_LINKS.map((link) => (
              <div key={link.category} className="flex flex-col">
                <span className="px-2 pb-2 font-medium">{link.category}</span>
                <ul className="flex flex-col">
                  {link.items.map((link) => (
                    <Link
                      key={link.href}
                      className={cn(
                        "text-muted-foreground flex w-full items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [&_svg]:size-4",
                        isActive(link.href) &&
                          "dark:text-violet-40 bg-zinc-100 font-medium text-violet-500 dark:bg-zinc-800"
                      )}
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollViewport>
      </ScrollArea>
      <div className="flex items-center border-t px-4 pb-2 pt-1 md:px-3">
        <ThemeToggle />
      </div>
    </aside>
  )
}
