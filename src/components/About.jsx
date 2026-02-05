import AnimatedSection, { StaggerChildren } from './AnimatedSection'
import { TiltCard } from './MicroInteractions'
import { CheckCircle2, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <Sparkles size={16} />
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Passionate About Web development , Data Engineering and Problem Solving </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded" />
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeLeft">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="relative flex-shrink-0">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/30" style={{ boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)' }}>
                  <img 
                    src="/profile.jpeg" 
                    alt="Ahmad Irshaid" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl rounded-2xl -z-10" />
              </div>
              <div>
                <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                  <span className="text-primary font-semibold">Software Engineering student</span> | Full-Stack Developer | Passionate About Web development and Problem Solving | React & Django
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Clean, maintainable code",
                "Test-driven development",
                "Agile methodology expert",
                "CI/CD pipeline integration"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <StaggerChildren className="grid grid-cols-2 gap-6">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "1+", label: "Years Experience" }
            ].map((stat, i) => (
              <TiltCard key={i} className="glass rounded-2xl p-8 text-center hover:glow transition-all duration-300">
                <span className="text-4xl font-bold text-gradient">{stat.number}</span>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </TiltCard>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
