'use client';

type Props = { photos: string[] };

export default function ClientGallery({ photos }: Props) {
  const openAt = (idx: number) => (window as any).__fsOpenLightbox?.(idx);

  // 简单从文件名推个 alt（没有更好的就用它）
  const guessAlt = (src: string) =>
    src.split('/').pop()?.split('.').shift()?.replace(/[-_]/g, ' ') || 'photo';

  return (
    <div className="columns-2 md:columns-3 xl:columns-4 gap-3 md:gap-4">
      {photos.map((src, i) => (
        <figure
          key={`${src}-${i}`}
          className="
            group mb-3 md:mb-4 break-inside-avoid relative
            rounded-card ring-1 ring-slate-200/50 bg-white/40 backdrop-blur
            shadow-none transition-shadow duration-300 hover:shadow-card focus-within:shadow-card
          "
        >
          {/* 用 button 包裹，语义更好；draggable 避免拖拽 */}
          <button
            type="button"
            onClick={() => openAt(i)}
            className="block w-full text-left rounded-card focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              src={src}
              alt={guessAlt(src)}
              loading={i < 1 ? 'eager' : 'lazy'}         // 首图提速，其他懒加载
              decoding="async"
              draggable={false}
              className="
                w-full h-auto rounded-card
                cursor-zoom-in
                transition-transform duration-300 ease-out
                group-hover:scale-[1.02]
                will-change-transform
              "
            />
          </button>

          {/* 隐藏的说明，辅助技术可读 */}
          <figcaption className="sr-only">{guessAlt(src)}</figcaption>
        </figure>
      ))}
    </div>
  );
}
