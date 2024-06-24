import type { Metadata } from "next"

import { fontGrotesk, fontMono, fontSans } from "@/lib/fonts"

import "./globals.css"
import "@tafi/ui/style.css"

import { cn } from "@tafi/utils"

import SiteHeader from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: "TafiUI - Enpower the use of styled and animated components",
  description: "Take your React applications to the next level with TafiUI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontGrotesk.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
