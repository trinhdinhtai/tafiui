import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@tafi/utils"
import { LinkIcon } from "lucide-react"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadingProps<T extends HeadingTag> = Omit<
  ComponentPropsWithoutRef<T>,
  "as"
> & {
  as?: T
}

export function Heading<T extends HeadingTag = "h1">({
  as,
  className,
  ...props
}: HeadingProps<T>): React.ReactElement {
  const As = as ?? "h1"

  return (
    <As className={cn("scroll-m-20", className)} {...props}>
      {props.id ? (
        <a className="group" href={`#${props.id}`}>
          {props.children}
          <LinkIcon
            aria-label="Link to section"
            className="text-muted-foreground ms-2 inline size-4 opacity-0 transition-opacity group-hover:opacity-100"
          />
        </a>
      ) : (
        props.children
      )}
    </As>
  )
}
