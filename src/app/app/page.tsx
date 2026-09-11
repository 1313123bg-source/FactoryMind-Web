'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function AppPage() {
  const [attempted, setAttempted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
  }

  return (
    <main className="site inner-page" id="top">
      <header className="header">
        <Link className="brand" href="/">Factory<span>Mind</span></Link>
        <Link className="text-link" href="/">← Обратно към сайта</Link>
      </header>

      <section className="section inner-hero">
        <div className="eyebrow">FACTORYMIND / APPLICATION</div>
        <h1>Вход към<br /><em>интелигентната фабрика.</em></h1>
        <p className="hero-lead">Тук ще бъде входът към реалното приложение FactoryMind — диагностика, фабричен контекст, роли, история и проследими решения.</p>
        <div className="form-panel">
          <div className="panel-header"><span>SECURE WORKSPACE</span><span>AUTH / 01</span></div>
          {attempted ? (
            <div className="app-status">
              <strong>Демо режимът е активен.</strong>
              <p>Реалната автентикация ще бъде свързана при изграждането на приложението. В момента няма изпращане или съхранение на данни.</p>
              <button className="button" type="button" onClick={() => setAttempted(false)}>Обратно към входа <span>↗</span></button>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleSubmit}>
              <label>Работен имейл<input type="email" name="email" placeholder="name@company.com" required /></label>
              <label>Парола<input type="password" name="password" placeholder="••••••••" required /></label>
              <button className="button" type="submit">Вход в приложението <span>↗</span></button>
            </form>
          )}
          <p className="form-note">Демонстрационен режим — не се изпращат реални данни към сървър.</p>
          <Link className="text-link" href="/demo">Нямате достъп? Заявете демонстрация →</Link>
        </div>
      </section>
    </main>
  );
}
