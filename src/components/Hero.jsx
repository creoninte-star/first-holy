import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{
      height: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ivory)'
    }}>
      {/* Background Image / Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.6,
        backgroundImage: `url('/hero_cathedral_bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      
      {/* Sacred Motifs Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="sacred-label"
        >
          With Grace and Gratitude
        </motion.span>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           style={{ margin: '20px 0', width: '100%' }}
        >
          <h1 className="hero-title" style={{ fontSize: 'var(--h1-size)', marginBottom: '10px', color: 'var(--navy)', wordWrap: 'break-word' }}>
            First Holy <br /> Communion
          </h1>
          <div className="divider-gold" style={{ margin: '20px auto' }} />
          <h2 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', letterSpacing: '0.3em', color: 'var(--gold-dark)', textTransform: 'uppercase' }}>
            Adrian Mathew
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ 
            maxWidth: '600px', 
            margin: '20px auto', 
            fontSize: '1.1rem', 
            fontStyle: 'italic',
            color: 'var(--text-muted)'
          }}
        >
          With joyful hearts, we invite you to join us as our beloved son receives the Sacred Sacrament for the first time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#details" className="btn-premium">View Event Details</a>
          <a href="#rsvp" className="btn-premium btn-outline">RSVP with Blessings</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          style={{ marginTop: '60px', color: 'var(--gold-dark)', opacity: 0.8 }}
        >
          <p style={{ letterSpacing: '0.2em', fontSize: '0.8rem' }}>
            ST. JOSEPH’S CATHEDRAL • ERNAKULAM • MAY 18, 2026
          </p>
        </motion.div>
      </div>

      {/* Decorative Cues */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'var(--gold)', zIndex: 10 }}
      >
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
