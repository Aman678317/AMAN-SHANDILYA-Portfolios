import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    category: 'AI & Machine Learning',
    color: '#00d4ff',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'NLP', 'MLOps', 'LLM Evaluation'],
  },
  {
    category: 'Generative AI & Tools',
    color: '#a855f7',
    skills: ['Generative AI Tools', 'AI Image Generation', 'Cursor AI', 'GitHub Copilot', 'Vibe Coding', 'RPA'],
  },
  {
    category: 'Programming & Data',
    color: '#ec4899',
    skills: ['Python', 'MySQL', 'MS Excel', 'Power BI', 'SAS', 'Data Annotation'],
  },
  {
    category: 'Soft Skills',
    color: '#10b981',
    skills: ['Effective Communication', 'Teamwork', 'Leadership', 'Problem Solving'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SkillBadge({ skill, color, index, inView }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 + 0.2, ease: 'backOut' }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 20px ${color}40`,
        border: `1px solid ${color}60`,
        color: color,
      }}
      className="px-4 py-2 rounded-xl text-sm font-medium text-white/70 cursor-default transition-colors duration-200"
      style={{
        background: `${color}0d`,
        border: `1px solid ${color}25`,
      }}
    >
      {skill}
    </motion.span>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest mb-4 block">Expertise</span>
          <h2 className="section-heading text-white">
            Skills & <span className="neon-text">Technologies</span>
          </h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card gradient-border p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}80` }}
                />
                <h3
                  className="font-display font-bold text-base"
                  style={{ color: cat.color }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    color={cat.color}
                    index={j}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full skills row */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-10"
        >
          <div className="glass-card gradient-border p-6">
            <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-4">All Skills</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Generative AI Tools', 'Python', 'MySQL', 'Machine Learning', 'RPA',
                'AI Image Generation', 'LLM Evaluation', 'MS Excel', 'NLP', 'Power BI',
                'SAS', 'Deep Learning', 'GitHub Copilot', 'Artificial Intelligence',
                'Cursor AI', 'Vibe Coding', 'MLOps', 'Data Annotation', 'Effective Communication',
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.03 + 0.5 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/50"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  whileHover={{ color: '#00d4ff', borderColor: 'rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.06)', scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
