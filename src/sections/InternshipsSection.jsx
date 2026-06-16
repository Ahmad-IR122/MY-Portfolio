import { useEffect, useRef, useState } from 'react'
import { Briefcase, Building2, Calendar, CheckCircle2, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import internshipsData from '../internships.json'
function useInView(ref, threshold = 0.2) {
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [ref, threshold])
  
  return isInView
}

export default function InternshipsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  const internships =internshipsData

  return (
    <section id="internships" className="py-16 relative section-gradient-dark overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[var(--body-text)] text-sm font-medium mb-4">
            <Briefcase size={16} className="text-[var(--accent-cyan)]" />
            Experience
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Internships</h2>
          <div className="w-20 h-1 bg-[var(--accent-cyan)] mx-auto rounded" />
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{background: 'linear-gradient(180deg, rgba(37,99,235,0.9), rgba(96,165,250,0.7))'}}></div>
          
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-cyan)] flex items-center justify-center font-bold text-black text-sm flex-shrink-0 z-10" style={{boxShadow: '0 8px 24px rgba(37,99,235,0.16)'}}>
                  {internship.logo}
                </div>

                <div className="glass rounded-xl p-5 flex-1 hover:border-[var(--accent-cyan)] transition-all border border-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{internship.role}</h3>
                    <span className="text-[var(--body-text)] text-sm">{internship.date}</span>
                  </div>
                  <p className="text-[var(--body-text)] text-sm mb-2">{internship.company}</p>
                  <p className="text-[var(--body-text)] text-sm">{internship.achievements[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
