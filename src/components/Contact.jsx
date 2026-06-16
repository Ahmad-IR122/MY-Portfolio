import AnimatedSection from './AnimatedSection'
import { StaggerChildren } from './AnimatedSection'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 section-gradient-light overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-[var(--accent-cyan)] mx-auto rounded mb-6" />
          <p className="text-[var(--body-text)] text-lg max-w-2xl mx-auto leading-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </AnimatedSection>
        
        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-8" staggerDelay={100}>
          <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-[var(--accent-icon)] transition-all duration-300 group border border-white/5">
            <div className="w-14 h-14 rounded-xl bg-[rgba(37,99,235,0.08)] border flex items-center justify-center" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
              <Mail size={20} className="text-[var(--accent-icon)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--body-text)] uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-medium text-sm">irsheidahmad094@gmail.com</p>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-[var(--accent-icon)] transition-all duration-300 group border border-white/5">
            <div className="w-14 h-14 rounded-xl bg-[rgba(37,99,235,0.08)] border flex items-center justify-center" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
              <Phone size={20} className="text-[var(--accent-icon)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--body-text)] uppercase tracking-wider mb-1">Phone</p>
              <p className="text-[var(--accent-icon)] font-medium text-sm">+972 594651900</p>
            </div>
          </div>
        </StaggerChildren>
        
        <AnimatedSection>
          <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-[var(--accent-icon)] transition-all duration-300 group max-w-md border border-white/5">
            <div className="w-14 h-14 rounded-xl bg-[rgba(37,99,235,0.08)] border flex items-center justify-center" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
              <MapPin size={20} className="text-[var(--accent-icon)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--body-text)] uppercase tracking-wider mb-1">Location</p>
              <p className="text-white font-medium text-sm">Jenin, Palestine</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-12 text-center">
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { icon: Github, label: "GitHub", href:"https://github.com/Ahmad-IR122" },
              { icon: Linkedin, label: "LinkedIn", href:"https://www.linkedin.com/in/ahmadikirshaid/" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center glass rounded-xl text-[var(--muted-text)] hover:text-white hover:border-[var(--accent-icon)] transition-all duration-300 hover:-translate-y-1 border border-white/5"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
