'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function DemoPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent || error) statusRef.current?.focus();
  }, [sent, error]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setError(result.error || 'Не успяхме да изпратим запитването. Опитайте отново след малко.');
        return;
      }

      form.reset();
      setSent(true);
    } catch {
      setError('Не успяхме да се свържем със сървъра. Опитайте отново след малко.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="site inner-page" id="top">
      <header className="header">
        <Link className="brand" href="/">Factory<span>Mind</span></Link>
        <Link className="text-link" href="/">← Обратно към сайта</Link>
      </header>

      <section className="section inner-hero">
        <div className="eyebrow">FACTORYMIND / DEMO REQUEST</div>
        <h1>Нека разгледаме<br /><em>вашата фабрика.</em></h1>
        <p className="hero-lead">Заявете демонстрация и ще покажем как FactoryMind може да свърже симптоми, машини, документация и експертно знание в един проследим диагностичен процес.</p>
        <div className="form-panel">
          <div className="panel-header"><span>DEMO INTAKE</span><span>01 / 03</span></div>
          {sent ? (
            <div ref={statusRef} className="app-status" role="status" aria-live="polite" tabIndex={-1}>
              <strong>Демонстрационното запитване е изпратено.</strong>
              <p>Благодарим. Екипът на FactoryMind ще се свърже с вас чрез посочения работен имейл.</p>
              <button className="button" type="button" onClick={() => { setSent(false); setError(''); }}>Ново запитване <span>↗</span></button>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleSubmit}>
              <label htmlFor="demo-name">Име и фамилия<input id="demo-name" name="name" autoComplete="name" placeholder="Вашето име" required /></label>
              <label htmlFor="demo-email">Работен имейл<input id="demo-email" type="email" name="email" autoComplete="email" placeholder="name@company.com" required /></label>
              <label htmlFor="demo-company">Компания<input id="demo-company" name="company" autoComplete="organization" placeholder="Име на компанията" /></label>
              <label htmlFor="demo-message">Какво искате да подобрите?<textarea id="demo-message" name="message" placeholder="Напр. диагностика на PLC, престои, знания на техниците..." rows={4} /></label>
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" />
              {error && <div ref={statusRef} className="app-status" role="alert" aria-live="assertive" tabIndex={-1}>{error}</div>}
              <button className="button" type="submit" disabled={submitting}>{submitting ? 'Изпращане…' : 'Изпрати запитването'} <span>↗</span></button>
            </form>
          )}
          <p className="form-note">Данните се изпращат само за обработка на вашето demo запитване.</p>
        </div>
      </section>
    </main>
  );
}
