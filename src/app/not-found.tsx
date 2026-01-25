import Link from "next/link";

/**
 * 404 – paste your Lovable src/pages/NotFound.tsx here if you have one.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-zinc-500">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="rounded-lg bg-foreground px-4 py-2 text-background hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
