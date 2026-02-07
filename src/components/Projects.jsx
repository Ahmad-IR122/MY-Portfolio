import AnimatedSection, { StaggerChildren } from './AnimatedSection'
import { TiltCard } from './MicroInteractions'
import projectsData from '../projects.json'
import { Github } from 'lucide-react'

export default function Projects() {
  const projects = projectsData

  return (
    <section id="projects" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[var(--body-text)] text-sm font-medium mb-4">
            <Sparkles size={16} className="text-[var(--accent-cyan)]" />
            Featured Projects
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded" />
        </AnimatedSection>
        
        <StaggerChildren className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <TiltCard key={i} tiltStrength={5} className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-500">
              <div className={`h-2 ${project.gradient || 'bg-[linear-gradient(90deg,#0ea5e9,#06b6d4)]'}`} />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'Full Stack' 
                      ? 'bg-[rgba(56,189,248,0.12)] text-[var(--accent-cyan)]' 
                      : project.category === 'QA'
                      ? 'bg-[rgba(56,189,248,0.06)] text-[var(--accent-cyan)]'
                      : 'bg-[rgba(56,189,248,0.06)] text-[var(--accent-cyan)]'
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-[rgba(255,255,255,0.03)] text-[var(--muted-text)] hover:text-white hover:border-[var(--accent-cyan)] transition-all duration-300">
                        <Github size={18} />
                      </a>
                    )}
                    {/* External link icon removed per request */}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:glow transition-all duration-300">{project.title}</h3>
                <p className="text-[var(--body-text)] mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-[rgba(255,255,255,0.03)] rounded-lg text-sm text-[var(--muted-text)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
