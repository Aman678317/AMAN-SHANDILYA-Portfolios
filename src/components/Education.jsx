import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Management Studies',
    field: 'Commerce',
    institute: 'SIES College of Arts, Science & Commerce',
    period: '2025 – 2028',
    status: 'Pursuing',
    icon: '🎓',
    color: '#00d4ff',
  },
  {
    degree: 'Senior Secondary (XII) – CBSE',
    field: 'Commerce',
    institute: 'Tilak Public School, Thane',
    period: '2025',
    score: '75%',
    status: 'Completed',
    icon: '📚',
    color: '#a855f7',
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

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest mb-4 block">Background</span>
          <h2 className="section-heading text-white">
            My <span className="neon-text">Education</span>
          </h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card gradient-border p-8 group"
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${edu.color}18` }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{edu.icon}</div>

              {/* Status badge */}
              <span
                className="px-2.5 py-1 rounded-full text-xs font-semibold mb-4 inline-block"
                style={{
                  background: edu.status === 'Pursuing' ? 'rgba(74,222,128,0.1)' : 'rgba(0,212,255,0.1)',
                  border: `1px solid ${edu.status === 'Pursuing' ? 'rgba(74,222,128,0.2)' : 'rgba(0,212,255,0.2)'}`,
                  color: edu.status === 'Pursuing' ? '#4ade80' : edu.color,
                }}
              >
                {edu.status}
              </span>

              <h3 className="text-white font-bold text-lg font-display mb-1">{edu.degree}</h3>
              <p className="text-sm mb-3" style={{ color: edu.color }}>{edu.field}</p>
              <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
                <GraduationCap size={14} />
                <span>{edu.institute}</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Calendar size={14} />
                <span>{edu.period}</span>
                {edu.score && (
                  <span className="ml-auto flex items-center gap-1 text-neon-blue font-semibold">
                    <Award size={13} />
                    {edu.score}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
