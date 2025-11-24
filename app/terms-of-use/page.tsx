import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Use | MyApp",
  description: "Terms of Use for MyApp",
}

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-medium text-sm"
            >
              ← Back to Contracts
            </Link>
          </div>

          <article className="prose prose-sm md:prose-base max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-li:text-muted-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Terms of Use
            </h1>
            <p className="text-muted-foreground/70 mb-8 text-sm">Last updated: November 25, 2025</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the MyApp application and website, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                MyApp for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Use the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Attempt to decompile or reverse engineer any software contained on the application</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Transmit legal threats, harass, or cause distress or inconvenience to any person</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on MyApp are provided on an 'as is' basis. MyApp makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall MyApp or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on MyApp.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on MyApp could include technical, typographical, or photographic errors. MyApp
                does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">6. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyApp has not reviewed all of the sites linked to its website and is not responsible for the contents of
                any such linked site. The inclusion of any link does not imply endorsement by MyApp of the site. Use of
                any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                MyApp may revise these terms of service for its website at any time without notice. By using this
                website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which MyApp operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that
                location.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-card/50 border border-border/40 rounded-xl backdrop-blur">
                <p className="text-foreground mb-2">
                  <strong>Email:</strong> <span className="text-accent">legal@myapp.com</span>
                </p>
                <p className="text-foreground">
                  <strong>Address:</strong> <span className="text-muted-foreground">Legal Department, MyApp Inc.</span>
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
