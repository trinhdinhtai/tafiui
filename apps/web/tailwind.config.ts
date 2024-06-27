import sharedConfig from "@tafi/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
}

export default config
