"use client"

import { useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  id?: string
}

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section id={id} className={className}>
        <div>{children}</div>
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      variants={staggerContainer(0.1, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      <motion.div variants={fadeIn(direction, delay)}>{children}</motion.div>
    </motion.section>
  )
}

