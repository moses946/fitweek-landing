"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { 
  Shirt, 
  CloudSun, 
  Calendar, 
  CheckCircle2, 
  Camera, 
  Bell, 
  Layers, 
  Share2 
} from "lucide-react"

const features = [
  {
    icon: Shirt,
    title: "Smart Wardrobe",
    description:
      "See everything you own in one place. Organize by type, color, season, or occasion. Know at a glance what's clean, worn, or in the laundry.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: CloudSun,
    title: "Weather Integration",
    description:
      "Automatic weather-based suggestions. We check the forecast so you can plan outfits that actually make sense for the day ahead.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Calendar,
    title: "Weekly Planning",
    description:
      "Plan your entire week of outfits in minutes. No more morning panic or decision fatigue. Just open the app and know exactly what to wear.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: CheckCircle2,
    title: "Availability Tracking",
    description:
      "Mark items as clean, worn, or in the laundry. We'll only suggest outfits from clothes that are actually available to wear.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Camera,
    title: "Easy Photo Upload",
    description:
      "Snap a photo and our AI automatically categorizes it. Adding your wardrobe takes seconds, not hours.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Get notified when it's time to do laundry, or when weather changes affect your planned outfits.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Layers,
    title: "Outfit History",
    description:
      "Never accidentally repeat an outfit. We track what you've worn and when, so you always look fresh.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description:
      "Share outfit ideas with friends, get feedback on your looks, and see what's trending in your circle.",
    gradient: "from-secondary to-accent",
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        tag="Features"
        title="Everything you need for stress-free mornings"
        description="Discover all the powerful features that make FitWeek the smartest way to manage your wardrobe and plan your outfits."
      />

      {/* Features Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8 lg:p-12 text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to simplify your mornings?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of users who have already transformed their wardrobe experience with FitWeek.
            </p>
            <Link
              href="/"
              className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
            >
              Get Started Free
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
