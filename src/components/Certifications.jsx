import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Calendar, ExternalLink, Download } from 'lucide-react'

const certifications = [
  {
    title: 'Generative AI Mastermind',
    issuer: 'Outskill',
    date: 'December 2025',
    description: 'Comprehensive certification covering LLMs, prompt engineering, AI tools, and Generative AI applications in real-world scenarios.',
    color: '#00d4ff',
    accentBg: 'rgba(0,212,255,0.06)',
    accentBorder: 'rgba(0,212,255,0.2)',
    icon: '🤖',
  },
  {
    title: 'AI Training',
    issuer: 'Digital Heroes',
    date: 'April 27, 2026',
    description: 'Intensive AI training program covering machine learning fundamentals, data annotation, model evaluation, and practical AI implementation strategies.',
    color: '#a855f7',
    accentBg: 'rgba(168,85,247,0.06)',
    accentBorder: 'rgba(168,85,247,0.2)',
    icon: '🧠',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest mb-4 block">Credentials</span>
          <h2 className="section-heading text-white">
            My <span className="neon-text">Certifications</span>
          </h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group glass-card gradient-border overflow-hidden"
              whileHover={{ y: -8, boxShadow: `0 30px 80px ${cert.color}18` }}
              transition={{ duration: 0.35 }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />

              <div className="p-8">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: cert.accentBg, border: `1px solid ${cert.accentBorder}` }}
                  >
                    {cert.icon}
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold"
                    style={{ background: cert.accentBg, border: `1px solid ${cert.accentBorder}`, color: cert.color }}
                  >
                    <Award size={12} />
                    Certified
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="font-semibold mb-3" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-white/40 text-sm mb-5">
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {cert.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex items-center gap-2 text-xs px-4 py-2.5 rounded-xl font-semibold transition-all duration-200"
                    style={{
                      background: cert.accentBg,
                      border: `1px solid ${cert.accentBorder}`,
                      color: cert.color,
                    }}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: `0 0 20px ${cert.color}30`,
                      background: `${cert.color}15`,
                    }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <ExternalLink size={13} />
                    View Certificate
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 text-xs px-4 py-2.5 rounded-xl font-semibold text-white/50 transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    whileHover={{ scale: 1.04, color: '#fff', background: 'rgba(255,255,255,0.08)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Download size={13} />
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
