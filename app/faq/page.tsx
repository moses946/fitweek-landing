"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

const faqs = [
  {
    question: "What is FitWeek?",
    answer:
      "FitWeek is a smart wardrobe planning app that helps you plan your outfits for the week based on what's clean in your closet and the weather forecast. No more morning outfit panic or wearing the same thing twice in a week.",
  },
  {
    question: "How does the weather integration work?",
    answer:
      "FitWeek automatically fetches the weather forecast for your location and factors it into outfit suggestions. If it's going to rain on Thursday, we'll suggest water-resistant options. If it's warm, we'll recommend lighter fabrics.",
  },
  {
    question: "Can I track which clothes are clean or in the laundry?",
    answer:
      "Yes! FitWeek lets you mark items as clean, worn, or in the laundry. This way, you'll only see outfit suggestions from clothes that are actually available to wear.",
  },
  {
    question: "Is FitWeek free to use?",
    answer:
      "FitWeek offers a free tier that includes basic wardrobe management and weekly planning for up to 50 items. Premium features like unlimited items, weather-based suggestions, and outfit history are available with our subscription plans.",
  },
  {
    question: "How do I add my clothes to the app?",
    answer:
      "Adding clothes is simple! You can take a photo of each item, and our AI will automatically categorize it by type, color, and season. You can also manually enter items or import from supported retailers.",
  },
  {
    question: "Does FitWeek work offline?",
    answer:
      "Yes, most features work offline including viewing your wardrobe, marking items as worn, and accessing your planned outfits. Weather updates and syncing require an internet connection.",
  },
  {
    question: "Can I share outfits with friends?",
    answer:
      "Absolutely! You can share outfit ideas with friends through the app, get feedback on your planned looks, and even see what's trending in your social circle.",
  },
  {
    question: "What platforms is FitWeek available on?",
    answer:
      "FitWeek is available on iOS and Android devices. We also have a web app for managing your wardrobe from your computer.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-muted-foreground">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        tag="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about FitWeek. Can't find the answer you're looking for? Reach out to our support team."
      />

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
