"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function TermsOfServicePage() {
  const lastUpdated = "May 1, 2026"

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        tag="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before using FitWeek. By using our services, you agree to be bound by these terms."
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing or using FitWeek&apos;s services, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations. If you do not 
                  agree with any of these terms, you are prohibited from using or accessing 
                  this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  2. Description of Service
                </h2>
                <p className="text-muted-foreground">
                  FitWeek provides a wardrobe management and outfit planning service that 
                  helps users organize their clothing, track item availability, and plan 
                  outfits based on weather conditions. Features may vary based on your 
                  subscription plan.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  3. User Accounts
                </h2>
                <p className="text-muted-foreground mb-4">
                  To use certain features of our service, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  4. User Content
                </h2>
                <p className="text-muted-foreground">
                  You retain ownership of any content you upload to FitWeek, including 
                  photos and descriptions of your clothing items. By uploading content, 
                  you grant us a non-exclusive license to use, store, and process this 
                  content to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  5. Acceptable Use
                </h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the service for any illegal purpose</li>
                  <li>Upload harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  6. Subscription and Payments
                </h2>
                <p className="text-muted-foreground">
                  Some features of FitWeek require a paid subscription. By subscribing, 
                  you agree to pay the applicable fees. Subscriptions automatically renew 
                  unless cancelled. Refunds are provided in accordance with our refund policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-muted-foreground">
                  The FitWeek service, including its design, features, and content, is 
                  protected by copyright, trademark, and other intellectual property laws. 
                  You may not copy, modify, or distribute our proprietary materials without 
                  permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  8. Disclaimer of Warranties
                </h2>
                <p className="text-muted-foreground">
                  FitWeek is provided &quot;as is&quot; without warranties of any kind. We do not 
                  guarantee that the service will be uninterrupted, error-free, or meet 
                  your specific requirements. Weather data is provided by third-party 
                  services and may not always be accurate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, FitWeek shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive 
                  damages resulting from your use of or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  10. Termination
                </h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account at any time for violations 
                  of these terms. You may also delete your account at any time through 
                  account settings. Upon termination, your right to use the service 
                  will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  11. Changes to Terms
                </h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify 
                  users of significant changes via email or through the app. Continued 
                  use of the service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  12. Governing Law
                </h2>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with the 
                  laws of the State of California, without regard to its conflict of law 
                  provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  13. Contact Information
                </h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@fitweek.app" className="text-primary hover:underline">
                    legal@fitweek.app
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
