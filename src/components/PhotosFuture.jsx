import React from 'react';
import { motion } from 'framer-motion';
import { Image, Search, Lock } from 'lucide-react';

const PhotosFuture = () => {
  return (
    <section id="event-photos" style={{ background: 'var(--navy)', padding: '100px 20px', color: 'white' }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span style={{ color: 'var(--gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '20px' }}>
            Future Feature
          </span>
          <h2 style={{ fontSize: '3rem', color: 'var(--champagne)', marginBottom: '30px' }}>Your Event Photos</h2>
          <div className="divider-gold" />
          
          <p style={{ maxWidth: '700px', margin: '0 auto 60px', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Memories from the blessed day, beautifully preserved. On the day of the celebration, 
            guests will be able to access their captured moments directly through this page.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.05)', 
              padding: '40px', 
              border: '1px solid rgba(212, 175, 55, 0.2)',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{ color: 'var(--gold)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <Search size={32} />
              </div>
              <h4 style={{ color: 'white', marginBottom: '15px' }}>Instant Access</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                Search by your guest name or access code to find photos taken with Adrian.
              </p>
            </div>

            <div style={{ 
              background: 'rgba(255,255,255,0.05)', 
              padding: '40px', 
              border: '1px solid rgba(212, 175, 55, 0.2)',
              backdropFilter: 'blur(5px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Shimmer Effect Link */}
              <div className="shimmer" style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)',
                animation: 'shimmer 3s infinite'
              }} />
              
              <div style={{ color: 'var(--gold)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <Image size={32} />
              </div>
              <h4 style={{ color: 'white', marginBottom: '15px' }}>Blessed Memories</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                Event day gallery access will appear here shortly after the ceremony concludes.
              </p>
            </div>

            <div style={{ 
              background: 'rgba(255,255,255,0.05)', 
              padding: '40px', 
              border: '1px solid rgba(212, 175, 55, 0.2)',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{ color: 'var(--gold)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <Lock size={32} />
              </div>
              <h4 style={{ color: 'white', marginBottom: '15px' }}>Private & Secure</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                Your private gallery will be secured for your eyes only and your family's.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
};

export default PhotosFuture;
