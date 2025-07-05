// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[95vh] bg-gradient-to-br  flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-[120px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-6">
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-6 hover:px-8 duration-300 py-3 bg-foreground text-background  font-semibold rounded-full  ">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
