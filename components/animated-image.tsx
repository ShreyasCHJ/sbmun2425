"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { zoomIn } from "@/lib/animations"

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  delay?: number
  fill?: boolean
  sizes?: string
}

export default function AnimatedImage({
  src,
  alt,
  className = "",
  width,
  height,
  delay = 0,
  fill = false,
  sizes = "100vw",
}: AnimatedImageProps) {
  return (
    <motion.div
      variants={zoomIn(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative ${className}`}
      style={fill ? { width: "100%", height: "100%" } : {}}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={fill ? sizes : undefined}
        className={fill ? "object-cover" : ""}
      />
    </motion.div>
  )
}

