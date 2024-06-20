import Link from "next/link"

import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="flex h-12 items-center justify-start md:container max-md:px-4">
        <div className="text-sm text-muted-foreground">
          Building in public by{" "}
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold hover:underline"
          >
            Trinh Dinh Tai
          </Link>
        </div>
      </div>
    </footer>
  )
}
