import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Section, PageHeader, Reveal, GlassCard } from "@/components/site/primitives";
import { featuredProjects, additionalProjects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abinaya S" },
      { name: "description", content: "Featured and additional engineering projects by Abinaya S." },
      { property: "og:title", content: "Projects — Abinaya S" },
      { property: "og:description", content: "AI, full-stack and applied ML projects." },
    ],
  }),
  component: Projects,
});

function Projects() {
const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <Section>
      <PageHeader eyebrow="Projects" title="What I've been building" description="Showcasing production-ready software, AI-powered applications, research, and real-world engineering projects." />

      <div className="mt-12">
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Featured Projects</h2>
        </Reveal>
        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
             <Reveal key={p.slug} delay={i * 0.05}>
  <div
    className="block h-full cursor-pointer"
    onClick={() => setSelectedProject(p)}
  ><GlassCard className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
    
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{p.period}</p>
                  <h3 className="mt-2 text-lg font-bold flex items-start gap-2">
  <span className="text-xl">{p.emoji}</span>
  <span>{p.title}</span>
</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 5).map((t) => (
                      <span key={t} className="rounded-md border border-glass-border bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                  
                    <button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(p.repo, "_blank");
  }}
  className="grid h-8 w-8 place-items-center rounded-lg border border-glass-border bg-white/5 text-muted-foreground hover:text-foreground"
  aria-label="GitHub repository"
>
  <Github className="h-3.5 w-3.5" />
</button>
                  </div>
                </GlassCard>
</div>
            </Reveal>
          ))}
        </div>
      </div>
      {selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816] p-6"
    onClick={() => setSelectedProject(null)}
  >
    <GlassCard
  className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-primary/20 bg-[#0B1120] p-8 shadow-2xl"
  onClick={(e) => e.stopPropagation()}
>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            {selectedProject.emoji} {selectedProject.title}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {selectedProject.tagline}
          </p>
        </div>

        <button
          onClick={() => setSelectedProject(null)}
          className="text-xl font-bold"
        >
          ✕
        </button>
      </div>

      <div className="mt-8 space-y-8">

        <div>
          <h3 className="text-lg font-semibold text-primary">
            Overview
          </h3>

          <p className="mt-2">
            {selectedProject.overview}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary">
            Problem
          </h3>

          <p className="mt-2">
            {selectedProject.problem}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary">
            Solution
          </h3>

          <p className="mt-2">
            {selectedProject.solution}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary">
            Key Features
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5">
            {selectedProject.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary">
            Technologies
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {selectedProject.tech.map((tech: string) => (
              <span
                key={tech}
                className="rounded-md border border-glass-border bg-white/5 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => window.open(selectedProject.repo, "_blank")}
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white"
          >
            <Github className="h-4 w-4" />
            View GitHub Repository
          </button>
        </div>

      </div>
    </GlassCard>
  </div>
)}

      <div className="mt-16">
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Additional Projects</h2>
        </Reveal>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <GlassCard className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{p.emoji}</span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold">{p.title}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-glass-border bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</span>
                  ))}
                </div>
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary">
                  <Github className="h-3.5 w-3.5" /> View Repository <ExternalLink className="h-3 w-3" />
                </a>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
