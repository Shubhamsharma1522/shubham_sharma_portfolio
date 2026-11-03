import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveMeshGrid } from './components/InteractiveMeshGrid';
import { ProjectCardStack } from './components/ProjectCardStack';
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCES,
  SKILL_CATEGORIES,
  EDUCATION,
} from './data/portfolio';
import {
  Code,
  Briefcase,
  Terminal,
  Cpu,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  ChevronRight,
  Layers,
  Sparkles,
  Award,
  GraduationCap,
  ArrowUpRight,
  FolderGit2,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'projects' | 'experience' | 'skills' | 'contact'>('hero');
  const [activeExpTab, setActiveExpTab] = useState(0);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#050507',
        color: '#f3f4f6',
        position: 'relative',
        overflowX: 'hidden',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* 1. Full-screen Interactive Canvas Mesh Grid */}
      <InteractiveMeshGrid
        gridSize={58}
        repulsionStrength={-0.65}
        radius={360}
        dotSize={1.5}
        gridThickness={0.5}
        baseOpacity={0.09}
        hoverColor="rgb(59, 130, 246)"
        gridColor="rgb(255, 255, 255)"
        dotColor="rgb(255, 255, 255)"
        cursorTrail={true}
        trailColor="rgb(96, 165, 250)"
        trailLength={0.12}
      />

      {/* 2. Floating Island Navigation Header */}
      <header
        style={{
          position: 'fixed',
          top: '20px',
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: '0 16px',
        }}
      >
        <nav
          className="nav-island"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            padding: '8px 22px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.65)',
            background: 'rgba(16, 16, 22, 0.78)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Logo Badge */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingRight: '14px',
              borderRight: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '6px',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontFamily: 'monospace',
                border: '1px solid rgba(59, 130, 246, 0.35)',
              }}
            >
              ✦
            </span>
            <span className="nav-brand-text">Shubham Sharma</span>
          </a>

          {/* Nav Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="#projects"
              onClick={() => setActiveSection('projects')}
              style={{
                color: activeSection === 'projects' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.2s',
              }}
            >
              <FolderGit2 size={15} />
              <span className="nav-link-text">Projects</span>
            </a>

            <a
              href="#experience"
              onClick={() => setActiveSection('experience')}
              style={{
                color: activeSection === 'experience' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.2s',
              }}
            >
              <Briefcase size={15} />
              <span className="nav-link-text">Experience</span>
            </a>

            <a
              href="#skills"
              onClick={() => setActiveSection('skills')}
              style={{
                color: activeSection === 'skills' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.2s',
              }}
            >
              <Cpu size={15} />
              <span className="nav-link-text">Skills</span>
            </a>

            <a
              href="#contact"
              onClick={() => setActiveSection('contact')}
              style={{
                color: activeSection === 'contact' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.2s',
              }}
            >
              <Mail size={15} />
              <span className="nav-link-text">Contact</span>
            </a>

            {/* Social Direct Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '8px', borderLeft: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}
                title="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}
                title="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ── SECTION 1: HERO SPOTLIGHT ── */}
      <section
        id="hero"
        className="hero-section"
        style={{
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '130px 24px 60px',
          maxWidth: '1240px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            alignItems: 'center',
            gap: '56px',
            width: '100%',
          }}
        >
          {/* Left Hero Typography */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>

            {/* Live Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '9999px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                color: '#60a5fa',
                fontSize: '11px',
                fontFamily: '"Geist Mono", monospace',
                marginBottom: '18px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
              <span>Full Stack Software Developer • 3+ Yrs Exp</span>
            </div>

            {/* Display Title */}
            <h1
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 'clamp(2.1rem, 6vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              Shubham Sharma
            </h1>

            {/* Headline Subtitle */}
            <h2
              style={{
                fontFamily: '"Geist Mono", monospace',
                fontSize: 'clamp(13px, 3.5vw, 15px)',
                fontWeight: 600,
                color: '#3b82f6',
                letterSpacing: '-0.01em',
                marginBottom: '18px',
              }}
            >
              {PERSONAL_INFO.tagline}
            </h2>

            {/* Bio Paragraph */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.72)',
                maxWidth: '520px',
                margin: '0 0 28px 0',
              }}
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              <a
                href="#projects"
                className="hero-cta-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '13px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(59, 130, 246, 0.35)',
                  transition: 'transform 0.2s',
                }}
              >
                <span>Explore Technical Projects</span>
                <ChevronRight size={15} />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hero-cta-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '13px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'background 0.2s',
                }}
              >
                <Mail size={15} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Stats Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                width: '100%',
                maxWidth: '480px',
              }}
            >
              {PERSONAL_INFO.stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '4px' }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Fan-Deck Interactive Card Stack */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '440px',
              width: '100%',
              overflow: 'visible',
            }}
          >
            <ProjectCardStack projects={PROJECTS} cardCount={4} />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WORK EXPERIENCE ── */}
      <section
        id="experience"
        className="section-pad"
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '100px 24px',
          maxWidth: '1240px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: '"Geist Mono", monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#3b82f6',
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Professional Milestones
          </span>
          <h2
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Work Experience
          </h2>
        </div>

        {/* Experience Timeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              style={{
                borderRadius: '20px',
                padding: '28px',
                backgroundColor: 'rgba(18, 18, 24, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(16px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontFamily: '"Geist Mono", monospace',
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                      color: '#60a5fa',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                    }}
                  >
                    {exp.period}
                  </span>
                  <span style={{ fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: 'rgba(255, 255, 255, 0.4)' }}>
                    {exp.location}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {exp.role}
                </h3>
                <h4
                  style={{
                    fontSize: '14px',
                    color: '#60a5fa',
                    fontWeight: 600,
                    marginBottom: '18px',
                  }}
                >
                  {exp.company}
                </h4>

                <ul style={{ paddingLeft: '18px', margin: '0 0 20px 0', color: 'rgba(255, 255, 255, 0.72)', fontSize: '13px', lineHeight: 1.6 }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: '10px',
                      fontFamily: '"Geist Mono", monospace',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: TECHNICAL SKILLS & EDUCATION ── */}
      <section
        id="skills"
        className="section-pad"
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '100px 24px',
          maxWidth: '1240px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: '"Geist Mono", monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#3b82f6',
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Engineering Arsenal
          </span>
          <h2
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Technical Skills & Architecture
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              style={{
                borderRadius: '16px',
                padding: '24px',
                backgroundColor: 'rgba(18, 18, 24, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <h3
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#60a5fa',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Code size={16} />
                <span>{cat.category}</span>
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: '"Geist Mono", monospace',
                      fontSize: '12px',
                      padding: '5px 10px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Box */}
        <div
          className="edu-box"
          style={{
            marginTop: '32px',
            borderRadius: '16px',
            padding: '26px 30px',
            backgroundColor: 'rgba(59, 130, 246, 0.06)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#60a5fa',
                flexShrink: 0,
              }}
            >
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: '0 0 4px 0' }}>
                {EDUCATION.degree}
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
                {EDUCATION.institution} • {EDUCATION.university}
              </p>
            </div>
          </div>

          <div className="edu-grade" style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '13px', fontFamily: '"Geist Mono", monospace', color: '#60a5fa', fontWeight: 700 }}>
              {EDUCATION.grade}
            </span>
            <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>
              {EDUCATION.period}
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONTACT & FOOTER ── */}
      <section
        id="contact"
        className="section-pad"
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '100px 24px 60px',
          maxWidth: '1240px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span
            style={{
              fontFamily: '"Geist Mono", monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#3b82f6',
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Let's Collaborate
          </span>
          <h2
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Ready to build something exceptional?
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '32px',
            }}
          >
            Always open to discussing full-stack engineering challenges, fintech & Web3 architectures, and AI product integrations.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '48px' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hero-cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '9999px',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.35)',
              }}
            >
              <Mail size={16} />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#60a5fa" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} color="#60a5fa" />
              <span>{PERSONAL_INFO.phone}</span>
            </span>
          </div>
        </div>

        {/* Minimal Footer Signature */}
        <footer
          className="footer-row"
          style={{
            marginTop: '80px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            fontFamily: '"Geist Mono", monospace',
            color: 'rgba(255, 255, 255, 0.4)',
            gap: '12px',
          }}
        >
          <span>© 2026 Shubham Sharma. All rights reserved.</span>
          <span>Crafted with React • TypeScript • Framer Motion</span>
        </footer>
      </section>
    </div>
  );
}
