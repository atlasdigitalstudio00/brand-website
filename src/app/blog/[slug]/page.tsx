import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { getArticle, latestArticles } from "@/content/blog";
import { siteConfig } from "@/config/site";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return latestArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: `${article.title} | ${siteConfig.name}`, description: article.description, alternates: { canonical: `/blog/${article.slug}` }, openGraph: { title: article.title, description: article.description, type: "article", publishedTime: article.isoDate, section: article.category, tags: article.tags }, twitter: { card: "summary", title: article.title, description: article.description } };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = latestArticles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
  const structuredData = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.isoDate, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/blog/${article.slug}` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><ArticleLayout article={article} related={related} /></>;
}
