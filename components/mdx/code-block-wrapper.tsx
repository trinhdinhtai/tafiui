"use client"

import { HTMLAttributes, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockWrapperProps {
  props: HTMLAttributes<HTMLElement>
}

export default function CodeBlockWrapper({
  props: { className, children, ...props },
}: CodeBlockWrapperProps) {
  const [open, setOpen] = useState(false)
  const [isContentOverflowing, setIsContentOverflowing] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const isContentOverflowing =
        containerRef.current.scrollHeight > containerRef.current.clientHeight

      if (isContentOverflowing) setIsContentOverflowing(true)
    }
  }, [])

  const handleToggleExpanding = () => {
    setOpen((prev) => !prev)

    // TODO: Scroll to the bottom of the container when expanding
    if (!open && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }

  if (props.hasOwnProperty("data-rehype-pretty-code-figure"))
    return (
      <figure
        ref={containerRef}
        data-rehype-pretty-code-figure
        className={cn(
          "relative mb-4 mt-6 max-h-[400px] overflow-hidden rounded-lg border bg-background",
          open && "max-h-[none]"
        )}
      >
        {children}

        {isContentOverflowing && (
          <>
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
              onClick={handleToggleExpanding}
            >
              {open ? "Hide" : "Show More"}
            </Button>
          </>
        )}
      </figure>
    )

  return <figure>{children}</figure>
}
