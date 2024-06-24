import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-title relative bg-gradient-to-tr from-white/60 via-white/90 to-white/50 bg-clip-text text-2xl font-semibold text-transparent md:mr-4"
    >
      TafiUI
    </Link>
  )
}
