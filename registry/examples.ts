import { Registry } from "@/registry/schema"

export const examples: Registry = [
  {
    name: "glitch-demo",
    type: "components:example",
    files: ["example/glitch-demo.tsx"],
  },
  {
    name: "number-ticker-demo",
    type: "components:example",
    registryDependencies: ["framer-motion"],
    files: ["example/number-ticker-demo.tsx"],
  },
  {
    name: "marquee-demo",
    type: "components:example",
    registryDependencies: ["framer-motion"],
    files: ["example/marquee-demo.tsx"],
  },
  {
    name: "shine-demo",
    type: "components:example",
    registryDependencies: ["framer-motion"],
    files: ["example/shine-demo.tsx"],
  },
]
