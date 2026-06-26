import { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import { GlassCard } from "./primitives";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
}

export function ImageGallery({
  images,
  emptyMessage = "Project screenshots will be added soon.",
}: {
  images?: GalleryImage[];
  emptyMessage?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const hasImages = images && images.length > 0;

  if (!hasImages) {
    return (
      <GlassCard className="grid place-items-center px-6 py-14 text-center">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-2xl border border-glass-border bg-white/5 text-muted-foreground">
          <ImageIcon className="h-5 w-5" />
        </div>
        <p className="text-sm font-semibold">{emptyMessage}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          A carousel and lightbox are already wired up for future uploads.
        </p>
      </GlassCard>
    );
  }

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? 0 : (i + 1) % images!.length));
  const prev = () => setActive((i) => (i === null ? 0 : (i - 1 + images!.length) % images!.length));

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images!.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-glass-border bg-white/5"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal
          aria-label="Image viewer"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            type="button"
            className={cn("absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-glass-border bg-white/5 text-foreground")}
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); close(); }}
          >
            <X className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-glass-border bg-white/5"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-glass-border bg-white/5"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <img
            src={images![active].src}
            alt={images![active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-elegant"
          />
        </div>
      )}
    </>
  );
}
