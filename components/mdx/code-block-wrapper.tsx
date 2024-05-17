"use client"

import { HTMLAttributes, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockWrapperProps {
  props: HTMLAttributes<HTMLElement>
}

export default function CodeBlockWrapper({
  props: { className, children, ...props },
}: CodeBlockWrapperProps) {
  const [open, setOpen] = useState(false)

  if (props.hasOwnProperty("data-rehype-pretty-code-figure"))
    return (
      <figure
        data-rehype-pretty-code-figure
        className={cn(
          "relative mb-4 mt-6 overflow-hidden rounded-lg border bg-background",
          open ? "h-auto" : "h-[400px]"
        )}
      >
        {children}

        <div
          className={cn(
            "absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-b from-transparent to-white dark:to-[#0D0D0C]",
            open ? "hidden" : "block"
          )}
        />

        <Button
          size="sm"
          variant="outline"
          className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide" : "Show More"}
        </Button>
      </figure>
    )

  return <figure>{children}</figure>
}
