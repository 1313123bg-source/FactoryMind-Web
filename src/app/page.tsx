'use client';

import { useState } from 'react';
import FactoryMindHero from '@/components/FactoryMindHero';

const stats = [
  ['+24%', 'Average Productivity'],
  ['-18%', 'Energy Consumption'],
  ['-67%', 'Downtime'],
  ['100%', 'Future Focused'],
];

const features = [
  ['✦', 'AI Analytics', 'Turn production data into decisions.'],
  ['↗', 'Process Automation', 'Streamline repetitive operations.'],
  ['◈', 'Predictive Maintenance', 'Avoid costly downtime before it starts.'],
  ['⌁', 'Scalable Solutions', 'Grow with confidence.'],
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="fm-home" id="top">
      <header className="fm-header">
        <a className="fm-brand" href="#top" aria-label="FactoryMind home">
          <span className="fm-brand-mark">⌬</span>
          <strong>FactoryMind</strong>
        </a>
        <nav className="fm-nav" aria-label="Main navigation">
          <a href="#top">Home</a>
          <a href="/demo">Demo</a>
          <a href="/app">App</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="fm-header-cta" href="/demo">Get Started <span>→</span></a>
        <button
          className={`fm-menu ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </header>

      {menuOpen && (
        <div className="fm-mobile-menu" role="dialog" aria-label="Mobile navigation">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home <span>↗</span></a>
          <a href="/demo" onClick={() => setMenuOpen(false)}>Demo <span>↗</span></a>
          <a href="/app" onClick={() => setMenuOpen(false)}>App <span>↗</span></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact <span>↗</span></a>
          <a className="fm-mobile-cta" href="/demo" onClick={() => setMenuOpen(false)}>Get Started <span>→</span></a>
        </div>
      )}

      <section className="fm-hero" aria-labelledby="hero-title">
        <FactoryMindHero />
        <div className="fm-hero-content">
          <div className="fm-pill">AI FOR REAL INDUSTRY</div>
          <h1 id="hero-title">Smarter<br />Factories<br /><span>Stronger</span><br /><span>Tomorrow</span></h1>
          <p>AI-powered solutions for modern manufacturing.<br className="fm-desktop" /> Increase efficiency. Reduce costs. Build the future.</p>
          <div className="fm-actions">
            <a className="fm-button fm-button-primary" href="/demo">See Live Demo <span>→</span></a>
            <a className="fm-button fm-button-ghost" href="#platform">Learn More</a>
          </div>
        </div>
        <div className="fm-ai-card" aria-label="AI optimization status">
          <strong>AI Optimizing...</strong>
          <div><span>Production</span><b>+24%</b></div>
          <div><span>Energy Use</span><b>-18%</b></div>
          <div><span>Downtime</span><b>-67%</b></div>
          <div className="fm-bars" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
        </div>
      </section>

      <section className="fm-stats" aria-label="FactoryMind results">
        <p>Trusted by innovators in manufacturing</p>
        <div className="fm-stats-grid">
          {stats.map(([value, label]) => (
            <article key={label}><strong>{value}</strong><span>{label}</span></article>
          ))}
        </div>
      </section>

      <section className="fm-platform" id="platform">
        <div className="fm-section-heading">
          <span>THE FACTORYMIND PLATFORM</span>
          <h2>Built for modern industry.</h2>
          <p>Connect intelligence, automation and operational visibility in one focused experience.</p>
        </div>
        <div className="fm-feature-grid">
          {features.map(([icon, title, desc]) => (
            <article key={title} className="fm-feature-card">
              <span className="fm-feature-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fm-contact" id="contact">
        <div><span>READY WHEN YOU ARE</span><h2>See FactoryMind in action.</h2><p>Explore the live demo or open the FactoryMind app.</p></div>
        <div className="fm-contact-actions">
          <a className="fm-button fm-button-primary" href="/demo">Live Demo <span>→</span></a>
          <a className="fm-button fm-button-ghost" href="/app">Open App</a>
        </div>
      </section>

      <footer className="fm-footer">
        <a className="fm-brand" href="#top"><span className="fm-brand-mark">⌬</span><strong>FactoryMind</strong></a>
        <span>AI-POWERED MANUFACTURING</span>
        <span>A SMARTER TOMORROW.</span>
      </footer>
    </main>
  );
}