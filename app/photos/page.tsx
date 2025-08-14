// app/page.tsx
const photos = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
  "/images/07.jpg",
  "/images/08.jpg",
  "/images/09.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        Selected Works · {photos.length}
      </h1>

      {/* Masonry：按列排布，不裁剪原图 */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {photos.map((src) => (
          <div key={src} className="mb-4 break-inside-avoid">
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
