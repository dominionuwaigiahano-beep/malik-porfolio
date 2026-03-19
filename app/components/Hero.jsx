export default function Hero() {
  return (
    <section id="home" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 40px'}}>

      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} className="animate-pulse-gold" />

      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute', top: '15%', right: '10%',
        width: '300px', height: '300px',
        border: '1px solid rgba(212,175,55,0.05)',
        transform: 'rotate(45deg)',
        pointerEvents: 'none'
      }} className="animate-float" />

      <div style={{maxWidth: '1200px', margin: '0 auto', width: '100%', paddingTop: '120px', paddingBottom: '80px', position: 'relative', zIndex: 2}}>

        <p className="animate-fadeUp" style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '10px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: '#D4AF37',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <span style={{width: '40px', height: '1px', background: '#D4AF37', display: 'inline-block'}}></span>
          Finance. Technology. Excellence.
        </p>

        <h1 className="animate-fadeUp-d1 display-font" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(56px, 10vw, 120px)',
          fontWeight: '300',
          lineHeight: '0.95',
          color: '#fff',
          marginBottom: '8px',
          letterSpacing: '-1px'
        }}>
          Malik
        </h1>

        <h1 className="animate-fadeUp-d2 shimmer-text display-font" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(56px, 10vw, 120px)',
          fontWeight: '600',
          lineHeight: '0.95',
          marginBottom: '40px',
          letterSpacing: '-1px'
        }}>
          Uwaigiahano
        </h1>

        <div className="gold-line animate-fadeUp-d2" style={{width: '120px', marginBottom: '40px'}} />

        <p className="animate-fadeUp-d3" style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '13px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#555',
          marginBottom: '16px'
        }}>
          Cybersecurity · Finance · Software Development · AI/ML
        </p>

        <p className="animate-fadeUp-d4" style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '15px',
          color: '#444',
          lineHeight: '1.9',
          maxWidth: '540px',
          marginBottom: '56px',
          fontWeight: '300'
        }}>
          Guinness World Record holder. Finance professional at Prime Capital.
          Building at the intersection of security, technology, and wealth.
        </p>

        <div className="animate-fadeUp-d5" style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
          <a href="#about" className="btn-gold-solid">
            Explore My Work
          </a>
          <a href="#contact" className="btn-gold">
            Get In Touch
          </a>
        </div>

        <div style={{
          position: 'absolute', right: '0', top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
        }} className="hidden md:flex animate-fadeIn">
          <div style={{width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, #D4AF37)'}} />
          <span style={{writingMode: 'vertical-rl', fontSize: '9px', letterSpacing: '3px', color: '#333', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif"}}>Scroll Down</span>
          <div style={{width: '1px', height: '80px', background: 'linear-gradient(to bottom, #D4AF37, transparent)'}} />
        </div>
      </div>
    </section>
  )
}
