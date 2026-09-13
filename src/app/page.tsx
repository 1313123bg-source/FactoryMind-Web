const capabilities = [
  ['01', 'Диагностика по симптом', 'Започваме от реалния симптом, а не от предварително избрана причина.'],
  ['02', 'Адаптивни проверки', 'Следващата проверка се избира според вероятност, стойност, време и риск.'],
  ['03', 'Фабричен контекст', 'Машини, процеси, документи и знания се свързват в един общ контекст.'],
  ['04', 'Проследима логика', 'Всяка хипотеза, проверка и препоръка остава видима и обяснима.'],
  ['05', 'Сигурност по подразбиране', 'Достъпът и данните са разделени по организация, фабрика и роля.'],
  ['06', 'Готово за AI слой', 'Архитектура, която може да надгражда с интелигентни модели без да губи контрол.'],
];

const steps = [
  ['01', 'Опиши симптома', 'Какво се случва, кога се случва и при какви условия?'],
  ['02', 'Свържи контекста', 'Машина, процес, история, документация и предишни случаи.'],
  ['03', 'Избери проверката', 'Системата подрежда следващите действия по стойност и риск.'],
  ['04', 'Докажи причината', 'Резултатът се превръща в знание, което остава за екипа.'],
];

export default function HomePage() {
  return (
    <main className="site" id="top">
      <header className="header">
        <a className="brand" href="#top">Factory<span>Mind</span></a>
        <nav className="nav" aria-label="Основна навигация">
          <a href="#system">Система</a>
          <a href="#how">Как работи</a>
          <a href="#capabilities">Възможности</a>
          <a href="#app">Приложението</a>
        </nav>
        <a className="header-cta" href="#app">Виж платформата ↗</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> INTELLIGENCE FOR INDUSTRIAL SYSTEMS</div>
          <h1>Интелигентността<br />зад всяка <em>машина.</em></h1>
          <p className="hero-lead">FactoryMind превръща сложната фабрична среда в ясна, проследима и адаптивна система за диагностика, знания и решения.</p>
          <div className="hero-actions">
            <a className="button" href="#system">Разгледай системата <span>↗</span></a>
            <a className="text-link" href="#how">Как работи <span>↓</span></a>
          </div>
          <div className="hero-meta"><span>Машини</span><i /> <span>Процеси</span><i /> <span>Знания</span><i /> <span>Хора</span></div>
        </div>
        <div className="hero-visual" role="img" aria-label="Илюстрация на интелигентна фабрична система">
          <div className="visual-top"><span>FACTORYMIND / CORE</span><span className="live">● SYSTEM ONLINE</span></div>
          <div className="network">
            <div className="network-line line-a" /><div className="network-line line-b" /><div className="network-line line-c" />
            <div className="node node-main"><span className="node-kicker">CORE ENGINE</span><strong>FactoryMind</strong><small>Context intelligence</small></div>
            <div className="node node-one"><span>01</span><strong>Machine</strong><small>Signals</small></div>
            <div className="node node-two"><span>02</span><strong>Process</strong><small>History</small></div>
            <div className="node node-three"><span>03</span><strong>Knowledge</strong><small>Evidence</small></div>
          </div>
          <div className="visual-bottom"><span>DIAGNOSTIC CONTEXT</span><strong>01 / 04</strong></div>
        </div>
      </section>

      <section className="signal-strip"><span>BUILT FOR THE FACTORY FLOOR</span><span>REAL CONTEXT. BETTER DECISIONS.</span><span>TRACEABLE BY DESIGN.</span></section>

      <section className="section system-section" id="system">
        <div className="section-heading"><div className="eyebrow">01 / СИСТЕМАТА</div><h2>Една фабрика.<br />Един интелигентен контекст.</h2></div>
        <div className="section-intro"><p>Не още един списък с грешки. FactoryMind свързва симптома, историята, риска, машините и знанията, за да насочи екипа към следващата най-ценна проверка.</p><span className="section-index">FM—001</span></div>
      </section>

      <section className="section how-section" id="how">
        <div className="eyebrow">02 / ЛОГИКА</div><h2>От симптом към<br /><em>доказана причина.</em></h2>
        <div className="steps">{steps.map(([n, title, description]) => <article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="section capabilities-section" id="capabilities">
        <div className="eyebrow">03 / ВЪЗМОЖНОСТИ</div><h2>Създадено за реалната<br />индустриална среда.</h2>
        <div className="capability-grid">{capabilities.map(([n, title, description]) => <article className="capability" key={n}><span>{n}</span><h3>{title}</h3><p>{description}</p><b>↗</b></article>)}</div>
      </section>

      <section className="section product-section" id="app">
        <div className="product-copy"><div className="eyebrow">04 / ПРИЛОЖЕНИЕ</div><h2>Повече от софтуер.<br />Интелигентен слой<br />между хората и машините.</h2><p>Публичният сайт представя идеята и системата. Самото приложение FactoryMind остава в отделната продуктова среда — с диагностика, процеси, роли и фабричен контекст.</p><div className="hero-actions"><a className="button" href="/demo">Заяви демонстрация <span>↗</span></a><a className="text-link" href="/app">Вход в приложението <span>↗</span></a></div></div>
        <div className="product-panel"><div className="panel-header"><span>DIAGNOSTIC WORKSPACE</span><span>LIVE PREVIEW</span></div><div className="panel-row"><span>Current symptom</span><strong>Unexpected machine stop</strong></div><div className="panel-row"><span>Context confidence</span><strong className="accent-text">87.4%</strong></div><div className="panel-row"><span>Next best check</span><strong>Sensor signal integrity</strong></div><div className="panel-footer">Evidence-led workflow <span>●</span></div></div>
      </section>

      <footer className="footer"><a className="brand" href="#top">Factory<span>Mind</span></a><p>Интелигентният слой между хората, машините и знанията.</p><span>© 2026 FactoryMind</span></footer>
    </main>
  );
}
