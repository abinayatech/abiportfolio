import { motion } from "framer-motion";
import { type ReactNode, type HTMLAttributes, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />;
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl text-center"
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function GlassCard({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function GradientCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-glass-border p-6",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(120%_120%_at_0%_0%,oklch(0.65_0.24_300/0.15),transparent_60%)]" />
      {children}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span>
      {v}
      {suffix}
    </span>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-glass-border bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function EmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="glass flex flex-col items-center justify-center rounded-2xl px-6 py-16 text-center">
      {icon && (
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-glass-border bg-white/5 text-muted-foreground">
          {icon}
        </div>
      )}
      <p className="text-base font-semibold">{title}</p>
      {description && <p className="mt-1 max-w-md text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white",
        className,
      )}
      aria-hidden
    />
  );
}
