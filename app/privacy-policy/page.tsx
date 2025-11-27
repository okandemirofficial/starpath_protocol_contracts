import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Starpath Protocol",
  description: "Starpath Protocol: Space MMO Privacy Policy",
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
              ← Back to Agreements
            </Link>
          </div>

          <article className="prose prose-sm md:prose-base max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-li:text-muted-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Starpath Protocol: Space MMO Privacy Policy
            </h1>
            <p className="text-muted-foreground/70 mb-8 text-sm">Last Updated: November 27, 2025 (Effective Date)</p>

            <section className="mb-12">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how Starpath Protocol: Space MMO (the "Game") collects, uses, and shares your information. By downloading or using the Game, you agree to the collection and use of information as outlined in this policy. The Game is developed and operated by Okan Demir ("we," "us," or "our"), the individual developer of Starpath Protocol. We are committed to protecting your privacy and will not use or share your information except as described here.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We only collect the minimum information necessary to provide and improve the Game's services. The types of data we collect include:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Account Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you sign in via Google Sign-In or Apple Sign-In, we receive personal information such as your email address (and possibly your name or an anonymous Apple relay email). This information is used to create and authenticate your account. We do not collect sensitive personal details like your physical address, phone number, or government IDs. We also do not collect or store your IP address or any precise geolocation data.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">User Communications</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Game includes in-game messaging and community features. If you send messages or communicate with other players in the Game, those communications may be stored on our servers so that they can be delivered and moderated (to enforce community guidelines). We treat in-game chat content as private between the participants by default; we do not access or share your messages except as needed for safety, moderation, or legal compliance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Gameplay and App Activity</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect data about your in-game actions and progress (such as mission completions, PvP match outcomes, customization choices, and other gameplay statistics). This usage data helps us understand how players interact with the Game and enables us to balance and improve the gaming experience. For example, we may log events like login times, feature usage, and game session duration. This information is generally collected in an aggregated or anonymized form for analytics purposes and does not directly identify you.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Device and Technical Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We automatically collect certain technical information when you use the Game. This includes data such as your device model, operating system version, unique device identifiers, and app version. We also record diagnostic information like error logs or crash reports when the Game experiences an issue. This diagnostic data helps us troubleshoot problems and ensure compatibility across devices. We have configured our systems so that no personal data (PII) is included in crash logs– for instance, we do not log your username or other identifying info in error reports.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Analytics Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use analytics tools to collect aggregate information about how the Game is used. These tools may record events such as menu selections, feature interactions, or other usage metrics. All analytics data is de-identified; aside from possibly an account or device ID, it does not include your personal details. Moreover, we have disabled or omitted the collection of certain data like IP addresses in our analytics, to respect your privacy.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We do not collect any personal information beyond what is described above (primarily your email address for account creation). In particular, we do not collect financial information (as all purchases, if any, are handled by the app stores), and we do not access your device's contacts, photos, or other personal files.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>To Provide and Maintain the Game:</strong> We process your account and profile data to let you log in and play the Game across sessions. Your email (from Google/Apple sign-in) is used as your login identifier and to sync your gameplay progress. Gameplay and activity data are used to operate game features (like leaderboards, alliances, or matchmaking) and to save your progress.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>To Enable Social and Community Features:</strong> In-game communications and alliance features rely on us processing the messages or content you share with others. We use this data to deliver messages to the intended recipients and support community interactions. (We may also use automated tools or moderation to prevent misuse of these features and keep the environment safe.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>To Improve the Game (Analytics):</strong> Usage and analytics data help us understand overall player behavior and preferences. We analyze this data to balance game mechanics, fix usability issues, and decide what new features or updates to prioritize. For example, analytics may tell us if a mission is too difficult or if a new feature is popular, guiding our development decisions. These analyses use aggregate data, not your personal identity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>To Diagnose and Fix Technical Issues:</strong> We use crash reports and error logs from Sentry (our crash analytics tool) to identify bugs or performance problems. This information lets us improve the Game's stability and compatibility. Crash logs include technical details about the error and device, and possibly a hashed user ID or email to correlate crashes to accounts, but they do not include sensitive personal info. We use this data solely to debug and enhance the Game's performance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>To Communicate With You:</strong> If you contact us for support or with feedback, we will use your contact information (like your email) and any details you provide to respond to you. We may also send you important administrative updates about the Game (for example, updates to this Privacy Policy or changes to game terms). We do not send marketing emails or newsletters unless you explicitly opt-in to such communications.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>To Ensure Legal Compliance and Prevent Misuse:</strong> We may use data as needed to enforce our Terms of Service, to prevent fraud or cheating, and to comply with applicable laws or respond to lawful requests by authorities. For example, we might review chat logs if we receive reports of harassment or to investigate violations of game rules. We only access or disclose user data in these scenarios when it is legally permissible and necessary.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">3. Third-Party Services We Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We rely on certain third-party services to function and improve the Game. These service providers only receive information necessary to perform their functions, and they are obligated to protect your data and use it only for our specified purposes. The third-party services we use are:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Google Sign-In and Apple Sign-In (Authentication)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you choose to log in via Google or Apple, you will be redirected to those providers to authenticate. We receive from them your name and email address (or an anonymous proxy email in Apple's case if you use "Hide My Email"). We use this information solely to create/link your game account and verify your identity. Authentication tokens and account IDs from Google/Apple are stored securely and used for login purposes. These sign-in services do not give us access to your passwords or any data beyond your basic profile info (name, email). We recommend reviewing Google's Privacy Policy and Apple's Privacy Policy to understand how they handle your authentication data. We do not share your game data back with Google or Apple — the integration is only for your login convenience.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Analytics (Mixpanel)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Mixpanel as an analytics provider to help us understand how users engage with the Game. Mixpanel may process events like app opens, feature usage, session length, and other in-app actions. This helps us improve features and fix issues based on aggregate user behavior. The data sent to Mixpanel does not include your name, chat messages, or other sensitive personal details. We primarily identify records by an internal user ID or your email (if we need to correlate cross-device usage), and we have configured Mixpanel not to record or store your IP address or any precise location info. Mixpanel acts as our data processor, meaning they only use the data to provide analytics services to us and not for their own purposes. You can learn more about Mixpanel's privacy practices in their Privacy Policy. If you wish, you may contact us to opt out of Mixpanel analytics, and we will honor such requests by removing or anonymizing your data in the analytics system.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Crash Reporting (Sentry)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Sentry to automatically collect crash reports and error logs from the Game. When the app crashes or encounters a critical error, Sentry captures information about the incident (such as the part of the code that failed, device model, OS version, and app version). We may also include a non-identifying user identifier (like your user ID or email hash) in these reports to know which account experienced the issue. Importantly, we do not include any personal content (like your messages or profile data) in crash reports, and we configure Sentry to remove any personal identifiable information (PII) from the logs. Sentry helps us find and fix bugs faster; it does not use your data for any purpose other than providing crash analytics to us. Sentry's systems may be located in the United States or other regions, but they adhere to strong security practices. For more details, you can refer to Sentry's Privacy Policy.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We do not use any advertising networks or social media plug-ins that would collect your data for advertising purposes. Aside from the services listed above, your data is not shared with any other third parties. In other words, we do not sell, rent, or exchange your personal information with outside parties for their own marketing or other independent use. Any sharing of data occurs only to fulfill the functionalities of the Game (as described) or if required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">4. Data Storage and International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All game data and personal information we collect from you is stored securely on servers located in Germany. This means that if you are located in the European Union or another region, your data is held in a jurisdiction with strong data protection laws (GDPR). Storing data in Germany is part of our commitment to protecting your privacy and data security.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                However, some of our third-party service providers may process data in other countries. For example, Google and Apple are multinational companies (with servers potentially in the US and elsewhere), Mixpanel's infrastructure may be in the US or EU, and Sentry's servers may be in the US. Whenever we transfer or allow access to your personal data outside of your country or the EU, we take steps to ensure adequate protection. These steps include using providers that are certified under appropriate data protection frameworks or have standard contractual clauses in place, and only transferring the minimum data necessary.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using Starpath Protocol, you understand that your information may be transferred to and processed in Germany and other countries as needed for our operational purposes. We will always handle your data in accordance with this Privacy Policy, regardless of where it is processed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take the security of your data seriously. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. For example, all network communications are encrypted via HTTPS/TLS, so data is encrypted in transit between your device and our servers (this includes login authentication and any data transfer). Our databases and servers are protected by firewalls and access controls, and personal data (such as your authentication tokens or email) is stored securely using encryption at rest where applicable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Internally, access to personal data is limited to the developer (Okan Demir) and is only used for the purposes described. We regularly update our software and infrastructure to address security vulnerabilities. That said, no method of transmission over the internet or electronic storage is 100% secure, so while we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security. If we ever experience a data breach that affects your personal information, we will notify you as required by applicable law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes described in this policy or as required by law. Specifically:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Account Data:</strong> We keep your account information (such as email and profile data) for as long as your account is active. If you decide to delete your account or if it has been inactive for an extended period, we will delete or anonymize this information in accordance with our standard procedures (unless we are required to keep it longer for legal reasons).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Communications:</strong> In-game chat messages and other communications may be stored as long as needed to operate the service. For example, messages will persist so that recipients can read their chat history. If you delete your account, generally these communications are disassociated from your identity or deleted, unless required for a legitimate purpose (e.g., investigating fraud or abuse).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Analytics Data:</strong> Analytics event data is kept only as long as necessary for analysis. We may periodically aggregate or anonymize analytics logs, and older raw data is discarded. Typically, identifiable analytics data will not be kept longer than needed to spot usage trends or improve the app.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Crash Logs:</strong> Crash and error reports are generally retained for a short period (to track and fix bugs) and then deleted or anonymized. They may be stored in Sentry's system typically for a few months, after which they are automatically purged or archived without personal identifiers.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                When we no longer have a legitimate need or legal obligation to retain your personal data, we will securely delete it or anonymize it. Please note that backup copies might exist for a short time after deletion, but we have processes to eventually purge those as well.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">7. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We respect your rights over your personal data. Depending on your location and applicable privacy laws (such as the EU General Data Protection Regulation (GDPR) or similar laws), you have certain rights:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Access and Correction:</strong> You have the right to request a copy of the personal information we hold about you. You may also request that we correct or update any inaccurate or incomplete information (for example, if you change your email address for your account).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Data Deletion:</strong> You have the right to request deletion of your personal data. This is sometimes called the "right to be forgotten." In the Game, you can request deletion of your account data at any time. To do so, please contact us (see the Contact Us section below). Once we verify your request, we will delete your account and associated personal information from our active systems, unless we are required to retain it for legal reasons. After deletion, you will lose access to the Game account and any progress tied to it. (Note: Some residual data like logs or backups may persist for a short period, but we will also remove those in the normal course of business.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Withdraw Consent:</strong> If we are processing your personal information based on your consent, you have the right to withdraw that consent at any time. For example, if you initially allowed analytics tracking, you can later opt-out by contacting us. Withdrawal of consent will not affect the lawfulness of any processing already conducted, but it may limit certain features (e.g., if you withdraw consent for data processing necessary for gameplay, you might not be able to continue using the Game).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Object to Processing:</strong> You may have the right to object to certain types of processing (such as for direct marketing, which we currently do not perform, or for analytics). If you object, we will consider your request and stop or limit processing if required by law.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Data Portability:</strong> Where applicable, you can request a copy of the data you provided to us in a machine-readable format (for example, to port your data to another service). Given the minimal data we collect (mostly your email and game progress), we will provide such data as required and feasible.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us via email or our contact form (details in Contact Us below). We may ask you to verify your identity (for example, by confirming control of your account email) before fulfilling your request, to ensure we do not give your data to an unauthorized person. We will respond to your requests within a reasonable timeframe and in accordance with applicable law.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Additionally, if you have an account, you may be able to review and update some information directly in the Game (for instance, if the Game allows you to change profile details or settings, those changes will update the data we have on file).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Opt-Out of Analytics or Tracking:</strong> As mentioned, you can contact us to opt out of analytics data collection (Mixpanel tracking). Also, you can disable certain tracking at the device level: for example, on iOS or Android, you can reset your device's advertising identifier and/or enable settings like "Limit Ad Tracking" (though our Game currently does not use advertising trackers). While we do not use personalized ads, these OS-level options can provide additional privacy safeguards.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that if you stop using the Game or uninstall it, no further data will be collected by us from that device. Uninstalling will not automatically delete the past data we have collected; to fully delete your account data, please send us a deletion request.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not knowingly collect or solicit personal information from anyone under the age of 13. Starpath Protocol: Space MMO is not directed to children under 13, and we do not knowingly allow such persons to use our Game. The Game features user communication (chat) and online competitive play, which are intended for a general audience and not for young children. If you are under 13, please do not use the Game or provide any personal information to us.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the event that we learn we have collected personal data from a child under 13 without verifiable parental consent, we will take immediate steps to delete that information. If you are a parent or guardian and you believe that your child under 13 has provided us with personal information, please contact us at once (see Contact Us below). We will work to promptly investigate and remove any such data, and take any other necessary measures to comply with applicable laws (such as the U.S. Children's Online Privacy Protection Act - COPPA).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For users in certain regions (for example, the European Union), the age threshold may be higher (e.g., 16) under local data protection laws. We do not knowingly collect data from children under the relevant minimum age in those jurisdictions either. We encourage parents to supervise their children's digital activities and educate them about safe practices online.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update or revise this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we make changes, we will update the "Last Updated" date at the top of this policy. If the changes are significant, we may also provide a more prominent notice (for example, by posting an in-app notification or sending an email to our users, if appropriate).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of the Game after any changes to this policy will signify your acceptance of the revised terms, to the extent permitted by law.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree with any updates to the Privacy Policy, you should stop using the Game and can request that your data be deleted (as described above).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please do not hesitate to contact us. We are committed to resolving any inquiries or issues related to privacy.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Developer / Data Controller:</strong> Okan Demir (individual developer of Starpath Protocol: Space MMO)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Contact Email:</strong> <span className="text-accent">starpathprotocol@gmail.com</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Contact Page:</strong> You may also reach us through the contact form on our official website (visit starpathprotocol.com and navigate to the Contact section).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Business Address:</strong> Gaziantep, Türkiye (We are based in Turkey; however, as noted, user data is stored in Germany.)</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                (For security and privacy inquiries, email is the preferred contact method. Please include "Privacy" in the subject line of your email to help us address your concerns promptly.)
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We will respond to your questions or requests as soon as possible, typically within 30 days. If you are not satisfied with our response and you are in the EU/EEA, you have the right to lodge a complaint with your local data protection supervisory authority.
              </p>
            </section>

            <section className="mb-12">
              <div className="mt-4 p-6 bg-card/50 border border-border/40 rounded-xl backdrop-blur">
                <p className="text-muted-foreground leading-relaxed">
                  By using Starpath Protocol: Space MMO, you acknowledge that you have read and understood this Privacy Policy. Thank you for taking the time to review our policies, and enjoy your journey in the Starpath universe!
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
