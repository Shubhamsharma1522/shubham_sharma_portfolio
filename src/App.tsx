import React, { useState } from 'react';
import { InteractiveMeshGrid } from './components/InteractiveMeshGrid';
import { ProjectCardStack } from './components/ProjectCardStack';
import { JourneyDeck } from './components/JourneyDeck';
import { ProjectsBento } from './components/ProjectsBento';
import { PhilosophyFan } from './components/PhilosophyFan';
import { PlaygroundCanvas } from './components/PlaygroundCanvas';
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION,
} from './data/portfolio';
import {
  Code,
  Briefcase,
  Cpu,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ChevronRight,
  GraduationCap,
  FolderGit2,
  Sparkles,
  Compass,
  Palette,
  Heart,
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'journey' | 'projects' | 'philosophy' | 'skills' | 'socials' | 'contact'>('hero');

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
      {/* 1. Full-screen Interactive Physics Canvas Mesh Grid */}
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

      {/* 2. Floating Island Navigation Header (Matches Sujit's floating island with rich icons) */}
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
            gap: '14px',
            padding: '8px 20px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            background: 'rgba(14, 14, 20, 0.82)',
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
              paddingRight: '12px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="#journey"
              onClick={() => setActiveSection('journey')}
              style={{
                color: activeSection === 'journey' ? '#60a5fa' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.2s',
              }}
              title="Journey"
            >
              <Compass size={14} />
              <span className="nav-link-text">Journey</span>
            </a>

            <a
              href="#projects"
              onClick={() => setActiveSection('projects')}
              style={{
                color: activeSection === 'projects' ? '#60a5fa' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.2s',
              }}
              title="Projects"
            >
              <FolderGit2 size={14} />
              <span className="nav-link-text">Projects</span>
            </a>

            <a
              href="#philosophy"
              onClick={() => setActiveSection('philosophy')}
              style={{
                color: activeSection === 'philosophy' ? '#60a5fa' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.2s',
              }}
              title="About"
            >
              <Sparkles size={14} />
              <span className="nav-link-text">About</span>
            </a>

            <a
              href="#skills"
              onClick={() => setActiveSection('skills')}
              style={{
                color: activeSection === 'skills' ? '#60a5fa' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.2s',
              }}
              title="Skills"
            >
              <Cpu size={14} />
              <span className="nav-link-text">Skills</span>
            </a>

            <a
              href="#socials"
              onClick={() => setActiveSection('socials')}
              style={{
                color: activeSection === 'socials' ? '#60a5fa' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.2s',
              }}
              title="Playground"
            >
              <Palette size={14} />
              <span className="nav-link-text">Lab</span>
            </a>

            <a
              href="#contact"
              onClick={() => setActiveSection('contact')}
              style={{
                color: activeSection === 'contact' ? '#60a5fa' : 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.2s',
              }}
              title="Contact"
            >
              <Mail size={14} />
              <span className="nav-link-text">Contact</span>
            </a>

            {/* Social Direct Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '8px', borderLeft: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}
                title="GitHub"
              >
                <Github size={14} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}
                title="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ── SECTION 0: HERO SPOTLIGHT (Interactive Card Fan Deck) ── */}
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

      {/* ── SECTION 1: MY JOURNEY (Screen 1: Curved Experience Arc Deck) ── */}
      <section
        id="journey"
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
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
            My Journey
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.72)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Engineering for scale and high-impact digital ecosystems. I've spent 3+ years bridging user expectations with robust backend systems. From architecting high-volume crypto exchanges to real-time mobility dispatch algorithms and generative AI automation, my mission remains the same:{' '}
            <strong style={{ color: '#ffffff' }}>removing friction from the systems that shape our lives.</strong>
          </p>
        </div>

        {/* Fanned Arc Experience Deck */}
        <JourneyDeck />
      </section>

      {/* ── SECTION 2: PROJECTS YOU NEED TO SEE (Screen 2: 7 Bento Grid) ── */}
      <section
        id="projects"
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
        <ProjectsBento />
      </section>

      {/* ── SECTION 3: ENGINEERING PHILOSOPHY & LIFE (Screen 3: Split View + 3D Photo Fan) ── */}
      <section
        id="philosophy"
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
        <PhilosophyFan />
      </section>

      {/* ── SECTION 4: TECHNICAL SKILLS MATRIX & EDUCATION ── */}
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

      {/* ── SECTION 5: BEYOND THE CODE / SOCIALS (Screen 4: Draggable Polaroids & Music) ── */}
      <section
        id="socials"
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
        <PlaygroundCanvas />
      </section>

      {/* ── SECTION 6: CONTACT & FOOTER ── */}
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
