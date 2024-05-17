import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function HeroSection() {
  const newComponent =
    siteConfig.components.find((component) => component.new) ||
    siteConfig.components[0]

  return (
    <section className="">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <span className="bg-gradient-to-b from-black to-black/40 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-5xl md:text-6xl lg:text-7xl/none">
            Make your websites look 10x awesome
          </span>
          <p className="w-full bg-gradient-to-b from-black to-black/40 bg-clip-text px-10 text-transparent dark:from-white dark:to-white/40 md:text-xl lg:text-lg xl:text-xl">
            Copy paste the most trending components and use them in your
            websites without having to worry about styling and animations.
          </p>
        </div>

        <div className="flex justify-center gap-2">
          <Link
            href={newComponent.path}
            className={cn(buttonVariants(), "gap-2 no-underline")}
          >
            Browse components
          </Link>

          <a
            href="https://github.com/gonzalochale/chonza"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "gap-2 no-underline"
            )}
          >
            Star on GitHub <Icons.Github />
          </a>
        </div>
      </div>
    </section>
  )
}
