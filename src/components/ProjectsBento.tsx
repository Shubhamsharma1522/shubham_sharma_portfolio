import React from 'react';
import { motion } from 'framer-motion';
import { BENTO_PROJECTS } from '../data/portfolio';
import { ArrowUpRight, Sparkles, Github, ExternalLink } from 'lucide-react';

export const ProjectsBento: React.FC = () => {
  const topRow = BENTO_PROJECTS.slice(0, 3);
  const bottomRow = BENTO_PROJECTS.slice(3, 7);

  return (
    <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            margin: '0 0 14px 0',
          }}
        >
          Projects you need to see
        </h2>
        <p
          style={{
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.72)',
            maxWidth: '620px',
            margin: '0 auto 8px',
            lineHeight: 1.6,
          }}
        >
          Translating complex engineering problems into scalable, production-tested solutions
        </p>
        <p
          style={{
            fontSize: '12px',
            fontFamily: '"Geist Mono", monospace',
            color: 'rgba(255, 255, 255, 0.45)',
            margin: 0,
          }}
        >
          For NDA compliance, several core architectural deep-dives are private. Curious?{' '}
          <a
            href="mailto:shubhamsharma.in1522@gmail.com"
            style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px dashed #60a5fa' }}
          >
            Drop me a line
          </a>{' '}
          and I'll share relevant case studies.
        </p>
      </div>

      {/* Row 1: 3 Featured Projects */}
      <div
        className="bento-top-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {topRow.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.4)' }}
            transition={{ duration: 0.25 }}
            style={{
              borderRadius: '20px',
              backgroundColor: '#111116',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 16px 36px -12px rgba(0, 0, 0, 0.7)',
            }}
          >
            {/* Visual Preview Area */}
            <div
              style={{
                position: 'relative',
                height: '190px',
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#0a0a0e',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9)',
                  transition: 'transform 0.5s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #111116 5%, transparent 60%)',
                }}
              />

              {/* Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${project.accentColor}50`,
                  color: project.accentColor,
                  fontSize: '10px',
                  fontFamily: '"Geist Mono", monospace',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Sparkles size={10} />
                <span>{project.badge}</span>
              </div>
            </div>

            {/* Content Area */}
            <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 6px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.7)',
                    margin: '0 0 16px 0',
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '9px',
                        fontFamily: '"Geist Mono", monospace',
                        padding: '2px 7px',
                        borderRadius: '5px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.75)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#60a5fa',
                    textDecoration: 'none',
                    transition: 'gap 0.2s',
                  }}
                >
                  <span>View details</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Row 2: 4 Projects */}
      <div
        className="bento-bottom-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
      >
        {bottomRow.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.4)' }}
            transition={{ duration: 0.25 }}
            style={{
              borderRadius: '20px',
              backgroundColor: '#111116',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 16px 36px -12px rgba(0, 0, 0, 0.7)',
            }}
          >
            {/* Visual Preview Area */}
            <div
              style={{
                position: 'relative',
                height: '150px',
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#0a0a0e',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #111116 5%, transparent 60%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${project.accentColor}50`,
                  color: project.accentColor,
                  fontSize: '9px',
                  fontFamily: '"Geist Mono", monospace',
                  fontWeight: 600,
                }}
              >
                {project.badge}
              </div>
            </div>

            {/* Content Area */}
            <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 6px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '11px',
                    lineHeight: 1.5,
                    color: 'rgba(255, 255, 255, 0.65)',
                    margin: '0 0 12px 0',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '9px',
                        fontFamily: '"Geist Mono", monospace',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#60a5fa',
                    textDecoration: 'none',
                  }}
                >
                  <span>View details</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

