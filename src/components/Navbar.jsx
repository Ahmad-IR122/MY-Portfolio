import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbarBlack/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white tracking-tight">
          Ahmad Irshaid
        </a>

        <button 
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-[var(--accent-cyan)] hover:bg-white/5 focus-visible:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul id="primary-navigation" className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-navbarBlack/98 md:bg-transparent p-6 md:p-0 gap-4 md:gap-8 border-b md:border-none border-white/10 md:items-center`}>
          {['Home', 'About', 'Services', 'Skills', 'Projects', 'Internships', 'Education', 'Certifications', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-cyan)] group-hover:w-full transition-all duration-200" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
