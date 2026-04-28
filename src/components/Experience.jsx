import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    role: 'AI & Data Science Intern',
    company: 'Ethara AI',
    location: 'Virtual',
    period: 'Feb 2026 – Present',
    current: true,
    responsibilities: [
      'Building Python-based ML pipelines and data processing workflows',
      'Performing data analysis and feature engineering for AI models',
      'Developing basic model building solutions for real-world tasks',
      'Collaborating with team on AI-driven automation projects',
      'Managing project timelines and delivering under deadlines',
    ],
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'AI', 'Teamwork'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest mb-4 block">Career</span>
          <h2 className="section-heading text-white">
            Work <span className="neon-text">Experience</span>
          </h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="relative sm:pl-20 mb-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full border-2 border-neon-blue bg-dark-900 hidden sm:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              </div>

              <motion.div
                className="glass-card gradient-border p-8"
                whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,212,255,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))' }}
                    >
                      <Briefcase size={20} className="text-neon-blue" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl font-display">{exp.role}</h3>
                      <p className="text-neon-blue font-semibold mt-1">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:items-end">
                    {exp.current && (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold text-green-400 flex items-center gap-1.5 self-start sm:self-auto"
                        style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Currently Active
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-white/40 text-sm">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40 text-sm">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-neon-blue mt-0.5 flex-shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium text-neon-blue"
                      style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
