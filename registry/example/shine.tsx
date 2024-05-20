import HeroSection from "@/components/marketing/hero-sections"

export function Shine({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      {children}
      <div className="animate-shine absolute top-[calc(-10%)] z-10 h-[calc(70%)] w-5 bg-black/30 blur-2xl dark:bg-white/30 md:h-[calc(90%)] md:w-8"></div>
    </div>
  )
}

export default function ShineExample() {
  return (
    <Shine>
      <HeroSection />
    </Shine>
  )
}
