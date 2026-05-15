"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 1, 2026"

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        tag="Legal"
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how FitWeek collects, uses, and protects your personal information."
      />

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 lg:p-12"
          >
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Account information (name, email, password)</li>
                  <li>Wardrobe data (photos, descriptions, categories)</li>
                  <li>Location data for weather-based suggestions</li>
                  <li>Usage data and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Generate personalized outfit recommendations</li>
                  <li>Send you notifications and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze trends and usage patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>With your consent</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, 
                  or destruction. This includes encryption, secure servers, and regular security audits.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  5. Data Retention
                </h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as your account is active 
                  or as needed to provide you services. You can request deletion of your data 
                  at any time through your account settings or by contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Export your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  7. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to collect information 
                  about your browsing activities. You can control cookie preferences through 
                  your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground">
                  Our services are not intended for users under the age of 13. We do not 
                  knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you 
                  of any changes by posting the new policy on this page and updating the 
                  &quot;Last updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  10. Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@fitweek.app" className="text-primary hover:underline">
                    privacy@fitweek.app
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
