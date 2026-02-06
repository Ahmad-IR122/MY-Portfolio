import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbarBlack border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white">
          Ahmad Irshaid
        </a>

        <button 
          className="md:hidden p-2 text-white text-accent-cyan"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-navbarBlack md:bg-transparent p-6 md:p-0 gap-4 md:gap-8 border-b md:border-none border-white/10`}>
          {['Home', 'About', 'Services', 'Skills', 'Projects', 'Internships', 'Education', 'Certifications', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-200" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
