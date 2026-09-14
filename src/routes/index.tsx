import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section, Reveal, GlassCard } from "@/components/site/primitives";
import { featuredProjects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Abinaya S — Aspiring Software Developer | ML & AI",
      },
      {
        name: "description",
        content:
          "Portfolio of Abinaya S — aspiring software developer building full-stack applications and exploring machine learning, artificial intelligence, and agentic AI.",
      },
      {
        property: "og:title",
        content: "Abinaya S — Software Developer & AI Portfolio",
      },
      {
        property: "og:description",
        content:
          "Aspiring Software Developer | Full-Stack Application Builder | Machine Learning & AI Enthusiast | Exploring Agentic AI.",
      },
    ],
  }),
  component: Home,
});
function Home() {
  return (
    <>
      <Hero />
      <Section>
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Featured Work</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">Selected projects</span>
              </h2>
            </div>
            <Link to="/projects" className="hidden items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground sm:inline-flex">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="block h-full">
                <GlassCard className="flex h-full flex-col">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{p.period}</p>
                  <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md border border-glass-border bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Read case study <ArrowRight className="h-3 w-3" />
                  </span>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
