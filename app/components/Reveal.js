'use client'

import { motion } from 'framer-motion'

/**
 * Reveal — wraps children in a fade-up-on-scroll animation.
 *
 * Props:
 *   delay      — seconds before animation starts (default 0)
 *   y          — distance in px to rise from (default 24)
 *   duration   — animation length in seconds (default 0.8)
 *   once       — animate only first time (default true)
 *   as         — HTML element to render (default 'div')
 *   className  — pass-through classes
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.8,
  once = true,
  as = 'div',
  className = '',
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}




/**
 * Stagger — parent wrapper that animates children in sequence.
 * Use with <StaggerItem> children.
 */
export function Stagger({
    children,
    delay = 0,
    staggerAmount = 0.08,
    once = true,
    className = '',
  }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerAmount,
              delayChildren: delay,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
  
  export function StaggerItem({ children, className = '', y = 24 }) {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }