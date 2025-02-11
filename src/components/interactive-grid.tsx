'use client'

import { useEffect, useRef } from 'react'

interface Particle {
 x: number
 y: number
 vx: number
 vy: number
}

interface Props {
 fill?: string
 stroke?: string
 join_distance?: number
 speed?: number
 density?: number
}

export default function InteractiveGrid({
 fill = 'rgba(255, 0, 0, 0.8)',
 stroke = 'rgba(255, 255, 255, 0.2)',
 join_distance = 200,
 speed = 0.6,
 density = 12000,
}: Props) {
 const canvasRef = useRef<HTMLCanvasElement>(null)
 const mouseRef = useRef({ x: 0, y: 0 })

 useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let animationFrameId: number
  let particles: Particle[] = []

  // Handle resize
  const handleResize = () => {
   canvas.width = window.innerWidth
   canvas.height = window.innerHeight
   initParticles()
  }

  // Initialize particles
  const initParticles = () => {
   particles = []
   const numberOfParticles = Math.floor((canvas.width * canvas.height) / density)

   for (let i = 0; i < numberOfParticles; i++) {
    particles.push({
     x: Math.random() * canvas.width,
     y: Math.random() * canvas.height,
     vx: (Math.random() - speed) * speed,
     vy: (Math.random() - speed) * speed,
    })
   }
  }

  // Update particle positions
  const updateParticles = () => {
   particles.forEach((particle) => {
    particle.x += particle.vx
    particle.y += particle.vy

    // Bounce off edges
    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
   })
  }

  // Draw everything
  const draw = () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height)

   // Set styles
   ctx.fillStyle = fill
   ctx.strokeStyle = stroke
   // Draw particles and connections
   particles.forEach((particle, i) => {
    // Draw particle
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
    ctx.fill()

    // Connect to nearby particles
    particles.slice(i + 1).forEach((otherParticle) => {
     const dx = particle.x - otherParticle.x
     const dy = particle.y - otherParticle.y
     const distance = Math.sqrt(dx * dx + dy * dy)

     if (distance < join_distance) {
      ctx.beginPath()
      ctx.moveTo(particle.x, particle.y)
      ctx.lineTo(otherParticle.x, otherParticle.y)
      ctx.stroke()
     }
    })

    // Connect to mouse if nearby
    const dx = particle.x - mouseRef.current.x
    const dy = particle.y - mouseRef.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < join_distance) {
     ctx.beginPath()
     ctx.moveTo(particle.x, particle.y)
     ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
     ctx.stroke()
    }
   })
  }

  // Animation loop
  const animate = () => {
   updateParticles()
   draw()
   animationFrameId = requestAnimationFrame(animate)
  }

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
   mouseRef.current = {
    x: event.clientX,
    y: event.clientY,
   }
  }

  // Initialize
  handleResize()
  animate()

  // Event listeners
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)

  // Cleanup
  return () => {
   window.removeEventListener('resize', handleResize)
   window.removeEventListener('mousemove', handleMouseMove)
   cancelAnimationFrame(animationFrameId)
  }
 }, [])

 return (
  <canvas
   ref={canvasRef}
   className="fixed inset-0 -z-10 bg-black"
   style={{ touchAction: 'none' }}
  />
 )
}
