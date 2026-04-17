import React from 'react';
import { motion } from 'framer-motion';

const ThankYou = () => {
  return (
    <section id="thank-you" className="section-container" style={{ textAlign: 'center', padding: '150px 20px' }}>
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.5 }}
       >
         <div style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '40px' }}>🕊</div>
         
         <h2 style={{ fontSize: '3.5rem', color: 'var(--navy)', marginBottom: '30px' }}>With Gratitude</h2>
         <div className="divider-gold" />
         
         <p style={{ 
           maxWidth: '700px', 
           margin: '0 auto', 
           fontSize: '1.3rem', 
           fontFamily: 'var(--font-serif)', 
           lineHeight: '1.8', 
           fontStyle: 'italic',
           color: 'var(--text-main)'
         }}>
           “Thank you for being part of Adrian's journey of faith. Your presence, prayers, and blessings 
           mean the world to us as we celebrate this sacred milestone. May God’s grace be with you always.”
         </p>
         
         <div style={{ marginTop: '60px' }}>
           <p style={{ letterSpacing: '0.4em', fontSize: '0.9rem', color: 'var(--gold-dark)', textTransform: 'uppercase' }}>
             The Joseph Family
           </p>
         </div>
         
         <motion.div
           animate={{ scale: [1, 1.1, 1] }}
           transition={{ duration: 3, repeat: Infinity }}
           style={{ marginTop: '50px', opacity: 0.5 }}
         >
           <span style={{ fontSize: '2rem' }}>✙</span>
         </motion.div>
       </motion.div>
    </section>
  );
};

export default ThankYou;
