import type { Product, Tool } from "@/types/content";

export const products: Product[] = [
  {
    slug: "ats-resume-toolkit",
    name: "ATS-Optimized Resume & Cover Letter Toolkit",
    shortDescription: "Beat the bots and land the interview with 3 ATS-ready resume templates, 2 cover letter frameworks, and a comprehensive audit checklist.",
    description: "Stop getting ghosted by recruiters. Most resumes never reach human reviewers because they get filtered out by automated Applicant Tracking Systems (ATS). This toolkit provides recruiter-approved formatting, optimal keyword placement, and clean reverse-chronological layouts engineered to pass through 99% of ATS filters without errors. Fully editable for Microsoft Word and Google Docs.",
    price: "See on Gumroad",
    productType: "Career Template Toolkit",
    features: [
      "3 ATS-Ready Resume Templates: Minimalist, modern, and executive styles designed to pass 99% of ATS filters",
      "2 High-Conversion Cover Letter Templates: Storytelling structures that grab recruiter attention",
      "1 Comprehensive ATS Audit Checklist: Step-by-step verification before submitting applications",
      "100% Editable Formats: Instant plug-and-play compatibility with Microsoft Word (.docx) and Google Docs",
      "Recruiter-Approved Layouts: Clean reverse-chronological hierarchy designed for both bots and humans",
      "Instant Digital Access: Download immediately and start tailoring your dream job applications in minutes",
    ],
    whoItIsFor: "Job seekers, software developers, career switchers, and new graduates seeking an unfair advantage in crowded hiring pipelines.",
    purchaseUrl: "https://atlasstudio4.gumroad.com/l/ats-resume-toolkit",
    badge: "Digital product",
    image: {
      src: "/images/products/ats-resume-toolkit/ats-resume-toolkit-preview.png",
      alt: "ATS-Optimized Resume and Cover Letter Toolkit preview showing laptop mockup and templates",
    },
  },
  {
    slug: "team-avatar-maker",
    name: "Team Avatar Maker",
    shortDescription: "Create customizable avatars for teams, profiles, communities, and digital projects.",
    description: "An interactive avatar generator for designing profile visuals quickly. Choose variations for face shape, hair, skin tone, eyes, accessories, and background before exporting a final image.",
    price: "See on Gumroad",
    productType: "Interactive avatar generator",
    features: [
      "Customizable face, hair, skin tone, and expression combinations",
      "Profile-ready variations for teams, communities, and personal brands",
      "Downloadable PNG, JPEG, and WebP exports",
      "Fast browser-based workflow for creating consistent digital avatars",
    ],
    whoItIsFor: "Teams, creators, and digital professionals who want simple, expressive profile art for websites, communities, portfolios, and projects.",
    purchaseUrl: "https://atlasstudio4.gumroad.com/l/avatar-generator",
    badge: "Digital product",
    image: {
      src: "/images/products/team-avatar-maker/team-avatar-maker-preview.webp",
      alt: "Team Avatar Maker interactive avatar generator preview",
    },
  },
  {
    slug: "developer-documentation-kit",
    name: "Developer Documentation Kit",
    shortDescription: "A practical starting point for clear software documentation.",
    description: "A focused set of prompts and structures for making project context easier to find, maintain, and share.",
    price: "Coming soon",
    productType: "Template kit",
    features: ["Project README structure", "Decision record prompts", "Release notes checklist"],
    whoItIsFor: "Developers and small technical teams who want a repeatable documentation baseline.",
    badge: "In development",
  },
  {
    slug: "saas-planning-template",
    name: "SaaS Planning Template",
    shortDescription: "A structured workspace for shaping and documenting a SaaS product.",
    description: "A planning framework for organizing product decisions, user needs, scope, and delivery notes in one place.",
    price: "Coming soon",
    productType: "Planning template",
    features: ["Product brief structure", "Scope and milestone prompts", "Launch readiness checklist"],
    whoItIsFor: "Creators, freelancers, and product-minded developers planning a digital product.",
    badge: "In development",
  },
];

export const recommendedTools: Tool[] = [
  { name: "Linear", description: "A focused workspace for planning product work and projects.", category: "Project Management", href: "#" },
  { name: "Raycast", description: "A fast command layer for navigating tools and automating routine work.", category: "Productivity", href: "#" },
  { name: "Figma", description: "A collaborative canvas for shaping interfaces, systems, and ideas.", category: "Design", href: "#" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
