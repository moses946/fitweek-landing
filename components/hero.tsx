"use client"

import { motion } from "framer-motion"
import { Play, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span>Plan smarter. Dress better.</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Your wardrobe.{" "}
              <span className="gradient-text">Planned.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              FitWeek helps you plan outfits for the week based on what&apos;s clean
              and the weather forecast—so you never have to guess again.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#get-started"
                className="gradient-button text-primary-foreground px-8 py-3.5 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2"
              >
                Get Started Free
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="bg-card text-foreground border border-border px-8 py-3.5 rounded-full text-base font-medium transition-all duration-200 hover:bg-muted inline-flex items-center justify-center gap-2"
              >
                See How It Works
                <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center">
                  <Play size={12} fill="currentColor" />
                </div>
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-card bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs font-medium text-primary"
                  >
                    {["JD", "AK", "MR"][i - 1]}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Loved by 500+ early users
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[100px] -z-10" />

            {/* Phone mockups container */}
            <div className="relative w-full max-w-lg h-[500px] sm:h-[600px]">
              {/* Front Phone */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute left-0 sm:left-4 top-8 z-20"
              >
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-[220px] sm:w-[260px] h-[440px] sm:h-[520px] bg-foreground rounded-[40px] p-2 shadow-2xl">
                    <div className="w-full h-full bg-card rounded-[32px] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl z-10" />
                      
                      {/* Screen Content */}
                      <div className="p-4 pt-10">
                        {/* Time */}
                        <div className="text-sm font-medium text-muted-foreground mb-4">9:41</div>
                        
                        {/* Greeting */}
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-foreground">Good morning, Alex 👋</h3>
                          <p className="text-sm text-muted-foreground">Here&apos;s your week.</p>
                        </div>

                        {/* Week Days */}
                        <div className="flex gap-1 mb-4">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                            <div
                              key={day}
                              className={`flex-1 py-2 rounded-lg text-center text-xs ${
                                i === 0
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <div>{day}</div>
                              <div className="font-medium">{20 + i}</div>
                            </div>
                          ))}
                        </div>

                        {/* Weather */}
                        <div className="flex items-center gap-2 mb-4 p-3 bg-muted rounded-xl">
                          <span className="text-2xl">⛅</span>
                          <div>
                            <div className="text-sm font-medium">24° Partly Cloudy</div>
                            <div className="text-xs text-muted-foreground">H: 26° L: 18°</div>
                          </div>
                        </div>

                        {/* Outfit Preview */}
                        <div className="bg-muted rounded-xl p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-clean flex items-center gap-1">
                              <div className="w-2 h-2 bg-clean rounded-full" />
                              All clean
                            </span>
                            <span className="text-xs text-primary">View details</span>
                          </div>
                          <div className="flex gap-2">
                            {["👔", "👖", "👟"].map((item, i) => (
                              <div
                                key={i}
                                className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-lg"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Weekly Overview */}
                        <div className="mt-3 p-3 bg-muted rounded-xl">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium">Weekly Overview</span>
                            <span className="text-xs text-muted-foreground">3/7 outfits planned</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-3 bg-card border-t border-border">
                        <div className="flex flex-col items-center text-primary">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          </svg>
                          <span className="text-[10px] mt-1">Home</span>
                        </div>
                        <div className="flex flex-col items-center text-muted-foreground">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z" />
                          </svg>
                          <span className="text-[10px] mt-1">Wardrobe</span>
                        </div>
                        <div className="w-12 h-12 -mt-6 gradient-button rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </div>
                        <div className="flex flex-col items-center text-muted-foreground">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                          </svg>
                          <span className="text-[10px] mt-1">Plan</span>
                        </div>
                        <div className="flex flex-col items-center text-muted-foreground">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                          </svg>
                          <span className="text-[10px] mt-1">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Back Phone */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute right-0 sm:right-4 top-0 z-10"
              >
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-[200px] sm:w-[240px] h-[400px] sm:h-[480px] bg-foreground rounded-[36px] p-2 shadow-xl opacity-90">
                    <div className="w-full h-full bg-card rounded-[28px] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-b-xl z-10" />
                      
                      {/* Screen Content - Wardrobe View */}
                      <div className="p-4 pt-8">
                        <div className="text-sm font-medium text-muted-foreground mb-2">9:41</div>
                        <h3 className="text-base font-semibold text-foreground mb-4">My Wardrobe</h3>
                        
                        {/* Categories */}
                        <div className="flex gap-2 mb-4 text-xs overflow-hidden">
                          {["Tops", "Bottoms", "Shoes", "Outerwear"].map((cat, i) => (
                            <span
                              key={cat}
                              className={`px-2 py-1 rounded-full whitespace-nowrap ${
                                i === 0
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        {/* Clothes Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { emoji: "👔", label: "Blue Shirt" },
                            { emoji: "🧥", label: "Jacket" },
                            { emoji: "👖", label: "Jeans" },
                            { emoji: "🧥", label: "Hoodie" },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="bg-muted rounded-xl p-3 flex flex-col items-center"
                            >
                              <div className="text-2xl mb-1">{item.emoji}</div>
                              <span className="text-[10px] text-muted-foreground">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* FAB */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 gradient-button rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
