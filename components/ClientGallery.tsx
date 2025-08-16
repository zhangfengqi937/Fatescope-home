'use client';

export default function ClientGallery({ photos }: { photos: string[] }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      {photos.map((src, i) => (
        <div key={src} className="mb-4 break-inside-avoid">
          <img
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-2xl shadow cursor-zoom-in"
            onClick={() => (window as any).__fsOpenLightbox?.(i)}
          />
        </div>
      ))}
    </div>
  );
}
