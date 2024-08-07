"use client"

import defaultMdxComponents from "@tafi/ui/mdx"
import { useMDXComponent } from "next-contentlayer/hooks"

interface MDXProps {
  code: string
}

const components = {
  ...defaultMdxComponents,
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
