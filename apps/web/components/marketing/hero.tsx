import Image from "next/image"

export default function Hero() {
  return (
    <>
      {/* Background overlay */}
      <Image
        src="/images/hero.png"
        fill
        className="object-cover"
        alt="Hero Image"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-70" />

      <section className="container relative mt-48 flex max-w-5xl items-center justify-center">
        <div className="space-y-4">
          <h1
            className={
              "leading-0 md:leading-0 mx-auto mt-1 max-w-lg bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-center text-5xl tracking-tighter text-transparent sm:max-w-xl md:max-w-xl md:pb-0 md:text-6xl lg:max-w-3xl lg:text-8xl"
            }
          >
            Primitive first - well curated UI library.
          </h1>

          <p className="text-muted-foreground text-balance text-center">
            Move faster with beautiful, responsive UI components and website
            templates with modern design, 100% free and open-source.
          </p>
        </div>
      </section>
    </>
  )
}
