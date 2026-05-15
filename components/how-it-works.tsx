"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Icon } from "./icon"

const steps = [
  {
    number: 1,
    iconName: "add-clothes",
    title: "Add your clothes",
    description: "Add your wardrobe in seconds. We'll organize everything for you.",
  },
  {
    number: 2,
    iconName: "check-weather",
    title: "We check the weather",
    description: "We'll handle the forecast so you know what works for the week.",
  },
  {
    number: 3,
    iconName: "plan-week",
    title: "Plan your week",
    description: "Get AI-tailored outfit suggestions backed by weather and wear data.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
          >
            3 simple steps
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[calc(16.67%+60px)] right-[calc(16.67%+60px)] h-[3px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 origin-left rounded-full"
            />
            {/* Animated dots traveling along the line */}
            <motion.div
              initial={{ left: "0%", opacity: 0 }}
              animate={isInView ? { 
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0]
              } : {}}
              transition={{ 
                duration: 2, 
                delay: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.25,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="relative group"
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center relative overflow-hidden"
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"
                  />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ 
                          y: 100, 
                          x: 20 + i * 40,
                          opacity: 0 
                        }}
                        animate={isInView ? {
                          y: [-20, -60, -20],
                          opacity: [0, 0.3, 0],
                        } : {}}
                        transition={{
                          duration: 3 + i,
                          delay: 1 + index * 0.3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full"
                      />
                    ))}
                  </div>

                  {/* Icon with number badge */}
                  <div className="relative inline-flex mb-6">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        delay: 0.3 + index * 0.2 
                      }}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-lg shadow-primary/10"
                    >
                      <motion.div
                        animate={isInView ? {
                          y: [0, -4, 0],
                        } : {}}
                        transition={{
                          duration: 2,
                          delay: 1 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Icon name={step.iconName} size={40} />
                      </motion.div>
                    </motion.div>
                    
                    {/* Number Badge with pulse animation */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 15,
                        delay: 0.5 + index * 0.2 
                      }}
                      className="absolute -top-2 -right-2"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 gradient-button rounded-full"
                        />
                        <div className="relative w-7 h-7 gradient-button rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                          {step.number}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content with staggered text animation */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                    className="text-lg font-semibold text-foreground mb-2 relative z-10"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.2 }}
                    className="text-muted-foreground text-sm leading-relaxed relative z-10"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Mobile connection line with animation */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4 relative">
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.25 }}
                      className="w-[3px] h-10 bg-gradient-to-b from-primary/40 to-secondary/40 origin-top rounded-full"
                    />
                    {/* Mobile traveling dot */}
                    <motion.div
                      initial={{ top: "0%", opacity: 0 }}
                      animate={isInView ? { 
                        top: ["0%", "100%"],
                        opacity: [0, 1, 1, 0]
                      } : {}}
                      transition={{ 
                        duration: 1.5, 
                        delay: 2 + index * 0.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                      className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
