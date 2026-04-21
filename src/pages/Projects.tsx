import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard, { Project } from "@/components/ProjectCard";

const allProjects: Project[] = [
  {
    title: "Organic Growth for SaaS Startup",
    category: "SEO Case Study",
    description: "Restructured site architecture and built a topic-cluster content engine, lifting non-brand organic traffic substantially in six months.",
    metrics: "+218% organic sessions in 6 months",
    tags: ["Technical SEO", "Content Strategy", "GA4"],
  },
  {
    title: "Editorial Blog for Travel Brand",
    category: "Content",
    description: "Wrote and optimized 40+ destination guides with intent-mapped keywords, capturing featured snippets across high-volume queries.",
    metrics: "12 featured snippets earned",
    tags: ["Long-form", "Keyword Research", "On-page SEO"],
  },
  {
    title: "WordPress Migration & Speed",
    category: "IT / Web",
    description: "Migrated a legacy site to a modern stack, fixed Core Web Vitals, and set up automated backups, monitoring, and CDN.",
    metrics: "LCP 4.8s → 1.2s",
    tags: ["WordPress", "Core Web Vitals", "Hosting"],
  },
  {
    title: "Local SEO for Service Business",
    category: "Local SEO",
    description: "Optimized Google Business Profile, built local citations, and produced city-specific landing pages to dominate map-pack rankings.",
    metrics: "3x increase in qualified leads",
    tags: ["GBP", "Local Citations", "Content"],
  },
  {
    title: "E-commerce Content Refresh",
    category: "Content",
    description: "Rewrote 200+ product descriptions and category pages with structured data and search-intent alignment.",
    metrics: "+47% category page traffic",
    tags: ["Product Copy", "Schema", "CRO"],
  },
  {
    title: "Site Audit & Recovery",
    category: "Technical SEO",
    description: "Diagnosed a post-update traffic drop, fixed indexation issues, removed thin content, and restored visibility within two months.",
    metrics: "Recovered 85% of lost traffic",
    tags: ["Audit", "Indexation", "E-E-A-T"],
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="Selected case studies & work."
          description="A snapshot of how I've helped brands grow through SEO, content, and technical execution."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
