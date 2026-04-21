import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const timeline = [
  { year: "2024 — Present", title: "Independent SEO & Content Consultant", desc: "Helping startups and editorial brands grow organically through search-first content systems." },
  { year: "2022 — 2024", title: "SEO & Content Lead", desc: "Owned organic strategy across multiple verticals — from technical audits to topic clusters and editorial calendars." },
  { year: "2020 — 2022", title: "IT Specialist & Web Developer", desc: "Built and maintained WordPress sites, managed hosting, and optimized for performance and security." },
  { year: "2018 — 2020", title: "Foundations in IT", desc: "Studied computing fundamentals, networking, and web technologies. First freelance writing gigs." },
];

const competencies = [
  { title: "Technical SEO", points: ["Crawl & indexation audits", "Schema markup & structured data", "Core Web Vitals & performance", "Internal linking architecture"] },
  { title: "Content Strategy", points: ["Topic clusters & pillar pages", "Search intent mapping", "Editorial calendars", "E-E-A-T optimization"] },
  { title: "IT & Web", points: ["WordPress development", "Hosting & DNS management", "Security & backups", "Analytics setup (GA4, GSC)"] },
];

const About = () => {
  return (
    <Layout>
      <section className="container py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-6">About</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05]">
            A kinetic polymath at the intersection of <span className="text-gradient">search, story, and systems.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I'm Prabesh — I write, I optimize, I build. Over the years I've worn many hats, and I've learned that the best digital experiences happen when content, technology, and strategy speak the same language.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-16 md:py-24">
        <SectionHeading eyebrow="Journey" title="A non-linear path." />
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background" />
                <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">{t.year}</p>
                  <h3 className="font-display text-xl font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="container py-20 md:py-28">
        <SectionHeading eyebrow="Competencies" title="Detailed skill breakdown." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {competencies.map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
              <h3 className="font-display text-xl font-semibold mb-5">{c.title}</h3>
              <ul className="space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
