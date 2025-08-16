import React from "react";

// 轻量 class 合并
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary" | "outline" | "tag";
type Size = "sm" | "md" | "lg";

// 多态 Button：支持 as 渲染任意元素（默认按钮）
type ButtonProps<E extends React.ElementType = "button"> = {
  as?: E;                 // 'button' | 'a' | 'span' | ...
  href?: string;          // 传了就视为链接（若未显式 as，则自动用 <a>）
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "className" | "children">;

const base =
  "inline-flex items-center justify-center rounded-btn font-medium " +
  "transition-all duration-200 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300";

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-base md:text-lg",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-900 text-white shadow-btn hover:shadow-btn-hover hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white/80 text-slate-900 ring-1 ring-slate-200 shadow-btn hover:bg-white hover:shadow-btn-hover",
  outline:
    "bg-transparent text-slate-900 ring-1 ring-slate-300 hover:bg-white/70",
  // Hero 标签 chip
  tag:
    "bg-white/70 text-slate-800 ring-1 ring-amber-300/60 hover:bg-white shadow-sm",
};

export default function Button<E extends React.ElementType = "button">({
  as,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps<E>) {
  // 如果传了 href 且未显式 as，则自动使用 <a>
  const Comp = (href && !as ? "a" : (as || "button")) as React.ElementType;

  const classes = cn(base, sizes[size], variants[variant], className);

  // 将 href/target/rel 等原生属性透传给 Comp
  return (
    <Comp className={classes} href={href as any} {...(rest as any)}>
      {children}
    </Comp>
  );
}
