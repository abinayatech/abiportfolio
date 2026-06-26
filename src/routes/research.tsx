import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical, FileText, Users, CheckCircle2 } from "lucide-react";
import { Section, PageHeader, Reveal, GlassCard, GradientCard } from "@/components/site/primitives";
import { research, featuredProjects } from "@/data/portfolio";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Abinaya S" },
      { name: "description", content: "Research publication on privacy-preserving federated learning by Abinaya S." },
      { property: "og:title", content: "Research — Abinaya S" },
      { property: "og:description", content: research.title },
      { property: "og:image", content: research.certificate },
    ],
  }),
  component: Research,
});

function Research() {
  const related = featuredProjects.find((p) => p.slug === research.relatedProjectSlug);
  return (
    <Section>
      <PageHeader
  eyebrow="Research"
  title="IEEE Xplore Publication"
  description="Published in IEEE Xplore"
/>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <GradientCard>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-primary" />
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                {research.status}
              </span>
            </div>
            <h2 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">{research.title}</h2>
            <p className="mt-2 text-sm font-semibold text-primary">{research.conference}</p>
            <p className="mt-3 text-sm text-muted-foreground">{research.summary}</p>

            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="h-4 w-4" /> {research.authors.join(", ")}
            </div>

            {research.paperUrl && (
              <a href={research.paperUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-white">
                <FileText className="h-4 w-4" />
View on IEEE Xplore
              </a>
            )}
          </GradientCard>

          <GlassCard className="mt-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Research Highlights</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {research.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {h}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="mt-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {research.tech.map((t) => (
                <span key={t} className="rounded-md border border-glass-border bg-white/5 px-2.5 py-1 font-mono text-xs">{t}</span>
              ))}
            </div>
          </GlassCard>

          {related && (
            <Link to="/projects/$slug" params={{ slug: related.slug }} className="mt-5 block">
              <GlassCard className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Related project</p>
                  <p className="mt-1 text-sm font-bold">{related.title}</p>
                </div>
                <span className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs font-semibold text-primary">View →</span>
              </GlassCard>
            </Link>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <GlassCard className="p-3">
            <p className="px-2 pb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">IEEE ICIRCA 2026 Presentation Certificate</p>
            <div className="overflow-hidden rounded-xl border border-glass-border">
              <img src={research.certificate} alt="IEEE ICIRCA 2026 Presentation Certificate" className="h-full w-full object-cover" />
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
