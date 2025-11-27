import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Use | Starpath Protocol",
  description: "Starpath Protocol Terms of Use",
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
              ← Back to Agreements
            </Link>
          </div>

          <article className="prose prose-sm md:prose-base max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-li:text-muted-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Starpath Protocol Terms of Use
            </h1>
            <p className="text-muted-foreground/70 mb-8 text-sm">Effective Date: November 25, 2025</p>

            <section className="mb-12">
              <div className="mt-4 p-6 bg-card/50 border border-border/40 rounded-xl backdrop-blur">
                <p className="text-foreground mb-2">
                  <strong>Data Controller and Service Provider:</strong>
                </p>
                <p className="text-muted-foreground mb-2">Starpath Protocol</p>
                <p className="text-foreground">
                  <strong>E-mail:</strong> <span className="text-accent">starpathprotocol@gmail.com</span>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">1. Parties and Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                This agreement is entered into between the real persons ("User") who wish to avail of the digital relationship coaching services offered on the mobile application ("Application") operated by Starpath Protocol ("Company" or "Starpath Protocol").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The User accepts to use the services offered on the Application, under the conditions specified below, by agreeing to this agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">2. Scope of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starpath Protocol provides the following services to help Users develop their own relationships:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>An AI-powered “relationship coach” system,</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Communication and awareness analyses between partners,</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Referrals to professional experts (psychologists, therapists, etc.).</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Application’s AI-generated recommendations do not constitute professional psychological counseling or medical services. When necessary, the User may be directed to professional support by the system.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">3. Registration and Account Use</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User agrees to provide accurate and complete identity, contact, health, and partner information when registering for the Application.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User may only open an account on their own behalf. Opening an account for someone else or sharing third-party information without consent is prohibited.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User must keep their account credentials confidential.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The Company reserves the right to suspend or terminate membership in cases of false information, misuse of the system, or legal violations.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">4. Terms of Use and Obligations</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User may only use the Application for personal purposes and may not employ it for commercial, competitive, or unlawful activities.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>AI outputs are for guidance only and do not replace professional diagnosis or treatment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User declares that all data shared within the system is accurate, up to date, and belongs to them.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>All communication through the Application must remain ethical, respectful, and within legal boundaries.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">5. Pricing and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Application’s core functions may be free of charge; however, the Company may offer certain services (premium membership, expert consultations, reporting, etc.) for a fee.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For paid services, the User is informed before the payment process, and no fees are charged without explicit consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">6. Intellectual Property Rights</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>All components of the Application (design, software code, visuals, database, AI model, etc.) belong to Starpath Protocol.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User may not copy, reproduce, distribute, or reverse engineer these materials without permission.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>User-generated content (messages, questions, responses, etc.) may be anonymized and used by the Company to improve the AI system.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">7. Protection of Personal Data</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>All personal data shared by the User is processed in accordance with the Law on the Protection of Personal Data No. 6698 (KVKK).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Data processing procedures are defined in the Disclosure Text and Explicit Consent Statement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User has been informed about data processing, storage, and transfer processes within the scope of the KVKK.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">8. Disclaimer of Liability</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The Application does not guarantee a definitive outcome for user relationships.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The Company cannot be held liable for direct or indirect damages arising from the implementation of AI-generated recommendations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The service is provided “as is”; the Company is not responsible for system errors, technical interruptions, or third-party service failures.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">9. Termination</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The User may delete their account at any time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>The Company may close accounts without prior notice if the user violates the terms of the agreement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>When an account is deleted, personal data is destroyed in accordance with relevant policies, except where legal obligations require retention.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">10. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This agreement is governed by Turkish Law.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In case of disputes between the parties, Istanbul (Anatolian) Courts and Enforcement Offices have jurisdiction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">11. Effective Date</h2>
              <p className="text-muted-foreground leading-relaxed">
                The agreement becomes effective when the User registers for the Application and accepts these terms.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Company may amend the provisions of the agreement when deemed necessary; the updated version takes effect on the date it is published in the Application.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
