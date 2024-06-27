"use client"

import { useCallback, type ButtonHTMLAttributes } from "react"
import { cn } from "@tafi/utils"
import { cva } from "class-variance-authority"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const buttonVariants = cva("size-7 rounded-full p-1.5 text-muted-foreground", {
  variants: {
    dark: {
      true: "dark:bg-secondary dark:text-secondary-foreground",
      false:
        "bg-secondary text-secondary-foreground dark:bg-transparent dark:text-muted-foreground",
    },
  },
})

export function ThemeToggle({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement {
  const { setTheme, resolvedTheme } = useTheme()

  const onToggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [setTheme, resolvedTheme])

  return (
    <button
      aria-label="Toggle Theme"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5",
        className
      )}
      onClick={onToggle}
      type="button"
      {...props}
    >
      <Sun className={cn(buttonVariants({ dark: false }))} />
      <Moon className={cn(buttonVariants({ dark: true }))} />
    </button>
  )
}
