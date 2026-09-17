'use client';

import FactoryMindScene from '@/components/FactoryMindScene';

const nav = [['#top', 'Home'], ['#platform', 'Platform'], ['#intelligence', 'Intelligence'], ['#app', 'App']];

const metrics = [
  ['01', 'MACHINES CONNECTED', '248'],
  ['02', 'ACTIVE SIGNALS', '1,204'],
  ['03', 'CASES RESOLVED', '98.7%'],
];

export default function HomePage() {
  return (
    <main className="fm-site fm-dark" id="top">
      <header className="fm-header">
        <a className="fm-brand" href="#top" aria-label="FactoryMind home"><span className="fm-brand-mark">FM</span><span>FACTORYMIND</span></a>
        <nav className="fm-nav" aria-label="Main navigation">
          {nav.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="fm-header-cta" href="/demo">Enter demo <span>↗</span></a>
      </header>

      <section className="fm-hero" aria-labelledby="hero-title">
        <div className="fm-hero-grid" />
        <div className="fm-hero-copy">
          <div className="fm-eyebrow"><span className="fm-live-dot" /> INDUSTRIAL INTELLIGENCE / SYSTEM ONLINE</div>
          <h1 id="hero-title">Smarter<br /><span>Factories.</span><br />Stronger<br /><span>Tomorrow.</span></h1>
          <p className="fm-hero-lead">The intelligence layer for real industrial work. Connect machines, signals, documents and people in one living system.</p>
          <div className="fm-hero-actions"><a className="fm-button fm-button-primary" href="/demo">Explore the system <span>↗</span></a><a className="fm-text-link" href="#platform">See how it works <span>↓</span></a></div>
        </div>

        <div className="fm-hero-visual" aria-label="Live FactoryMind intelligence core visualization">
          <div className="fm-visual-label fm-visual-label-top"><span>CORE / 01</span><b>LIVE</b></div>
          <FactoryMindScene />
          <div className="fm-floating-card fm-card-status"><div className="fm-card-kicker">SYSTEM STATUS <span className="fm-live-dot" /></div><strong>Operational</strong><span>All critical systems nominal</span><div className="fm-status-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="fm-floating-card fm-card-metric"><span className="fm-card-kicker">PREDICTIVE ACCURACY</span><strong>98.7<span>%</span></strong><small>↑ 12.4% this month</small></div>
          <div className="fm-visual-label fm-visual-label-bottom"><span>LATENCY 24ms</span><span>SECURE / ENCRYPTED</span></div>
        </div>
        <div className="fm-scroll-note">SCROLL TO ENTER THE SYSTEM <span>↓</span></div>
      </section>

      <section className="fm-metrics" id="platform">
        <div className="fm-section-tag">01 / THE PLATFORM</div>
        <div className="fm-section-intro"><p className="fm-eyebrow">ONE SOURCE OF TRUTH</p><h2>Every signal.<br /><span>One clear direction.</span></h2><p>FactoryMind turns fragmented factory context into a single operational picture — so teams can move from uncertainty to action.</p></div>
        <div className="fm-metric-grid">{metrics.map(([number, label, value]) => <div className="fm-metric" key={number}><span>{number}</span><small>{label}</small><strong>{value}</strong><em>↗</em></div>)}</div>
      </section>

      <section className="fm-intelligence" id="intelligence">
        <div className="fm-section-tag">02 / INTELLIGENCE</div>
        <div className="fm-intelligence-heading"><p className="fm-eyebrow">FROM SYMPTOM TO ACTION</p><h2>Built for the<br /><span>factory floor.</span></h2><p>Not another dashboard. A reasoning workspace for the people who keep production moving.</p></div>
        <div className="fm-feature-grid">
          <article><span>01</span><h3>Connect the context</h3><p>Machines, maintenance history, documents, photos and signals — connected around the real problem.</p><b>↗</b></article>
          <article><span>02</span><h3>Understand the signal</h3><p>Turn symptoms into structured hypotheses with traceable evidence and practical next checks.</p><b>↗</b></article>
          <article><span>03</span><h3>Act with confidence</h3><p>Choose the next useful action based on risk, time, value and what is actually known.</p><b>↗</b></article>
        </div>
      </section>

      <section className="fm-app-section" id="app">
        <div className="fm-section-tag">03 / FACTORYMIND APP</div>
        <div className="fm-app-copy"><p className="fm-eyebrow">THE WORKSPACE</p><h2>Less guessing.<br /><span>More evidence.</span></h2><p>Cases, machines, components, documents and diagnostic history in one focused interface.</p><div className="fm-hero-actions"><a className="fm-button fm-button-accent" href="/app">Open the app <span>↗</span></a><a className="fm-text-link" href="/demo">Request a demo <span>↗</span></a></div></div>
        <div className="fm-dashboard" aria-label="FactoryMind diagnostic workspace preview"><div className="fm-dashboard-top"><span>FACTORYMIND / DIAGNOSTIC WORKSPACE</span><b><i className="fm-live-dot" /> ACTIVE</b></div><div className="fm-dashboard-heading"><small>MACHINE / G1</small><h3>HPP380 <span>↗</span></h3></div><div className="fm-dashboard-row"><span>SYMPTOM</span><strong>Unstable cutting</strong></div><div className="fm-dashboard-row"><span>CONTEXT</span><strong>Machine · History · Docs</strong></div><div className="fm-dashboard-row"><span>NEXT CHECK</span><strong>Inspect positioning module ↗</strong></div><div className="fm-dashboard-bottom">TRACEABLE DIAGNOSTIC LOG <span>●</span></div></div>
      </section>

      <section className="fm-final"><p className="fm-eyebrow">FACTORYMIND / 2026</p><h2>The factory<br /><span>is ready to think.</span></h2><a className="fm-final-link" href="/demo">Start a conversation <span>↗</span></a></section>
      <footer className="fm-footer"><span>FACTORYMIND — INDUSTRIAL INTELLIGENCE</span><span>BUILT FOR REAL WORK</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
