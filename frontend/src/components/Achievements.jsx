import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Medal, Star, Zap } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    emoji: '🥇',
    title: 'District-Level Javelin Throw',
    badge: 'Gold Medal',
    badgeColor: '#f59e0b',
    badgeBg: 'rgba(245,158,11,0.1)',
    badgeBorder: 'rgba(245,158,11,0.25)',
    description:
      'Won the Gold Medal in Javelin Throw at the District-Level athletic competition, demonstrating exceptional athletic ability, focus, and competitive spirit.',
    tags: ['Athletics', 'Gold Medal', 'District Level'],
  },
  {
    icon: Medal,
    emoji: '🏐',
    title: 'District-Level Volleyball',
    badge: '3rd Place',
    badgeColor: '#cd7c3f',
    badgeBg: 'rgba(205,124,63,0.1)',
    badgeBorder: 'rgba(205,124,63,0.25)',
    description:
      'Secured 3rd Place as a key member of the district volleyball team, honing strategic thinking, coordination, and high-pressure decision-making skills.',
    tags: ['Volleyball', 'Team Sport', 'District Level'],
  },
  {
    icon: Zap,
    emoji: '💡',
    title: 'Leadership & Discipline',
    badge: 'Life Skills',
    badgeColor: '#a855f7',
    badgeBg: 'rgba(168,85,247,0.1)',
    badgeBorder: 'rgba(168,85,247,0.25)',
    description:
      'Consistent participation in competitive sports has instilled outstanding discipline, teamwork, leadership, and time management skills applied daily.',
    tags: ['Leadership', 'Teamwork', 'Time Management'],
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

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest mb-4 block">Recognition</span>
          <h2 className="section-heading text-white">
            My <span className="neon-text">Achievements</span>
          </h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card gradient-border p-8 group text-center"
              whileHover={{ y: -8, boxShadow: `0 30px 80px ${item.badgeColor}18` }}
              transition={{ duration: 0.35 }}
            >
              {/* Emoji */}
              <motion.div
                className="text-5xl mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
              >
                {item.emoji}
              </motion.div>

              {/* Badge */}
              <span
                className="px-3 py-1.5 rounded-full text-xs font-bold mb-4 inline-flex items-center gap-1.5"
                style={{ background: item.badgeBg, border: `1px solid ${item.badgeBorder}`, color: item.badgeColor }}
              >
                <Star size={11} fill={item.badgeColor} />
                {item.badge}
              </span>

              <h3 className="font-display font-bold text-lg text-white mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs text-white/40"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
