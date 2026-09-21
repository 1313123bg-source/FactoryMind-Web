'use client';

import { useState } from 'react';
import FactoryMindHero from '@/components/FactoryMindHero';
import { BarChart3, Layers3, ShieldCheck, Settings2, Home, CirclePlay, AppWindow, MessageSquare, X, ArrowRight } from 'lucide-react';

const stats = [
  ['+24%', 'Average Productivity'],
  ['-18%', 'Energy Consumption'],
  ['-67%', 'Downtime'],
  ['100%', 'Future Focused'],
] as const;

const features = [
  [BarChart3, 'AI Analytics', 'Turn data into decisions.'],
  [Settings2, 'Process Automation', 'Streamline repetitive operations.'],
  [ShieldCheck, 'Predictive Maintenance', 'Avoid costly downtime.'],
  [Layers3, 'Scalable Solutions', 'Grow with confidence.'],
] as const;

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <main className="fm-home" id="top">
      <FactoryMindHero menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />

      {menuOpen && (
        <div className="fm-mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="fm-mobile-menu__top">
            <a href="#top" className="fm-brand" onClick={() => setMenuOpen(false)} aria-label="FactoryMind home">
              <img src={`${basePath}/icon.svg`} alt="" />
              <strong>FactoryMind</strong>
            </a>
            <button type="button" className="fm-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={23} strokeWidth={1.8} />
            </button>
          </div>

          <nav className="fm-mobile-menu__links" aria-label="Mobile navigation">
            <a href="#top" onClick={() => setMenuOpen(false)}><Home size={17} />Home</a>
            <a href={`${basePath}/demo/`} onClick={() => setMenuOpen(false)}><CirclePlay size={17} />Demo</a>
            <a href={`${basePath}/app/`} onClick={() => setMenuOpen(false)}><AppWindow size={17} />App</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}><MessageSquare size={17} />Contact</a>
          </nav>

          <a className="fm-mobile-menu__cta" href={`${basePath}/demo/`} onClick={() => setMenuOpen(false)}>
            Get Started <ArrowRight size={17} />
          </a>
        </div>
      )}

      <section className="fm-stats" aria-label="FactoryMind results">
        <p>Trusted by innovators in manufacturing</p>
        <div className="fm-stats-grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="fm-platform" id="platform">
        <div className="fm-section-heading">
          <span>THE FACTORYMIND PLATFORM</span>
          <h2>Built for Modern Industry</h2>
          <p>FactoryMind combines cutting-edge AI with real-world industrial expertise to deliver measurable results.</p>
        </div>
        <div className="fm-feature-grid">
          {features.map(([Icon, title, description]) => (
            <article className="fm-feature-card" key={title}>
              <span className="fm-feature-icon"><Icon size={20} strokeWidth={1.8} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fm-contact" id="contact">
        <div>
          <span>READY WHEN YOU ARE</span>
          <h2>See FactoryMind in action.</h2>
          <p>Explore the live demo or open the FactoryMind app.</p>
        </div>
        <div className="fm-contact-actions">
          <a className="fm-btn fm-btn-primary" href={`${basePath}/demo/`}>Live Demo <ArrowRight size={16} /></a>
          <a className="fm-btn fm-btn-ghost" href={`${basePath}/app/`}>Open App</a>
        </div>
      </section>

      <footer className="fm-footer">
        <a href="#top" className="fm-brand" aria-label="FactoryMind home">
          <img src={`${basePath}/icon.svg`} alt="" />
          <strong>FactoryMind</strong>
        </a>
        <span>AI-POWERED MANUFACTURING</span>
        <span>A SMARTER TOMORROW.</span>
      </footer>
    </main>
  );
}
