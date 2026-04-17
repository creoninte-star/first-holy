import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      padding: isScrolled ? '15px 40px' : '30px 40px',
      background: isScrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none'
    }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--navy)', letterSpacing: '2px' }}>
        AM
      </div>
      
      <div style={{ display: 'none', gap: '30px', alignItems: 'center' }}>
         {/* Desktop links hidden for mobile-first/minimalist approach in some cases, but I'll add them with a media query in index.css if needed */}
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
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
    </nav>
  );
};

export default Navigation;
