// components/Gallery.tsx
"use client";

import { useEffect, useState } from "react";
import type { ImageItem } from "../lib/getImages";

export default function Gallery({ images }: { images: ImageItem[] }) {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openLightbox = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  // 键盘事件：Esc 关闭，左右切图
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    // 打开时禁滚动
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, images.length]);

  return (
    <>
      {/* Masonry 瀑布流 */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {images.map((img, i) => (
          <div key={img.src} className="mb-4 break-inside-avoid">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded((s) => ({ ...s, [i]: true }))}
              className={[
                "w-full h-auto rounded-2xl shadow cursor-zoom-in transition-all duration-500",
                loaded[i] ? "opacity-100 blur-0" : "opacity-0 blur-sm",
              ].join(" ")}
              onClick={() => openLightbox(i)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-[92vw] max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[idx].src}
              alt={images[idx].alt}
              className="max-w-full max-h-[92vh] rounded-lg shadow-lg"
            />
            {/* 关闭 */}
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 bg-white/90 rounded-full w-9 h-9 grid place-items-center text-slate-800 shadow"
            >
              ✕
            </button>
            {/* 上一张 */}
            <button
              aria-label="Prev"
              onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-5 text-white/90 hover:text-white"
            >
              ‹
            </button>
            {/* 下一张 */}
            <button
              aria-label="Next"
              onClick={() => setIdx((i) => (i + 1) % images.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-5 text-white/90 hover:text-white"
            >
              ›
            </button>
            {/* 底部说明（可选） */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {idx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
