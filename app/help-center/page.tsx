"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Search, Book, MessageCircle, Video, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Getting Started",
    icon: Book,
    articles: [
      "How to create your account",
      "Adding your first clothing items",
      "Setting up weather location",
      "Understanding the dashboard",
    ],
  },
  {
    title: "Wardrobe Management",
    icon: "wardrobe",
    articles: [
      "Organizing your wardrobe",
      "Marking items as clean or laundry",
      "Editing clothing details",
      "Deleting items from your wardrobe",
    ],
  },
  {
    title: "Outfit Planning",
    icon: "outfit",
    articles: [
      "Creating weekly outfit plans",
      "Using weather suggestions",
      "Saving favorite outfits",
      "Sharing outfits with friends",
    ],
  },
  {
    title: "Account & Billing",
    icon: "account",
    articles: [
      "Managing your subscription",
      "Updating payment methods",
      "Canceling your plan",
      "Requesting a refund",
    ],
  },
]

const popularArticles = [
  {
    title: "How to add clothes to your wardrobe",
    views: "2.4k views",
    href: "#",
  },
  {
    title: "Understanding weather-based suggestions",
    views: "1.8k views",
    href: "#",
  },
  {
    title: "Planning outfits for the week",
    views: "1.5k views",
    href: "#",
  },
  {
    title: "Troubleshooting sync issues",
    views: "1.2k views",
    href: "#",
  },
]

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case "wardrobe":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    case "outfit":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    case "account":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      )
    default:
      return null
  }
}

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        tag="Help Center"
        title="How can we help you?"
        description="Search our knowledge base or browse categories below to find the answers you need."
      />

      {/* Search */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Browse by Category
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {typeof category.icon === "string" ? (
                      <CategoryIcon type={category.icon} />
                    ) : (
                      <category.icon className="w-5 h-5" />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <Link
                        href="#"
                        className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <span className="text-sm">{article}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="pb-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Popular Articles
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors group"
              >
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.views}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 lg:p-12 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still need help?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our support team is always happy to help. Reach out through any of these channels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="gradient-button text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
              <a
                href="#"
                className="px-6 py-3 rounded-lg font-medium border border-border text-foreground hover:bg-muted transition-colors inline-flex items-center gap-2"
              >
                <Video className="w-5 h-5" />
                Watch Tutorials
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
