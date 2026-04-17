import React from 'react';
import { motion } from 'framer-motion';

const Portrait = () => {
  return (
    <section id="portrait" className="section-container" style={{ textAlign: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            padding: '20px',
            border: '1px solid var(--gold)',
            position: 'relative',
            zIndex: 1
          }}>
             <div style={{
               width: '100%',
               height: 'auto',
               aspectRatio: '3/4',
               overflow: 'hidden',
               position: 'relative'
             }}>
               <img 
                 src="/adrian_portrait.png" 
                 alt="Adrian Mathew" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
               />
               <div style={{
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
               }} />
             </div>
          </div>
          {/* Decorative Frames */}
          <div style={{
            position: 'absolute',
            top: '-15px',
            right: '-15px',
            width: '100px',
            height: '100px',
            borderRight: '2px solid var(--gold)',
            borderTop: '2px solid var(--gold)',
            zIndex: 0
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-15px',
            left: '-15px',
            width: '100px',
            height: '100px',
            borderLeft: '2px solid var(--gold)',
            borderBottom: '2px solid var(--gold)',
            zIndex: 0
          }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ textAlign: 'left' }}
        >
          <span className="sacred-label">The Sacred Journey</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '30px' }}>Adrian Mathew</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '20px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            "Let the children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these." — Matthew 19:14
          </p>
          <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.8' }}>
            A day of pure light and divine blessing. Adrian is stepping into a new chapter of faith, 
            embracing the love and grace of the Holy Eucharist. This milestone is a celebration of spiritual growth, 
            guidance, and the beautiful path ahead.
          </p>
          <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
             <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
             <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)' }}>
               Grace • Faith • Love
             </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portrait;
