'use client';

type Props = { photos: string[] };

export default function ClientGallery({ photos }: Props) {
  const openAt = (idx: number) => (window as any).__fsOpenLightbox?.(idx);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-3 sm:gap-4">
      {photos.map((src, i) => (
        <div
          key={src}
          className="
            group mb-3 sm:mb-4 break-inside-avoid relative
            rounded-card ring-1 ring-slate-200/50 bg-white/40 backdrop-blur
            shadow-none transition-shadow duration-300
            hover:shadow-card focus-within:shadow-card
          "
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="
              w-full h-auto rounded-card
              cursor-zoom-in
              transition-transform duration-300 ease-out
              group-hover:scale-[1.02]
              will-change-transform
            "
            onClick={() => openAt(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openAt(i);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Open photo"
          />
        </div>
      ))}
    </div>
  );
}
