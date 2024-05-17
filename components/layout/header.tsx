import MainNav from "@/components/layout/main-nav"
import MobileNav from "@/components/layout/mobile-nav"
import NavOptions from "@/components/layout/nav-options"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex h-12 items-center justify-center md:container max-md:px-4">
        <MobileNav />
        <MainNav />
        <NavOptions />
      </div>
    </header>
  )
}
