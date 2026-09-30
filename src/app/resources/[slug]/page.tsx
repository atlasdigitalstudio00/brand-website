import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResourceDetail } from "@/components/layout/ResourceDetail";
import { featuredResources, getResource } from "@/content/resources";
import { siteConfig } from "@/config/site";

type ResourcePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return { title: `${resource.title} | ${siteConfig.name}`, description: resource.description, alternates: { canonical: `/resources/${resource.slug}` }, openGraph: { title: resource.title, description: resource.description, type: "website" } };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();
  return <ResourceDetail resource={resource} />;
}
