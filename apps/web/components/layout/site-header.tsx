import Link from "next/link"
import { Card } from "@repo/ui/card"
import { Button } from "@tafi/ui"
import { MenuIcon } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 mx-auto h-[4rem]">
      <nav
        className={
          "absolute inset-x-0 mx-2 mt-2 bg-gradient-to-tr from-transparent via-transparent/10 to-transparent/5 pb-5 shadow-lg backdrop-blur-lg"
        }
      >
        <div className="mx-auto mt-5 max-w-3xl items-center gap-x-14 rounded-3xl border-2 border-white/10 px-10 py-5 backdrop-blur-md md:flex">
          <div className="flex items-center justify-between py-1">
            <Link
              href="/"
              className="relative bg-gradient-to-tr from-white/60 via-white/90 to-white/50 bg-clip-text font-title text-2xl font-semibold text-transparent md:mr-4"
            >
              TafiUI
            </Link>

            {/* <div className="flex md:hidden">
              <Button variant="test" size="icon">
                Test
              </Button>
            </div> */}

            <Card href="/" title="sfsfsfsf">
              Test 2
            </Card>
          </div>
        </div>
      </nav>
    </header>
  )
}
