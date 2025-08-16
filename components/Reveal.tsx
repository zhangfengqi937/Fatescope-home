// components/Reveal.tsx
import { useEffect, useRef, useState } from "react";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  /** ms，进入视口后延迟开始动画 */
  delay?: number;
  /** 进入时上浮位移（px） */
  y?: number;
  /** 仅首次触发 */
  once?: boolean;
  /** 观察阈值 */
  threshold?: number;
};

export default function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  y = 12,
  once = true,
  threshold = 0.14,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShow(false);
          }
        });
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const Comp: any = as;

  return (
    <Comp
      ref={ref as any}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0) scale(1)" : `translateY(${y}px) scale(0.98)`,
        transition:
          "opacity 600ms ease, transform 600ms ease",
        transitionDelay: show ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Comp>
  );
}
