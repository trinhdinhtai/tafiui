import { ThemeProvider } from "./theme-provider"

export interface RootProviderProps {
  children: React.ReactNode
}

export function RootProvider({
  children,
}: RootProviderProps): React.ReactElement {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
