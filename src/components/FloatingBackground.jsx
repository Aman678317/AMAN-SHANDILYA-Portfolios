import { motion } from 'framer-motion'

const blobs = [
  { color: 'rgba(0,212,255,0.12)', size: 600, x: '-10%', y: '5%', delay: 0, duration: 10 },
  { color: 'rgba(168,85,247,0.1)', size: 500, x: '60%', y: '15%', delay: 2, duration: 13 },
  { color: 'rgba(236,72,153,0.07)', size: 400, x: '30%', y: '60%', delay: 4, duration: 11 },
  { color: 'rgba(0,212,255,0.08)', size: 350, x: '80%', y: '70%', delay: 1, duration: 14 },
  { color: 'rgba(168,85,247,0.09)', size: 300, x: '10%', y: '80%', delay: 3, duration: 9 },
]

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
            left: blob.x,
            top: blob.y,
            filter: 'blur(60px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            delay: blob.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(2,4,8,0.8) 100%)',
        }}
      />
    </div>
  )
}
