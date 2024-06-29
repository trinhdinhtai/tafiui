import { HTMLAttributes } from "react"
import { cn } from "@tafi/utils"

interface MdxPageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function MdxPageHeader({
  heading,
  text,
  className,
  ...props
}: MdxPageHeaderProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {heading}
      </h1>
      {text && <p className="text-muted-foreground">{text}</p>}
    </div>
  )
}
