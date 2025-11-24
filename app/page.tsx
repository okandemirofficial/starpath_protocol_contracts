import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-40 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                Legal Documentation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Contracts & Policies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Important legal information and policies for MyApp. Read our privacy practices and terms of service.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/privacy-policy"
                className="group relative p-8 rounded-xl border border-border/40 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent/70 flex items-center justify-center text-xl">
                    🔒
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                    Privacy Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    Learn how we collect, use, and protect your personal information with our comprehensive privacy
                    practices.
                  </p>
                </div>
              </Link>

              <Link
                href="/terms-of-use"
                className="group relative p-8 rounded-xl border border-border/40 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary/70 flex items-center justify-center text-xl">
                    ⚖️
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                    Terms of Use
                  </h2>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    Read the terms and conditions governing your use of our application and services.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
