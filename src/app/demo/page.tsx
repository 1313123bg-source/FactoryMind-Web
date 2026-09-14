'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function DemoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
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
            <div className="app-status" role="status" aria-live="polite">
              <strong>Запитването е подготвено.</strong>
              <p>Това е демонстрационен режим. След свързване на реален имейл или CRM данните ще бъдат изпращани към избрания канал.</p>
              <button className="button" type="button" onClick={() => setSent(false)}>Ново запитване <span>↗</span></button>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleSubmit}>
              <label htmlFor="demo-name">Име и фамилия<input id="demo-name" name="name" autoComplete="name" placeholder="Вашето име" required /></label>
              <label htmlFor="demo-email">Работен имейл<input id="demo-email" type="email" name="email" autoComplete="email" placeholder="name@company.com" required /></label>
              <label htmlFor="demo-company">Компания<input id="demo-company" name="company" autoComplete="organization" placeholder="Име на компанията" /></label>
              <label htmlFor="demo-message">Какво искате да подобрите?<textarea id="demo-message" name="message" placeholder="Напр. диагностика на PLC, престои, знания на техниците..." rows={4} /></label>
              <button className="button" type="submit">Изпрати запитване <span>↗</span></button>
            </form>
          )}
          <p className="form-note">Демонстрационен режим — не се изпращат реални данни към сървър.</p>
        </div>
      </section>
    </main>
  );
}
