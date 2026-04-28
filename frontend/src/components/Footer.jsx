import { motion } from 'framer-motion'
import { Mail, Phone, Heart } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons'

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-shandilya-aa30822b3', label: 'LinkedIn', color: '#0077b5' },
  { icon: Github, href: 'https://github.com/Aman678317', label: 'GitHub', color: '#fff' },
  { icon: Mail, href: 'mailto:shandilyaprahald@gmail.com', label: 'Email', color: '#00d4ff' },
  { icon: Phone, href: 'tel:+918521027649', label: 'Phone', color: '#a855f7' },
]

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = href => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, #a855f7, transparent)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-black text-2xl mb-3">
              <span className="neon-text">AS</span>
              <span className="text-white/20 mx-1">·</span>
              <span className="text-white/60 text-lg font-semibold">Portfolio</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              AI & Data Science Intern passionate about building intelligent solutions using Generative AI, Python, and Machine Learning.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, boxShadow: `0 0 20px ${color}40` }}
                  whileTap={{ scale: 0.9 }}>
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)}
                    className="text-white/40 text-sm hover:text-neon-blue transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-3">
              {[
                { label: 'shandilyaprahald@gmail.com', href: 'mailto:shandilyaprahald@gmail.com' },
                { label: '+91 8521027649', href: 'tel:+918521027649' },
                { label: 'Mumbai, India', href: null },
              ].map(({ label, href }) => (
                <li key={label}>
                  {href ? (
                    <a href={href} className="text-white/40 text-sm hover:text-neon-blue transition-colors">{label}</a>
                  ) : (
                    <span className="text-white/40 text-sm">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © 2026 Aman Shandilya. All rights reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1.5">
            Built with <Heart size={12} className="text-neon-purple fill-neon-purple" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
