// components/Tag.tsx
import Link from "next/link";
import * as React from "react";

type TagProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Tag({ href, children, className = "" }: TagProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-sm " +
        "bg-white/60 hover:bg-white/80 text-slate-700 border border-black/5 " +
        "shadow-sm transition " +
        className
      }
    >
      {children}
    </a>
  );
}
