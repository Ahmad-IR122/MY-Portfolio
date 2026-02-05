import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Building2, Calendar, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function EducationSection() {
  const education = [
    {
      degree: "High School Diploma",
      institution: "Jenin Industrial secondary school",
      period: "2022",
      description: "Completed secondary education."
    },
    {
      degree: "B.A. Software Engineering",
      institution: "An-Najah National University",
      period: "Expected Sep 2026",
      description: "Full Stack Development, QA Engineering, UX/UI Design."
    },
  ]

  return (
    <section id="education" className="py-6 relative">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium mb-4">
            <GraduationCap size={16} />
            Education
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Academic Background</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <div key={index} className="glass rounded-xl p-5 hover:border-pink-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-500/50 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-pink-400 text-sm">
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
