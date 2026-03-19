export default function About() {
  const stats = [
    { number: 'GWR', label: 'Guinness World Record', sub: 'One time Smallest Rubiks Cube Solver' },
    { number: '15s', label: 'Rubiks Cube Speed', sub: 'Personal best solve time' },
    { number: 'BSc', label: 'Computer Science', sub: 'University Graduate' },
    { number: 'PCI', label: 'Prime Capital', sub: 'Finance Professional' },
  ]

  return (
    <section id="about" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 40px', position: 'relative'}}>

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)'
      }} />

      <div style={{maxWidth: '1200px', margin: '0 auto', width: '100%'}}>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center'}} className="animate-slideLeft">

          <div>
            <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '5px', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'}}>
              <span style={{width: '30px', height: '1px', background: '#D4AF37', display: 'inline-block'}}></span>
              About Me
            </p>

            <h2 className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 70px)', fontWeight: '400', lineHeight: '1.05', color: '#fff', marginBottom: '32px'}}>
              Where Security<br />
              <span style={{color: '#D4AF37', fontStyle: 'italic'}}>Meets Finance</span>
            </h2>

            <div style={{width: '50px', height: '1px', background: '#D4AF37', marginBottom: '32px'}} />

            <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#555', lineHeight: '2', marginBottom: '20px', fontWeight: '300'}}>
              Known as <span style={{color: '#D4AF37'}}>Cyber Domm</span> — I once held a Guinness World Record as the world's smallest Rubiks cube solver and a BSc in Computer Science and a master in Cybersecurity. I bring the same precision and problem-solving discipline to everything I do.
            </p>

            <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#555', lineHeight: '2', marginBottom: '20px', fontWeight: '300'}}>
              Currently working at <span style={{color: '#D4AF37'}}>Prime Capital & Investment Limited</span> in Abuja, where I bridge the gap between financial expertise and modern web technology — managing systems, building solutions, and staying ahead of the curve.
            </p>

            <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#555', lineHeight: '2', fontWeight: '300'}}>
              My edge: I don't just understand finance <span style={{color: '#888'}}>or</span> technology — I command both. In a world where digital security and financial systems are increasingly inseparable, that's rare.
            </p>
          </div>

          <div className="animate-slideRight">
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              {stats.map((stat, i) => (
                <div key={i} className="premium-card" style={{padding: '36px 28px', animationDelay: `${i * 0.1}s`}}>
                  <div className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: '600', color: '#D4AF37', lineHeight: '1', marginBottom: '12px'}}>
                    {stat.number}
                  </div>
                  <div style={{fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#888', marginBottom: '6px'}}>
                    {stat.label}
                  </div>
                  <div style={{fontFamily: "'Montserrat', sans-serif", fontSize: '10px', color: '#333', letterSpacing: '1px'}}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
