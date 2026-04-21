import { Link } from "react-router-dom";
import { ArrowRight, Search, PenLine, Code2, BarChart3, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard, { Project } from "@/components/ProjectCard";
import heroBg from "@/assets/hero-bg.jpg";

const skills = [
  { icon: Search, title: "SEO Strategy", desc: "Technical audits, keyword research, on-page & off-page optimization." },
  { icon: PenLine, title: "Content Writing", desc: "Long-form blogs, web copy, and editorial pieces that rank and convert." },
  { icon: Code2, title: "IT & Web", desc: "WordPress, hosting, performance tuning, and lightweight web builds." },
  { icon: BarChart3, title: "Analytics", desc: "GA4, Search Console, and data storytelling to drive decisions." },
  { icon: Globe, title: "Local SEO", desc: "Google Business Profile, citations, and geo-targeted content strategy." },
  { icon: Sparkles, title: "Brand Voice", desc: "Crafting tone and narrative that connects with intent-driven readers." },
];

const featuredProjects: Project[] = [
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
];

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1536}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="container relative py-24 md:py-36 lg:py-44">
          <div className="max-w-4xl animate-fade-in-up">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-6">
              SEO · Content · IT
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05]">
              Building search-first <span className="text-gradient">digital experiences.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Hi, I'm Prabesh Tamang — a multidisciplinary specialist helping brands grow through technical SEO, thoughtful content, and reliable IT foundations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="What I Do"
          title="A polymath toolkit for modern growth."
          description="I work at the intersection of search, story, and systems — turning organic visibility into a sustainable channel."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-soft transition-smooth"
            >
              <div className="inline-flex p-3 rounded-xl bg-accent text-primary mb-5 group-hover:scale-110 transition-smooth">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project showcase */}
      <section className="container py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that moved the needle."
          />
          <Button asChild variant="ghost">
            <Link to="/projects">
              All projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground tracking-tight max-w-3xl mx-auto leading-tight">
            Have a project that needs clarity, copy, or code?
          </h2>
          <p className="mt-5 text-primary-foreground/90 max-w-xl mx-auto">
            I'd love to hear about what you're building.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
