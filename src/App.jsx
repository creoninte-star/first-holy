import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Portrait from './components/Portrait';
import Details from './components/Details';
import Blessing from './components/Blessing';
import Family from './components/Family';
import Timeline from './components/Timeline';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import PhotosFuture from './components/PhotosFuture';
import ThankYou from './components/ThankYou';
import Navigation from './components/Navigation';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      <div className="page-border"></div>
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--gold)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <Portrait />
        <Details />
        <Blessing />
        <Family />
        <Timeline />
        <Countdown />
        <Gallery />
        <RSVP />
        <PhotosFuture />
        <ThankYou />
      </main>
      
      <footer style={{ padding: '40px 20px', textAlign: 'center', background: 'var(--navy)', color: 'white' }}>
        <p style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
          ADRIAN MATHEW • MAY 18, 2026
        </p>
      </footer>

      {/* Music Note Sticker */}
      <div className="music-sticker" style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'var(--ivory)',
        width: '50px',
        height: '50px',
        border: '1px solid var(--gold)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        zIndex: 100,
        cursor: 'pointer'
      }}>
        <span className="spin-slow" style={{ fontSize: '1.4rem', color: 'var(--gold-dark)' }}>♪</span>
      </div>
    </div>
  );
}

export default App;
