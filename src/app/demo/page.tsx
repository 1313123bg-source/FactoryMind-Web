'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function DemoPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (sent || error) statusRef.current?.focus(); }, [sent, error]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitting(true); setError('');
    const form = event.currentTarget;
    try {
      const response = await fetch('/api/demo', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      const result = (await response.json()) as {ok?:boolean;error?:string};
      if (!response.ok || !result.ok) { setError(result.error || 'Не успяхме да изпратим запитването.'); return; }
      form.reset(); setSent(true);
    } catch { setError('Не успяхме да се свържем със сървъра. Опитайте отново.'); }
    finally { setSubmitting(false); }
  }

  return <main className="site inner-page" id="top">
    <header className="header"><Link className="brand" href="/"><span>⌬</span>FactoryMind</Link><Link className="text-link" href="/">← Back to FactoryMind</Link></header>
    <section className="section inner-hero">
      <div className="eyebrow">FACTORYMIND / LIVE DEMO</div>
      <h1>See intelligence<br/><em>inside your factory.</em></h1>
      <p className="hero-lead">Explore how FactoryMind connects machines, symptoms, documentation and expert knowledge into one clear industrial workflow.</p>
      <div className="form-panel">
        <div className="panel-header"><span>DEMO INTAKE</span><span>01 / 03</span></div>
        {sent ? <div ref={statusRef} className="app-status" role="status" tabIndex={-1}><strong>Demo request received.</strong><p>Thank you. The FactoryMind team will contact you using the work email provided.</p><button className="button" type="button" onClick={()=>{setSent(false);setError('')}}>New request <span>→</span></button></div> :
        <form className="demo-form" onSubmit={handleSubmit}>
          <label htmlFor="demo-name">Full name<input id="demo-name" name="name" autoComplete="name" placeholder="Your name" required /></label>
          <label htmlFor="demo-email">Work email<input id="demo-email" type="email" name="email" autoComplete="email" placeholder="name@company.com" required /></label>
          <label htmlFor="demo-company">Company<input id="demo-company" name="company" autoComplete="organization" placeholder="Company name" /></label>
          <label htmlFor="demo-message">What would you improve?<textarea id="demo-message" name="message" placeholder="PLC diagnostics, downtime, technician knowledge..." rows={4}/></label>
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" />
          {error && <div ref={statusRef} className="app-status" role="alert" tabIndex={-1}>{error}</div>}
          <button className="button" type="submit" disabled={submitting}>{submitting?'Sending…':'Request live demo'} <span>→</span></button>
        </form>}
        <p className="form-note">Your details are used only to process the demo request.</p>
      </div>
    </section>
  </main>; 
}