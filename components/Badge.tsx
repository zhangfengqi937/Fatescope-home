// components/Badge.tsx
import * as React from "react";

export function Badge({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-md bg-slate-100 " +
        "px-2 py-0.5 text-xs text-slate-700 " + className
      }
    >
      {children}
    </span>
  );
}
