import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Mail, Phone, Download, ExternalLink, ChevronDown } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons'
import profilePhoto from '../assets/profile.jpg'

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aman-shandilya-aa30822b3', color: '#0077b5' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Aman678317', color: '#ffffff' },
  { icon: Mail, label: 'Email', href: 'mailto:shandilyaprahald@gmail.com', color: '#00d4ff' },
  { icon: Phone, label: 'Phone', href: 'tel:+918521027649', color: '#a855f7' },
]

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Spotlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="glass-card gradient-border px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-4 leading-[0.9]"
            >
              <span className="text-white block">Aman</span>
              <span className="text-gradient block">Shandilya</span>
            </motion.h1>

            {/* Animated subtitle */}
            <motion.div variants={itemVariants} className="text-lg sm:text-xl text-white/60 mb-8 h-8 font-medium">
              <TypeAnimation
                sequence={[
                  'AI & Data Science Intern', 2000,
                  'Generative AI Enthusiast', 2000,
                  'Python Developer', 2000,
                  'Data Analyst', 2000,
                  'Machine Learning Engineer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
                className="neon-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-white/50 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Aspiring AI professional based in <span className="text-white/80">Mumbai</span>, passionate about
              building intelligent systems using <span className="text-neon-blue">Generative AI</span>,
              machine learning, and data science to solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <motion.button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={15} />
                View Projects
              </motion.button>
              <motion.a
                href="/Aman_Shandilya_Resume.pdf"
                download
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={15} />
                Download Resume
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aman-shandilya-aa30822b3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={15} />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Aman678317"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={15} />
                GitHub
              </motion.a>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-white/30 text-xs uppercase tracking-widest">Connect</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-white/20 to-transparent" />
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.15, boxShadow: `0 0 20px ${color}40` }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--hover-color': color }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Card */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-[-18px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 60%, #00d4ff, #a855f7, transparent)',
                  opacity: 0.6,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-18px] rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, transparent 60%, #a855f7, #00d4ff, transparent)',
                  opacity: 0.4,
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile photo glass card */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  boxShadow: '0 0 60px rgba(0,212,255,0.25), 0 0 120px rgba(168,85,247,0.15)',
                  border: '2px solid rgba(255,255,255,0.08)',
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Aman Shandilya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #0a0f1e, #1a0a2e)'
                    e.target.parentElement.innerHTML += `
                      <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:5rem;font-family:Outfit,sans-serif;font-weight:900;background:linear-gradient(135deg,#00d4ff,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">AS</div>
                    `
                  }}
                />
                {/* Gradient overlay on photo */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(2,4,8,0.6) 0%, transparent 50%)',
                  }}
                />
              </motion.div>

              {/* Floating status badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card gradient-border px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-xs text-white/70 font-medium">Open to Work</span>
              </motion.div>

              {/* Floating tag: Location */}
              <motion.div
                className="absolute -left-10 top-10 glass-card gradient-border px-3 py-1.5 text-xs text-white/60 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                📍 Mumbai, India
              </motion.div>

              {/* Floating tag: Role */}
              <motion.div
                className="absolute -right-10 top-16 glass-card gradient-border px-3 py-1.5 text-xs text-white/60 font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                🤖 AI Intern
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
