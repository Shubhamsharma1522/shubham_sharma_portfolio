import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_CARDS, JourneyCard } from '../data/portfolio';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export const JourneyDeck: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  // Desktop arc rotation and translation values for each card
  const getCardTransform = (index: number, total: number, isHovered: boolean) => {
    if (isHovered) {
      return { y: -24, rotate: 0, scale: 1.04, zIndex: 50 };
    }
    const centerIndex = (total - 1) / 2;
    const offset = index - centerIndex;
    const rotate = offset * 5; // -7.5 to +7.5 degrees
    const y = Math.abs(offset) * 12; // curve downwards on sides
    return { y, rotate, scale: 1, zIndex: 10 + index };
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Desktop Arc Deck (screens >= 900px) */}
      <div
        className="journey-desktop-deck"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '16px',
          padding: '40px 16px 60px',
          position: 'relative',
          minHeight: '440px',
        }}
      >
        {JOURNEY_CARDS.map((card, idx) => {
          const isHovered = activeCardId === card.id;
          const transform = getCardTransform(idx, JOURNEY_CARDS.length, isHovered);

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setActiveCardId(card.id)}
              onMouseLeave={() => setActiveCardId(null)}
              animate={{
                y: transform.y,
                rotate: transform.rotate,
                scale: transform.scale,
                zIndex: transform.zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 24,
              }}
              style={{
                width: '280px',
                flexShrink: 0,
                borderRadius: '18px',
                backgroundColor: '#131318',
                border: isHovered
                  ? `1px solid ${card.accentColor}`
                  : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: isHovered
                  ? `0 24px 48px -12px rgba(0, 0, 0, 0.9), 0 0 24px ${card.accentColor}25`
                  : '0 12px 30px -10px rgba(0, 0, 0, 0.7)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transformOrigin: 'bottom center',
                position: 'relative',
              }}
            >
              <div>
                {/* Header: Company & Date */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        backgroundColor: `${card.accentColor}20`,
                        border: `1px solid ${card.accentColor}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: card.accentColor,
                      }}
                    >
                      <Briefcase size={14} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                      {card.company}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: '"Geist Mono", monospace',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      color: 'rgba(255, 255, 255, 0.65)',
                    }}
                  >
                    {card.period}
                  </span>
                </div>

                {/* Role & Location */}
                <h3
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: card.accentColor,
                    margin: '0 0 4px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {card.role}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '14px' }}>
                  <MapPin size={11} />
                  <span>{card.location}</span>
                </div>

                {/* Narrative */}
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.75)',
                    margin: '0 0 16px 0',
                  }}
                >
                  {card.narrative}
                </p>

                {/* Key Achievements */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
                  {card.bullets.slice(0, 2).map((b, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6px',
                        fontSize: '11px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        lineHeight: 1.5,
                        marginBottom: '6px',
                      }}
                    >
                      <CheckCircle2 size={12} color={card.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Footer */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {card.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: '9px',
                      fontFamily: '"Geist Mono", monospace',
                      padding: '2px 6px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      color: 'rgba(255, 255, 255, 0.75)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Swipe Deck (screens < 900px) */}
      <div
        className="journey-mobile-deck"
        style={{
          display: 'none',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '14px',
          padding: '16px 20px 24px',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {JOURNEY_CARDS.map((card) => (
          <div
            key={card.id}
            style={{
              minWidth: '280px',
              maxWidth: '85vw',
              scrollSnapAlign: 'center',
              flexShrink: 0,
              borderRadius: '16px',
              backgroundColor: '#131318',
              border: `1px solid ${card.accentColor}40`,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              padding: '20px 16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                {card.company}
              </span>
              <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.55)', fontFamily: 'monospace' }}>
                {card.period}
              </span>
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: card.accentColor, margin: '0 0 6px 0' }}>
              {card.role}
            </h3>
            <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.72)', margin: '0 0 12px 0' }}>
              {card.narrative}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {card.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: '9px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

