import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, Wrench } from "lucide-react";
import { Section, PageHeader, Reveal, GlassCard } from "@/components/site/primitives";
import { skills } from "@/data/portfolio";

const ICONS = [Code2, Database, Wrench];

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Abinaya S" },
      { name: "description", content: "Technical skills: languages, frameworks, databases, developer tools and AI." },
      { property: "og:title", content: "Skills — Abinaya S" },
      { property: "og:description", content: "Languages, frameworks, databases, developer tools and AI." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <Section>
      <PageHeader eyebrow="Skills" title="Technical Skills" description="Tools and technologies I use to build software." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = ICONS[i] ?? Code2;
          return (
            <Reveal key={s.category} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{s.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-lg border border-glass-border bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground transition-all hover:border-primary/40 hover:bg-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
