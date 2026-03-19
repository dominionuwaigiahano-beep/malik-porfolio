'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About', 'Skills', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212,175,55,0.12)' : '1px solid transparent',
      transition: 'all 0.5s ease'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <div style={{display: 'flex', alignItems: 'baseline', gap: '10px'}}>
          <span style={{fontFamily: "'Cormorant Garamond', serif", color: '#D4AF37', fontWeight: '600', fontSize: '22px', letterSpacing: '3px'}}>MALIK</span>
          <span style={{color: '#333', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif"}}>Uwaigiahano</span>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '48px'}} className="hidden md:flex">
          {links.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#555',
                fontSize: '10px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'color 0.3s ease',
                animationDelay: `${i * 0.1}s`
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold"
            style={{padding: '10px 28px', fontSize: '10px'}}
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{display: 'none', color: '#D4AF37', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer'}}
          className="md:hidden"
          aria-label="Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div style={{background: '#050505', padding: '20px 40px 32px', borderTop: '1px solid rgba(212,175,55,0.1)'}}>
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                color: '#555',
                padding: '14px 0',
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontFamily: "'Montserrat', sans-serif",
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                transition: 'color 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
