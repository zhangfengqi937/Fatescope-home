import Image from "next/image";

type Props = { src: string; alt: string };
export default function ImageCard({ src, alt }: Props) {
  return (
    <div className="card overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1067}
        className="w-full h-64 object-cover hover:scale-105 transition-transform"
        placeholder="empty"
        loading="lazy"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}