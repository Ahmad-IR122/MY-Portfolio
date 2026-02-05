import AnimatedSection, { StaggerChildren } from './AnimatedSection'
import { TiltCard } from './MicroInteractions'
import projectsData from '../projects.json'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = projectsData

  return (
    <section id="projects" className="py-24 bg-dark-300/50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded" />
        </AnimatedSection>
        
        <StaggerChildren className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <TiltCard key={i} tiltStrength={5} className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-500">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'Full Stack' 
                      ? 'bg-indigo-500/20 text-indigo-400' 
                      : project.category === 'QA'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-pink-500/20 text-pink-400'
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-100 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                        <Github size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-100 text-gray-400 hover:text-white hover:bg-primary transition-all duration-300">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">{project.title}</h3>
                <p className="text-gray-500 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-dark-100 rounded-lg text-sm text-gray-400">
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
