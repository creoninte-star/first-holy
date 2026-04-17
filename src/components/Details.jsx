import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Church, Cake } from 'lucide-react';

const Details = () => {
  const eventData = [
    {
      title: "Holy Mass",
      time: "9:30 AM",
      venue: "St. Joseph’s Cathedral",
      location: "Ernakulam, Kochi",
      icon: <Church size={24} />,
      mapLink: "https://maps.google.com/?q=St.+Joseph%27s+Cathedral+Ernakulam"
    },
    {
      title: "Reception",
      time: "12:00 PM",
      venue: "Grace Convention Hall",
      location: "Kakkanad, Kochi",
      icon: <Cake size={24} />,
      mapLink: "https://maps.google.com/?q=Grace+Convention+Hall+Kakkanad"
    }
  ];

  return (
    <section id="details" className="section-container" style={{ background: 'linear-gradient(to bottom, transparent, rgba(247, 231, 206, 0.2), transparent)' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--navy)' }}>Event Details</h2>
        <div className="divider-gold" />
        <p style={{ letterSpacing: '0.3em', fontSize: '0.9rem', color: 'var(--gold-dark)', textTransform: 'uppercase' }}>
          Sunday, 18 May 2026
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '40px' 
      }}>
        {eventData.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="card-luxury"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <div style={{ color: 'var(--gold)', marginBottom: '20px' }}>
              {event.icon}
            </div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '15px' }}>{event.title}</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', marginBottom: '10px' }}>
              <Clock size={16} />
              <span>{event.time}</span>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '1.1rem' }}>{event.venue}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', color: 'var(--text-muted)' }}>
                <MapPin size={14} />
                <span>{event.location}</span>
              </div>
            </div>

            <a 
              href={event.mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium btn-outline"
              style={{ width: '100%', fontSize: '0.8rem' }}
            >
              Get Directions
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.6 }}
         style={{ textAlign: 'center', marginTop: '60px' }}
      >
        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Hosted with Love by <br />
          <strong style={{ color: 'var(--navy)', fontStyle: 'normal', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', letterSpacing: '2px' }}>
            Mathew & Eliza Joseph
          </strong>
        </p>
      </motion.div>
    </section>
  );
};

export default Details;
