import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Code2, Database, Sparkles } from 'lucide-react'

const highlights = [
  { icon: Brain, label: 'Generative AI', desc: 'LLMs, prompt engineering & AI tools' },
  { icon: Code2, label: 'Python Dev', desc: 'ML pipelines & automation scripts' },
  { icon: Database, label: 'Data Analysis', desc: 'Power BI, MySQL, MS Excel insights' },
  { icon: Sparkles, label: 'MLOps & NLP', desc: 'Model lifecycle & language intelligence' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest mb-4 block">About Me</span>
          <h2 className="section-heading text-white">
            Who I <span className="neon-text">Am</span>
          </h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white/60 text-lg leading-relaxed mb-6"
            >
              I'm <span className="text-white font-semibold">Aman Shandilya</span>, an aspiring
              <span className="neon-text font-semibold"> AI & Data Science</span> professional based in
              Mumbai with a passion for building intelligent solutions that make a real difference.
            </motion.p>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white/60 text-lg leading-relaxed mb-6"
            >
              Currently interning at <span className="text-white font-medium">Ethara AI</span>, I work on
              Python-based ML pipelines, data processing, and real-world AI task automation. I'm deeply
              passionate about Generative AI, NLP, and leveraging cutting-edge tools like
              <span className="text-neon-purple font-medium"> Cursor AI</span> and
              <span className="text-neon-blue font-medium"> GitHub Copilot</span>.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white/60 text-lg leading-relaxed"
            >
              Beyond technology, I'm a district-level athlete — Javelin Gold Medalist and Volleyball
              player — which has instilled discipline, teamwork, and leadership values that I bring into
              every professional endeavour.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex gap-6 mt-10"
            >
              {[
                { num: '2+', label: 'Projects Built' },
                { num: '20+', label: 'Skills Mastered' },
                { num: '2', label: 'Certifications' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display font-black text-3xl neon-text">{num}</div>
                  <div className="text-white/40 text-xs mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="glass-card gradient-border p-6 group cursor-default"
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,212,255,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))' }}
                >
                  <Icon size={18} className="text-neon-blue" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
