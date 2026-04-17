import React from 'react';
import { motion } from 'framer-motion';

const Blessing = () => {
  return (
    <section id="blessing" style={{
      padding: '120px 20px',
      background: 'var(--navy)',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Motifs */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '15rem',
        opacity: 0.03,
        color: 'white',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        ✙
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '30px' }}>✧</div>
          
          <h2 style={{ color: 'var(--champagne)', fontSize: '2rem', letterSpacing: '0.2em', marginBottom: '40px' }}>
            Sacred Promise
          </h2>
          
          <p style={{ 
            fontSize: '1.8rem', 
            fontFamily: 'var(--font-serif)', 
            maxWidth: '800px', 
            margin: '0 auto 30px',
            lineHeight: '1.5',
            fontStyle: 'italic'
          }}>
            “Whoever eats this bread will live forever.”
          </p>
          <p style={{ letterSpacing: '0.3em', fontSize: '1rem', color: 'var(--gold)', marginBottom: '60px' }}>
            — JOHN 6:51
          </p>

          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
              “May this holy day bring faith to his heart, peace to his soul, and grace to his journey. As Adrian receives his First Holy Communion, we pray for God's eternal love to guide him always.”
            </p>
          </div>
          
          <div style={{ color: 'var(--gold)', fontSize: '2rem', marginTop: '30px' }}>✧</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blessing;
