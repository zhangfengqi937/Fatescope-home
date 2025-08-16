import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <img src="/assets/favicon.png" alt="Fatescope feather" className="w-8 h-8 rounded-xl" />
        <span className="font-semibold tracking-wide">Fatescope</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="/photos" className="hover:underline">Photos</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/links" className="hover:underline">Links</Link>
      </nav>
    </header>
  );
}