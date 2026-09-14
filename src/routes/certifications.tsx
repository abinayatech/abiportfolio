import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Award, X } from "lucide-react";
import { Section, PageHeader, Reveal, GlassCard } from "@/components/site/primitives";
import { certifications } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Abinaya S" },
      { name: "description", content: "Certifications from IEEE, LinkedIn Learning, Deloitte (Forage) and Outskill." },
      { property: "og:title", content: "Certifications — Abinaya S" },
      { property: "og:description", content: "Professional certifications and credentials." },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Section>
      <PageHeader eyebrow="Certifications" title="Credentials" description="Coursework and verified credentials." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <GlassCard className="p-4">
              <div
  onClick={() => setActive(c.image)}
  className="block w-full cursor-pointer overflow-hidden rounded-xl border border-glass-border bg-white/5"
>
  <img
    src={c.image}
    alt={`${c.name} certificate`}
    loading="lazy"
    className="aspect-[4/3] w-full object-cover bg-white transition-transform duration-500 hover:scale-[1.03]"
  />
</div>
              <div className="mt-4 flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-primary text-white shadow-glow">
                  <Award className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold">{c.name}</p>
                  <p className="text-xs text-primary">{c.org}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.description}</p>
                  {c.verifyUrl && (
  <a
    href={c.verifyUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-block rounded-lg bg-gradient-primary px-4 py-2 text-xs font-semibold text-white hover:opacity-90"
  >
    View Badge
  </a>
)}
                </div>
              </div>
              
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {active && (
        <div role="dialog" aria-modal className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 p-4 backdrop-blur" onClick={() => setActive(null)}>
          <button type="button" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-glass-border bg-white/5" aria-label="Close" onClick={() => setActive(null)}>
            <X className="h-4 w-4" />
          </button>
          <img src={active} alt="Certificate" onClick={(e) => e.stopPropagation()} className="max-h-[88vh] max-w-[94vw] rounded-xl object-contain shadow-elegant" />
        </div>
      )}
    </Section>
  );
}
