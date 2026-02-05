import AnimatedSection from './AnimatedSection'
import { StaggerChildren } from './AnimatedSection'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </AnimatedSection>
        
        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-8" staggerDelay={100}>
          <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
              <Mail size={24} className="text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-medium text-sm">irsheidahmad094@gmail.com</p>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
              <Phone size={24} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
              <p className="text-cyan-400 font-medium text-sm">+972 594651900</p>
            </div>
          </div>
        </StaggerChildren>
        
        <AnimatedSection>
          <div className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-teal-500/50 transition-all duration-300 group max-w-md">
            <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
              <MapPin size={24} className="text-teal-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
              <p className="text-white font-medium text-sm">Jenin, Palestine</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-12 text-center">
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, label: "GitHub", color: "hover:border-gray-400" , href:"https://github.com/Ahmad-IR122" },
              { icon: Linkedin, label: "LinkedIn", color: "hover:border-blue-500" , href:"https://www.linkedin.com/in/ahmadikirshaid/" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                className={`w-12 h-12 flex items-center justify-center glass rounded-xl text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:-translate-y-1`}
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
