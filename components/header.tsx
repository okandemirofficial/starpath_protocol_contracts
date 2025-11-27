import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border/40 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Starpath Protocol
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-foreground/80 hover:text-accent transition-colors font-medium text-sm">
            Home
          </Link>
          <Link
            href="/privacy-policy"
            className="text-foreground/80 hover:text-accent transition-colors font-medium text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-use"
            className="text-foreground/80 hover:text-accent transition-colors font-medium text-sm"
          >
            Terms of Use
          </Link>
        </div>
      </nav>
    </header>
  )
}
