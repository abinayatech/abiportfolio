import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Github, Lightbulb, Layers, ListChecks, Network, Wrench } from "lucide-react";
import { Section, Reveal, GlassCard, GradientCard } from "@/components/site/primitives";
import { ImageGallery } from "@/components/site/image-gallery";
import { featuredProjects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({

  loader: ({ params }) => {
  console.log("Slug:", params.slug);

  const project = featuredProjects.find((p) => p.slug === params.slug);

  console.log("Project:", project);

  if (!project) throw notFound();

  return { project };
},
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Abinaya S` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.tagline },
        ]
      : [],
  }),
  errorComponent: ({ error }) => (
    <div className="py-24 text-center text-sm text-muted-foreground">{error.message}</div>
  ),
  notFoundComponent: () => (
    <div className="py-24 text-center">
      <p className="text-lg font-semibold">Project not found</p>
      <Link to="/projects" className="mt-3 inline-flex items-center gap-1 text-sm text-primary"><ArrowLeft className="h-3 w-3" /> Back to projects</Link>
    </div>
  ),
  component: ProjectDetail,
});
function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <Section>
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Hero */}
        <GradientCard className="mt-6 p-8">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{project.emoji}</span>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {project.period}
              </p>

              <h1 className="mt-2 text-4xl font-black">
                {project.title}
              </h1>

              <p className="mt-3 text-muted-foreground">
                {project.tagline}
              </p>
            </div>
          </div>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-white"
          >
            <Github className="h-4 w-4" />
            View Repository
          </a>
        </GradientCard>

        {/* Overview */}
        <Reveal>
          <GlassCard className="mt-8">
            <h2 className="text-xl font-bold">Overview</h2>
            <p className="mt-3 text-muted-foreground">
              {project.overview}
            </p>
          </GlassCard>
        </Reveal>

        {/* Problem + Solution */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          <Reveal>
            <GlassCard>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h2 className="font-bold">Problem Statement</h2>
              </div>

              <p className="mt-3 text-muted-foreground">
                {project.problem}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal>
            <GlassCard>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                <h2 className="font-bold">Solution</h2>
              </div>

              <p className="mt-3 text-muted-foreground">
                {project.solution}
              </p>
            </GlassCard>
          </Reveal>

        </div>

        {/* Features */}
        <Reveal>
          <GlassCard className="mt-6">
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              <h2 className="font-bold">
                Key Features
              </h2>
            </div>

            <ul className="mt-5 space-y-3">
              {project.features.map((feature: string) => (
                <li
                  key={feature}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        {/* Architecture */}
        <Reveal>
          <GlassCard className="mt-6">
            <div className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              <h2 className="font-bold">
                Architecture
              </h2>
            </div>

            <p className="mt-3 text-muted-foreground">
              {project.architecture}
            </p>
          </GlassCard>
        </Reveal>

        {/* Challenges + Future */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          <Reveal>
            <GlassCard>
              <h2 className="font-bold">
                Challenges
              </h2>

              <ul className="mt-4 space-y-2">
                {project.challenges.map((item: string) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal>
            <GlassCard>
              <h2 className="font-bold">
                Future Improvements
              </h2>

              <ul className="mt-4 space-y-2">
                {project.future.map((item: string) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

        </div>

        {/* Tech Stack */}
        <Reveal>
          <GlassCard className="mt-6">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <h2 className="font-bold">
                Technology Stack
              </h2>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-md border border-glass-border bg-white/5 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        {/* Gallery */}
        <Reveal>
          <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold">
              Project Gallery
            </h2>

            <ImageGallery />
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
function Block({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </GlassCard>
  );
}
