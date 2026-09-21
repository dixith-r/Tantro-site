import { motion } from 'framer-motion'

/**
 * Reveal
 * Small wrapper around Framer Motion that fades + translates children in
 * when they scroll into view. Use for section content, cards, headers.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
