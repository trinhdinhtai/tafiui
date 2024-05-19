"use client"

import { useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCommandMenuProvider } from "@/context/command-menu-provider"
import { FileIcon, PaletteIcon, Puzzle } from "lucide-react"

import { siteConfig } from "@/config/site"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

type Groups = Array<{
  heading: string
  actions: Array<{
    name: string
    icon: JSX.Element
    onSelect: () => void | Promise<void | boolean>
  }>
}>

export function CommandMenu() {
  const { showCommandMenu, setShowCommandMenu } = useCommandMenuProvider()

  const router = useRouter()

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setShowCommandMenu((prevState) => !prevState)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setShowCommandMenu])

  const forwardToRoute = useCallback(
    (route: string) => {
      router.replace(route)
      setShowCommandMenu(false)
    },
    [router, setShowCommandMenu]
  )

  return (
    <CommandDialog open={showCommandMenu} onOpenChange={setShowCommandMenu}>
      <CommandInput placeholder="Type to search ↵" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Documentation">
          {siteConfig.docs.map((doc) => (
            <CommandItem
              key={doc.path}
              onSelect={() => forwardToRoute(doc.path)}
              className="gap-2"
            >
              <FileIcon />
              {doc.title}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Components">
          {siteConfig.components.map((component) => (
            <CommandItem
              key={component.path}
              onSelect={() => forwardToRoute(component.path)}
              className="gap-2"
            >
              <Puzzle />
              {component.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
