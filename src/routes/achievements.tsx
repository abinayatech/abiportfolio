import { createFileRoute } from "@tanstack/react-router";
import { Trophy, X } from "lucide-react";
import{ useState } from "react";
import { Section, PageHeader, Reveal, GlassCard } from "@/components/site/primitives";
import { achievements } from "@/data/portfolio";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Abinaya S" },
      { name: "description", content: "Hackathon results, awards and competitive programming milestones." },
      { property: "og:title", content: "Achievements — Abinaya S" },
      { property: "og:description", content: "IEEE SparkNova 3rd place, Israel-India Hackathon, LeetCode and more." },
    ],
  }),
  component: Achievements,
});

function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
    <Section>
      <PageHeader eyebrow="Achievements" title="Milestones" description="Recognitions, prizes and milestones along the way." />
      <div className="mx-auto mt-12 max-w-4xl">
        <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/40 before:to-transparent sm:before:left-6">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="relative pl-14 sm:pl-16">
                <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow sm:h-12 sm:w-12">
                  <Trophy className="h-5 w-5" />
                </div>
                <GlassCard>
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                    <div className="min-w-0">
                      <p className="text-base font-bold">{a.title}</p>
                      <p className="text-sm text-primary">{a.org}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{a.date}</p>
                    </div>
                    {a.image && (
  <button
    type="button"
    onClick={() => setSelectedImage(a.image)}
    className="w-full overflow-hidden rounded-lg border border-glass-border transition hover:scale-105 sm:w-48"
  >
    <img
      src={a.image}
      alt={`${a.title} certificate`}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  </button>
)}
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
        </Section>

    {selectedImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        onClick={() => setSelectedImage(null)}
      >
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-5 right-5 rounded-full bg-white/10 p-2 hover:bg-white/20"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        <img
          src={selectedImage ?? ""}
          alt="Certificate"
          onClick={(e) => e.stopPropagation()}
          className="max-h-[92vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
        />
      </div>
    )}
  </>
);
}