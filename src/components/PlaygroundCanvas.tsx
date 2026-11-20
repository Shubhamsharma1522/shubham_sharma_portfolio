import React from 'react';
import { motion } from 'framer-motion';
import { PLAYGROUND_POLAROIDS, PLAYGROUND_TRACKS, PERSONAL_INFO } from '../data/portfolio';
import { Instagram, Linkedin, Github, Play, Volume2, Move } from 'lucide-react';

export const PlaygroundCanvas: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '680px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderRadius: '28px',
        backgroundColor: '#07070a',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
      }}
    >
      {/* Background Grid Accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Drag Hint Indicator (matches Sujit's [ drag object to move ] pill) */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          padding: '6px 12px',
          borderRadius: '6px',
          backgroundColor: 'rgba(18, 18, 24, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          color: 'rgba(255, 255, 255, 0.75)',
          fontFamily: '"Geist Mono", monospace',
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          zIndex: 30,
          pointerEvents: 'none',
        }}
      >
        <Move size={12} color="#60a5fa" />
        <span>[ Drag objects to move ]</span>
      </div>

      {/* Centerpiece Branding Anchor */}
      <div
        style={{
          position: 'relative',
          zIndex: 25,
          textAlign: 'center',
          maxWidth: '480px',
          padding: '30px 24px',
          borderRadius: '24px',
          backgroundColor: 'rgba(10, 10, 15, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.8), 0 0 40px rgba(59, 130, 246, 0.15)',
        }}
      >
        {/* Handwritten Cursive "Connect on" */}
        <span
          style={{
            fontFamily: 'Caveat, cursive',
            fontSize: '36px',
            color: '#60a5fa',
            display: 'block',
            lineHeight: 1,
            marginBottom: '-4px',
          }}
        >
          Connect on
        </span>

        {/* Large Bold Headline */}
        <h2
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(2.5rem, 5.5vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            lineHeight: 1,
            margin: '0 0 14px 0',
          }}
        >
          Socials & Lab.
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.75)',
            margin: '0 0 24px 0',
          }}
        >
          My digital sketchbook. A space for unfinished prototypes, open-source thoughts, and late-night experiments.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              borderRadius: '9999px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(2, 132, 199, 0.35)',
            }}
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <Instagram size={14} />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Scattered Draggable Polaroids */}
      {PLAYGROUND_POLAROIDS.map((pol) => (
        <motion.div
          key={pol.id}
          drag
          dragConstraints={{ left: -250, right: 250, top: -200, bottom: 200 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.08, zIndex: 100, cursor: 'grabbing' }}
          whileHover={{ scale: 1.05, zIndex: 90 }}
          initial={{
            x: pol.initialX,
            y: pol.initialY,
            rotate: pol.rotation,
          }}
          style={{
            position: 'absolute',
            width: '160px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '10px 10px 14px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0,0,0,0.3)',
            cursor: 'grab',
            zIndex: pol.zIndex,
            userSelect: 'none',
          }}
        >
          {/* Polaroid Photo Image */}
          <div
            style={{
              width: '100%',
              height: '130px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#1a1a22',
              marginBottom: '8px',
            }}
          >
            <img
              src={pol.image}
              alt={pol.title}
              draggable={false}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Polaroid Caption */}
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              color: '#18181b',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {pol.title}
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '8px',
              color: '#71717a',
              marginTop: '2px',
              lineHeight: 1.3,
            }}
          >
            {pol.caption}
          </div>
        </motion.div>
      ))}

      {/* Floating Spotify Audio Widgets */}
      {PLAYGROUND_TRACKS.map((track) => (
        <motion.div
          key={track.id}
          drag
          dragConstraints={{ left: -250, right: 250, top: -200, bottom: 200 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.06, zIndex: 100, cursor: 'grabbing' }}
          whileHover={{ scale: 1.04, zIndex: 90 }}
          initial={{
            x: track.initialX,
            y: track.initialY,
            rotate: track.rotation,
          }}
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 14px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(18, 18, 24, 0.92)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.8)',
            cursor: 'grab',
            zIndex: 18,
            userSelect: 'none',
          }}
        >
          {/* Cover Art */}
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <img
              src={track.cover}
              alt={track.title}
              draggable={false}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: '"Space Grotesk", sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              {track.title}
            </div>
            <div
              style={{
                fontSize: '9px',
                fontFamily: '"Geist Mono", monospace',
                color: '#10b981',
                whiteSpace: 'nowrap',
              }}
            >
              {track.artist}
            </div>
          </div>

          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              marginLeft: '4px',
            }}
          >
            <Play size={11} fill="#000000" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

