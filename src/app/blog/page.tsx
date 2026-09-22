import { ArticleCard } from "@/components/ui/Cards";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageIntro } from "@/components/layout/PageIntro";
import { latestArticles } from "@/content/blog";

export default function BlogPage() {
  return <><PageIntro title="Ideas for modern digital work." description="Clear, practical articles about development, productivity, documentation, and building useful systems." /><section className="py-20"><Container><SectionHeading title="Latest articles" /><div className="mt-10 grid gap-5 lg:grid-cols-3">{latestArticles.map((article) => <ArticleCard key={article.title} article={article} />)}</div></Container></section></>;
}