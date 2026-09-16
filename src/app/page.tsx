'use client';

import { useEffect, useState } from 'react';

const navigation = [
  ['#top', 'Начало'],
  ['#system', 'Система'],
  ['#method', 'Метод'],
  ['#app', 'Приложение'],
];

export default function HomePage() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState('SYSTEM ONLINE');

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPointer({ x: (event.clientX / window.innerWidth - 0.5) * 2, y: (event.clientY / window.innerHeight - 0.5) * 2 });
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <main className="fm-site fm-immersive" id="top" onClick={() => setActive('DIAGNOSTIC MODE')}>
      <header className="fm-header">
        <a className="fm-logo" href="#top">FM<span>.</span></a>
        <div className="fm-header-note">INDUSTRIAL INTELLIGENCE / 2026</div>
        <a className="fm-demo-link" href="/demo">ENTER DEMO ↗</a>
      </header>

      <nav className="fm-orbit" aria-label="Основна навигация">
        <div className="fm-orbit-ring" />
        {navigation.map(([href, label], index) => <a className={`fm-orbit-item fm-orbit-${index + 1}`} href={href} key={href}><span>0{index + 1}</span>{label}</a>)}
      </nav>

      <section className="fm-hero" aria-labelledby="hero-title">
        <div className="fm-hero-index">01 / 04<br /><span>LIVE EXPERIENCE</span></div>
        <div className="fm-hero-copy">
          <p className="fm-kicker">FACTORYMIND — THE INTELLIGENCE LAYER</p>
          <h1 id="hero-title">Когато<br /><i>фабриката</i><br />започне да мисли.</h1>
          <p className="fm-hero-intro">Интерактивна интелигентна среда за индустриални екипи. Свързва машини, симптоми, документи и доказателства в една система.</p>
          <div className="fm-actions"><a className="fm-pill" href="#system">Влез в системата <span>↗</span></a><a href="/demo" className="fm-underlink">Заяви демонстрация</a></div>
        </div>

        <div className="fm-3d-stage" style={{ transform: `rotateX(${pointer.y * -7}deg) rotateY(${pointer.x * 9}deg)` }} aria-label="Интерактивно 3D фабрично ядро">
          <div className="fm-grid-floor" />
          <div className="fm-hud fm-hud-top">{active}<span>●</span></div>
          <div className="fm-core-3d">
            <div className="fm-core-ring ring-a" /><div className="fm-core-ring ring-b" /><div className="fm-core-ring ring-c" />
            <div className="fm-core-cube"><span>FM</span><small>INTELLIGENCE<br />CORE</small></div>
            <div className="fm-beam beam-a" /><div className="fm-beam beam-b" /><div className="fm-beam beam-c" />
            <div className="fm-node node-a">01<br /><b>SYMPTOM</b></div><div className="fm-node node-b">02<br /><b>CONTEXT</b></div><div className="fm-node node-c">03<br /><b>EVIDENCE</b></div>
          </div>
          <div className="fm-hud fm-hud-bottom">NEXT BEST CHECK <strong>READY ↗</strong></div>
        </div>
        <div className="fm-hero-footer"><span>BUILT FOR THE FACTORY FLOOR</span><span>MOVE YOUR CURSOR / TOUCH TO EXPLORE ↓</span></div>
      </section>

      <section className="fm-statement" id="system"><div className="fm-section-meta">02 / SYSTEM</div><div><p className="fm-overline">THE FACTORY IS A LIVING SYSTEM.</p><h2>Един контекст.<br /><i>По-малко догадки.</i></h2><p className="fm-copy">FactoryMind събира реалния фабричен контекст около проблема — машината, симптома, документацията, предишните случаи и наличните доказателства.</p></div><div className="fm-data-wall"><span>01 / MACHINES</span><span>02 / HISTORY</span><span>03 / DOCUMENTS</span><span>04 / SIGNALS</span></div></section>

      <section className="fm-method" id="method"><div className="fm-section-meta">03 / METHOD</div><div className="fm-method-heading"><h2>От симптом<br /><i>към действие.</i></h2><p>Диагностиката се движи напред чрез малки, проверими стъпки.</p></div><div className="fm-capabilities">{['Симптом → причина','Контекст','Следваща проверка','Проследимост'].map((title, index) => <article className="fm-capability" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{['Започва от реалния симптом и подрежда вероятните причини.','Машини, процеси, документи, история и знания в един контекст.','Избира действие според стойност, време, риск и доказателства.','Хипотезите, проверките и резултатите остават като знание.'][index]}</p><b>↗</b></article>)}</div></section>

      <section className="fm-app" id="app"><div className="fm-section-meta">04 / FACTORYMIND APP</div><div className="fm-app-copy"><p className="fm-overline">THE INTERFACE FOR REAL WORK.</p><h2>Самото приложение<br /><i>върши работата.</i></h2><p className="fm-copy">Работна среда за хората, които поддържат фабриката в движение: случаи, машини, компоненти, документи, снимки, история и проследима логика.</p><div className="fm-app-actions"><a className="fm-pill" href="/app">Вход в приложението <span>↗</span></a><a className="fm-underlink" href="/demo">Заяви демонстрация</a></div></div><div className="fm-console"><div className="fm-console-top"><span>FACTORYMIND / DIAGNOSTIC WORKSPACE</span><span>ACTIVE</span></div><div className="fm-console-title">Machine / G1<br /><i>HPP380</i></div><div className="fm-console-row"><span>SYMPTOM</span><strong>Нестабилно рязане</strong></div><div className="fm-console-row"><span>CONTEXT</span><strong>Machine · History · Docs</strong></div><div className="fm-console-row"><span>NEXT CHECK</span><strong>Провери позициониращия модул ↗</strong></div><div className="fm-console-bottom">TRACEABLE DIAGNOSTIC LOG <span>●</span></div></div></section>

      <section className="fm-end"><p>FACTORYMIND</p><h2>По-малко догадки.<br /><i>Повече доказателства.</i></h2><a className="fm-big-link" href="/demo">Започни разговор <span>↗</span></a></section>
      <footer className="fm-footer"><span>FACTORYMIND / INDUSTRIAL INTELLIGENCE</span><span>© 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
