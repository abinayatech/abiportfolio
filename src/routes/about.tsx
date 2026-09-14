import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles, Target, Compass } from "lucide-react";
import { Section, PageHeader, Reveal, GlassCard, GradientCard } from "@/components/site/primitives";
import { profile, summary, education } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abinaya S" },
      { name: "description", content: "About Abinaya S — Computer Science undergraduate building scalable, AI-powered software." },
      { property: "og:title", content: "About — Abinaya S" },
      { property: "og:description", content: "Biography, education and current focus of Abinaya S." },
    ],
  }),
  component: About,
});

const focus = [
  { icon: Target, title: "Career Objective", body: "To grow as a Software Developer by building practical, user-focused applications and applying software development, machine learning, and AI technologies to real-world problems." },
  { icon: Compass, title: "Current Focus", body: "Building and improving full-stack applications while strengthening my software development skills. Exploring machine learning, agentic AI, modern web technologies, and practical approaches to solving real-world problems" },
  { icon: Sparkles, title: "Interests", body: "Full-Stack Development, Artificial Intelligence & Machine Learning, Prompt Engineering, Developer Tools and Software Architecture." },
];

function About() {
  return (
    <Section>
      <PageHeader eyebrow="About" title="About Me" description="A short look at who I am, what I'm building, and where I'm headed." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <GradientCard className="text-center">
            <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-glass-border">
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
            </div>
            <h2 className="mt-5 text-xl font-bold">{profile.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">B.E. Computer Science & Engineering</p>
            <p className="mt-1 text-xs text-muted-foreground">{profile.location}</p>
          </GradientCard>
        </Reveal>
        <Reveal delay={0.05}>
          <GlassCard>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Biography</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{summary}</p>
          </GlassCard>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {focus.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <GlassCard className="h-full">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl"><span className="text-gradient">Education</span></h2>
        </Reveal>
        <div className="mt-6 grid gap-4">
          {education.map((e, i) => (
            <Reveal key={e.institution} delay={i * 0.05}>
              <GlassCard>
                <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold sm:text-base">{e.institution}</p>
                    <p className="text-sm text-muted-foreground">{e.degree}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{e.period}</p>
                    <p className="text-sm font-semibold text-primary">{e.detail}</p>
                  </div>
                </div>
                
              </GlassCard>
            </Reveal>
          ))}
                </div>
      </div>

      <div className="mt-14">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">
            <span className="text-gradient">
              Professional Interests
            </span>
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <GlassCard className="text-center p-6">
              <div className="text-3xl">💻</div>
              <h3 className="mt-4 font-semibold">
                Full-Stack Development
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                React, Node.js, TypeScript
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.05}>
            <GlassCard className="text-center p-6">
              <div className="text-3xl">🤖</div>
              <h3 className="mt-4 font-semibold">
                Artificial Intelligence
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                AI Applications, Machine Learning
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="text-center p-6">
              <div className="text-3xl">🖥️</div>
              <h3 className="mt-4 font-semibold">
                Prompt Engineering
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                LLM, Generative AI
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.15}>
            <GlassCard className="text-center p-6">
              <div className="text-3xl">📄</div>
              <h3 className="mt-4 font-semibold">
                Open Source & Research
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                IEEE Publications, GitHub,Docker
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>

    </Section>
    
  );
}
