import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Section, PageHeader, Reveal, GlassCard } from "@/components/site/primitives";
import { experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Abinaya S" },
      { name: "description", content: "Internship experience of Abinaya S — Full Stack Development and Data Analytics." },
      { property: "og:title", content: "Experience — Abinaya S" },
      { property: "og:description", content: "Internship experience and professional highlights." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <Section>
      <PageHeader eyebrow="Experience" title="Internships & Roles" description="Professional internship experience in full-stack development and data analytics, contributing to real-world software solutions using modern engineering practices." />
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/40 before:to-transparent sm:before:left-6">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.05}>
              <div className="relative pl-14 sm:pl-16">
                <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow sm:h-12 sm:w-12">
                  <Briefcase className="h-5 w-5" />
                </div>
                <GlassCard>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-base font-bold sm:text-lg">{e.role}</p>
                      <p className="text-sm font-semibold text-primary">{e.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
  <div className="flex flex-col items-end gap-2">
  <span className="rounded-full border border-glass-border bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
    {e.period}
  </span>

  <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
    {e.company === "Benchmarrk"
      ? "Full Stack"
      : "Remote"}
  </span>
</div>


</div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-6 mb-2 font-semibold text-sm uppercase tracking-wide text-primary">
  Professional Highlights
</h3>

<ul className="space-y-2">
  {e.highlights?.map((item) => (
    <li
      key={item}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <CheckCircle2 className="h-4 w-4 text-primary" />
      {item}
    </li>
  ))}
</ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.tech.map((t) => (
                      <span key={t} className="rounded-md border border-glass-border bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                     </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
