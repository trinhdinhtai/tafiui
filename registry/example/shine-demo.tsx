import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import HeroSection from "@/components/marketing/hero-sections"

export function Shine({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      {children}
      <div className="absolute top-[calc(-10%)] z-10 h-[calc(70%)] w-5 animate-shine bg-black/30 blur-2xl dark:bg-white/30 md:h-[calc(90%)] md:w-8"></div>
    </div>
  )
}

export default function ShineExample() {
  return (
    <Shine>
      <section className="p-10">
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

          <div className="flex items-center justify-center">
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
    </Shine>
  )
}
