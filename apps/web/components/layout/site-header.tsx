"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@tafi/ui"
import { cn } from "@tafi/utils"
import { MenuIcon, X } from "lucide-react"

import { NAVBAR_LINKS } from "@/config/nav"

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={
        "fixed inset-x-4 top-4 z-50 mx-auto max-w-3xl rounded-3xl border-2 border-white/10 px-10 py-5 shadow-lg backdrop-blur-lg"
      }
    >
      <div className="flex items-center justify-between py-1">
        <Link
          href="/"
          className="font-title relative bg-gradient-to-tr from-white/60 via-white/90 to-white/50 bg-clip-text text-2xl font-semibold text-transparent md:mr-4"
        >
          TafiUI
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center justify-center space-x-6 md:flex">
          {NAVBAR_LINKS.map((item, idx) => {
            return (
              <li
                key={idx}
                className={cn(
                  "text-sm font-medium text-zinc-400 duration-200 hover:text-zinc-200",
                  pathname === item.path ? "text-white/80" : ""
                )}
              >
                <Link href={item.path} className="block">
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile nav */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <ul className="divide-border mt-4 flex flex-col divide-y md:hidden">
          {NAVBAR_LINKS.map((item, idx) => {
            return (
              <li
                key={idx}
                className={cn(
                  "py-3 text-sm font-medium text-zinc-400 duration-200 hover:text-zinc-200",
                  pathname === item.path ? "text-white/80" : ""
                )}
              >
                <Link href={item.path} className="block">
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}
