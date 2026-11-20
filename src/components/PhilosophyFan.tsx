import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY_PHOTOS } from '../data/portfolio';
import { Sparkles, Terminal, ShieldCheck, Zap, Layers } from 'lucide-react';

export const PhilosophyFan: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
        alignItems: 'center',
        gap: '60px',
        padding: '20px 0',
      }}
    >
      {/* Left Column: Story & Principles */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span
          style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#3b82f6',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
          }}
        >
          <Sparkles size={12} />
          <span>Core Engineering Philosophy</span>
        </span>

        <h2
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(2.2rem, 4.5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}
        >
          Architecting for high impact, scale & precision.
        </h2>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.78)',
            marginBottom: '16px',
          }}
        >
          Designing for the <strong>‘Next Billion’</strong> and the <strong>‘Next Big Thing.’</strong> I've spent 3+ years bridging the gap between high-concurrency backend services and fluid, accessible user interfaces. Whether architecting fault-tolerant cryptocurrency trading engines, low-latency live GPS dispatch algorithms, or streaming generative AI pipelines, my mission remains the same:{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>
            removing friction from the systems that shape our lives.
          </span>
        </p>

        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.65)',
            marginBottom: '28px',
          }}
        >
          I treat engineering not merely as syntax, but as product craft—measuring performance in sub-millisecond roundtrips, 60fps interaction smoothness, and zero-downtime scalability.
        </p>

        {/* 3 Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
          {[
            {
              icon: <Zap size={16} color="#38bdf8" />,
              title: "Sub-Millisecond Latency Focus",
              desc: "Optimized Redis caching, WebSocket streaming, and lean virtualized state pipelines."
            },
            {
              icon: <ShieldCheck size={16} color="#34d399" />,
              title: "Fintech Grade Security & Compliance",
              desc: "Automated identity screening, Web3 wallet verification, and SonarQube quality gates."
            },
            {
              icon: <Layers size={16} color="#a78bfa" />,
              title: "Full-Stack Fluid Craft",
              desc: "Pixel-perfect React & React Native apps backed by resilient Node.js microservices."
            }
          ].map((pillar) => (
            <div
              key={pillar.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ marginTop: '2px', flexShrink: 0 }}>{pillar.icon}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  {pillar.title}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.55)', lineHeight: 1.4 }}>
                  {pillar.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: 3D Perspective Photo Fan */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          height: '480px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1200px',
          userSelect: 'none',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '280px',
            height: '360px',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-18deg) rotateX(10deg) rotateZ(4deg)',
            transition: 'transform 0.4s ease',
          }}
        >
          {PHILOSOPHY_PHOTOS.map((photo, idx) => {
            const count = PHILOSOPHY_PHOTOS.length;
            // Fan out offset
            const spreadMult = isHovered ? 1.4 : 1.0;
            const xOffset = (idx - (count - 1) / 2) * (52 * spreadMult);
            const yOffset = (idx - (count - 1) / 2) * (20 * spreadMult);
            const zOffset = idx * (isHovered ? 40 : 25);
            const rotZ = (idx - (count - 1) / 2) * (7 * spreadMult);

            return (
              <motion.div
                key={photo.id}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  z: zOffset,
                  rotateZ: rotZ,
                  scale: isHovered && idx === count - 1 ? 1.05 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  backgroundColor: '#16161c',
                  border: '1.5px solid rgba(255, 255, 255, 0.15)',
                  overflow: 'hidden',
                  boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.05) brightness(0.92)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 10, 14, 0.95) 10%, transparent 65%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '3px',
                    }}
                  >
                    {photo.title}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      fontFamily: 'Inter, sans-serif',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.4,
                    }}
                  >
                    {photo.caption}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

