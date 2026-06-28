import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const sx = useSpring(mx, { stiffness: 500, damping: 40 })
  const sy = useSpring(my, { stiffness: 500, damping: 40 })
  const tx = useSpring(mx, { stiffness: 100, damping: 24 })
  const ty = useSpring(my, { stiffness: 100, damping: 24 })

  useEffect(() => {
    const fn = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [mx, my])

  return (
    <>
      <motion.div
        style={{
          x: sx, y: sy,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed w-2 h-2 bg-purple rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <motion.div
        style={{
          x: tx, y: ty,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed w-9 h-9 border border-purple/50 rounded-full pointer-events-none z-[9998]"
      />
    </>
  )
}