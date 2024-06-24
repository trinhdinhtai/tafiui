import { defineConfig } from "tsup"

export default defineConfig((options) => ({
  entry: ["src/**/*.tsx"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  minify: true,
  external: ["react"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
  ...options,
}))
