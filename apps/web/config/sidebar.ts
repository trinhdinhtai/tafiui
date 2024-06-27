interface SidebarLinkItem {
  title: string
  href: string
}

interface SidebarLink {
  category: string
  items: SidebarLinkItem[]
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    category: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/components",
      },
    ],
  },
]
