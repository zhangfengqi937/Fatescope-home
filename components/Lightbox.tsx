'use client';
import { useEffect, useRef, useState } from 'react';

// 给 window 增加类型（避免 TS 报错）
declare global {
  interface Window {
    __fsOpenLightbox?: (i: number) => void;
  }
}

export default function Lightbox({ images }: { images: string[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
  const close = () => dialogRef.current?.close();

  // 键盘快捷键
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length]);

  // 把 open 函数挂到 window（保留闭包）
  useEffect(() => {
    window.__fsOpenLightbox = (i: number) => {
      const n = images.length;
      const safe = ((i % n) + n) % n;
      setIdx(safe);
      dialogRef.current?.showModal();
    };
    return () => { delete window.__fsOpenLightbox; };
  }, [images.length]);

  // 触摸滑动
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/75 p-0 rounded-xl overflow-hidden"
      onClose={() => (document.documentElement.style.overflow = '')}
      onCancel={(e) => e.preventDefault()}
    >
      <div
        className="relative bg-black"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* 图片 */}
        <img
          src={images[idx]}
          alt=""
          className="max-h-[88vh] max-w-[92vw] object-contain m-auto select-none"
          draggable={false}
        />

        {/* 关闭（右上角 胶囊按钮） */}
        <button
          onClick={close}
          aria-label="Close"
          className="group absolute top-3 right-3 flex items-center gap-2 rounded-full
                     bg-white/90 text-slate-900/90 hover:bg-white px-3 py-1.5
                     shadow-lg ring-1 ring-slate-200 backdrop-blur"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6L18 18M6 18L18 6" />
          </svg>
          <span className="text-sm font-medium">Close</span>
        </button>

        {/* 上一张（左侧 圆形按钮） */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12
                     rounded-full bg-white/90 hover:bg-white text-slate-900
                     shadow-lg ring-1 ring-slate-200 backdrop-blur flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 -translate-x-px" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* 下一张（右侧 圆形按钮） */}
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12
                     rounded-full bg-white/90 hover:bg-white text-slate-900
                     shadow-lg ring-1 ring-slate-200 backdrop-blur flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-px" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {/* 计数器（底部中间） */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full
                     bg-white/85 text-slate-900 text-xs px-3 py-1 ring-1 ring-slate-200 shadow"
        >
          {idx + 1} / {images.length}
        </div>
      </div>
    </dialog>
  );
}
