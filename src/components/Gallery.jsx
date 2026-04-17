import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: '/adrian_portrait.png', alt: 'Adrian Mathew', span: 'col-span-1 row-span-2' },
    { src: '/cathedral_interior.png', alt: 'Cathedral', span: 'col-span-2 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1548625313-039e43701f76?q=80&w=800&auto=format&fit=crop', alt: 'Sacred Ceremony', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800&auto=format&fit=crop', alt: 'Candles', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=800&auto=format&fit=crop', alt: 'Reception', span: 'col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="sacred-label">Moments to Cherish</span>
        <h2 style={{ fontSize: '3rem', color: 'var(--navy)' }}>Gallery</h2>
        <div className="divider-gold" />
      </div>

      <div className="gallery-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridAutoRows: '250px',
        gap: '20px' 
      }}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            style={{ 
              gridColumn: img.span.includes('col-span-2') ? 'span 2' : 'span 1',
              gridRow: img.span.includes('row-span-2') ? 'span 2' : 'span 1',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              background: '#eee'
            }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                transition: 'transform 1s ease'
              }} 
            />
            {/* Soft Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))',
              opacity: 0.3
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
