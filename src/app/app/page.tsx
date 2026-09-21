'use client';

import { FormEvent, useState } from 'react';

export default function AppPage() {
  const [attempted, setAttempted] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
  }

  return (
    <main className="site-inner-page" id="top">
      <header className="header">
        <a className="brand" href={`${basePath}/`}><span>◈</span>FactoryMind</a>
        <a className="text-link" href={`${basePath}/`}>← Back to FactoryMind</a>
      </header>
      <section className="section inner-hero">
        <div className="eyebrow">FACTORYMIND / APPLICATION</div>
        <h1>Your factory.<br/><em>In your hands.</em></h1>
        <p className="hero-lead">A focused workspace for industrial diagnostics, factory context, knowledge, history and traceable decisions.</p>
        <div className="form-panel">
          <div className="panel-header"><span>SECURE WORKSPACE</span><span>AUTH / 01</span></div>
          {attempted ? (
            <div className="app-status">
              <strong>Demo mode active.</strong>
              <p>Real authentication will be connected to the FactoryMind application. No credentials are transmitted or stored by this preview.</p>
              <button className="button" type="button" onClick={() => setAttempted(false)}>Back to sign in →</button>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleSubmit}>
              <label>Work email<input type="email" name="email" placeholder="name@company.com" required /></label>
              <label>Password<input type="password" name="password" placeholder="••••••••••" required /></label>
              <button className="button" type="submit">Enter FactoryMind →</button>
            </form>
          )}
          <p className="form-note">Demo mode — credentials are not transmitted to a server.</p>
          <a className="text-link" href={`${basePath}/demo/`}>Need access? Request a live demo →</a>
        </div>
      </section>
    </main>
  );
}
