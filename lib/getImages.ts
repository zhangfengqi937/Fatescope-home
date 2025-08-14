// lib/getImages.ts
import fs from "fs";
import path from "path";

export type ImageItem = { src: string; alt: string };

export function getLocalImages(): ImageItem[] {
  const dir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
    // 让 01.jpg、02.jpg…10.jpg 排序正确（自然排序）
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return files.map((f) => {
    const base = f.replace(/\.[^.]+$/, "");
    const alt = base.replace(/[_-]+/g, " ").trim();
    return { src: `/images/${f}`, alt };
  });
}
