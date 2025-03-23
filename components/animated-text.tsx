"use client"

import { useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { textVariant } from "@/lib/animations"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export default function AnimatedText({ children, className = "", delay = 0, as = "p" }: AnimatedTextProps) {
  const [isMounted, setIsMounted] = useState(false)
  const Component = motion[as]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    const StaticComponent = as
    return <StaticComponent className={className}>{children}</StaticComponent>
  }

  return (
    <Component
      variants={textVariant(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </Component>
  )
}

