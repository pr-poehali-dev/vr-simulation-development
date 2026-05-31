import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, bgImage }: SectionProps) {
  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24 overflow-y-auto"
    >
      {bgImage && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            opacity: 0.12,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10">
      {subtitle && (
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className="font-bold leading-tight tracking-tight text-white mb-4"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.55 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {content}
        </motion.div>
      )}
      </div>
    </section>
  )
}