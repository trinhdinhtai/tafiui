import { ComponentProps, HTMLAttributes } from "react"
import * as runtime from "react/jsx-runtime"
import Link from "next/link"

import { cn } from "@/lib/utils"

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Link: ({ className, ...props }: ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
}

interface MDXProps {
  code: string
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
