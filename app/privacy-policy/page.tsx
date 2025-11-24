import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | MyApp",
  description: "Privacy Policy for MyApp",
}

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground/70 mb-8 text-sm">Last updated: November 25, 2025</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how MyApp ("we", "us", "our", or "Company") collects, uses, discloses, and
                otherwise processes personal information in connection with our mobile application and website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect various types of information in connection with your use of our services:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Account Information:</strong> Name, email address, phone number,
                    and account credentials
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Device Information:</strong> Device type, operating system,
                    unique device identifiers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Usage Information:</strong> Features used, pages visited, time
                    spent, interactions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Location Information:</strong> IP address and approximate
                    location based on IP
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Communication Information:</strong> Messages, feedback, and
                    support requests
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Providing and improving our services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Personalizing your experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Responding to your inquiries and support requests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Sending service updates and announcements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Ensuring security and preventing fraud</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Complying with legal obligations</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with
                service providers who assist us in operating our website and conducting our business, subject to
                confidentiality agreements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">4. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Access to your personal information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Correction of inaccurate information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Deletion of your information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Restriction of processing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Data portability</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">6. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-card/50 border border-border/40 rounded-xl backdrop-blur">
                <p className="text-foreground mb-2">
                  <strong>Email:</strong> <span className="text-accent">privacy@myapp.com</span>
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
