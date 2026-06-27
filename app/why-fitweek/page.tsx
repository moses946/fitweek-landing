"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { 
  Clock, 
  Brain, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap 
} from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Save 15+ Minutes Every Morning",
    description:
      "No more staring at your closet wondering what to wear. With outfits planned ahead, you just open the app and get dressed.",
    stat: "15 min",
    statLabel: "saved daily",
  },
  {
    icon: Brain,
    title: "Eliminate Decision Fatigue",
    description:
      "Stop wasting mental energy on outfit decisions. We've automated the process so you can focus on what actually matters.",
    stat: "7",
    statLabel: "decisions eliminated",
  },
  {
    icon: Sparkles,
    title: "Always Look Your Best",
    description:
      "Weather-appropriate outfits, no accidental repeats, and clothes that are actually clean. Look put-together every day.",
    stat: "100%",
    statLabel: "confidence boost",
  },
  {
    icon: TrendingUp,
    title: "Use Your Whole Wardrobe",
    description:
      "Discover forgotten favorites and use everything you own. Most people only wear 20% of their clothes - we help you wear it all.",
    stat: "80%",
    statLabel: "more variety",
  },
  {
    icon: Shield,
    title: "Never Get Caught in the Rain",
    description:
      "Our weather integration means you'll never wear the wrong thing. Rain coming? We'll suggest water-resistant options.",
    stat: "0",
    statLabel: "weather surprises",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Add your wardrobe in minutes with our AI-powered photo recognition. No tedious data entry required.",
    stat: "5 min",
    statLabel: "to get started",
  },
]

const testimonials = [
  {
    quote: "FitWeek has completely transformed my mornings. I used to spend 20 minutes picking outfits. Now it takes 2 minutes.",
    author: "Jamie L.",
    role: "Marketing Manager",
  },
  {
    quote: "The weather integration is genius. I never get caught unprepared anymore, and I actually use clothes I forgot I had.",
    author: "Michael R.",
    role: "Software Engineer",
  },
  {
    quote: "As someone who travels frequently, FitWeek helps me pack smarter and plan outfits for my trips in advance.",
    author: "Sofia T.",
    role: "Sales Director",
  },
]

export default function WhyFitWeekPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        tag="Why FitWeek"
        title="The smarter way to get dressed"
        description="Discover why thousands of people trust FitWeek to simplify their morning routine and transform their wardrobe experience."
      />

      {/* Reasons Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold gradient-text">{reason.stat}</span>
                  <span className="text-sm text-muted-foreground">{reason.statLabel}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Loved by Early Adopters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s what our users have to say about their FitWeek experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="text-yellow-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 lg:p-12 text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Join the wardrobe revolution
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start your free trial today and see why FitWeek is the future of getting dressed.
            </p>
            <Link
              href="/#waitlist"
              className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
            >
              Join the Waitlist
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
