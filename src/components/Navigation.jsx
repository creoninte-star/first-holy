import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MoreVertical } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Details', href: '#details' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Your Photos', href: '#event-photos' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: isScrolled ? '15px clamp(20px, 5vw, 40px)' : '30px clamp(20px, 5vw, 40px)',
      background: isScrolled ? 'rgba(250, 249, 246, 0.98)' : 'transparent',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none'
    }}>
      {/* Logo - Hidden on Mobile */}
      <div className="nav-logo" style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: '1.4rem', 
        color: 'var(--navy)', 
        letterSpacing: '2px' 
      }}>
        AM
      </div>
      
      {/* Desktop Menu */}
      <div className="nav-links-desktop" style={{ display: 'flex', gap: '30px' }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              textDecoration: 'none',
              color: 'var(--navy)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--gold)'}
            onMouseOut={(e) => e.target.style.color = 'var(--navy)'}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Trigger */}
      <div className="nav-mobile-trigger" style={{ display: 'none', color: 'var(--navy)', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(true)}>
        <MoreVertical size={28} />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--ivory)',
              zIndex: 2000,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{ position: 'absolute', top: '30px', right: '30px', cursor: 'pointer', color: 'var(--navy)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <span className="sacred-label" style={{ marginBottom: '40px' }}>Menu</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--navy)',
                      fontSize: '1.2rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.3em',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 500
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="divider-gold" style={{ marginTop: '50px' }} />
              <p style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', letterSpacing: '0.2em' }}>
                ADRIAN MATHEW • 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
