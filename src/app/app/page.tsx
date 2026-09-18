'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function AppPage() {
  const [attempted, setAttempted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setAttempted(true); }

  return <main className="site inner-page" id="top">
    <header className="header"><Link className="brand" href="/"><span>⌬</span>FactoryMind</Link><Link className="text-link" href="/">← Back to FactoryMind</Link></header>
    <section className="section inner-hero">
      <div className="eyebrow">FACTORYMIND / APPLICATION</div>
      <h1>Your factory.<br/><em>In your hands.</em></h1>
      <p className="hero-lead">A focused workspace for industrial diagnostics, factory context, knowledge, history and traceable decisions.</p>
      <div className="form-panel">
        <div className="panel-header"><span>SECURE WORKSPACE</span><span>AUTH / 01</span></div>
        {attempted ? <div className="app-status"><strong>Demo mode active.</strong><p>Real authentication will be connected to the FactoryMind application. No credentials are sent or stored by this demo page.</p><button className="button" type="button" onClick={()=>setAttempted(false)}>Back to sign in <span>→</span></button></div> :
        <form className="demo-form" onSubmit={handleSubmit}>
          <label>Work email<input type="email" name="email" placeholder="name@company.com" required /></label>
          <label>Password<input type="password" name="password" placeholder="••••••••" required /></label>
          <button className="button" type="submit">Enter FactoryMind <span>→</span></button>
        </form>}
        <p className="form-note">Demo mode — credentials are not transmitted to a server.</p>
        <Link className="text-link" href="/demo">Need access? Request a live demo →</Link>
      </div>
    </section>
  </main>;
}