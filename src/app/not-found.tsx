import { NotFoundExperience, type Destination } from "@/components/layout/NotFoundExperience";
import { latestArticles } from "@/content/blog";
import { products } from "@/content/products";
import { featuredResources } from "@/content/resources";
import { siteConfig } from "@/config/site";

const pageDescriptions: Record<string, string> = {
  "/": "Start fresh from the Atlas Studio homepage.",
  "/blog": "Practical articles on careers, workflows, and development.",
  "/resources": "Templates, checklists, and guides for modern work.",
  "/shop": "Digital products built to save you time.",
  "/about": "Who we are and how we build.",
  "/contact": "Get in touch with the Atlas Studio team.",
};

export default function NotFound() {
  const destinations: Destination[] = [
    ...siteConfig.navigation.map((item) => ({
      title: item.label,
      description: pageDescriptions[item.href] ?? "",
      href: item.href,
      kind: "Page" as const,
    })),
    ...featuredResources.map((resource) => ({
      title: resource.title,
      description: resource.description,
      href: resource.href,
      kind: "Resource" as const,
    })),
    ...products.map((product) => ({
      title: product.name,
      description: product.shortDescription,
      href: `/shop/${product.slug}`,
      kind: "Product" as const,
    })),
    ...latestArticles.map((article) => ({
      title: article.title,
      description: article.description,
      href: article.href,
      kind: "Article" as const,
    })),
  ];

  return <NotFoundExperience destinations={destinations} />;
}
