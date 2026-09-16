const navigation = [
  ['#top', 'Начало'],
  ['#system', 'Система'],
  ['#method', 'Метод'],
  ['#app', 'Приложение'],
];

const capabilities = [
  ['01', 'Симптом → причина', 'Започва от реалния симптом и подрежда вероятните причини.'],
  ['02', 'Контекст', 'Машини, процеси, документи, история и знания в един работен контекст.'],
  ['03', 'Следваща проверка', 'Избира действие според стойност, време, риск и наличните доказателства.'],
  ['04', 'Проследимост', 'Хипотезите, проверките и резултатите остават като знание за екипа.'],
];

export default function HomePage() {
  return (
    <main className="fm-site" id="top">
      <header className="fm-header">
        <a className="fm-logo" href="#top" aria-label="FactoryMind начало">FM<span>.</span></a>
        <div className="fm-header-note">INDUSTRIAL INTELLIGENCE / 2026</div>
        <a className="fm-demo-link" href="/demo">DEMO ↗</a>
      </header>

      <nav className="fm-orbit" aria-label="Основна навигация">
        <div className="fm-orbit-ring" />
        {navigation.map(([href, label], index) => (
          <a className={`fm-orbit-item fm-orbit-${index + 1}`} href={href} key={href}>
            <span>0{index + 1}</span>{label}
          </a>
        ))}
      </nav>

      <section className="fm-hero" aria-labelledby="hero-title">
        <div className="fm-hero-index">01 / 04</div>
        <div className="fm-hero-copy">
          <p className="fm-kicker">FACTORYMIND — INDUSTRIAL DIAGNOSTICS</p>
          <h1 id="hero-title">Когато<br /><i>фабриката</i><br />трябва да мисли.</h1>
          <p className="fm-hero-intro">Интелигентна работна среда за индустриални екипи. Свързва симптоми, машини и техническо знание, за да превърне сложния проблем в ясна следваща стъпка.</p>
          <div className="fm-actions"><a className="fm-pill" href="#app">Разгледай FactoryMind <span>↗</span></a><a href="/demo" className="fm-underlink">Заяви демонстрация</a></div>
        </div>
        <div className="fm-hero-art" aria-hidden="true">
          <div className="fm-art-circle fm-art-circle-one" />
          <div className="fm-art-circle fm-art-circle-two" />
          <div className="fm-art-label fm-art-label-a">SYMPTOM</div>
          <div className="fm-art-label fm-art-label-b">CONTEXT</div>
          <div className="fm-art-label fm-art-label-c">EVIDENCE</div>
          <div className="fm-art-core"><span>FM</span><small>NEXT BEST CHECK</small></div>
        </div>
        <div className="fm-hero-footer"><span>BUILT FOR THE FACTORY FLOOR</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="fm-statement" id="system">
        <div className="fm-section-meta">02 / SYSTEM</div>
        <div>
          <p className="fm-overline">НЕ ОЩЕ ЕДИН СПИСЪК С ГРЕШКИ.</p>
          <h2>Един контекст.<br /><i>По-малко догадки.</i></h2>
          <p className="fm-copy">FactoryMind събира реалния фабричен контекст около проблема — машината, симптома, документацията, предишните случаи и наличните доказателства.</p>
        </div>
      </section>

      <section className="fm-method" id="method">
        <div className="fm-section-meta">03 / METHOD</div>
        <div className="fm-method-heading"><h2>От симптом<br /><i>към действие.</i></h2><p>Диагностиката се движи напред чрез малки, проверими стъпки.</p></div>
        <div className="fm-capabilities">
          {capabilities.map(([number, title, text]) => (
            <article className="fm-capability" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>
          ))}
        </div>
      </section>

      <section className="fm-app" id="app">
        <div className="fm-section-meta">04 / FACTORYMIND APP</div>
        <div className="fm-app-copy">
          <p className="fm-overline">ПУБЛИЧНИЯТ САЙТ ПРЕДСТАВЯ ИДЕЯТА.</p>
          <h2>Самото приложение<br /><i>върши работата.</i></h2>
          <p className="fm-copy">Работна среда за хората, които поддържат фабриката в движение: случаи, машини, компоненти, документи, снимки, история и проследима логика.</p>
          <div className="fm-app-actions"><a className="fm-pill" href="/app">Вход в приложението <span>↗</span></a><a className="fm-underlink" href="/demo">Заяви демонстрация</a></div>
        </div>
        <div className="fm-console" aria-label="Илюстративен екран на FactoryMind">
          <div className="fm-console-top"><span>FACTORYMIND / DIAGNOSTIC WORKSPACE</span><span>ACTIVE</span></div>
          <div className="fm-console-title">Machine / G1<br /><i>HPP380</i></div>
          <div className="fm-console-row"><span>SYMPTOM</span><strong>Нестабилно рязане</strong></div>
          <div className="fm-console-row"><span>CONTEXT</span><strong>Machine · History · Docs</strong></div>
          <div className="fm-console-row"><span>NEXT CHECK</span><strong>Провери позициониращия модул ↗</strong></div>
          <div className="fm-console-bottom">TRACEABLE DIAGNOSTIC LOG <span>●</span></div>
        </div>
      </section>

      <section className="fm-end">
        <p>FACTORYMIND</p>
        <h2>По-малко догадки.<br /><i>Повече доказателства.</i></h2>
        <a className="fm-big-link" href="/demo">Започни разговор <span>↗</span></a>
      </section>

      <footer className="fm-footer"><span>FACTORYMIND / INDUSTRIAL INTELLIGENCE</span><span>© 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
