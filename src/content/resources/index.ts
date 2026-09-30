import type { Resource } from "@/types/content";

export const featuredResources: Resource[] = [
  {
    title: "ATS Resume & Cover Letter Toolkit",
    description: "Recruiter-approved resume and cover letter templates engineered to pass 99% of ATS screening filters.",
    category: "Career Tools",
    type: "template",
    slug: "ats-resume-toolkit",
    href: "/resources/ats-resume-toolkit",
    cta: "Get toolkit",
    externalUrl: "https://atlasstudio4.gumroad.com/l/ats-resume-toolkit",
    image: {
      src: "/images/products/ats-resume-toolkit/ats-resume-toolkit-preview.png",
      alt: "ATS-Optimized Resume and Cover Letter Toolkit preview",
    },
  },
  {
    title: "Developer Documentation Kit",
    description: "Practical templates for documenting software projects.",
    category: "Developer Resources",
    type: "developer resource",
    slug: "developer-documentation-kit",
    href: "/resources/developer-documentation-kit",
    cta: "View resource",
  },
  {
    title: "Docker Deployment Checklist",
    description: "A practical checklist for preparing a Dockerized project for deployment.",
    category: "Guides & Tutorials",
    type: "checklist",
    slug: "docker-deployment-checklist",
    href: "/resources/docker-deployment-checklist",
    cta: "View resource",
  },
  {
    title: "SaaS Planning Template",
    description: "A structured framework for planning and documenting SaaS products.",
    category: "Digital Products",
    type: "template",
    slug: "saas-planning-template",
    href: "/resources/saas-planning-template",
    cta: "View resource",
  },
];

export function getResource(slug: string) {
  return featuredResources.find((resource) => resource.slug === slug);
}
