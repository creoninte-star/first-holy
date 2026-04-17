import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = () => {
  const targetDate = new Date('2026-05-18T09:30:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ value, label }) => (
    <div style={{ padding: '20px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            fontSize: '3rem', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--navy)',
            lineHeight: 1
          }}
        >
          {String(value).padStart(2, '0')}
        </motion.div>
      </AnimatePresence>
      <div style={{ 
        letterSpacing: '0.2em', 
        fontSize: '0.7rem', 
        textTransform: 'uppercase', 
        color: 'var(--gold-dark)',
        marginTop: '10px'
      }}>
        {label}
      </div>
    </div>
  );

  return (
    <section id="countdown" style={{ 
      background: 'white', 
      padding: 'var(--section-padding) 20px', 
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
      textAlign: 'center'
    }}>
      <div className="section-container" style={{ padding: '0 10px' }}>
        <h2 style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', marginBottom: '30px', color: 'var(--text-muted)' }}>The Blessed Day Approaches</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <Item value={timeLeft.days} label="Days" />
          <div style={{ fontSize: '1.5rem', padding: '15px 5px', color: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center' }}>:</div>
          <Item value={timeLeft.hours} label="Hours" />
          <div style={{ fontSize: '1.5rem', padding: '15px 5px', color: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center' }}>:</div>
          <Item value={timeLeft.minutes} label="Minutes" />
          <div style={{ fontSize: '1.5rem', padding: '15px 5px', color: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center' }}>:</div>
          <Item value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
