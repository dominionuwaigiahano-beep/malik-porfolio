export default function Skills() {
  const categories = [
    {
      title: 'Cybersecurity',
      icon: '◈',
      skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Threat Analysis', 'Data Protection', 'Risk Assessment']
    },
    {
      title: 'Finance',
      icon: '◇',
      skills: ['Portfolio Management', 'Fund Management', 'Financial Analysis', 'Investment Strategy', 'Risk Management', 'Capital Markets']
    },
    {
      title: 'Software & Web',
      icon: '◉',
      skills: ['JavaScript', 'python', 'React', 'Next.js', 'HTML & CSS', 'Node.js', 'Git & GitHub']
    },
    {
      title: 'AI & Machine Learning',
      icon: '◎',
      skills: ['Machine Learning', 'AI Integration', 'Data Analysis', 'Model Training', 'Python', 'Neural Networks']
    },
  ]

  return (
    <section id="skills" style={{minHeight: '100vh', padding: '120px 40px', position: 'relative'}}>

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)'
      }} />

      <div style={{maxWidth: '1200px', margin: '0 auto'}}>

        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '5px', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
            <span style={{width: '30px', height: '1px', background: '#D4AF37', display: 'inline-block'}}></span>
            Expertise
            <span style={{width: '30px', height: '1px', background: '#D4AF37', display: 'inline-block'}}></span>
          </p>
          <h2 className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '400', color: '#fff', lineHeight: '1.1'}}>
            A Rare Combination<br />
            <span style={{color: '#D4AF37', fontStyle: 'italic'}}>of Skills</span>
          </h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px'}}>
          {categories.map((cat, i) => (
            <div key={i} className="premium-card" style={{padding: '40px 32px', animationDelay: `${i * 0.1}s`}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px'}}>
                <span style={{color: '#D4AF37', fontSize: '18px'}}>{cat.icon}</span>
                <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888'}}>
                  {cat.title}
                </h3>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop: '80px', padding: '50px', border: '1px solid rgba(212,175,55,0.1)', background: 'rgba(212,175,55,0.02)', textAlign: 'center'}}>
          <p className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 3vw, 32px)', color: '#555', fontStyle: 'italic', lineHeight: '1.6'}}>
            "The convergence of <span style={{color: '#D4AF37'}}>financial intelligence</span> and <span style={{color: '#D4AF37'}}>digital security</span> is the frontier of modern business — and I live there."
          </p>
          <div style={{width: '40px', height: '1px', background: '#D4AF37', margin: '24px auto 0'}} />
          <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '3px', color: '#333', textTransform: 'uppercase', marginTop: '16px'}}>
            Malik Uwaigiahano — Cyber Domm
          </p>
        </div>

      </div>
    </section>
  )
}
