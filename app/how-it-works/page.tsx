"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Icon } from "@/components/icon"

const steps = [
  {
    number: "01",
    iconName: "add-clothes",
    title: "Add Your Clothes",
    description:
      "Snap photos of your clothing items and our AI will automatically categorize them by type, color, and season. You can also manually add details like brand, size, and purchase date.",
    details: [
      "AI-powered image recognition",
      "Automatic categorization",
      "Bulk import from retailers",
      "Custom tags and notes",
    ],
  },
  {
    number: "02",
    iconName: "check-weather",
    title: "We Check the Weather",
    description:
      "FitWeek automatically pulls the weather forecast for your location. We factor in temperature, precipitation, humidity, and UV index to suggest appropriate outfits.",
    details: [
      "7-day forecast integration",
      "Location-based suggestions",
      "Real-time weather updates",
      "Travel destination support",
    ],
  },
  {
    number: "03",
    iconName: "ai-suggestions",
    title: "Plan Your Week",
    description:
      "Get AI-tailored outfit suggestions backed by weather and wear data. Our smart algorithm learns your style preferences and creates personalized recommendations.",
    details: [
      "AI-powered outfit matching",
      "Weather-appropriate options",
      "Style preference learning",
      "Save favorite combinations",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        tag="How It Works"
        title="3 simple steps to stress-free mornings"
        description="Getting started with FitWeek is quick and easy. Here&apos;s how it works."
      />

      {/* Steps */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Glassmorphic Card */}
                <div className="relative h-full rounded-3xl overflow-hidden">
                  {/* Gradient background blur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 opacity-60" />
                  
                  {/* Glass effect */}
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/40 dark:bg-white/5" />
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-3xl border border-white/50 dark:border-white/10" />
                  
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Step number badge */}
                    <div className="absolute -top-0 -right-0 w-16 h-16 rounded-bl-3xl bg-gradient-to-br from-primary to-secondary flex items-end justify-start p-2">
                      <span className="text-white text-lg font-bold">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/50 dark:border-white/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Icon name={step.iconName} size={48} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 12 12"
                              fill="none"
                              className="text-primary"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Connection line to next card - desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 z-20">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      className="h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 origin-left"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Glassmorphic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10" />
            <div className="absolute inset-0 backdrop-blur-xl bg-white/30 dark:bg-white/5" />
            <div className="absolute inset-0 border border-white/50 dark:border-white/10 rounded-3xl" />
            
            {/* Content */}
            <div className="relative z-10 p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of users who have already simplified their morning routine with FitWeek.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <Link
                  href="/faq"
                  className="px-8 py-3 rounded-full font-medium bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/50 dark:border-white/20 text-foreground hover:bg-white/70 dark:hover:bg-white/20 transition-colors"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
