"use client"

import { useState, useRef, type FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import { Shirt, Loader2, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/lib/waitlist"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [alreadyJoined, setAlreadyJoined] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const result = await joinWaitlist(email)

    setIsSubmitting(false)

    if (!result.ok) {
      setError(result.error)
      return
    }

    setAlreadyJoined(result.alreadyJoined)
    setIsSuccess(true)
  }

  return (
    <section id="waitlist" className="py-20 lg:py-32 scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />

          <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Shirt className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-pretty"
              >
                Join the waitlist
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-muted-foreground mb-8"
              >
                Be the first to know when FitWeek launches. Get early access and
                take the guesswork out of your mornings.
              </motion.p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-4"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">
                    {alreadyJoined
                      ? "You're already on the list!"
                      : "You're on the list!"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll email you when FitWeek is ready.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  onSubmit={handleSubmit}
                  className="w-full max-w-md"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="h-12 px-4 rounded-full bg-background border-border text-base"
                      disabled={isSubmitting}
                      aria-label="Email address"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="gradient-button text-primary-foreground px-8 h-12 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>
                  </div>
                  {error && (
                    <p className="mt-3 text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}
                  <p className="mt-4 text-xs text-muted-foreground">
                    No spam. Unsubscribe anytime.
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
