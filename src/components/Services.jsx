import AnimatedSection, { StaggerChildren } from './AnimatedSection'
import { TiltCard } from './MicroInteractions'
import servicesData from '../services.json'
import { Code2, TestTube2, Layers, Cpu, Database } from 'lucide-react'

const iconMap = { Code2, TestTube2, Layers, Cpu, Database }

export default function Services() {
  const services = servicesData

  return (
    <section id="services" className="py-24 bg-dark-300/50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded" />
        </AnimatedSection>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <TiltCard key={i} className="group glass rounded-2xl p-8 text-center hover:glow transition-all duration-500">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {Icon ? <Icon size={28} className="text-white" /> : null}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </TiltCard>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
