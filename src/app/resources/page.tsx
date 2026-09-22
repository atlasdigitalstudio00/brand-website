import { ResourceCard } from "@/components/ui/Cards";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { featuredResources } from "@/content/resources";

export default function ResourcesPage() {
  return <><PageIntro title="Resources that keep work moving." description="Templates, checklists, and practical guides designed to save time and make digital work easier to navigate." /><section className="py-20"><Container><div className="grid gap-5 lg:grid-cols-3">{featuredResources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}</div></Container></section></>;
}