import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  FolderGit2,
  ArrowRight,
  FlaskConical,
  Mail,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Counter, GlassCard } from "@/components/site/primitives";
import { profile, stats, heroTechBadges } from "@/data/portfolio";

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % profile.roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-6 sm:px-8 sm:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" /> Open to internships & opportunities
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              <span className="block">HI, I'M</span>
              <span className="block text-gradient">{profile.name}</span>
            </h1>

            <div className="mt-4 flex h-8 items-center font-mono text-sm text-muted-foreground sm:text-base">
              <span className="mr-2 text-primary">›</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-foreground"
                >
                  {profile.roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-105">
                <FolderGit2 className="h-4 w-4" /> View Projects <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/research" className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-white/5 px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10">
                <FlaskConical className="h-4 w-4" /> Explore Research
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-white/5 px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10">
                <Mail className="h-4 w-4" /> Contact Me
              </Link>
      
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <Github className="h-4 w-4" /> github.com/abinayatech
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <Linkedin className="h-4 w-4" /> linkedin.com/in/abinayatechdev
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {profile.location}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-130"
          ><div
    className="
      absolute
      -inset-8
      -z-10
      rounded-full
      bg-linear-to-r
      from-violet-500/30
      via-fuchsia-500/20
      to-cyan-500/30
      blur-[120px]
      opacity-70
    "
  />
            <div className="relative aspect-[3/4] rounded-[40px] bg-gradient-primary p-[2px] shadow-2xl animate-float">
              <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-card">
                <img
  src={profile.photo}
  alt={`Portrait of ${profile.name}`}
  loading="eager"
  className="
    h-full
    w-full
    object-cover
    object-center
    transition-transform
    duration-500
    hover:scale-105
  "
/>
                <div className="absolute inset-0 bg-linear-to-tr from-background/60 via-transparent to-transparent" />
              </div>
            </div>
            <div className="glass-strong absolute -bottom-4 -left-2 rounded-xl px-3 py-2 text-xs">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
              <p className="font-semibold">Coimbatore, TN</p>
            </div>
            <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-4 py-2">
    <p className="text-[10px] uppercase tracking-wider text-gray-400">
        Available
    </p>

    <p className="text-sm font-semibold text-emerald-400">
        🟢 Internship & Entry-Level
    </p>
</div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {heroTechBadges.map((t) => (
            <span key={t} className="rounded-full border border-glass-border bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <GlassCard key={s.label} className="p-4 text-center">
              <p className="text-2xl font-black text-gradient sm:text-3xl">
                <Counter to={s.value} suffix={s.suffix ?? ""} />
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
