import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon as Github } from './Icons'

const projects = [
  {
    title: 'AI Real-Time Multilingual Video Calling with Lip Sync',
    description:
      'AI-powered video calling platform inspired by Zoom, supporting real-time multilingual communication using speech recognition, translation, text-to-speech, and a lip-sync AI concept.',
    live: 'https://meet-sigma-pink.vercel.app/',
    github: 'https://github.com/Aman678317/meet.git',
    tags: ['AI', 'WebRTC', 'Speech Recognition', 'Translation', 'TTS', 'Lip Sync'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(168,85,247,0.08))',
    accentColor: '#00d4ff',
    emoji: '🎙️',
    featured: true,
  },
  {
    title: 'The Dubai Mall Website Clone',
    description:
      'Modern, premium UI website inspired by The Dubai Mall — featuring a polished frontend with responsive layouts, visual sections, and a sophisticated design aesthetic.',
    live: 'https://the-dubai-mall-rose.vercel.app/',
    github: 'https://github.com/Aman678317/The-Dubai-Mall.git',
    tags: ['Frontend', 'Responsive Design', 'HTML', 'CSS', 'JavaScript', 'UI/UX'],
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.08))',
    accentColor: '#a855f7',
    emoji: '🏙️',
    featured: false,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest mb-4 block">Portfolio</span>
          <h2 className="section-heading text-white">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
          <p className="text-white/50 mt-6 max-w-xl mx-auto">
            Real-world projects built with AI, modern web tech, and a passion for great user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative glass-card gradient-border overflow-hidden"
              whileHover={{ y: -8, boxShadow: `0 30px 80px ${project.accentColor}15` }}
              transition={{ duration: 0.35 }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: project.gradient }}
              />

              {/* Featured badge */}
              {project.featured && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))',
                    border: '1px solid rgba(0,212,255,0.3)',
                    color: '#00d4ff',
                  }}
                >
                  ⭐ Featured
                </div>
              )}

              <div className="relative z-10 p-8">
                {/* Emoji icon */}
                <div className="text-4xl mb-6">{project.emoji}</div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-4 leading-tight group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-white/60"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-xs px-4 py-2.5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={13} />
                    Live Demo
                    <ArrowUpRight size={12} className="opacity-70" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-xs px-4 py-2.5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={13} />
                    Source Code
                  </motion.a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Aman678317"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
