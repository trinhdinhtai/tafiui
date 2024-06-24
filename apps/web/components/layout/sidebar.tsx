import { ThemeToggle } from "@tafi/ui"

import Logo from "@/components/logo"

export default function Sidebar() {
  return (
    <aside className="bg-card fixed z-30 flex flex-col md:sticky md:top-0 md:h-dvh md:w-[240px] md:border-e xl:w-[260px]">
      <div className="flex flex-col gap-2 px-4 pt-2 md:px-3 md:pt-4">
        <div className="flex items-center justify-between border-b pb-2 max-md:hidden">
          <Logo />
        </div>
      </div>

      <div className="flex-1"></div>
      <div className="flex items-center border-t px-4 pb-2 pt-1 md:px-3">
        <ThemeToggle />
      </div>
    </aside>
  )
}
