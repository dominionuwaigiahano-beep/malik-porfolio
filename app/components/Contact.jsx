'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{minHeight: '100vh', padding: '120px 40px', position: 'relative'}}>

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)'
      }} />

      <div style={{maxWidth: '1200px', margin: '0 auto'}}>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'start'}}>

          <div>
            <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '5px', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'}}>
              <span style={{width: '30px', height: '1px', background: '#D4AF37', display: 'inline-block'}}></span>
              Contact
            </p>

            <h2 className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 70px)', fontWeight: '400', color: '#fff', lineHeight: '1.05', marginBottom: '32px'}}>
              Let's Build<br />
              <span style={{color: '#D4AF37', fontStyle: 'italic'}}>Something</span>
            </h2>

            <div style={{width: '50px', height: '1px', background: '#D4AF37', marginBottom: '40px'}} />

            <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#444', lineHeight: '2', marginBottom: '56px', fontWeight: '300'}}>
              Whether it's a cybersecurity consultation, a finance technology project, or just a conversation — I'm open to it.
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
              {[
                { label: 'Location', value: 'Abuja, Nigeria' },
                { label: 'Company', value: 'Prime Capital & Investment Ltd' },
                { label: 'Expertise', value: 'Cyber · Finance · Dev · AI' },
              ].map((item) => (
                <div key={item.label} style={{display: 'flex', gap: '20px', alignItems: 'flex-start', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.04)'}}>
                  <div style={{width: '1px', height: '40px', background: 'linear-gradient(to bottom, #D4AF37, transparent)', flexShrink: 0}} />
                  <div>
                    <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#333', marginBottom: '6px'}}>{item.label}</p>
                    <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#666'}}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{border: '1px solid rgba(212,175,55,0.2)', padding: '60px 40px', textAlign: 'center', background: 'rgba(212,175,55,0.02)'}}>
                <div className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '60px', color: '#D4AF37', marginBottom: '20px'}}>✦</div>
                <h3 className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#fff', marginBottom: '16px'}}>Message Received</h3>
                <p style={{fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: '#444', letterSpacing: '1px', lineHeight: '1.8'}}>
                  Thank you for reaching out. I will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '36px'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="input-premium"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    className="input-premium"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="input-premium"
                    style={{resize: 'none', fontFamily: "'Montserrat', sans-serif"}}
                  />
                </div>
                <button type="submit" className="btn-gold-solid" style={{alignSelf: 'flex-start'}}>
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

        <div style={{marginTop: '100px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
          <span className="display-font" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#222', letterSpacing: '2px'}}>MALIK UWAIGIAHANO</span>
          <span style={{fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '2px', color: '#222', textTransform: 'uppercase'}}>
            © 2025 · All Rights Reserved
          </span>
        </div>

      </div>
    </section>
  )
}
