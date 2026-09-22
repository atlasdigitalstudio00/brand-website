export const siteConfig = {
  name: "Atlas Studio",
  tagline: "Practical digital resources for modern work.",
  description:
    "Templates, guides, tools, and practical resources for developers, creators, freelancers, and digital professionals.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const footerNavigation = [
  {
    title: "Explore",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
      { label: "Shop", href: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Affiliate Disclosure", href: "/terms#affiliate-disclosure" },
    ],
  },
] as const;
