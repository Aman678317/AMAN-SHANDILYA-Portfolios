import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, User, Mail, MessageSquare, FileText, CheckCircle2, Loader2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function InputField({ icon: Icon, label, id, type = 'text', placeholder, value, onChange, required }) {
  const focusStyle = {
    borderColor: 'rgba(0,212,255,0.4)',
    boxShadow: '0 0 20px rgba(0,212,255,0.08)',
    background: 'rgba(0,212,255,0.04)',
  }
  const blurStyle = {
    borderColor: 'rgba(255,255,255,0.08)',
    boxShadow: 'none',
    background: 'rgba(255,255,255,0.04)',
  }
  return (
    <div>
      <label htmlFor={id} className="block text-white/60 text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
          <Icon size={16} />
        </div>
        <input
          id={id} type={type} placeholder={placeholder}
          value={value} onChange={onChange} required={required}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all duration-200"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          onFocus={e => Object.assign(e.target.style, focusStyle)}
          onBlur={e => Object.assign(e.target.style, blurStyle)}
        />
      </div>
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = f => e => setForm(p => ({ ...p, [f]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Submission failed:', errorData.error);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contacts = [
    { emoji: '📧', label: 'Email', value: 'shandilyaprahald@gmail.com', href: 'mailto:shandilyaprahald@gmail.com' },
    { emoji: '📱', label: 'Phone', value: '+91 8521027649', href: 'tel:+918521027649' },
    { emoji: '📍', label: 'Location', value: 'Mumbai, India', href: null },
    { emoji: '💼', label: 'LinkedIn', value: 'aman-shandilya', href: 'https://www.linkedin.com/in/aman-shandilya-aa30822b3' },
    { emoji: '🐙', label: 'GitHub', value: 'Aman678317', href: 'https://github.com/Aman678317' },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-16">
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h2 className="section-heading text-white">Let's <span className="neon-text">Connect</span></h2>
          <div className="h-1 w-16 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />
          <p className="text-white/50 mt-6 max-w-xl mx-auto">Open to collaborations, internships, and AI/Data Science opportunities.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="lg:col-span-2 space-y-4">
            {contacts.map(({ emoji, label, value, href }) => (
              <motion.div key={label} className="glass-card gradient-border p-4 flex items-center gap-4"
                whileHover={{ x: 6, boxShadow: '0 10px 40px rgba(0,212,255,0.08)' }} transition={{ duration: 0.2 }}>
                <span className="text-2xl">{emoji}</span>
                <div className="min-w-0">
                  <p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="text-white/80 text-sm font-medium hover:text-neon-blue transition-colors truncate block">{value}</a>
                  ) : (
                    <p className="text-white/80 text-sm font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="lg:col-span-3">
            <div className="glass-card gradient-border p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }} className="py-16 flex flex-col items-center gap-4 text-center">
                    <CheckCircle2 size={60} className="text-green-400" />
                    <h3 className="font-display font-bold text-2xl text-white">Message Sent! 🎉</h3>
                    <p className="text-white/50 text-sm">Thanks for reaching out! I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField icon={User} label="Your Name" id="contact-name" placeholder="John Doe"
                        value={form.name} onChange={handleChange('name')} required />
                      <InputField icon={Mail} label="Email Address" id="contact-email" type="email"
                        placeholder="john@example.com" value={form.email} onChange={handleChange('email')} required />
                    </div>
                    <InputField icon={FileText} label="Subject" id="contact-subject"
                      placeholder="Internship / Collaboration" value={form.subject} onChange={handleChange('subject')} required />
                    <div>
                      <label htmlFor="contact-message" className="block text-white/60 text-sm font-medium mb-2">Message</label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-white/30"><MessageSquare size={16} /></div>
                        <textarea id="contact-message" rows={5} placeholder="Tell me about the opportunity..."
                          value={form.message} onChange={handleChange('message')} required
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all duration-200 resize-none"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                          onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.background = 'rgba(0,212,255,0.04)' }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.04)' }}
                        />
                      </div>
                    </div>
                    <motion.button type="submit" disabled={status === 'loading'}
                      className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-70"
                      whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.98 } : {}}>
                      {status === 'loading' ? <><Loader2 size={16} className="animate-spin" />Sending...</> : <><Send size={16} />Send Message</>}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
