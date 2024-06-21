import type { Metadata } from "next"

import "./globals.css"

import { Toaster } from "@tafi/ui"
import { cn } from "@tafi/utils"

import { fontGrotesk, fontMono, fontSans } from "@/lib/fonts"
import SiteHeader from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: "TafiUI - Enpower the use of styled and animated components",
  description: "Take your React applications to the next level with TafiUI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
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
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
