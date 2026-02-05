import AnimatedSection, { StaggerChildren } from './AnimatedSection'
import skillsData from '../skills.json'

export default function Skills() {
  const skills = skillsData

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-4">
            <svg className="w-4 h-4 inline-block mr-1" />
            My Toolbox
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded" />
        </AnimatedSection>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
          {skills.map((category, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
