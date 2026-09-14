import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Copy, Github, Linkedin, Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { toast } from "sonner";
import { Section, PageHeader, Reveal, GlassCard, Spinner } from "@/components/site/primitives";
import { profile } from "@/data/portfolio";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abinaya S" },
      { name: "description", content: "Get in touch with Abinaya S for opportunities, collaborations or questions." },
      { property: "og:title", content: "Contact — Abinaya S" },
      { property: "og:description", content: "Email, GitHub, LinkedIn and a contact form." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Required").max(2000),
});
type FormValues = z.infer<typeof schema>;

function Contact() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
  try {
    // Fake sending delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setDone(true);
    reset();

    toast.success("✅ Message sent successfully! Thank you for reaching out.");
  } catch {
    toast.error("Something went wrong.");
  }
};
  return (
    <Section>
      <PageHeader eyebrow="Contact" title="Let's connect" description="Email, social, or send a message — I read everything." />
      <div className="mt-5 flex justify-center">
  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
    🟢 Available for Internships     • Full-Time Opportunities    • Freelance Projects
    <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted-foreground">
  Whether you have an internship opportunity, project idea, research collaboration,
  or simply want to connect, I'd be happy to hear from you.
</p>
  </span>
</div>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="space-y-4">
            <QuickAction icon={Mail} label="Email" value={profile.email} copy={profile.email} href={`mailto:${profile.email}`} />
            <QuickAction icon={Github} label="GitHub" value="github.com/abinayatech" href={profile.github} external />
            <QuickAction icon={Linkedin} label="LinkedIn" value="linkedin.com/in/abinayatechdev" href={profile.linkedin} external />
            <GlassCard className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white"><MapPin className="h-4 w-4" /></div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="truncate text-sm font-semibold">{profile.location}</p>
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <GlassCard>
            {done ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-white"><Check className="h-6 w-6" /></div>
                <p className="mt-4 text-lg font-bold">🎉 Message Sent Successfully!</p>
                <p className="mt-2 text-sm text-muted-foreground">
Thank you for reaching out. I'll get back to you within 24–48 hours.
</p>
                <button type="button" onClick={() => setDone(false)} className="mt-4 text-xs font-semibold text-primary">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" error={errors.name?.message}>
                    <input {...register("name")} className="input" placeholder="Enter your full name" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input type="email" {...register("email")} className="input" placeholder="Enter your email address" />
                  </Field>
                </div>
                <Field label="Subject (optional)" error={errors.subject?.message}>
                  <input {...register("subject")} className="input" placeholder="Project, Internship or Collaboration" />
                </Field>
                <Field label="Message" error={errors.message?.message}>
                  <textarea rows={5} {...register("message")} className="input resize-none"placeholder="Tell me about your project, opportunity, or collaboration."  />
                </Field>
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60">
                  {isSubmitting ? <Spinner /> : <Send className="h-4 w-4" />} {isSubmitting ? "Sending…" : "Send message"}
                </button>
                <p className="text-xs text-muted-foreground">
  ✓ Usually responds within 24 hours.
</p>
              </form>
            )}
          </GlassCard>
        </Reveal>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--color-glass-border);
          background: oklch(1 0 0 / 0.04);
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, background .15s;
        }
        .input::placeholder { color: oklch(0.70 0.03 260); }
        .input:focus { border-color: var(--color-primary); background: oklch(1 0 0 / 0.06); }
      `}</style>
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function QuickAction({ icon: Icon, label, value, copy, href, external }: { icon: any; label: string; value: string; copy?: string; href?: string; external?: boolean }) {
  return (
    <GlassCard className="flex items-center justify-between gap-3 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white"><Icon className="h-5 w-5" /></div>
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="truncate text-sm font-semibold">{value}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        {copy && (
          <button type="button" onClick={() => { navigator.clipboard.writeText(copy); toast.success(`${label} copied`); }}
            className="grid h-8 w-8 place-items-center rounded-lg border border-glass-border bg-white/5 text-muted-foreground hover:text-foreground" aria-label={`Copy ${label}`}>
            <Copy className="h-3.5 w-3.5" />
          </button>
        )}
        {href && (
          <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
            className="rounded-lg border border-glass-border bg-white/5 px-3 py-1.5 text-xs font-semibold hover:bg-white/10">
            Open
          </a>
        )}
      </div>
    </GlassCard>
  );
}
