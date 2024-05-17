"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  siteConfig.components.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="flex w-full items-center gap-10 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Open navigation">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left">
            <SheetTitle>
              <Link href="/" onClick={() => setOpen(false)}>
                {siteConfig.name}
              </Link>
            </SheetTitle>
          </SheetHeader>

          <ScrollArea className="mt-6">
            <div className="flex flex-col gap-4">
              <span className="scroll-m-20 font-medium tracking-tight">
                Getting Started
              </span>

              <div className="flex flex-col gap-2">
                {siteConfig.docs.map((doc) => (
                  <Link
                    key={doc.path}
                    href={doc.path}
                    className={cn(
                      buttonVariants({ variant: "link", size: "sm" }),
                      "justify-start px-0 text-muted-foreground hover:text-foreground hover:no-underline",
                      pathname === `${doc.path}` && "text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <span className="scroll-m-20 font-medium tracking-tight">
                Components
              </span>

              <div className="flex flex-col gap-2">
                {siteConfig.components.map((component) => (
                  <Link
                    key={component.path}
                    href={component.path}
                    className={cn(
                      buttonVariants({ variant: "link", size: "sm" }),
                      "justify-start gap-2 px-0 text-muted-foreground hover:text-foreground hover:no-underline",
                      pathname === `${component.path}` && "text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {component.title}
                    {component.new && <Badge variant="outline">New</Badge>}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}
