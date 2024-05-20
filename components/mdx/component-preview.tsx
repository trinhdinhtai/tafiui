"use client"

import { Children, HTMLAttributes, Suspense, useMemo, useState } from "react"
import { Index } from "@/__registry__"
import { ReloadIcon } from "@radix-ui/react-icons"
import { Loader } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ComponentPreviewProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  align?: "center" | "start" | "end"
  description?: string
}

export default function ComponentPreview({
  name,
  children,
  align = "center",
  description,
  className,
  ...props
}: ComponentPreviewProps) {
  const Codes = Children.toArray(children) as React.ReactElement[]
  const Code = Codes[0]

  const [key, setKey] = useState(0)

  const Preview = useMemo(() => {
    const Component = Index[name]?.component

    if (!Component) {
      return (
        <p className="font-mono text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component key={key} />
  }, [name, key])

  const codeString = useMemo(() => {
    if (typeof Code?.props["data-rehype-pretty-code-figure"] !== "undefined") {
      const [, Button] = Children.toArray(
        Code.props.children
      ) as React.ReactElement[]
      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1)
  }

  return (
    <div
      className={cn(
        "group relative mb-4 mt-6 flex flex-col space-y-2",
        className
      )}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="relative rounded-md border">
          <div className="relative flex items-center justify-end p-4">
            <Button size="icon" variant="ghost" onClick={reloadComponent}>
              <ReloadIcon />
            </Button>
          </div>

          <div
            className={cn("flex min-h-[350px] w-full justify-center p-10", {
              "items-center": align === "center",
              "items-start": align === "start",
              "items-end": align === "end",
            })}
          >
            <Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </Suspense>
          </div>

          {/* <div className="lab-bg absolute inset-0 h-full w-full bg-[radial-gradient(#00000055_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]" /> */}
        </TabsContent>

        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_figure]:my-0">{Code}</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
