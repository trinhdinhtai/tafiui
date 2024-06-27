import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-title from-primary/60 via-primary/90 to-primary/50 relative bg-gradient-to-tr bg-clip-text text-2xl font-semibold text-transparent md:mr-4"
    >
      TafiUI
    </Link>
  )
}
