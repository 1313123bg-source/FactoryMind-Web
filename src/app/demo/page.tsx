'use client';

import { FormEvent, useState } from 'react';

export default function DemoPage() {
  const [sent, setSent] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="site-inner-page" id="top">
      <header className="header">
        <a className="brand" href={`${basePath}/`}><span>◈</span>FactoryMind</a>
        <a className="text-link" href={`${basePath}/`}>← Back to FactoryMind</a>
      </header>
      <section className="section inner-hero">
        <div className="eyebrow">FACTORYMIND / LIVE DEMO</div>
        <h1>See intelligence<br/><em>inside your factory.</em></h1>
        <p className="hero-lead">Explore how FactoryMind connects machines, symptoms, documentation and expert knowledge into one clear industrial workflow.</p>
        <div className="form-panel">
          <div className="panel-header"><span>DEMO INTAKE</span><span>01 / 03</span></div>
          {sent ? (
            <div className="app-status" role="status">
              <strong>Demo request received.</strong>
              <p>This free preview runs without the production API, so the request is simulated locally.</p>
              <button className="button" type="button" onClick={() => setSent(false)}>New request →</button>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleSubmit}>
              <label>Full name<input name="name" placeholder="Your name" required /></label>
              <label>Work email<input name="email" type="email" placeholder="name@company.com" required /></label>
              <label>Company<input name="company" placeholder="Company name" /></label>
              <label>What would you improve?<textarea name="message" placeholder="PLC diagnostics, downtime, technician knowledge..." rows={4}/></label>
              <button className="button" type="submit">Request live demo →</button>
            </form>
          )}
          <p className="form-note">GitHub Pages preview mode — form submission is intentionally local-only.</p>
        </div>
      </section>
    </main>
  );
}
