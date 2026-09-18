'use client';

import FactoryMindScene from '@/components/FactoryMindScene';

const stats = [
  ['+24%', 'Average Productivity'],
  ['-18%', 'Energy Consumption'],
  ['-67%', 'Downtime'],
  ['100%', 'Future Focused'],
];

const features = [
  ['◫', 'AI Analytics', 'Turn data into decisions'],
  ['✦', 'Process Automation', 'Streamline operations'],
  ['◇', 'Predictive Maintenance', 'Avoid costly downtime'],
  ['▱', 'Scalable Solutions', 'Grow with confidence'],
];

export default function HomePage() {
  return (
    <main className="fm-site" id="top">
      <header className="fm-header">
        <a className="fm-brand" href="#top" aria-label="FactoryMind home"><span className="fm-brand-mark">⌬</span><b>FactoryMind</b></a>
        <nav className="fm-nav" aria-label="Main navigation">
          <a href="#top">Home</a><a href="/demo">Demo</a><a href="/app">App</a><a href="/owner">For Owners</a><a href="#contact">Contact</a>
        </nav>
        <a className="fm-header-cta" href="/demo">Get Started</a>
        <button className="fm-menu" aria-label="Open menu"><span/><span/><span/></button>
      </header>

      <section className="fm-hero">
        <div className="fm-hero-media"><FactoryMindScene /></div>
        <div className="fm-hero-overlay" />
        <div className="fm-hero-copy">
          <div className="fm-pill">AI FOR REAL INDUSTRY</div>
          <h1>Smarter<br/>Factories<br/><span>Stronger<br/>Tomorrow</span></h1>
          <p>AI-powered solutions for modern manufacturing.<br/>Increase efficiency. Reduce costs. Build the future.</p>
          <div className="fm-actions"><a className="fm-button fm-button-primary" href="/demo">See Live Demo <span>→</span></a><a className="fm-button fm-button-ghost" href="#platform">Learn More</a></div>
        </div>
        <div className="fm-ai-card"><b>AI Optimizing...</b><div><span>Production</span><strong>+24%</strong></div><div><span>Energy Use</span><strong>-18%</strong></div><div><span>Downtime</span><strong>-67%</strong></div><div className="fm-bars"><i/><i/><i/><i/><i/><i/></div></div>
      </section>

      <section className="fm-stats" id="platform"><p>Trusted by innovators in manufacturing</p><div>{stats.map(([value,label])=><article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></section>

      <section className="fm-built">
        <div className="fm-built-panel">
          <div className="fm-section-heading"><h2>Built for Modern Industry</h2><p>FactoryMind combines cutting-edge AI with real-world industrial expertise<br className="desktop-only"/> to deliver measurable results.</p></div>
          <div className="fm-feature-grid">{features.map(([icon,title,desc])=><article key={title}><span className="fm-feature-icon">{icon}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </div>
      </section>

      <section className="fm-lower" id="contact">
        <a href="/demo"><span>Live Demo</span><b>See FactoryMind in action.</b><small>Explore real-world AI solutions for manufacturing.</small></a>
        <a href="/app"><span>FactoryMind App</span><b>Your factory. In your hands.</b><small>Monitor. Optimize. Act.</small></a>
        <a href="/owner"><span>For Factory Owners</span><b>More control. Higher profits.</b><small>A smarter future for your business.</small></a>
      </section>
    </main>
  );
}
