import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="section-container" style={{ textAlign: 'center' }}>
      <div className="card-luxury" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--ivory)' }}>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                Kindly respond by 1st May 2026
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: 'var(--gold-dark)' }}>Full Name</label>
                <input 
                  type="text" 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: 'none', 
                    borderBottom: '1px solid var(--gold)', 
                    background: 'transparent',
                    outline: 'none',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-sans)'
                  }} 
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: 'var(--gold-dark)' }}>Number of Guests</label>
                <input 
                  type="number" 
                  min="1" 
                  defaultValue="1"
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: 'none', 
                    borderBottom: '1px solid var(--gold)', 
                    background: 'transparent',
                    outline: 'none',
                    fontSize: '1rem'
                  }} 
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: 'var(--gold-dark)' }}>Contact Number</label>
                <input 
                  type="tel" 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: 'none', 
                    borderBottom: '1px solid var(--gold)', 
                    background: 'transparent',
                    outline: 'none',
                    fontSize: '1rem'
                  }} 
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: 'var(--gold-dark)' }}>Attendance</label>
                <select style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: 'none', 
                  borderBottom: '1px solid var(--gold)', 
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '1rem'
                }}>
                  <option>Joyfully Attending</option>
                  <option>Regretfully Declining</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: 'var(--gold-dark)' }}>Blessings & Messages</label>
              <textarea 
                rows="4"
                placeholder="Write your blessings here..."
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid rgba(212, 175, 55, 0.3)', 
                  background: 'rgba(255,255,255,0.5)',
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-sans)',
                  resize: 'none'
                }} 
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button type="submit" className="btn-premium" style={{ width: '250px' }}>
                SUBMIT WITH BLESSINGS
              </button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ padding: '60px 20px' }}
          >
            <div style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '20px' }}>🕊</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '10px' }}>Thank You!</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Your response has been received with gratitude. <br />
              We look forward to celebrating this sacred day with you.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              style={{ 
                marginTop: '30px', 
                background: 'none', 
                border: 'none', 
                color: 'var(--gold-dark)', 
                textDecoration: 'underline', 
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              Edit Response
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
