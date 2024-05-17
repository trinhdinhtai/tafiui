"use client"

import React, { Suspense, useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  align?: "center" | "start" | "end"
  description?: string
}

export default function ComponentPreview({
  name,
  align = "center",
  description,
  ...props
}: ComponentPreviewProps) {
  const [forceUpdate, setForceUpdate] = useState(false)
  const [key, setKey] = useState(0)

  const LoadComponent = () => {
    const LazyComponent = React.useMemo(() => {
      return React.lazy(() => import(`@/components/examples/${name}`))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forceUpdate])

    return LazyComponent
  }

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1)
  }

  const LazyComponent = LoadComponent()
  return (
    <div
      className={cn(
        "relative mb-4 mt-6 flex h-[550px] w-full items-center justify-center overflow-hidden rounded-[1rem] border bg-background p-4"
      )}
      {...props}
    >
      <Suspense fallback={<div></div>}>
        <LazyComponent key={key} />
      </Suspense>

      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-2"
        onClick={reloadComponent}
      >
        <ReloadIcon />
      </Button>
    </div>
  )
}
