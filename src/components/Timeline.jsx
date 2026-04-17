import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const schedule = [
    { time: "9:00 AM", event: "Arrival of Guests", desc: "Gathering at St. Joseph’s Cathedral" },
    { time: "9:30 AM", event: "Holy Mass Begins", desc: "The Sacred Sacrament Celebration" },
    { time: "10:30 AM", event: "First Communion Blessing", desc: "Photographs with the Celebrant" },
    { time: "11:15 AM", event: "Family Greetings", desc: "Sharing joy outside the Cathedral" },
    { time: "12:00 PM", event: "Reception Lunch", desc: "Grace Convention Hall" },
  ];

  return (
    <section id="schedule" className="section-container" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--navy)', marginBottom: '60px' }}>Ceremonial Timeline</h2>
      
      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
        {/* Central Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'rgba(212, 175, 55, 0.3)',
          transform: 'translateX(-50%)'
        }} />

        {schedule.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              textAlign: index % 2 === 0 ? 'right' : 'left',
              marginBottom: '50px',
              position: 'relative'
            }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '10px',
              width: '12px',
              height: '12px',
              background: 'var(--gold)',
              borderRadius: '50%',
              transform: 'translateX(-50%)',
              border: '4px solid var(--ivory)',
              zIndex: 2
            }} />

            <div style={{ width: '45%' }}>
              <span style={{ 
                color: 'var(--gold-dark)', 
                fontSize: '0.9rem', 
                fontWeight: 600,
                letterSpacing: '0.1em'
              }}>
                {item.time}
              </span>
              <h4 style={{ 
                color: 'var(--navy)', 
                fontSize: '1.2rem', 
                margin: '10px 0',
                textTransform: 'none'
              }}>
                {item.event}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
