import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ProjectCard } from '../data/portfolio';
import { ArrowUpRight, Code, Layers, Sparkles } from 'lucide-react';

interface ProjectStackProps {
  projects: ProjectCard[];
  cardCount?: number;
  swipeThreshold?: number;
  tiltAngle?: number;
  tiltAngleStart?: number;
  xOffset?: number;
  perspective?: number;
  depthSpacing?: number;
  cardRadius?: number;
}

export const ProjectCardStack: React.FC<ProjectStackProps> = ({
  projects: initialProjects,
  cardCount = 4,
  swipeThreshold = 180,
  tiltAngle = 26,
  tiltAngleStart = 0,
  xOffset = 110,
  perspective = 1100,
  depthSpacing = 32,
  cardRadius = 20,
}) => {
  const [projects, setProjects] = useState<ProjectCard[]>(initialProjects);
  const [isDragging, setIsDragging] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);

  // Spring physics configuration:
  // transition: { type: "spring", stiffness: 300, damping: 30, delay: 0, mass: 1 }
  const springTransition = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const { offset } = info;
    const distance = Math.sqrt(offset.x * offset.x + offset.y * offset.y);

    if (distance > swipeThreshold) {
      setProjects((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    } else {
      setIsSwiped(true);
      setTimeout(() => setIsSwiped(false), 700);
    }
  };

  const handleCardClick = (index: number) => {
    if (index === 0) {
      setProjects((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    } else {
      setProjects((prev) => {
        const target = prev[index];
        const remaining = prev.filter((_, i) => i !== index);
        return [target, ...remaining];
      });
    }
  };

  const visibleCards = projects.slice(0, cardCount);
  const total = visibleCards.length;

  return (
    <div
      style={{
        width: '320px',
        maxWidth: '100%',
        height: '460px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        perspective: `${perspective}px`,
        userSelect: 'none',
      }}
    >
      {visibleCards.map((project, index) => {
        const isTop = index === 0;

        const scale = 1 - index * 0.05;
        const rot = total > 1 ? tiltAngleStart + (index / (total - 1)) * (tiltAngle - tiltAngleStart) : tiltAngleStart;
        const xPos = total > 1 ? (index / (total - 1)) * xOffset : 0;
        const yPos = -(index * 8);
        const zIndex = total - index;

        return (
          <motion.div
            key={project.id}
            drag={isTop}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.65}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onClick={() => handleCardClick(index)}
            animate={{
              x: isTop && isSwiped ? 0 : xPos,
              y: isTop && isSwiped ? 0 : yPos,
              rotate: isTop && isSwiped ? 0 : rot,
              scale: scale,
              zIndex: zIndex,
              opacity: 1,
            }}
            whileHover={
              !isTop
                ? { scale: scale + 0.03, y: yPos - 12 }
                : { scale: 1.02 }
            }
            whileDrag={{
              scale: 1.05,
              rotate: tiltAngleStart,
              zIndex: 1000,
            }}
            transition={{
              x: springTransition,
              y: springTransition,
              rotate: springTransition,
              scale: springTransition,
              zIndex: { duration: 0.3, ease: 'easeOut' },
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: cardRadius,
              backgroundColor: '#101015',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              overflow: 'hidden',
              cursor: isTop ? (isDragging ? 'grabbing' : 'grab') : 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transformOrigin: 'bottom right',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Top Header Card Decoration */}
            <div
              style={{
                position: 'relative',
                padding: '24px 22px 16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: `linear-gradient(135deg, ${project.accentColor}18 0%, transparent 80%)`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontFamily: '"Geist Mono", monospace',
                    fontWeight: 600,
                    color: project.accentColor,
                    background: `${project.accentColor}18`,
                    border: `1px solid ${project.accentColor}35`,
                  }}
                >
                  <Sparkles size={11} />
                  <span>{project.badge}</span>
                </span>

                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a1a1aa',
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <h3
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  margin: '0 0 6px 0',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: project.accentColor,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {project.subtitle}
              </p>
            </div>

            {/* Middle Description */}
            <div style={{ padding: '16px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.72)',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {project.description}
              </p>

              {/* Tech stack tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '14px' }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: '"Geist Mono", monospace',
                      fontSize: '10px',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div
              style={{
                padding: '14px 22px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
              }}
            >
              <span
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.45)',
                }}
              >
                {project.stats}
              </span>

              <span
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '11px',
                  color: project.accentColor,
                  fontWeight: 600,
                }}
              >
                0{projects.indexOf(project) + 1} / 0{projects.length}
              </span>
            </div>

            {/* Color Accent Indicator Line */}
            <div
              style={{
                height: '2px',
                width: '100%',
                backgroundColor: project.accentColor,
                opacity: 0.85,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

