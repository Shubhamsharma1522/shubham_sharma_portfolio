import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface CustomCursorProps {
  label?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ label = 'Swipe to see' }) => {
  const [visible, setVisible] = useState(false);

  // Smooth springs with exact Framer damping & stiffness
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {/* Exact bracket box from Framer */}
      <div
        style={{
          position: 'relative',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          background: 'rgba(5, 5, 5, 0.45)',
          borderRadius: '4px',
        }}
      >
        {/* Corner Brackets */}
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '6px',
            borderTop: '1.5px solid rgba(255, 255, 255, 0.85)',
            borderLeft: '1.5px solid rgba(255, 255, 255, 0.85)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '6px',
            height: '6px',
            borderTop: '1.5px solid rgba(255, 255, 255, 0.85)',
            borderRight: '1.5px solid rgba(255, 255, 255, 0.85)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '6px',
            height: '6px',
            borderBottom: '1.5px solid rgba(255, 255, 255, 0.85)',
            borderLeft: '1.5px solid rgba(255, 255, 255, 0.85)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '6px',
            height: '6px',
            borderBottom: '1.5px solid rgba(255, 255, 255, 0.85)',
            borderRight: '1.5px solid rgba(255, 255, 255, 0.85)',
          }}
        />

        {/* Text */}
        <span
          style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: '#ffffff',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
};

