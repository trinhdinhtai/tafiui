import { useMDXComponent } from "next-contentlayer/hooks"

interface MDXProps {
  code: string
}

const components = {}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
