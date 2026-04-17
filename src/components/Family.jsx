import React from 'react';
import { motion } from 'framer-motion';

const Family = () => {
  return (
    <section id="family" className="section-container" style={{ textAlign: 'center' }}>
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
       >
         <span className="sacred-label">A Circle of Love</span>
         <h2 style={{ fontSize: '3rem', color: 'var(--navy)', marginBottom: '40px' }}>Our Family</h2>
         
         <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '30px', fontFamily: 'var(--font-serif)', lineHeight: '1.8' }}>
              “With joyful hearts, Mathew Joseph and Eliza Mathew invite you to celebrate the First Holy Communion of their beloved son, Adrian Mathew.”
            </p>
            
            <div className="divider-gold" />
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginTop: '40px' }}>
              <div>
                <h4 style={{ color: 'var(--gold-dark)', fontSize: '0.9rem', marginBottom: '10px' }}>Parents</h4>
                <p style={{ color: 'var(--navy)', fontWeight: 600 }}>Mathew & Eliza Joseph</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--gold-dark)', fontSize: '0.9rem', marginBottom: '10px' }}>Grandparents</h4>
                <p style={{ color: 'var(--navy)', fontWeight: 600 }}>Joseph & Mary Chacko</p>
                <p style={{ color: 'var(--navy)', fontWeight: 600 }}>Antony & Rose Varghese</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--gold-dark)', fontSize: '0.9rem', marginBottom: '10px' }}>Godparents</h4>
                <p style={{ color: 'var(--navy)', fontWeight: 600 }}>Thomas & Sarah Mathew</p>
              </div>
            </div>
         </div>
       </motion.div>
    </section>
  );
};

export default Family;
