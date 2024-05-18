import { title } from "process"

export const siteConfig = {
  name: "TafiUI",
  links: {
    github: "https://github.com/trinhdinhtai/tafiui",
    twitter: "https://twitter.com/trinhdinhtai_",
  },
  docs: [
    {
      title: "Introduction",
      path: "/docs",
      new: false,
    },
    {
      title: "Installation",
      path: "/docs/installation",
      new: false,
    },
    {
      title: "Changelog",
      path: "/docs/changelog",
      new: false,
    },
  ],
  components: [
    {
      title: "Glitch Banner",
      path: "/components/glitch",
      new: false,
    },
    {
      title: "Number Ticker",
      path: "/components/number-ticker",
      new: false,
    },
    {
      title: "Marquee",
      path: "/components/marquee",
      new: false,
    },
  ],
}
