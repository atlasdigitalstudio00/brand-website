import type { MetadataRoute } from "next";

import { latestArticles } from "@/content/blog";
import { products } from "@/content/products";
import { featuredResources } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pages = ["", "/about", "/blog", "/resources", "/shop", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() })),
    ...latestArticles.map((article) => ({ url: `${baseUrl}${article.href}`, lastModified: new Date(article.isoDate) })),
    ...featuredResources.map((resource) => ({ url: `${baseUrl}${resource.href}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${baseUrl}/shop/${product.slug}`, lastModified: new Date() })),
  ];
}