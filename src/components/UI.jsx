import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: 'left' }}
    />
  )
}

export function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursor) {
        cursor.style.left = mouseX - 6 + 'px'
        cursor.style.top = mouseY - 6 + 'px'
      }
    }

    let animId
    const animate = () => {
      followerX += (mouseX - followerX - 18) * 0.12
      followerY += (mouseY - followerY - 18) * 0.12
      if (follower) {
        follower.style.left = followerX + 'px'
        follower.style.top = followerY + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(false)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{ transform: hovering ? 'scale(2)' : 'scale(1)' }}
      />
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{ transform: hovering ? 'scale(1.5)' : 'scale(1)' }}
      />
    </>
  )
}
