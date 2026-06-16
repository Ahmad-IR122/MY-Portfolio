import AnimatedSection, { StaggerChildren } from './AnimatedSection'
import { TiltCard } from './MicroInteractions'
import projectsData from '../projects.json'
import { Github, Sparkles } from 'lucide-react'

export default function Projects() {
  const projects = projectsData

  return (
    <section id="projects" className="py-24 section-gradient relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[var(--body-text)] text-sm font-medium mb-4">
            <Sparkles size={16} className="text-[var(--accent-cyan)]" />
            Featured Projects
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-[var(--accent-cyan)] mx-auto rounded" />
        </AnimatedSection>
        
        <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <TiltCard key={i} tiltStrength={5} className="group glass rounded-2xl overflow-hidden transition-all duration-500 border border-white/5 hover:border-[rgba(96,165,250,0.28)] hover:bg-white/[0.025]">
              <div className={`h-1 ${project.gradient || 'bg-[linear-gradient(90deg,#2563eb,#60a5fa)]'}`} />
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'Full Stack' 
                      ? 'bg-[rgba(37,99,235,0.12)] text-[var(--accent-cyan)]' 
                      : project.category === 'QA'
                      ? 'bg-[rgba(37,99,235,0.08)] text-[var(--accent-cyan)]'
                      : 'bg-[rgba(37,99,235,0.08)] text-[var(--accent-cyan)]'
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] text-[var(--muted-text)] hover:text-white hover:border-[var(--accent-cyan)] hover:bg-white/[0.06] transition-all duration-300">
                        <Github size={18} />
                      </a>
                    )}
                    {/* External link icon removed per request */}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-[var(--accent-cyan)]">{project.title}</h3>
                <p className="text-[var(--body-text)] mb-6 leading-7">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-white/[0.04] rounded-lg text-sm text-[var(--muted-text)] border border-white/5">
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
